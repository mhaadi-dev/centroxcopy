"use client";

import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import { useSearchParams } from "next/navigation";
import { calculateReadingTime, reSlugify, slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import { useRouter } from "next/navigation";

interface Props {
  headingText?: string;
  totalBlogsCount?: number;
  cardsPerPage?: number;
  showPagination?: boolean;
}

const GridBlogCardsWithPagination = ({
  headingText,
  totalBlogsCount = 0,
  cardsPerPage = 5,
  showPagination = true,
}: Props) => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [cardsData, setCardsData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const router = useRouter();

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage) || 0;

  useEffect(() => {
    // Synchronize currentPage when `page` in the URL changes
    const pageParam = searchParams.get("page");
    const updatedPage = pageParam ? parseInt(pageParam, 10) : 1;

    if (currentPage !== updatedPage) {
      setCurrentPage(updatedPage);
    }
  }, [searchParams]);

  useEffect(() => {
    const startRange = (currentPage - 1) * cardsPerPage;
    const endRange = currentPage * cardsPerPage;

    fetchPaginatedBlogs(startRange, endRange);
  }, [currentPage]);

  // useEffect(() => {
  //   const metaTitle = `Centrox AI${currentPage > 1 ? ` - Page ${currentPage}` : ''}`;
  //   const canonicalURL = currentPage === 1
  //     ? `https://centrox.ai/blogs/`
  //     : `https://centrox.ai/blogs?page=${currentPage}`;

  //   document.title = metaTitle;

  //   const link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
  //   if (link) {
  //     link.href = canonicalURL;
  //   } else {
  //     const newLink: HTMLLinkElement = document.createElement("link");
  //     newLink.rel = "canonical";
  //     newLink.href = canonicalURL;
  //     document.head.appendChild(newLink);
  //   }
  // }, [currentPage]);

  const fetchPaginatedBlogs = async (startRange: number, endRange: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/fetchBlogs?startRange=${startRange}&endRange=${endRange}`
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

    setLoading(true);
    setCurrentPage(page);
    window.history.pushState(null, "", `?page=${page}`);
  };

  const cardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className={classNames(section_wrapper_class)}>
      {loading && <Loader className="!mt-0 !h-[60vh] flex items-center" />}
      {!loading && (
        <section>
          <div
            className={classNames(
              "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            )}
          >
            {cardsData?.length > 0 &&
              cardsData?.slice(0, 2).map((card: any, index: number) => (
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
            {cardsData?.length > 0 &&
              cardsData?.slice(2).map((card: any, index: number) => (
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

export default GridBlogCardsWithPagination;
