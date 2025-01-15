import React from "react";
import BlogHeader from "@/Components/common/BlogHeader";
import BlogBanner from "@/Components/common/BlogBanner";
import GridBlogCardsWithPagination from "@/Components/common/GridBlogCardsWithPagination";
import IndustryBanner from "@/Components/common/IndustryBanner";
import SubnavBar from "@/Components/Navbar/SubnavBar";
import { client } from "@/sanity/lib/client";
import {
  GET_ALL_CATEGORIES,
  GET_BLOGS_BY_CATEGORY_QUERY,
  GET_PAGINATED_ARTICLES_QUERY,
  GET_TOTAL_BLOGS_COUNT
} from "@/sanity/query";
import TabsWithGridCards from "@/Components/common/TabsWithGridCards";
import { notFound } from "next/navigation";
import {
  calculateReadingTime,
  cleanMetaString,
  reSlugify,
  slugify
} from "@/sanity/lib/helpers";
import { blob } from "node:stream/consumers";
import { BlogsWrapper } from "@/app/context";
import { Loader } from "@/Components/Loader/Loader";
import { BreadcrumbJsonLd,WebPageJsonLd } from "next-seo";

export const revalidate = process.env.NEXT_PUBLIC_ENV === 'staging' ? 10 :600;

export const metadata = {
  title: "Centrox AI Blog | Generative AI, Machine Learning & Innovation",
  description:
    "Discover what's latest in Gen AI, Machine Learning, LLM Dev, and AI Innovation. Stay updated with insights to boost your business through AI technology",
  alternates: {
    canonical: "https://centrox.ai/blogs"
  }
};

const fetchSanityData = async () => {
  const totalBlogsCount = await client.fetch(GET_TOTAL_BLOGS_COUNT);
  const allCategories = await client.fetch(GET_ALL_CATEGORIES);

  const categoricalBlogs = await Promise.all(
    allCategories.map(async (category: any) => {
      const query = GET_BLOGS_BY_CATEGORY_QUERY(category?.category_name);
      const similarBlogs = await client.fetch(query, {
        category: category?.category_name
      });

      return similarBlogs?.length > 0
        ? { category: category?.category_name, blogs: similarBlogs }
        : null;
    })
  );
  const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY, {
    startRange: 0,
    endRange: 5
  });
  return {
    totalBlogsCount,
    blogData,
    allCategories,
    categoricalBlogs: categoricalBlogs.filter(Boolean)
  };
};
const BlogPage = async () => {
  try {
    const { totalBlogsCount, blogData, allCategories, categoricalBlogs } =
      await fetchSanityData();

    return (
      <>
        <BreadcrumbJsonLd
          useAppDir={true}
          itemListElements={[
            {
              position: 1,
              name: "Home",
              item: "https://centrox.ai/"
            },
            {
              position: 2,
              name: "Blogs",
              item: "https://centrox.ai/blogs"
            }
          ]}
        />
        <WebPageJsonLd
        useAppDir={true}
      description="Discover what's latest in Gen AI, Machine Learning, LLM Dev, and AI Innovation. Stay updated with insights to boost your business through AI technology"
      id="https://centrox.ai/blogs"
      lastReviewed={new Date().toISOString()}
      reviewedBy={{
        type: 'Person',
        name: 'Muhammad Harris Bin Naeem',
      }}
    />
        <SubnavBar title="Blogs" imageLink="/" navItems={allCategories} />
        <BlogHeader
          headingText="Blogs"
          paraText="Company Updates and Technology Updates"
        />
        <BlogBanner
          heading={
            blogData?.[0]?.content_item?.banner_data?.banner_heading ||
            blogData?.[0]?.meta_title
          }
          paraText={
            blogData?.[0]?.content_item?.banner_data?.banner_description ||
            blogData?.[0]?.meta_description
          }
          date={new Date(
            blogData?.[0]?.content_item?.date
          ).toLocaleDateString()}
          name={blogData?.[0]?.content_item?.name}
          product={blogData?.[0]?.category?.category_name}
          duration={calculateReadingTime(
            blogData?.[0]?.content_item?.blog_data
          )}
          banner_image={blogData?.[0]?.content_item?.image?.image}
          alt={blogData?.[0]?.content_item?.alt}
          category={blogData?.[0]?.category?.category_name}
          label={reSlugify(blogData?.[0]?.label?.current)}
          id={blogData?.[0]?._id}
          isH2={true}
        />
        {blogData?.length > 0 ? (
          <GridBlogCardsWithPagination
            cardsPerPage={5}
            totalBlogsCount={totalBlogsCount}
          />
        ) : (
          <Loader />
        )}
        {categoricalBlogs?.length > 0 && categoricalBlogs?.length > 3
          ? categoricalBlogs
              .slice(0, 3)
              .map((category: any, index: number) => (
                <TabsWithGridCards
                  key={index}
                  cardsData={category?.blogs?.slice(0, 5)}
                  headingText={category?.category}
                />
              ))
          : categoricalBlogs?.length > 0
            ? categoricalBlogs.map((category: any, index: number) => (
                <TabsWithGridCards
                  key={index}
                  cardsData={category?.blogs?.slice(0, 5)}
                  headingText={category?.category}
                />
              ))
            : ""}
        <IndustryBanner
          heading="All the Good Stuff is here"
          description="Read these blogs to get to know more about Centrox."
          btnText="Talk to us"
          isBooking
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    // Optionally render a fallback UI here.
    return notFound();
  }
};

export default BlogPage;
