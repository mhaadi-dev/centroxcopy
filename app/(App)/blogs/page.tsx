import React, { Suspense } from "react";
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
import { calculateReadingTime, reSlugify } from "@/sanity/lib/helpers";
import { Loader } from "@/Components/Loader/Loader";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";

export const revalidate = process.env.NEXT_PUBLIC_ENV === 'staging' ? 10 : 600;

export const metadata = {
  title: "Centrox AI Blog | Generative AI, Machine Learning & Innovation",
  description:
    "Discover what's latest in Gen AI, Machine Learning, LLM Dev, and AI Innovation. Stay updated with insights to boost your business through AI technology",
  alternates: {
    canonical: "https://centrox.ai/blogs"
  }
};

interface Category {
  category_name: string;
}

interface Blog {
  _id: string;
  content_item: {
    banner_data?: {
      banner_heading?: string;
      banner_description?: string;
    };
    date: string;
    name: string;
    blog_data: string;
    image: {
      image: string;
    };
    alt: string;
  };
  meta_title: string;
  meta_description: string;
  category: {
    category_name: string;
  };
  label: {
    current: string;
  };
}

interface CategoricalBlog {
  category: string;
  blogs: Blog[];
}

const fetchCategoricalData = async () => {
  const allCategories = await client.fetch<Category[]>(GET_ALL_CATEGORIES);
  const categoricalBlogs = await Promise.all(
    allCategories.map(async (category) => {
      const query = GET_BLOGS_BY_CATEGORY_QUERY(category.category_name);
      const similarBlogs = await client.fetch<Blog[]>(query, {
        category: category.category_name
      });

      return similarBlogs?.length > 0
        ? { category: category.category_name, blogs: similarBlogs }
        : null;
    })
  );

  return {
    allCategories,
    categoricalBlogs: categoricalBlogs.filter(Boolean) as CategoricalBlog[]
  };
};

const fetchPaginatedData = async () => {
  const totalBlogsCount = await client.fetch<number>(GET_TOTAL_BLOGS_COUNT);
  const blogData = await client.fetch<Blog[]>(GET_PAGINATED_ARTICLES_QUERY, {
    startRange: 0,
    endRange: 5
  });
  return { totalBlogsCount, blogData };
};

const CategoricalContent = async () => {
  const { categoricalBlogs } = await fetchCategoricalData();
  
  return (
    <>
      {categoricalBlogs?.length > 0 && categoricalBlogs?.length > 3
        ? categoricalBlogs
            .slice(0, 3)
            .map((category, index) => (
              <TabsWithGridCards
                key={index}
                cardsData={category.blogs.slice(0, 5)}
                headingText={category.category}
              />
            ))
        : categoricalBlogs?.length > 0
          ? categoricalBlogs.map((category, index) => (
              <TabsWithGridCards
                key={index}
                cardsData={category.blogs.slice(0, 5)}
                headingText={category.category}
              />
            ))
          : null}
    </>
  );
};

const PaginatedContent = async () => {
  const { totalBlogsCount, blogData } = await fetchPaginatedData();
  
  if (!blogData?.length) return <Loader />;
  
  return (
    <GridBlogCardsWithPagination
      cardsPerPage={5}
      totalBlogsCount={totalBlogsCount}
      cardData={blogData}
    />
  );
};

const BlogPage = async () => {
  try {
    const { allCategories } = await fetchCategoricalData();
    const { blogData } = await fetchPaginatedData();

    if (!blogData?.[0]) {
      return <Loader />;
    }

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
            blogData[0].content_item?.banner_data?.banner_heading ||
            blogData[0].meta_title
          }
          paraText={
            blogData[0].content_item?.banner_data?.banner_description ||
            blogData[0].meta_description
          }
          date={new Date(blogData[0].content_item.date).toLocaleDateString()}
          name={blogData[0].content_item.name}
          product={blogData[0].category.category_name}
          duration={calculateReadingTime(blogData[0].content_item.blog_data)}
          banner_image={blogData[0].content_item.image.image}
          alt={blogData[0].content_item.alt}
          category={blogData[0].category.category_name}
          label={reSlugify(blogData[0].label.current)}
          id={blogData[0]._id}
          isH2={true}
        />
        
        <Suspense fallback={<Loader />}>
          <PaginatedContent />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <CategoricalContent />
        </Suspense>

        <IndustryBanner
          heading="Your AI Dream, Our Mission"
          description="Partner with Us to Bridge the Gap Between Innovation and Reality."
          btnText="Talk to us"
          isBooking
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return notFound();
  }
};

export default BlogPage;
