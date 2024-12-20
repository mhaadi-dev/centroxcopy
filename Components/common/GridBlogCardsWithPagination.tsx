"use client";

import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import Link from "next/link";
import { slugify } from "@/sanity/lib/helpers";

interface Props {
  headingText?: string;
  cardData?: any;
  cardsPerPage?: number;
  totalBlogsCount?: number;
}

const GridBlogCardsWithPagination = ({
  headingText,
  totalBlogsCount = 0,
  cardData,
  cardsPerPage = 5
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsData, setCardsData] = useState(cardData || []);
  const [loading, setLoading] = useState(false);
  const [isClient,setIsClient]=useState(false)
  const [lastId, setLastId] = useState(
    {
    previousId: cardsData?.[cardsData?.length - 1]?._id,
    currentId: cardsData?.[cardsData?.length - 1]?._id
  }
);

  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage) || 0;

  const getPaginatedBlogs = async (lastId: string) => {
    setLoading(true); // Show loading state
    try {
      const response = await fetch(
        //@ts-ignore
        `/api/fetchBlogs?lastId=${cardsData?.[cardsData?.length - 1]?._id}`
      );
      const blogData = await response.json();
      console.log("blogdatafrom api", blogData);
      if (blogData?.length > 0) {
        setCardsData((prevData: any) => [...blogData]);
        setLastId({
          previousId:cardsData?.[cardsData?.length - 1]?._id,
          currentId:blogData?.[blogData?.length - 1]?._id,
        });
      }
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (currentPage > 1 && lastId.previousId) {
      getPaginatedBlogs(lastId.previousId);
    }
  }, [currentPage]);
  useEffect(()=>{
    setIsClient(true)
  },[])

  return (
    <section className={classNames(section_wrapper_class)}>
      {isClient &&<div
        className={classNames(
          "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {cardsData?.length > 2 &&
          cardsData
            .slice(0, 2)
            .map((card: any, index: number) => (
              <Link className={classNames(index < 2 ? "col-span-2" : "col-span-1")} href={`blogs/${slugify(card?.content_item?.category)}/${slugify(card?.content_item?.label)}?id=${card?._id}`}>
                    <CommonCard
                key={index}
                colSpan={index < 2 ? 2 : 1}
                name={card?.content_item?.name}
                date={card?.content_item?.date}
                label={card?.content_item?.label}
                duration={card?.content_item?.duration}
                image={card?.content_item?.image?.image}
                subdescription={card?.content_item?.subdescription}
                title={card?.content_item?.title}
                tags={card?.content_item?.tags}
                linkText={card?.content_item?.linkText}
                linkWithIcon={card?.content_item?.linkWithIcon}
                link={`blogs/${slugify(card?.content_item?.category)}/${slugify(card?.content_item?.label)}?id=${card?._id}`}
              />
              </Link>
          
            ))}
      </div> }
      {isClient && <div
        className={classNames(
          "grid gap-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {cardsData?.length > 2 &&
          cardsData
            .slice(2)
            .map((card: any, index: number) => (
              <Link href={`blogs/${slugify(card?.content_item?.category)}/${slugify(card?.content_item?.label)}?id=${card?._id}`}>
                <CommonCard
                key={index}
                name={card?.content_item?.name}
                date={card?.content_item?.date}
                label={card?.content_item?.label}
                duration={card?.content_item?.duration}
                image={card?.content_item?.image?.image}
                subdescription={card?.content_item?.subdescription}
                title={card?.content_item?.title}
              />
              </Link>
              
            ))}
      </div>}
      

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default GridBlogCardsWithPagination;
