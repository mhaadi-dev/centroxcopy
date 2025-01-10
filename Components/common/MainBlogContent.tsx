import classNames, { text_h2_class, text_para_3 } from "@/helpers/common";
import React from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import Image from "next/image";
import dummyDisplay from "@/assets/dummyDisplay.webp";

import { PortableText } from "next-sanity";
import { PortableComponent } from "./PortableText";
import Link from "next/link";
import TableOfContent from "./TableOfContent";
import ContentAndShare from "./ContentAndShare";
const MainBlogContent = ({ data, authorInfo,headings }: any) => {

  return (
    <section className=" relative">
    <div className=" text-white  px-2 w-full relative   ">
   
      {data ? (
        <PortableText
          value={data}
          //@ts-ignore
          components={PortableComponent}
        />
      ) : null}
    
        <div className="hidden lg:block w-5/6 lg:w-2/5">
            <SocialIconsContainer className="border-none !bg-gray-800/0" />
        </div>
      
       
         <ContentAndShare headings={headings || []}/> 
        
      
    </div>
  
    <div className=" flex gap-4 items-start mt-10 lg:mt-4 text-[#E5E7EB]">
          {authorInfo?.author_image && (
            <div className="w-2/4 lg:w-1/4  rounded-full">
              <Image
                className="w-full rounded-full aspect-square object-cover flex items-center justify-center"
                src={authorInfo?.author_image}
                alt="user"
                width={200}
                height={200}
              ></Image>
            </div>
          )}

          <div className="w-full">
            {authorInfo?.name && (
              <h3 className={classNames("font-semibold uppercase underline underline-offset-4 hover:text-blue-azure")}>
                <Link href={authorInfo?.linkedin || ""}>{authorInfo?.name}</Link>
              </h3>
            )}
            {authorInfo?.author_description && (
              <p className={classNames(text_para_3,"lg:text-justify")}>
                {authorInfo?.author_description}
              </p>
            )}
          </div>
        </div>
    </section>
    
  );
};

export default MainBlogContent;
