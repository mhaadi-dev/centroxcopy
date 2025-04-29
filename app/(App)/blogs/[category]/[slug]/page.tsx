import SubnavBar from "@/Components/Navbar/SubnavBar";
import BlogBanner from "@/Components/common/BlogBanner";
import BlogContentSection from "@/Components/common/BlogContentSection";
import IndustryBanner from "@/Components/common/IndustryBanner";
import { client } from "@/sanity/lib/client";
import {
  calculateReadingTime,
  cleanMetaString,
  slugify
} from "@/sanity/lib/helpers";
import {
  GET_ALL_CATEGORIES,
  GET_BLOG_BY_ID_QUERY
} from "@/sanity/query";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { ArticleJsonLd, BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";
import dynamic from "next/dynamic";

// Dynamically import LandingBlogSection for lazy loading
const LazyLandingBlogSection = dynamic(() => import("@/views/LandingPageViews/LandingBlogSection"), {
  ssr: false,
  loading: () => <div className="h-64  animate-pulse" />
});

// Set revalidation to 60 seconds for ISR
export const revalidate = 60;

// Cache blog data to avoid duplicate fetches
async function fetchBlogData(slug: string, category: string) {
  return await client.fetch(GET_BLOG_BY_ID_QUERY, { slug, category }, { cache: "force-cache" });
}

export async function generateMetadata({ params }: { params: { slug: string; category: string } }) {
  try {
    const blogData = await fetchBlogData(params.slug, params.category);
    if (!blogData) {
      notFound();
      return;
    }

    const metaTitle = cleanMetaString(blogData.meta_title || "Centrox AI");
    const metaDescription = cleanMetaString(
      blogData.meta_description || "Centrox AI | Heart of Innovation"
    );
    const metaImage = blogData.content_item?.preview_image?.image;
    const metaUrl = cleanMetaString(
      `https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}/${blogData.label?.current}`
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
      metadataBase: new URL("https://centrox.ai")
    };
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
    notFound();
  }
}

const Page = async ({ params }: { params: { slug: string; category: string } }) => {
  const blogData = await fetchBlogData(params.slug, params.category);
  const allCategories = await client.fetch(GET_ALL_CATEGORIES, {}, { cache: "force-cache" });

  if (!blogData) {
    notFound();
  }

  const extractHeadings = (content: any) => {
    const headingList: string[] = [];
    const headingStyles = /h[2]/;

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

  let AllHeadings = blogData.content_item?.blog_data
    ? extractHeadings(blogData.content_item?.blog_data)
    : [];

  // console.log("Blog data for related blogs:", {
  //   category: blogData?.category?.category_name,
  //   related_blogs_heading: blogData.content_item?.related_blogs_heading,
  //   hasRelatedBlogs: !!blogData.content_item?.related_blogs_heading
  // });

  return (
    <section className="relative font-paragraph">
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url={`https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`}
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
          "@id": `https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`
        }}
        headline={blogData?.meta_title}
        articleSection={slugify(blogData.category?.category_name)}
        keywords={blogData?.keywords}
      />
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
          },
          {
            position: 3,
            name: "Category",
            item: `https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}`
          },
          {
            position: 4,
            name: "Details",
            item: `https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`
          }
        ]}
      />
      <WebPageJsonLd
        useAppDir={true}
        description="Discover what's latest in Gen AI, Machine Learning, LLM Dev, and AI Innovation. Stay updated with insights to boost your business through AI technology"
        id={`https://centrox.ai/blogs/${slugify(blogData.category?.category_name)}/${slugify(blogData?.label?.current)}`}
        lastReviewed={new Date().toISOString()}
        reviewedBy={{
          type: "Person",
          name: "Muhammad Harris Bin Naeem"
        }}
      />

      <SubnavBar
        imageLink={"/"}
        title="Blogs"
        navItems={allCategories || []}
      />
      <BlogBanner
        className="!mt-28 lg:mt-0"
        heading={
          blogData.content_item?.banner_data?.banner_heading ||
          blogData?.meta_title
        }
        paraText={
          blogData.content_item?.banner_data?.banner_description ||
          blogData?.meta_description
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
          linkedin: blogData?.author?.linkedin,
          _id: blogData?.author?._id
        }}
        headings={AllHeadings || []}
        content={blogData.content_item?.blog_data}
      />
      {blogData.content_item?.related_blogs_heading && (
        <Suspense fallback={<div className="h-64 animate-pulse flex items-center justify-center text-white">Loading related blogs...</div>}>
          <LazyLandingBlogSection
            heading={blogData.content_item?.related_blogs_heading}
            description={blogData.content_item?.related_blogs_paragraph}
            category={blogData?.category?.category_name || ""}
            className="overflow-hidden"
          />
        </Suspense>
      )}
      <IndustryBanner
        heading="Your AI Dream, Our Mission"
        description="Partner with Us to Bridge the Gap Between Innovation and Reality."
        btnText="Talk to Our AI Expert"
        isBooking
      />
    </section>
  );
};

export default Page;