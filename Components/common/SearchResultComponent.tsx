"use client"
import classNames, {
  section_wrapper_class,
  text_h2_class,
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
interface Props{
  setShowSearch?:(val:boolean)=>void
}
const caseStudyData=[
  {
    image: dummyDisplay,
    title: "Meta and Centrox Drive AI Innovation with Llama 3.1 405B Launch",
    subdescription: "Centrox collaborates to bring the largest open AI model, designed to set new standards for innovation and accessibility.",
    tags: true,
    link: "",
    linkText: "Learn More",
    linkWithIcon: true,
    isSearchResult: true,
  },
  {
    image: dummyDisplay,
    title: "Centrox Expands AI Model Accessibility with GenAI Partnership",
    subdescription: "Through a partnership with Scale GenAI, Centrox delivers unprecedented AI model reach and ease of integration.",
    tags: true,
    link: "",
    linkText: "Learn More",
    linkWithIcon: true,
    isSearchResult: true,
  },
  {
    image: dummyDisplay,
    title: "Empowering Enterprises with Centrox’s AI Adoption Strategy",
    subdescription: "Centrox and Meta team up to enhance enterprise AI adoption, utilizing the latest in Llama 3.1's capabilities.",
    tags: true,
    link: "",
    linkText: "Learn More",
    linkWithIcon: true,
    isSearchResult: true,
  },
  {
    image: dummyDisplay,
    title: "Scaling AI Accessibility with Centrox and Llama 3.1's Advanced Features",
    subdescription: "The largest foundation model to date, Llama 3.1 powers new AI capabilities, making innovation accessible to all.",
    tags: true,
    link: "",
    linkText: "Learn More",
    linkWithIcon: true,
    isSearchResult: true,
  },
]
const SearchResultComponent = ({setShowSearch}:Props) => {
  const[caseStudies,setCaseStudies]=useState<any>([])
  const [userInput,setUserInput]=useState("")
 const setUserQueryInput=(val:string)=>{
      setUserInput(val)
  }
  const searchCaseStudy=()=>{
      const filteredCaseStudies=caseStudyData.filter(casestudy=>{
        return casestudy?.title?.toLowerCase().includes(userInput?.toLowerCase())
      })
      setCaseStudies(filteredCaseStudies)
  }
  return (
    <section
      aria-label="centrox search case studies"
      className={classNames(
        section_wrapper_class,
        "flex flex-col gap-y-8 text-2xl !mt-20 lg:!mt-40  text-white'"
      )}
    >
      <div className="flex items-center justify-between">
        <p className={classNames(text_h2_class, "pt-0 lg:pt-10")}>
          Search Result for:
        </p>
        <div className="bg-gray-700 p-2 lg:p-4 rounded-full bg-opacity-80 cursor-pointer" onClick={()=>{setShowSearch && setShowSearch(false)}}>
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
        placeholder="Search case studies by name"
        btnText="Search"
        containerClassName="lg:!w-[70%] 2xl:!py-[0.5rem]"
        btnClassName=" 2xl:!px-[1.5rem] sm:!py-[0.5rem] !py-[0.3rem]"
        setUserQueryInput={setUserQueryInput}
        onClick={searchCaseStudy}
      />
      <div className="w-full  ">
        {true &&
          caseStudies?.length>0 ? caseStudies.map((card:any,index:number) => {
            return (
              <CommonCard
                image={dummyDisplay}
                title={card.title||"Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform"}
                subdescription={card.subdescription||"Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source."}
                tags={true}
                link=""
                linkText="Learn More"
                linkWithIcon
                isSearchResult={true}
                key={index}
              />
            );
          }): userInput!== "" && <p className={classNames(text_para_2,"text-center")}>No Case Study to Show!</p> }
      </div>
    </section>
  );
};

export default SearchResultComponent;
