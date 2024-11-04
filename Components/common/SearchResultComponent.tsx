import classNames, { section_wrapper_class, text_h2_class, text_para_2, text_para_main } from '@/helpers/common'
import React from 'react'
import CommonCard from './CommonCard'
import dummyDisplay from "@/assets/dummyDisplay.webp"
import ContactInput from './ContactInput'
import searchicon from "@/assets/searchicon.svg"
import crossicon from "@/assets/crossicon.svg"
const SearchResultComponent = () => {
  return (
    <section aria-label='centrox search case studies' className={classNames(section_wrapper_class,"flex flex-col gap-y-8 text-2xl !mt-40  text-white'")}>
        <div>
            <p className={classNames(text_h2_class,"pt-0 lg:pt-10")}>Search Result for:</p>
            <p></p>
        </div>
    <ContactInput icon1={searchicon} icon2={crossicon} name="search" placeholder="Search case studies by name" btnText="Search" containerClassName="lg:!w-[70%] 2xl:!py-[0.5rem]" btnClassName="!w-[30%] 2xl:!px-[1.5rem] sm:!py-[0.5rem] !py-[0.3rem]"/>
      <div className="w-full ">
        {true && [1,2,3,4].map(card=>{
          return <CommonCard
          image={dummyDisplay}
          title="Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform"
          subdescription="Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source."
          tags={true}
          link=""
          linkText="Learn More"
          linkWithIcon
          isSearchResult={true}
        />
        })}
      </div>
      
    </section>
  )
}

export default SearchResultComponent
