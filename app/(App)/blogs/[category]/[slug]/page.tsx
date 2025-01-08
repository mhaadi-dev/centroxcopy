import SubnavBar from "@/Components/Navbar/SubnavBar";
import BlogBanner from "@/Components/common/BlogBanner";
import BlogContentSection from "@/Components/common/BlogContentSection";
import IndustryBanner from "@/Components/common/IndustryBanner";
import createOrUpdateBlog, { client } from "@/sanity/lib/client";
import {
  calculateReadingTime,
  cleanMetaString,
  slugify
} from "@/sanity/lib/helpers";
import { urlFor } from "@/sanity/lib/image";
import {
  GET_ALL_CATEGORIES,
  GET_BLOG_BY_ID_QUERY,
  GET_BLOGS_BY_CATEGORY_QUERY
} from "@/sanity/query";
import LandingBlogSection from "@/views/LandingPageViews/LandingBlogSection";
import { notFound } from "next/navigation";
import { url } from "node:inspector";
import React from "react";
import { ArticleJsonLd } from "next-seo";

export const revalidate = 10;
export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blogSlug: string = slug;

  try {
    // Fetch blog data
    const blogData = await client.fetch(GET_BLOG_BY_ID_QUERY, {
      slug: blogSlug
    });
    if (!blogData) {
      notFound();
      return;
    }
    // Clean and structure metadata
    const metaTitle = cleanMetaString(blogData.meta_title || "Centrox AI");
    const metaDescription = cleanMetaString(
      blogData.meta_description || "Centrox AI | Heart of Innovation"
    );

    let metaImage = blogData.content_item?.preview_image?.image;

    const metaUrl = cleanMetaString(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slugify(blogData.category?.category_name)}/${blogData.label?.current}`
    );

    return {
      title: metaTitle,
      description: metaDescription,
      alternates: { canonical: metaUrl },
      openGraph: {
        type: "article",
        title: metaTitle,
        description: metaDescription,
        url: metaUrl,
        images: [
          {
            url: metaImage,
            width: 1200,
            height: 630,
            alt: "Preview Image for Blog"
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
        images: [metaImage],
        url: metaUrl
      },
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ||'')
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    notFound();
    return;
  }
}

const Page = async ({ params }: any) => {
  const { slug } = params;
  let similarBlogs = [];
  const blogSlug: string = slug;

  const blogData = await client.fetch(GET_BLOG_BY_ID_QUERY, { slug: blogSlug });
  const allCategories = await client.fetch(GET_ALL_CATEGORIES);

  if (!blogData) {
    notFound();
  } else {
    const query = GET_BLOGS_BY_CATEGORY_QUERY(
      blogData?.category?.category_name
    );
    similarBlogs = await client.fetch(query, {
      category: blogData?.category?.category_name
    });
  }
  const extractHeadings = (content: any) => {
    const headingList: string[] = [];
    const headingStyles = /h[2]/; // Matches h2

    content?.forEach((block: any) => {
      if (
        block._type === "block" &&
        block.style &&
        headingStyles.test(block.style)
      ) {
        headingList.push(block.children[0]?.text || "");
      }
    });
    return headingList;
  };
  let AllHeadings;

  if (blogData.content_item?.blog_data) {
    AllHeadings = extractHeadings(blogData.content_item?.blog_data);
  }
  // createOrUpdateBlog(blogData)
  // console.log("BLOGGG",blogData)
  return (
    <section className="relative">
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`}
        title={blogData.meta_title}
        images={[blogData.content_item?.preview_image?.image]}
        datePublished={blogData?.content_item?.date}
        dateModified={blogData?._updatedAt}
        authorName={[
          { name: blogData?.author?.name, url: blogData?.author?.linkedin }
        ]}
        publisherName="Centrox AI"
        publisherLogo="https://centrox.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoWhite.2fd83e7a.png&w=828&q=75"
        description={blogData.meta_description}
        isAccessibleForFree={true}
        mainEntityOfPage={{
          "@type": "WebPage",
          "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`
        }}
        headline={blogData?.meta_title}
        articleSection={cleanMetaString(blogData.category?.category_name)}
        keywords={blogData?.keywords}
      />
      <SubnavBar
        imageLink={"/blogs"}
        title="Blogs"
        navItems={allCategories || []}
      />
      <BlogBanner
        className="!mt-28 lg:mt-0"
        heading={
          blogData.content_item?.banner_data?.banner_heading ||
          blogData?.[0]?.meta_title
        }
        paraText={
          blogData.content_item?.banner_data?.banner_description ||
          blogData?.[0]?.meta_description
        }
        date={new Date(blogData.content_item?.date).toLocaleDateString()}
        name={blogData.content_item?.name}
        category={blogData?.category?.category_name}
        duration={calculateReadingTime(blogData.content_item?.blog_data)}
        banner_image={blogData?.content_item?.image?.image}
        alt={blogData?.content_item?.alt}
        showReadLink={false}
      />
      <BlogContentSection
        authorInfo={{
          name: blogData?.author?.name,
          author_description: blogData?.author?.bio,
          author_image: blogData?.author?.image?.image,
          linkedin: blogData?.author?.linkedin
        }}
        headings={AllHeadings || []}
        content={blogData.content_item?.blog_data}
      />
      {similarBlogs?.length > 1 && (
        <LandingBlogSection
          heading={blogData.content_item?.related_blogs_heading}
          description={blogData.content_item?.related_blogs_paragraph}
          cardsData={
            similarBlogs?.length > 6
              ? similarBlogs?.slice(0, 6)
              : similarBlogs || []
          }
          className="overflow-hidden"
        />
      )}
      <IndustryBanner
        heading="Good Stuff is All Here"
        description="We will help you develop whatever you desire in your AI development. This is a placeholder"
        btnText="Talk to Our AI Expert"
        isBooking
      />
    </section>
  );
};

export default Page;
