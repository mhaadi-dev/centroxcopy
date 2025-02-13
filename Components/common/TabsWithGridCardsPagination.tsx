"use client";

import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import { calculateReadingTime, reSlugify, slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import classNames, { section_wrapper_class, text_h2_class } from "@/helpers/common";
import BlogBanner from "./BlogBanner";

interface Props {
  headingText?: string;
  totalBlogsCount?: number;
  cardsPerPage?: number;
  showPagination?: boolean;
  clickAble?:boolean,
  cardData:any
}

const TabsWithGridCardsPagination = ({
  headingText,
  totalBlogsCount = 0,
  cardsPerPage = 5,
  showPagination = true,
  cardData=[],
  clickAble=true
}: Props) => {
  const [cardsData, setCardsData] = useState<any[]>(cardData||[]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage);
  // useEffect(() => {
  //   // On initial load, get the current page from query params
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const pageParam = parseInt(urlParams.get("page") || "1", 10);
  //   setCurrentPage(pageParam);

  //   // Fetch initial data
  //   fetchPaginatedBlogs(pageParam);
  // }, []);

  useEffect(() => {
    // Listen for back/forward navigation to synchronize page state
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = parseInt(urlParams.get("page") || "1", 10);
      setCurrentPage(pageParam);
      fetchPaginatedBlogs(pageParam);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const fetchPaginatedBlogs = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/fetchPaginatedBlogs?category=${slugify(headingText)}&page=${page}`
      );
      const blogData = await response.json();
      setCardsData(blogData || []);
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
      setCardsData([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    window.history.pushState(null, "", `?page=${page}`);
    fetchPaginatedBlogs(page);
  };
  return (
    <> 
       {headingText && <h1 className={classNames(text_h2_class," capitalize !mt-24 lg:mt-0 transition-all duration-200",section_wrapper_class)}>
               {reSlugify(headingText)}
           
              </h1>}
    <div className=" lg:mt-0">
        {!loading &&   cardsData?.length > 0 && <BlogBanner
          heading={cardsData?.[0]?.content_item?.banner_data?.banner_heading || cardsData?.[0]?.meta_title }
          paraText={cardsData?.[0]?.content_item?.banner_data?.banner_description ||  cardsData?.[0]?.meta_description}
          date={new Date(cardsData?.[0]?.content_item?.date).toLocaleDateString()}
          name={cardsData?.[0]?.content_item?.name}
          product={cardsData?.[0]?.category?.category_name}
          duration={cardsData?.[0]?.duration}
          banner_image={cardsData?.[0]?.content_item?.image?.image}
          alt={cardsData?.[0]?.content_item?.alt}
          isH2={false}
          category={cardsData?.[0]?.category?.category_name}
          label={reSlugify(cardsData?.[0]?.label?.current)}
          id={cardsData?.[0]?._id}
          isSpan={true}
        />}
    </div>
        
    <section className={classNames(section_wrapper_class)}>

      {loading && <Loader className="!mt-0 !h-[60vh] flex items-center" />}
  
      {!loading && (
        <> 
           {cardsData?.length === 0 && !loading && <p className="text-center">No blogs found.</p>} 
         <section className="flex flex-col gap-8 lg:gap-10">
                   
              <div
            className={classNames(
              "grid space-4  grid-cols-1 justify-center  lg:justify-start sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3"
            )}
          >
            {cardsData?.length > 0 &&
              cardsData.map((card: any, index: number) => (
                <CommonCard
                  key={index}
                  name={card?.author?.name}
                  date={card?.content_item?.date}
                  label={card?.label?.current}
                  category={card?.category?.category_name}
                  duration={card?.duration}
                  image={card?.content_item?.image?.image}
                  subdescription={card?.meta_description}
                  title={card?.meta_title}
                  tags={card?.content_item?.tags}
                  linkText={card?.content_item?.linkText}
                  linkWithIcon={card?.content_item?.linkWithIcon}
                  link={`/blogs/${slugify(
                    card?.category?.category_name
                  )}/${slugify(card?.label?.current)}`}
                />
              ))}
          </div>
         
        </section>
        </>
      
      )}
      {showPagination && totalPages > 1 && (
        <PaginationControls
          handleNext={() => handlePageChange(currentPage + 1)}
          handlePrevious={() => handlePageChange(currentPage - 1)}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    
    </section>
    </>
    
   
  );
};

export default TabsWithGridCardsPagination;
