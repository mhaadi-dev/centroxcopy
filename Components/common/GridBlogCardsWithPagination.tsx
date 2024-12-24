"use client";

import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import PaginationControls from "./PaginationControls";
import Link from "next/link";
import { slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";

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
  // const [lastId, setLastId] = useState(
  //   {previous: "",
  //     current: cardsData?.[cardsData?.length - 1]?._id
  //   }
    

  // );


  const onPreviousButtonClick = ()=>{
    let startRange:number;
    let endRange:number;

    if((currentPage+1)==totalPages){
    startRange=((currentPage-1) - 1)*cardsPerPage
    endRange=(cardsPerPage*(currentPage-1))
    }
    else{
      startRange=((currentPage-1) - 1)*cardsPerPage
      endRange=(cardsPerPage*(currentPage-1))
    }
    setCurrentPage(current => current-1)
    getPaginatedBlogs(startRange,endRange)
  }

  // const onPageNumberClick = async(page:number)=>{
  //   let index = (page - currentPage) * (3 -1 )
  //      setCurrentPage(page);
  //      try {
  //       const response = await fetch("/api/fetchonclick", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ lastId:'', index }),
  //       });
  
  //       if (!response.ok) throw new Error("Failed to fetch blogs");
  
  //       const blogData = await response.json();
  //       console.log("PAGE NUMBER CLICK",blogData)
  //       if (blogData?.length > 0) {
  //         setCardsData(blogData);
  //         // setLastId({
  //         //   previous: lastId.,
  //         //   current: blogData?.[blogData?.length - 1]?._id || "",
  //         // });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching paginated blogs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
       
  // }

  const onNextButtonClick = ()=>{
    let startRange:number;
    let endRange:number;
  
      startRange=((currentPage+1) - 1)*cardsPerPage
      endRange=(cardsPerPage*(currentPage+1))
    
    
    setCurrentPage(current => current+1)
    getPaginatedBlogs(startRange,endRange)
  }
  const totalPages = Math.ceil(totalBlogsCount / cardsPerPage) || 0;

  const getPaginatedBlogs = async (startRange:number,endRange:number) => {
   
    setLoading(true); // Show loading state
    try {
      const response = await fetch(
        //@ts-ignore
        `/api/fetchBlogs?startRange=${startRange}&endRange=${endRange}`
      );
      const blogData = await response.json();
      console.log("blogdatafrom api", blogData);
      if (blogData?.length > 0) {
        setCardsData((prevData: any) => [...blogData]);
        // setLastId(
        //   (lastId)=>({
        //     previous:lastId.current || "",
        //     current:blogData?.[blogData?.length - 1]?._id})
        // )
      }
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
    } finally {
      setLoading(false); 
    }
  };

  // useEffect(() => {
  //   if (currentPage > 1 && lastId) {
  //     getPaginatedBlogs(lastId);
  //   }
  // }, [currentPage]);
  useEffect(()=>{
    setIsClient(true)
  },[])
  return (
    <section className={classNames(section_wrapper_class)}>
      {loading && <Loader className="!mt-0"/>}
      {isClient && !loading&&<div
        className={classNames(
          "grid gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {cardsData?.length > 0 &&
          cardsData
            .slice(0, 2)
            .map((card: any, index: number) => (
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
             
          
            ))}
      </div> }
      {isClient && !loading && <div
        className={classNames(
          "grid gap-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {cardsData?.length > 2 &&
          cardsData
            .slice(2)
            .map((card: any, index: number) => (
                <CommonCard
                key={index}
                name={card?.content_item?.name}
                date={card?.content_item?.date}
                label={card?.content_item?.label}
                duration={card?.content_item?.duration}
                image={card?.content_item?.image?.image}
                subdescription={card?.content_item?.subdescription}
                title={card?.content_item?.title}
                link={`blogs/${slugify(card?.content_item?.category)}/${slugify(card?.content_item?.label)}?id=${card?._id}`}
                linkWithIcon={card?.content_item?.linkWithIcon}
                linkText={card?.content_item?.linkText}

              />
             
              
            ))}
      </div>}
      

      <PaginationControls
        handleNext={onNextButtonClick}
        handlePrevious = {onPreviousButtonClick}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page:number)=>{
          let startRange:number;
          let endRange:number;
      
          if(currentPage<page){
          startRange=((currentPage+1) - 1)*cardsPerPage
          endRange=(cardsPerPage*(currentPage+1))
          }
          else{
            startRange=((currentPage-1) - 1)*cardsPerPage
            endRange=(cardsPerPage*(currentPage-1))
          }
          setCurrentPage(page)
          getPaginatedBlogs(startRange,endRange)
        }}
      />
    </section>
  );
};

export default GridBlogCardsWithPagination;
