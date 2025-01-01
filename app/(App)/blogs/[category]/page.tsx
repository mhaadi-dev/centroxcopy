import BlogBanner from "@/Components/common/BlogBanner";
import TabsWithGridCardsPagination from "@/Components/common/TabsWithGridCardsPagination";
import SubnavBar from "@/Components/Navbar/SubnavBar";
import { client } from "@/sanity/lib/client";
import { slugify } from "@/sanity/lib/helpers";
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_SLUG_QUERY,
  GET_TOTAL_BLOGS_BY_CATEGORY,
} from "@/sanity/query";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 10;

const Page = async ({ params }: { params: { category?: string[] } }) => {
  const categorySlug = params?.category;

  try {
    // Fetch category data
    const categoryData = await client.fetch(GET_CATEGORY_BY_SLUG_QUERY(categorySlug), { 
      categorySlug: categorySlug 
    });

    if (!categoryData) {
      notFound();
      return;
    }

    // Fetch total blogs count for the category
    const totalBlogsCount = await client.fetch(GET_TOTAL_BLOGS_BY_CATEGORY(categoryData?.category_name), { 
      category: categoryData?.category_name 
    });
     const allCategories = await   client.fetch(GET_ALL_CATEGORIES)
   
    // console.log("Total blogs count for category:", totalBlogsCount?.length);

    return (
      <section className="text-white">
        <SubnavBar imageLink="/blogs" title={"Blogs"} navItems={allCategories||[]} />
     
        <TabsWithGridCardsPagination
          clickAble={false}
          totalBlogsCount={totalBlogsCount?.length}
          cardsPerPage={6}
          headingText={categoryData?.category_name}
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

// // Metadata generation function
// export async function generateMetadata({ params }: { params: { category?: string[] } }) {
//   const categorySlug = slugify(params?.category);

//   try {
//     // Fetch category data
//     const categoryData = await client.fetch(GET_CATEGORY_BY_SLUG_QUERY(categorySlug), { categorySlug });

//     if (!categoryData) {
//       notFound();
//       return;
//     }

//     const metaTitle = categoryData?.category_meta_title || "Centrox AI";
//     const metaDescription = categoryData?.category_meta_description || "Centrox AI | Heart of Innovation";

//     return {
//       title: metaTitle,
//       description: metaDescription,
//       alternates: {
//         canonical: `https://centrox.ai/blogs/${categoryData.slug}`,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching category data:", error);
//     notFound();
//     return;
//   }
// }