import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import TableOfContent from "./TableOfContent";
import MainBlogContent from "./MainBlogContent";
import BlogSideBars from "./BlogSideBars";
import { PortableText } from "@portabletext/react";

const BlogContentSection = ({ content,authorInfo,headings }: any) => {


  return (
    <section className={classNames(section_wrapper_class, "flex  lg:min-h-screen items-start justify-between ")}>
      <div className="w-[23%] hidden lg:flex flex-col  max-h-  gap-y-4 bottom-0 sticky top-[6.5rem] ">
        <SocialIconsContainer />
      
        <TableOfContent headings={headings} />
      </div>
    
      <div className="w-full bg-blue-30   lg:w-[52.5%]">
      
           <MainBlogContent headings={headings||[]} authorInfo={authorInfo} data={content} />
     
      </div>
      <BlogSideBars />
    </section>
  );
};

export default BlogContentSection;
