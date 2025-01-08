
import classNames, { text_para_3 } from "@/helpers/common";
import { reSlugify, slugify } from "@/sanity/lib/helpers";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import test from "@/assets/Test Design.png"
import { Button } from "../Button.js/button";
import arrow from "@/assets/RightArrow.svg"

interface Props {
  image?: any;
  title?: string;
  category?: string;
  date?: string;
  subdescription?: string;
  tags?: any;
  linkText?: string;
  linkWithIcon?: boolean;
  link?: string;
  isSearchResult?: boolean;
  label?: string;
  duration?: string;
  name?: string;
  colSpan?: number;
  cardClick?:(link:string)=>void
}
const CommonCard = ({
  image,
  title,
  category,
  date,
  subdescription = "",
  cardClick=()=>{},
  tags = [],
  linkWithIcon,
  linkText,
  link='',
  isSearchResult = false,
  label = "",
  duration = "",
  name = "",
  colSpan = 0
}: Props) => {
  return (
    <div
      className={classNames(
        "max-w-  mx-auto  flex flex-col   justify-start    hover:bg-[#079DFC1A] transition-colors ease-in px-[.9rem]  lg:px-[1.5rem] py-[0.7rem] rounded-2xl cursor-pointer ",
        colSpan == 2 ? "col-span-1 lg:col-span-2" : "col-span-1",isSearchResult ? "lg:flex-row lg:gap-6 items-center !justify-start lg:px-[1.1rem] py-[0.7rem] mr-3":"flex-col"
      )}
    >
       {image && (
        <Link href={link||""} className={classNames(isSearchResult ? "lg:w-2/5 h-full":"w-full h-full")}>
           <Image
          src={image}
          loading="lazy"
          className={classNames(
            "  my-4 w-full rounded-xl",
            isSearchResult ? "w-full  lg:!w-4/4 lg:!my-0 " : ""
          )}
          width={610}
          height={320}
          alt="img-alt"
        />
        </Link>
       
      )}
      <Link href={link||""} className={classNames( isSearchResult? "flex flex-col lg:w-4/5    justify-between  items-start lg:!flex-row  gap-2 lg:gap-8 ":"w-full")}>

       <span className=" h-full   w-full block">
        
      <div className="flex items-center gap-x-3">
          {label && (
            <p className={classNames(text_para_3, "text-blue-azure capitalize")}>
              {reSlugify(label)}
            </p>
          )}
          {duration && <p className={classNames(text_para_3)}>{duration}</p>}
        </div>
       {isSearchResult ?<h2 className="font-semibold my-2 lg:my-4 text-[1rem] sm:text-[1.5rem] text-white">
          {title ||
            ""}
        </h2>:<h4 className="font-semibold my-2 lg:my-2 text-[1rem] sm:text-[1.5rem] text-white">
          {title ||
            ""}
        </h4>}
        {subdescription && (
          <p className={classNames(text_para_3, "!mb-2")}>{subdescription}</p>
        )}
        {tags?.length > 0 && (
          <span
            aria-label="centrox case studies tags"
            className=" w-full flex-wrap flex justify items-center gap-4 my-4 lg:my-4 "
          >
            {tags?.map((tag:string)=>{
              return   <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.3rem] text-white  text-[10px] md:text-[0.75] 2xl:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
               {tag}
            </div>
            })}
          
        
          </span>
        )}

        <div
          aria-label="blog-card-footer"
          className={classNames(
            "w-full flex items-center justify-start gap-x-6 mt-auto ",
            category || date || name ? "" : ""
          )}
        >
          {name && <p className={classNames("text-gray-500 font-semibold ",text_para_3)}>{name}</p>}
          {category && (
            <p className={classNames("text-blue-azure font-semibold text-start capitalize",text_para_3)}>
               {reSlugify(category)}
             
             
            </p>
          )}
          {date && (
            <p className={classNames("text-gray-500 font-semibold",text_para_3)}>
              {new Date(date).toLocaleDateString()}
            </p>
          )}
        </div>

        {linkText && link? (
        
             <Button  content={linkText} onClick={()=>{cardClick(link)}}
            isLinkClass="s"
            Icon={arrow} isLefticon={false}
            iconClassName="!w-[13px] lg:!w-[15px]"
            customClassName="font-normal text-[1.02rem] !mx-0 !p-0"
            paddingclass="!pl-0"
            className="!text-[#E5E7EB] !text-[0.7rem] !p-0 lg:!text-[1.1rem] !my-3  !flex !items-center !gap-2 hover:!text-blue-azure"
          />
         
          
          
        
        ):null}
      </span>
     
        
      
      </Link>
     
      
      
    </div>
  );
};

export default CommonCard;
{/* <svg
className="cursor-pointer"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 25 25"
width={24}
height={24}
>
<path
  fill="currentColor"
  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
  data-name="Right"
/>
</svg> */}