"use client";

import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import { useSearchParams } from "next/navigation";
import { reSlugify, slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/app/context";

interface Props {
  headingText?: string;
  totalBlogsCount?: number;
  cardsPerPage?: number;
  showPagination?: boolean;
  cardData?: any;
  isAuthorPage?: boolean;
  authorId?: string;
}

const GridBlogCardsWithPagination = ({
  totalBlogsCount = 0,
  cardsPerPage = 5,
  showPagination = true,
  cardData,
  isAuthorPage = false,
  authorId = ""
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { blogs, setBlogs, page, setPage } = useBlogs();
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage) || 0;

  // Handle initial page load and URL changes
  useEffect(() => {
    const pageParam = searchParams.get("page");
    let newPage = 1;

    if (pageParam) {
      const parsedPage = parseInt(pageParam, 10);
      if (parsedPage > 0 && parsedPage <= totalPages) {
        newPage = parsedPage;
      } else {
        window.history.pushState(null, "", "/blogs?page=1");
        return;
      }
    }

    setPage(newPage);
    fetchPaginatedBlogs((newPage - 1) * cardsPerPage, newPage * cardsPerPage);
  }, [searchParams, totalPages]);

  const fetchPaginatedBlogs = async (startRange: number, endRange: number) => {
    setLoading(true);

    try {
      let response: any;
      if (!isAuthorPage) {
        response = await fetch(
          `/api/fetchBlogs?startRange=${startRange}&endRange=${endRange}`
        );
      } else if (isAuthorPage) {
        response = await fetch(
          `/api/fetch-author-blogs?startRange=${startRange}&endRange=${endRange}&authorId=${authorId}`
        );
      }

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const blogData = await response.json();
      console.log("RESSS", blogData);
      setBlogs(blogData || []);
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || loading) return;

    setLoading(true);
    if (!isAuthorPage) {
      window.history.pushState(null, "", `/blogs?page=${newPage}`);
    } else if (isAuthorPage) {
      window.history.pushState(
        null,
        "",
        `/authors/${authorId}?page=${newPage}`
      );
    }

    setPage(newPage);
    await fetchPaginatedBlogs(
      (newPage - 1) * cardsPerPage,
      newPage * cardsPerPage
    );
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const pageParam = new URLSearchParams(window.location.search).get("page");
      const newPage = pageParam ? parseInt(pageParam, 10) : 1;

      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage);
        fetchPaginatedBlogs(
          (newPage - 1) * cardsPerPage,
          newPage * cardsPerPage
        );
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [totalPages, cardsPerPage]);

  const cardClick = (link: string) => {
    router.push(link);
  };

  const renderTopCards = () => {
    return blogs?.slice(0, 2).map((card: any, index: number) => {
      const link =
        process.env.NEXT_PUBLIC_ENV == "staging" && isAuthorPage
          ? `https://staging.centrox.ai/blogs/${slugify(
              card?.category?.category_name
            )}/${slugify(card?.label?.current)}`
          : process.env.NEXT_PUBLIC_ENV == "production" && isAuthorPage
            ? `https://centrox.ai/blogs/${slugify(
                card?.category?.category_name
              )}/${slugify(card?.label?.current)}`
            : `/blogs/${slugify(
                card?.category?.category_name
              )}/${slugify(card?.label?.current)}`;
      return (
        <CommonCard
          key={`top-${card?.label?.current}-${index}`}
          colSpan={2}
          name={card?.author?.name}
          date={card?.content_item?.date}
          label={reSlugify(card?.label?.current)}
          category={card?.category?.category_name}
          duration={card.duration}
          image={card?.content_item?.image?.image}
          subdescription={card?.meta_description}
          title={card?.content_item?.banner_data?.banner_heading}
          tags={card?.content_item?.tags}
          linkText={card?.content_item?.linkText}
          linkWithIcon={card?.content_item?.linkWithIcon}
          link={link}
        />
      );
    });
  };
  const renderBottomCards = () => {
    return blogs?.slice(2).map((card: any, index: number) => {
      const link =
        process.env.NEXT_PUBLIC_ENV == "staging" && isAuthorPage
          ? `https://staging.centrox.ai/blogs/${slugify(
              card?.category?.category_name
            )}/${slugify(card?.label?.current)}`
          : process.env.NEXT_PUBLIC_ENV == "production" && isAuthorPage
            ? `https://centrox.ai/blogs/${slugify(
                card?.category?.category_name
              )}/${slugify(card?.label?.current)}`
            : `/blogs/${slugify(
                card?.category?.category_name
              )}/${slugify(card?.label?.current)}`;
      return (
        <CommonCard
          key={`bottom-${card?.label?.current}-${index}`}
          name={card?.author?.name}
          date={card?.content_item?.date}
          category={card?.category?.category_name}
          label={reSlugify(card?.label?.current)}
          duration={card.duration}
          image={card?.content_item?.image?.image}
          subdescription={card?.meta_description}
          title={card?.content_item?.banner_data?.banner_heading}
          tags={card?.content_item?.tags}
          linkText={card?.content_item?.linkText}
          linkWithIcon={card?.content_item?.linkWithIcon}
          link={link}
        />
      );
    });
  };

  return (
    <section className={classNames(section_wrapper_class, "relative")}>
      {loading && (
        <Loader className="!mt-0 h-full flex items-center pb-10 opacity-90 z-1 absolute w-full" />
      )}
      <section>
        <div
          className={classNames(
            "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            loading ? "opacity-50" : "opacity-100"
          )}
        >
          {blogs?.length > 0 && renderTopCards()}
        </div>
        <div
          className={classNames(
            "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {blogs?.length > 0 && renderBottomCards()}
        </div>
      </section>

      {blogs?.length === 0 && !loading && (
        <p className="text-white text-center">No Blogs Found!</p>
      )}

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
