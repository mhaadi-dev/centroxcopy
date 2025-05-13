"use client";

import classNames from "@/helpers/common";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ClientOnlyGrid } from "./ClientOnlyGrid";
import { Loader } from "../Loader/Loader";
import PaginationControls from "./PaginationControls";

interface Props {
  initialGridData: any[];
  totalCaseStudiesCount: number;
  cardsPerPage?: number;
  heroStudyIds: string[];
}

const GridCaseStudiesWithPagination = ({
  initialGridData,
  totalCaseStudiesCount,
  cardsPerPage = 6,
  heroStudyIds,
}: Props) => {
  const searchParams = useSearchParams();
  const [gridData, setGridData] = useState(initialGridData);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(totalCaseStudiesCount / cardsPerPage) || 0;

  // Set up IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasRendered(true); // Mark as rendered
          if (page > 1) {
            fetchPaginatedCaseStudies((page - 1) * cardsPerPage, page * cardsPerPage);
          }
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Disconnect after first render
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current && !hasRendered) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [page, cardsPerPage, hasRendered]);

  // Handle initial page load and URL changes
  useEffect(() => {
    const pageParam = searchParams.get("page");
    let newPage = 1;

    if (pageParam) {
      const parsedPage = parseInt(pageParam, 10);
      if (parsedPage > 0 && parsedPage <= totalPages) {
        newPage = parsedPage;
      } else {
        window.history.pushState(null, "", "/case-studies?page=1");
      }
    }

    setPage(newPage);
    if (newPage === 1) {
      setGridData(initialGridData);
      setLoading(false);
    } else if (isInView || hasRendered) {
      fetchPaginatedCaseStudies((newPage - 1) * cardsPerPage, newPage * cardsPerPage);
    }
  }, [searchParams, totalPages, isInView, hasRendered]);

  const fetchPaginatedCaseStudies = async (startRange: number, endRange: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/fetchCaseStudies?startRange=${startRange}&endRange=${endRange}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch case studies");
      }
      const caseStudyData = await response.json();
      // console.log(`Fetched case studies for page ${page} (start: ${startRange}, end: ${endRange}):`, caseStudyData.map((study: any) => ({ title: study.title, slug: study.slug?.current })));

      // Transform fetched data into gridData format
      const newGridData = [
        {
          headerData: {
            tagText: "",
            headingText: "More Case Studies",
            para1Text: "Company Updates and Technology Updates",
            heading2Text: "",
            para2Text: "",
          },
          data: caseStudyData
            .filter((study: any) => study.slug?.current)
            .map((study: any) => ({
              image: study.sections?.image?.asset?.url || "",
              title: study.title || "",
              subdescription: study.sections?.para1Text || "",
              tags: true,
              link: `/case-studies/${study.slug.current}`,
              linkText: "Learn More",
              linkWithIcon: true,
              label: "Case Study",
              duration: "10min read",
            })),
          caption: "",
          btnText: "",
        },
      ];

      setGridData(newGridData);
    } catch (error) {
      console.error("Error fetching paginated case studies:", error);
      setGridData([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || loading) return;

    setLoading(true);
    window.history.pushState(null, "", `/case-studies?page=${newPage}`);
    setPage(newPage);

    if (newPage === 1) {
      setGridData(initialGridData);
      setLoading(false);
    } else {
      fetchPaginatedCaseStudies((newPage - 1) * cardsPerPage, newPage * cardsPerPage);
    }
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const pageParam = new URLSearchParams(window.location.search).get("page");
      const newPage = pageParam ? parseInt(pageParam, 10) : 1;

      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage);
        if (newPage === 1) {
          setGridData(initialGridData);
          setLoading(false);
        } else if (isInView || hasRendered) {
          fetchPaginatedCaseStudies((newPage - 1) * cardsPerPage, newPage * cardsPerPage);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [totalPages, cardsPerPage, initialGridData, isInView, hasRendered]);

  return (
    <section className={classNames("relative")}>
      <div
        ref={sectionRef}
        className="min-h-[500px] items-center justify-center"
      >
        {(!isInView && !hasRendered) ? (
          <p className="text-white text-center text-lg">Loading more case studies...</p>
        ) : (
          <>
            {loading && (
              <Loader
                className="!mt-0 h-full flex items-center pb-10 opacity-90 z-1 absolute w-full"
              />
            )}
            <section>
              <ClientOnlyGrid
                data={gridData}
                className={classNames(loading ? "opacity-50" : "opacity-100")}
              />
            </section>

            {gridData[0]?.data?.length === 0 && !loading && (
              <p className="text-white text-center">No Case Studies Found!</p>
            )}

            {totalCaseStudiesCount > cardsPerPage && totalPages > 1 && (
              <PaginationControls
                handleNext={() => handlePageChange(page + 1)}
                handlePrevious={() => handlePageChange(page - 1)}
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                loading={loading}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default GridCaseStudiesWithPagination;