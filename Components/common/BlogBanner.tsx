"use client";
import classNames, {
  section_wrapper_class,
  text_h2_class,
  text_h3_class,
  text_para_2,
  text_para_3
} from "@/helpers/common";
import React from "react";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { space } from "postcss/lib/list";
import Link from "next/link";
import test from "@/assets/Test Design.svg";
import { reSlugify, slugify } from "@/sanity/lib/helpers";
interface Props {
  heading?: string;
  paraText?: string;
  date?: string;
  name?: string;
  product?: string;
  duration?: string;
  className?: string;
  banner_image?:any,
  category?:string,
  label?:string,
  id?:string,
  showReadLink?:boolean,
  alt?:string,
  isH2?:boolean,
  isSpan?:boolean
}
const BlogBanner = ({
  heading,
  paraText,
  date,
  name,
  product,
  duration,
  className,
  banner_image,
  category,label,
  id,
  isSpan=false,
  alt,
  isH2=false,
  showReadLink=true
}: Props) => {
  const pathname = usePathname();
  // console.log("Path",pathname)
  let breadcrumbsPath = pathname.split("/").map((path) => {
    return path
      .split("-")
      .map((path) => path[0]?.toUpperCase() + path.slice(1));
  });

  return (
    <Link href={!showReadLink ? "":  `/blogs/${slugify(category)}/${slugify(label)}`}  >
      <section
      className={classNames(
        section_wrapper_class,
        "bg-gradient-to-r p-6 lg:p-10 from-[#079DFC] to-[#72EFDD] rounded-2xl",
        className
      )}
    >
      <div className="flex items-center my-2  gap-x-2 text-gray-900 hover:text-black">
        {breadcrumbsPath.slice(1).map((path, index) => {
          return (
            <>
              {index == 0 ? (
                <Link
                  href={"/blogs"}
                  className={classNames(
                    "underline text-[0.65rem] lg:text-[1rem] list-none",
                    index + 1 == breadcrumbsPath.slice(1).length &&
                      "font-semibold"
                  )}
                >
                  {path.join(" ")}{" "}
                </Link>
              ) : (
                <Link href={index==1?`/blogs/${slugify(path.join(" "))}`:""}
                  className={classNames(
                    "underline text-[0.65rem] lg:text-[1rem] list-none",
                    index+1==breadcrumbsPath.slice(1).length && "pointer-events-none",
                    index + 1 == breadcrumbsPath.slice(1).length &&
                      "font-semibold"
                  )}
                >
                  {path.join(" ")}
                </Link>
              )}

              {index + 1 !== breadcrumbsPath.slice(1).length ? (
                <span className="text-[0.65rem] lg:text-[1rem] font-semibold no-underline">
                  /
                </span>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-6 items-start justify-between ">
        <div className="w-full lg:w-1/2">
          {heading && isH2 ?(
            <h2 className={classNames(text_h3_class, "text-gray-900")}>
              {heading}
            </h2>
          ) : heading && isSpan ?<span className={classNames(text_h3_class, "text-gray-900")}>
          {heading}
        </span>  : <h1 className={classNames(text_h3_class, "text-gray-900")}>
          {heading}
        </h1>}
          {paraText && (
            <p className={classNames(text_para_3, "text-gray-900")}>
              {paraText}
            </p>
          )}
          <div className="flex gap-y-2 gap-x-6 lg:gap-6 flex-wrap">
            {date && <p className="text-gray-900">{date}</p>}
            {name && <p className="text-gray-900">{name}</p>}
            {category && <p className={classNames("font-semibold capitalize text-gray-900")}>{reSlugify(category)}</p>}
            {duration && <p className="text-gray-800">{duration}</p>}
          </div>
      
        {   showReadLink&&  <Link
         href={ `/blogs/${slugify(category)}/${slugify(label)}`} 
            className={classNames(text_para_3,"flex text-gray-900 gap-1 items-center hover:text-blue-azure")}
          >
           Read This Blog
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
       
          </Link>}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image src={banner_image || test} alt={alt ||""} width={610} height={320} className=""></Image>
        </div>
      </div>
    </section>
    </Link>
    
  );
};

export default BlogBanner;
