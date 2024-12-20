import classNames, { text_para_3 } from "@/helpers/common";
import { slugify } from "@/sanity/lib/helpers";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import test from "@/assets/Test Design.png"

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
}
const CommonCard = ({
  image,
  title,
  category,
  date,
  subdescription = "",
  tags = [],
  linkWithIcon,
  linkText,
  link,
  isSearchResult = false,
  label = "",
  duration = "",
  name = "",
  colSpan = 0
}: Props) => {
  return (
    <div
      className={classNames(
        "max-w-  mx-auto  flex flex-col h-full   justify-center    hover:bg-[#079DFC1A] transition-colors ease-in px-[.9rem]  lg:px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer ",
        isSearchResult
          ? "flex-col   justify-between  items-start lg:!flex-row max-w-full gap-2 lg:gap-8 "
          : "flex-col",
        colSpan == 2 ? "col-span-1 lg:col-span-2" : "col-span-1"
      )}
    >
      {image && (
        <Image
          src={image}
          loading="lazy"
          className={classNames(
            " w-[610px] h-[320px] my-4 ",
            isSearchResult ? "w-full  lg:!w-1/4 h-[60%]" : "w-full"
          )}
          width={610}
          height={320}
          alt="img-alt"
        />
      )}
      <div className=" h-  w-full">
        <div className="flex items-center gap-x-3">
          {label && (
            <p className={classNames(text_para_3, "text-blue-azure")}>
              {label}
            </p>
          )}
          {duration && <p className={classNames(text_para_3)}>{duration}</p>}
        </div>
       {isSearchResult ?<h2 className="font-semibold my-2 lg:my-4 text-[1rem] sm:text-[1.5rem] text-white">
          {title ||
            ""}
        </h2>:<h4 className="font-semibold my-2 lg:my-4 text-[1rem] sm:text-[1.5rem] text-white">
          {title ||
            ""}
        </h4>}
        {subdescription && (
          <p className={classNames(text_para_3, "my-2")}>{subdescription}</p>
        )}
        {tags?.length > 0 && (
          <section
            aria-label="centrox case studies tags"
            className=" w-full flex-wrap flex justify items-center gap-4 my-4 lg:my-6"
          >
            {tags?.map((tag:string)=>{
              return   <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.5rem] text-white  text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] ">
               {tag}
            </div>
            })}
          
        
          </section>
        )}

        <div
          aria-label="blog-card-footer"
          className={classNames(
            "w-full flex items-center justify-start gap-x-6 mt-auto ",
            category || date || name ? "" : ""
          )}
        >
          {name && <p className="text-gray-500 font-semibold">{name}</p>}
          {category && (
            <p className="text-blue-azure font-semibold text-start ">
              {category}
            </p>
          )}
          {date && (
            <p className="text-gray-500 font-semibold ">
              {new Date(date).toLocaleDateString()}
            </p>
          )}
        </div>

        {linkText && (
          <Link
          href={`${link}`} 
            className="text-[#E5E7EB] text-[0.7rem] lg:text-[1.1rem] my-3  flex items-center gap-2 hover:text-blue-azure"
          >
            {linkText||""}
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
