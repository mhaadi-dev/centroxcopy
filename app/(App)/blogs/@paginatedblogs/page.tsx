import GridBlogCardsWithPagination from '@/Components/common/GridBlogCardsWithPagination';
import { Loader } from '@/Components/Loader/Loader';
import { client } from '@/sanity/lib/client';
import { GET_ALL_CATEGORIES, GET_BLOGS_BY_CATEGORY_QUERY, GET_PAGINATED_ARTICLES_QUERY, GET_TOTAL_BLOGS_COUNT } from '@/sanity/query';
import { notFound } from 'next/navigation';
import React from 'react'
const fetchSanityData = async () => {
  const totalBlogsCount = await client.fetch(GET_TOTAL_BLOGS_COUNT);

  const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY, {
    startRange: 0,
    endRange: 5
  });
  return {
    totalBlogsCount,
    blogData,
  };
};
console.log("INSIDE NBBBBB")
const page = async () => {
    try {
        const { totalBlogsCount, blogData, } =
          await fetchSanityData();
    
        return (
          <>
            
            {blogData?.length > 0 ? (
              <GridBlogCardsWithPagination
                cardsPerPage={5}
                totalBlogsCount={totalBlogsCount}
                cardData={blogData}
              />
            ) : (
              <Loader className='!min-h-[80vh]' />
            )}

    
          </>
        );
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Optionally render a fallback UI here.
        return notFound();
      }
}

export default page