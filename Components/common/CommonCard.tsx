import classNames, { text_para_3 } from "@/helpers/common";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image?: any;
  title?: string;
  category?: string;
  date?: string;
  subdescription?: string;
  tags?: boolean;
  linkText?: string;
  linkWithIcon?: boolean;
  link?: string;
  isSearchResult?: boolean;
  label?:string,
  duration?:string
  name?:string
  colSpan?:number
}
const CommonCard = ({
  image,
  title,
  category,
  date,
  subdescription = "",
  tags = false,
  linkWithIcon,
  linkText,
  link,
  isSearchResult = false,
  label="",
  duration="",
  name="",
  colSpan=0
}: Props) => {
  return (
    <div
      className={classNames(
        "max-w-  mx-auto  flex flex-col   justify-center   hover:bg-[#079DFC1A] transition-colors ease-in px-[.9rem]  lg:px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer ",
        isSearchResult
          ? "flex-col   justify-between  items-start lg:!flex-row max-w-full gap-2 lg:gap-8 "
          : "flex-col",colSpan==2 ? "col-span-1 lg:col-span-2":"col-span-1"
      )}
    >
      {image && (
        <Image
          src={image}
          loading="lazy"
          className={classNames(
            "w-full my-4 h-[60%]",
            isSearchResult ? "w-full  lg:!w-1/4" : "w-full"
          )}
          width={0}
          height={0}
          alt="img-alt"
        />
      )}
      <div className=" w-full">
        <div className="flex items-center gap-x-3">
          
          {label && <p className={classNames(text_para_3, "text-blue-azure")}>
            {label}
          </p>}
          {duration && <p className={classNames(text_para_3)}>{duration}</p>}
        </div>
        <h4 className="font-semibold my-2 lg:my-4 text-[1rem] sm:text-[1.5rem] text-white">
          {title ||
            "Meta ooand Centrox Partner to Da 3.1 405B Using Scale GenAI Platform"}
        </h4>
        {subdescription && (
          <p className={classNames(text_para_3, "my-2")}>{subdescription}</p>
        )}
        {tags && (
          <section
            aria-label="centrox case studies tags"
            className=" w-full flex-wrap flex justify items-center gap-4 my-4 lg:my-6"
          >
            <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.5rem] text-white  text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
              
              AI
            </div>
            <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
              
              ML Ops
            </div>
            <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
              
              AWS
            </div>
            <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
              
              GANs
            </div>
            <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
              
              CVS
            </div>
          </section>
        )}
       
            <div
              aria-label="blog-card-footer"
              className={classNames("w-full flex items-center justify-start gap-x-6 mt-auto ",category || date || name ?"h-[3rem]":"")}
            >
              {name && <p className="text-gray-500 font-semibold">{name}</p>}
             {category && <p className="text-blue-azure font-semibold text-start ">
                {category} 
              </p>}
             {date && <p className="text-gray-500 font-semibold ">{date}</p>}
            </div>
        
        {linkText && (
          <Link
            href={link || ""}
            className={classNames(
              "flex gap-x-2  text-gray-light hover:text-blue-azure mt-auto mb-4 ",
              isSearchResult ? "hidden" : "flex"
            )}
          >
            {linkText}
            {linkWithIcon && (
              <svg
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
              </svg>
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
