import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import TableOfContent from "./TableOfContent";
import MainBlogContent from "./MainBlogContent";
import BlogSideBars from "./BlogSideBars";
import { PortableText } from "@portabletext/react";
import ContentAndShare from "./ContentAndShare";

const BlogContentSection = ({ content,authorInfo,headings }: any) => {


  return (
    <section className={classNames(section_wrapper_class, "flex  lg:min-h-screen items-start justify-between ")}>
      <div className="w-[20%] hidden lg:flex flex-col  max-h-  bottom-0 sticky top-[6.5rem] ">
        <SocialIconsContainer />
      <hr className="border-1 border-white/20 mb-6 2xl:mb-4"/>
        <TableOfContent headings={headings} />
      </div>
    
      <div className="w-full lg:mt-0 lg:pl-4 lg:pr-6  lg:w-[60.5%] ">
        
           <MainBlogContent headings={headings||[]} authorInfo={authorInfo} data={content} />
           
      </div>
      <BlogSideBars />
    </section>
  );
};

export default BlogContentSection;
