"use client"

import classNames, {
  section_wrapper_class,
  text_h2_class,
} from "@/helpers/common";
import CommonCard from "./CommonCard";

import linkIcon from "@/assets/ArrowSquareOut.svg"
import { calculateReadingTime,  reSlugify,  slugify } from "@/sanity/lib/helpers";
import Image from "next/image";
import Link from "next/link";
interface Props {
   headingText?:string,
   cardsData?:any,
   clickAble?:boolean
}
const TabsWithGridCards = ({ headingText = "", cardsData = [],clickAble=true }: Props) => {
  const isDataAvailable = Array.isArray(cardsData) && cardsData.length > 0;
  return (
    <>
    {isDataAvailable ?  
        <section className={classNames(section_wrapper_class, "flex flex-col gap-8 lg:gap-10 ")}>
          <div className="flex gap-4 items-center ">
            {headingText && <h2 className={classNames(text_h2_class,"cursor-pointer capitalize hover:text-blue-azure transition-all duration-200")}>
              <Link href={`/blogs/${slugify(headingText)}`}>
               {reSlugify(headingText)}
              </Link>
              </h2>}
          {clickAble &&<Link href={`/blogs/${slugify(headingText)}`}><Image src={linkIcon} alt="link" className="cursor-pointer lg:w-[2rem] lg:h-[2rem] hover:text-blue-azure transition-all duration-200"></Image>
          </Link> } 
          </div>
         
 
  <>
   <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {cardsData.slice(0, 2).map((card: any, index: number) => (
              <CommonCard
                key={index}
                colSpan={2}
                name={card?.author?.name}
                date={card?.content_item?.date}
                category={card?.category?.category_name}
                label={card?.label?.current}
                duration={calculateReadingTime(card?.content_item?.blog_data)}
                image={card?.content_item?.image?.image}
                subdescription={card?.meta_description}
                title={card?.meta_title}
                tags={card?.content_item?.tags}
                linkText={card?.content_item?.linkText}
                linkWithIcon={card?.content_item?.linkWithIcon}
                link={`blogs/${slugify(card?.category?.category_name)}/${slugify(card?.label?.current)}`}
              />
            ))}
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cardsData.slice(2).map((card: any, index: number) => (
              <CommonCard
                key={index}
                colSpan={1}
                name={card?.author?.name}
                date={card?.content_item?.date}
                category={card?.category?.category_name}
                label={card?.label?.current}
                duration={calculateReadingTime(card?.content_item?.blog_data)}
                image={card?.content_item?.image?.image}
                subdescription={card?.meta_description}
                title={card?.meta_title}
                tags={card?.content_item?.tags}
                linkText={card?.content_item?.linkText}
                linkWithIcon={card?.content_item?.linkWithIcon}
                link={`blogs/${slugify(card?.category?.category_name)}/${slugify(card?.label?.current)}`}
              />
            ))}
          </div>
  </> 
         
        </section>:null
}
      
    </>
  );
};
export default TabsWithGridCards