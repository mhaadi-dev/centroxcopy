import TabsWithGridCards from '@/Components/common/TabsWithGridCards';
import { client } from '@/sanity/lib/client';
import { GET_ALL_CATEGORIES, GET_BLOGS_BY_CATEGORY_QUERY, GET_PAGINATED_ARTICLES_QUERY, GET_TOTAL_BLOGS_COUNT } from '@/sanity/query';
import { notFound } from 'next/navigation';
import React from 'react'
const fetchSanityData = async () => {
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

  return {
  
    allCategories,
    categoricalBlogs: categoricalBlogs.filter(Boolean)
  };
};
console.log("INSIDE CATEGORY")
const page = async() => {
    try {
        const {   categoricalBlogs } =
          await fetchSanityData();
    
        return (
          <>

 
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
          
          </>
        );
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Optionally render a fallback UI here.
        return notFound();
      }
}

export default page