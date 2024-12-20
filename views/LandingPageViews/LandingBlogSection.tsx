import Image from "next/image";
import React from "react";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"; // Solid icons
import { CustomCarousalSection } from "@/sections/CustomCarousalSection";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { ProductsCarousal } from "@/Components/common/ProductsCarousal"
import SectionTag from "@/Components/common/SectionTag";
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";

interface CardsDataI{
    _id: string;
    name: string;
    slug: { _type: string; current: string };
    subslug: { _type: string; current: string };
    content_item: {
      linkWithIcon: boolean;
      isSearchResult: boolean | null;
      label: string;
      duration: string;
      name: string;
      subdescription: string;
      tags: string[];
      linkText: string;
      image: any;  
      title: string;
      category: string;
    };
}
interface PropsI{
  cardsData:CardsDataI[]
  className?:string,
}




const LandingBlogSection = ({cardsData,className}:PropsI) => 
  
  {
    console.log("cards data in landogingbloc is",cardsData)
    return (
  <>
  
    <section className={classNames(section_wrapper_class,className)}>
        
       <section aria-label="Centrox Blog" className="flex flex-col gap-y-4" > 
       <SectionTag text="Blogs"/>
       <h2 className={classNames(text_h2_class,"text-center")}>Centrox Blog Stay Ahead of the Curve</h2>
       <p className={classNames(text_para_2,"text-center w-full sm:w-[60%] mx-auto")}> Our AI engineers are active contributors in the community and regularly share their insights and expertise on our blog. Explore their latest articles on Generative AI and LLM.</p>
       </section> 

        <ProductsCarousal data={cardsData}/>
     
      
   
    </section>
  </>
);
  }

export default LandingBlogSection;
