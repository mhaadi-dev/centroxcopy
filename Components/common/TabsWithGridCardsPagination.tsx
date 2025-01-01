"use client";

import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import { calculateReadingTime, reSlugify, slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import classNames, { section_wrapper_class, text_h2_class } from "@/helpers/common";

interface Props {
  headingText?: string;
  totalBlogsCount?: number;
  cardsPerPage?: number;
  showPagination?: boolean;
  clickAble?:boolean
}

const TabsWithGridCardsPagination = ({
  headingText,
  totalBlogsCount = 0,
  cardsPerPage = 5,
  showPagination = true,
  clickAble=true
}: Props) => {
  const [cardsData, setCardsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage);
console.log("THIS IS TOTAL PAGES",totalPages)
  useEffect(() => {
    // On initial load, get the current page from query params
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get("page") || "1", 10);
    setCurrentPage(pageParam);

    // Fetch initial data
    fetchPaginatedBlogs(pageParam);
  }, []);

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
    <section className={classNames(section_wrapper_class)}>
      {loading && <Loader className="!mt-0 !h-[60vh] flex items-center" />}
      {!loading && (
        <section className="flex flex-col gap-8 lg:gap-10">
            {headingText && <h2 className={classNames(text_h2_class," capitalize mt-16 lg:mt-0 transition-all duration-200")}>
               {reSlugify(headingText)}
           
              </h2>}          
              <div
            className={classNames(
              "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
                  duration={calculateReadingTime(card?.content_item?.blog_data)}
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
      {cardsData?.length === 0 && !loading && <p>No blogs found.</p>}
    </section>
  );
};

export default TabsWithGridCardsPagination;
