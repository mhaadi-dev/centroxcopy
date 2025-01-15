import BlogBanner from "@/Components/common/BlogBanner";
import IndustryBanner from "@/Components/common/IndustryBanner";
import TabsWithGridCardsPagination from "@/Components/common/TabsWithGridCardsPagination";
import SubnavBar from "@/Components/Navbar/SubnavBar";
import { client } from "@/sanity/lib/client";
import { BreadcrumbJsonLd, WebPageJsonLd } from "next-seo";
import { cleanMetaString, slugify } from "@/sanity/lib/helpers";
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_SLUG_QUERY,
  GET_PAGINATED_BLOGS_BY_CATEGORY_QUERY,
  GET_TOTAL_BLOGS_BY_CATEGORY
} from "@/sanity/query";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = process.env.NEXT_PUBLIC_ENV === 'staging' ? 10 :600;

export async function generateMetadata({
  params
}: {
  params: { category?: string[] };
}) {
  const categorySlug = slugify(params?.category);

  try {
    const categoryData = await client.fetch(
      GET_CATEGORY_BY_SLUG_QUERY(categorySlug),
      { categorySlug }
    );

    if (!categoryData) {
      notFound();
      return;
    }

    const metaTitle =
      cleanMetaString(categoryData?.category_meta_title) || "Centrox AI";
    const metaDescription =
      cleanMetaString(categoryData?.category_meta_description) ||
      "Centrox AI | Heart of Innovation";

    return {
      title: metaTitle,
      description: metaDescription,
      alternates: {
        canonical: `https://centrox.ai/blogs/${categoryData?.category_name}`
      }
    };
  } catch (error) {
    console.error("Error fetching category data:", error);
    notFound();
    return;
  }
}

const Page = async ({ params }: { params: { category?: string[] } }) => {
  const categorySlug = params?.category;

  try {
    // Fetch category data
    const categoryData = await client.fetch(
      GET_CATEGORY_BY_SLUG_QUERY(categorySlug),
      {
        categorySlug: categorySlug
      }
    );

    if (!categoryData) {
      notFound();
      return;
    }

    // Fetch total blogs count for the category
    const totalBlogsCount = await client.fetch(
      GET_TOTAL_BLOGS_BY_CATEGORY(categoryData?.category_name),
      {
        category: categoryData?.category_name
      }
    );
    const allCategories = await client.fetch(GET_ALL_CATEGORIES);
    //@ts-ignore

    const query = GET_PAGINATED_BLOGS_BY_CATEGORY_QUERY(categorySlug, 0, 6);
    const blogsData = await client.fetch(query, {
      category: categorySlug,
      startRange: 0,
      endRange: 6
    });
    return (
      <section className="text-white">
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
              item: `https://centrox.ai/blogs/${slugify(categoryData?.category_name)}`
            }
          ]}
        />
        <WebPageJsonLd
          useAppDir={true}
          description="Discover what's latest in Gen AI, Machine Learning, LLM Dev, and AI Innovation. Stay updated with insights to boost your business through AI technology"
          id={`https://centrox.ai/blogs/${slugify(categoryData?.category_name)}`}
          lastReviewed={new Date().toISOString()}
          reviewedBy={{
            type: "Person",
            name: "Muhammad Harris Bin Naeem"
          }}
        />
        <SubnavBar
          imageLink="/"
          title={"Blogs"}
          navItems={allCategories || []}
        />

        {totalBlogsCount?.length > 0 && (
          <TabsWithGridCardsPagination
            clickAble={false}
            totalBlogsCount={totalBlogsCount?.length}
            cardsPerPage={6}
            headingText={categoryData?.category_name}
            cardData={blogsData || []}
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
  } catch (error) {
    console.error("Error rendering category blogs:", error);
    notFound();
    return <div>Something went wrong!</div>;
  }
};

export default Page;
