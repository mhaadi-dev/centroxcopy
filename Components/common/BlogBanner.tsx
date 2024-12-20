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
interface Props {
  heading?: string;
  paraText?: string;
  date?: string;
  name?: string;
  product?: string;
  duration?: string;
  className?: string;
}
const BlogBanner = ({
  heading,
  paraText,
  date,
  name,
  product,
  duration,
  className
}: Props) => {
  const pathname = usePathname();
  console.log("Path",pathname)
  let breadcrumbsPath = pathname.split("/").map((path) => {
    return path
      .split("-")
      .map((path) => path[0]?.toUpperCase() + path.slice(1));
  });
console.log("BreadCrumb",breadcrumbsPath)
  return (
    <section
      className={classNames(
        section_wrapper_class,
        "bg-gradient-to-r p-6 lg:p-10 from-[#079DFC] to-[#72EFDD] rounded-2xl",
        className
      )}
    >
      <div className="flex items-center my-2  gap-x-2">
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
                <li
                  className={classNames(
                    "underline text-[0.65rem] lg:text-[1rem] list-none",
                    index + 1 == breadcrumbsPath.slice(1).length &&
                      "font-semibold"
                  )}
                >
                  {path.join(" ")}{" "}
                </li>
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
          {heading && (
            <h1 className={classNames(text_h3_class, "text-gray-900")}>
              {heading}
            </h1>
          )}
          {paraText && (
            <p className={classNames(text_para_3, "text-gray-800")}>
              {paraText}
            </p>
          )}
          <div className="flex gap-y-2 gap-x-6 lg:gap-6 flex-wrap">
            {date && <p>{date}</p>}
            {name && <p>{name}</p>}
            {product && <p className="font-semibold">{product}</p>}
            {duration && <p>{duration}</p>}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image src={test} alt="image"></Image>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
