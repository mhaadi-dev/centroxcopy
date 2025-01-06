"use client";

import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import { useSearchParams } from "next/navigation";
import { calculateReadingTime, reSlugify, slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/app/context";

interface Props {
  headingText?: string;
  totalBlogsCount?: number;
  cardsPerPage?: number;
  showPagination?: boolean;
  cardData?: any;
}

const GridBlogCardsWithPagination = ({
  totalBlogsCount = 0,
  cardsPerPage = 5,
  showPagination = true,
}: Props) => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const { blogs, setBlogs, page, setPage } = useBlogs();
  const router = useRouter();

  // const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  // const [cardsData, setCardsData] = useState<any>(blogs || []);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(initialPage);
  const [manualPageChange, setManualPageChange] = useState(false);

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage) || 0;

  useEffect(() => {
    const pageParam = searchParams.get("page");
    const updatedPage = pageParam ? parseInt(pageParam, 10) : page? page: 1;
    if (updatedPage !== page) {
      setPage(updatedPage);
      setManualPageChange(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if(page>0 && page>1){
      window.history.pushState(null, "", `?page=${page}`);
    }
    if (manualPageChange || !blogs.length) {
      const startRange = (page - 1) * cardsPerPage;
      const endRange = page * cardsPerPage;
      fetchPaginatedBlogs(startRange, endRange);
    }
  }, [page]);

  const fetchPaginatedBlogs = async (startRange: number, endRange: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/fetchBlogs?startRange=${startRange}&endRange=${endRange}`
      );
      const blogData = await response.json();
      setBlogs(blogData || []);
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setLoading(true);
    setPage(page);
    setManualPageChange(true);
    window.history.pushState(null, "", `?page=${page}`);
  };

  const cardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className={classNames(section_wrapper_class,"relative ")}>
      {loading && <Loader className="!mt-0 h-full flex items-center pb-10 opacity-90 z-1 absolute  w-full " />}
      {true && (
        <section>
          <div
            className={classNames(
              "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",loading?"opacity-50":"opacity-100"
            )}
          >
            {blogs?.length > 0 &&
              blogs?.slice(0, 2).map((card: any, index: number) => (
                <CommonCard
                  key={index}
                  colSpan={2}
                  name={card?.author?.name}
                  date={card?.content_item?.date}
                  label={reSlugify(card?.label?.current)}
                  category={card?.category?.category_name} 
                  duration={calculateReadingTime(card?.content_item?.blog_data)}
                  image={card?.content_item?.image?.image}
                  subdescription={card?.meta_description}
                  title={card?.meta_title}
                  tags={card?.content_item?.tags}
                  linkText={card?.content_item?.linkText}
                  linkWithIcon={card?.content_item?.linkWithIcon}
                  link={`blogs/${slugify(
                    card?.category?.category_name
                  )}/${slugify(card?.label?.current)}`}
                />
              ))}
          </div>
          <div
            className={classNames(
              "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {blogs?.length > 0 &&
              blogs?.slice(2).map((card: any, index: number) => (
                <CommonCard
                  key={index}
                  name={card?.author?.name}
                  date={card?.content_item?.date}
                  category={card?.category?.category_name}
                  label={reSlugify(card?.label?.current)}
                  duration={calculateReadingTime(card?.content_item?.blog_data)}
                  image={card?.content_item?.image?.image}
                  subdescription={card?.meta_description}
                  title={card?.meta_title}
                  tags={card?.content_item?.tags}
                  linkText={card?.content_item?.linkText}
                  linkWithIcon={card?.content_item?.linkWithIcon}
                  link={`blogs/${slugify(
                    card?.category?.category_name
                  )}/${slugify(card?.label?.current)}`}
                  cardClick={cardClick}
                />
              ))}
          </div>
        </section>
      )}
           {blogs?.length === 0 && !loading ? <p className="text-white text-center">No Blogs Found!</p>:""}
      {showPagination && totalPages > 1 && (
        <PaginationControls
          handleNext={() => handlePageChange(page + 1)}
          handlePrevious={() => handlePageChange(page - 1)}
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          loading={loading}
        />
      )}
 
    </section>
  );
};

export default GridBlogCardsWithPagination;
