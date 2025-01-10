"use client";
import React, { useState } from "react";
import AppLogo from "@/assets/LogoWhite.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SearchResultComponent from "../common/SearchResultComponent";
import Link from "next/link";
import { reSlugify, slugify } from "@/sanity/lib/helpers";

interface subNavItemList {
  category_name?: string;
  category_meta_title?:string,
  category_meta_description?:string
}

interface subNavItems {
  subNavTitle?: string;
  subItems?: subNavItemList[];
  
}

interface Props {
  searchView?: (isSearch: boolean) => void;
  title?: string;
  navItems?: any[];
  imageLink?:string
}

const SubnavBar = ({ searchView,imageLink="", title, navItems = [] }: Props) => {
  const router = useRouter();
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const pathname=usePathname()

  const toggleSearchComponent = (val: boolean) => {
    setShowSearchComponent(val);
  };

  return (
    <>
      <nav className="hidden xl:flex justify-center   z-20 mt-24 left-0 py-4 sm:h-16 items-center w-full bg-gray-900">
        <div className="flex items-center justify-between w-[90%] mx-[1.5rem] 2xl:mx-[15rem] max-w-[2500px] relative">
          <div className="flex w-full items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <Image
                src={AppLogo}
                alt="Logo"
                priority={true}
                loading="eager"
                className="w-[5rem] sm:w-[5.7rem]  cursor-pointer"
                onClick={() => router.push(`${imageLink}`)}
              />
              {title && (
                <h3 className="text-blue-azure font-heading text-[1.1rem]"> <Link href={`/${title?.toLowerCase()}` || "/"}>{title}</Link></h3>
              )}
            </div>
            <ul className="w-2/3 gap-x-6 text-[#E5E7EB] flex">
              {navItems.length > 0
                ? navItems.map((item, index) => (
                    <li
                      key={index}
                      className="font-medium relative cursor-pointer hover:text-blue-azure transition-all"
                      onClick={() =>
                        setClickedIndex(clickedIndex === index ? null : index)
                      }
                    >
                      <Link href={`/blogs/${slugify(item?.category_name)}`} className="capitalize">
                       {reSlugify(item?.category_name||'')}
                      </Link>
                     
                      {/* {item?.category_name}
                      {clickedIndex === index && (
                        <div className="bg-gray-900 absolute top-10 left-0 shadow-lg rounded-md z-50">
                          {item.subItems?.map((subitem, subIndex) => (
                            <Link
                              key={subIndex}
                              className="text-[#E5e7eb] w-full block px-4 py-2 hover:bg-gray-700 transition-colors"
                              href={subitem.link || ""}
                            >
                              {subitem.subTitle}
                            </Link>
                          ))}
                        </div>
                      )} */}
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <button
            onClick={() => {
              if(pathname.startsWith("/case-studies")){
                 router.push("/case-studies/search");
              }else if(pathname.startsWith("/blogs")){
                router.push("/blogs/search");
              }
             
            }}
            className="text-white p-2 rounded-full bg-gray-700/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                fill="white"
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {showSearchComponent && (
        <SearchResultComponent setShowSearch={toggleSearchComponent} />
      )}
    </>
  );
};

export default SubnavBar;
