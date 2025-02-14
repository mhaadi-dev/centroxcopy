"use client"
import classNames, {
  section_wrapper_class,
  text_h2_class,
  text_h3_class,
  text_para_2,
  text_para_main,
} from "@/helpers/common";
import React, { useState } from "react";
import CommonCard from "./CommonCard";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import ContactInput from "./ContactInput";
import searchicon from "@/assets/searchicon.svg";
import crossicon from "@/assets/crossicon.svg";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { slugify } from "@/sanity/lib/helpers";
import { Loader } from "../Loader/Loader";
import PaginationControls from "./PaginationControls";
import { usePathname } from "next/navigation";

interface Props {
  setShowSearch?: (val: boolean) => void;

}

const SearchResultComponent = ({ setShowSearch }: Props) => {
  const [caseStudies, setCaseStudies] = useState<any>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false); // To track loading state
  const [currentPage,setCurrentPage]=useState(1)
  const [totalPages,setTotalPages]=useState(0)
  const [blogsLength,setBlogsLength]=useState(null)
  const pathname=usePathname()
  const cardsPerPage=4
  
  const setUserQueryInput = (val: string) => {
    setUserInput(val);
  };
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
        searchCaseStudy(startRange,endRange)
      }
    
    
      const onNextButtonClick = ()=>{
        let startRange:number;
        let endRange:number;
      
          startRange=((currentPage+1) - 1)*cardsPerPage
          endRange=(cardsPerPage*(currentPage+1))
        
        
        setCurrentPage(current => current+1)
        searchCaseStudy(startRange,endRange)
      }

      const searchCaseStudy = async (start = 0, end = 4) => {
        if (!userInput.trim()) return;
      if(pathname.startsWith("/case-studies"))return
        setLoading(true);
      
        try {
          const payload = { keyword: userInput.trim(), startRange: start, endRange: end };
          
          const response = await fetch("/api/fetchBlogs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            setCaseStudies(data?.blogData);
            const totalPages = Math.ceil(data?.totalBlogs / cardsPerPage) || 0;
            setTotalPages(totalPages)
            setBlogsLength(data?.blogData?.length)
          } else {
            console.error("Failed to fetch data:", data.error);
            setCaseStudies([]);
          }
        } catch (error) {
          console.error("Error during fetch:", error);
          setCaseStudies([]);
        } finally {
          setLoading(false);
        }
      };


  return (
    <section
      aria-label="centrox search blogs"
      className={classNames(
        section_wrapper_class,
        "flex flex-col gap-y-8 text-2xl !mt-24 lg:!mt-12 text-white"
      )}
    >
      <div className="flex items-center justify-between">
        <p className={classNames(text_h3_class, "pt-0 lg:pt-10")}>
          Search Result for: {userInput}
        </p>
        <div
          className="bg-gray-700 p-2 lg:p-4 rounded-full bg-opacity-80 cursor-pointer"
          onClick={() => {
            setShowSearch && setShowSearch(false);
          }}
        >
          <svg
            fill="white"
            width={15}
            height={15}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 94.926 94.926"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <SearchInput
        icon1={searchicon}
        icon2={crossicon}
        name="search"
        placeholder="Search blogs here"
        btnText="Search"
        containerClassName="lg:!w-[70%] 2xl:!py-[0.5rem]"
        btnClassName=" 2xl:!px-[1.5rem] sm:!py-[0.5rem] !py-[0.3rem]"
        setUserQueryInput={setUserQueryInput}
        onClick={()=>{searchCaseStudy(0,4)}}
      />
  <div className={classNames("w-full  overflow-y-auto",blogsLength!==null && caseStudies?.length > 0 ? "h-[70vh]" :"")}>
        {loading && <div className={classNames(text_para_2, "text-center")}><Loader className="!my-3 min-h-[80vh] items-center"/></div>}
        {!loading && caseStudies.length > 0 ? (
          caseStudies.map((card: any, index: number) => {
            return (
              <Link href={`${slugify(card?.content_item?.category)}/${slugify(card?.label?.current)}`}>
                <CommonCard
                image={card?.content_item?.image?.image}
                title={
                  card?.meta_title ||
                  "Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform"
                }
                subdescription={
                  card?.meta_description ||
                  "Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source."
                }
                tags={card?.content_item?.tags}
                link={`${slugify(card?.category?.category_name)}/${slugify(card?.label?.current)}`}
                linkText={card?.content_item?.linkText}
                linkWithIcon={card?.content_item?.linkWithIcon}
                isSearchResult={true}
                key={index}
              />
              </Link>
              
            );
          })
        ) : (
          blogsLength==0 && !loading&& <p className={classNames(text_para_2, "text-center")}>No Blogs to Show!</p>
        )}
      </div>
    {blogsLength!==null &&blogsLength!==0  ?  <PaginationControls
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
          searchCaseStudy(startRange,endRange)
        }}
      />:""}
    </section>
  );
};

export default SearchResultComponent;
