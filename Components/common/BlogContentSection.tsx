"use client"
import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useEffect, useState } from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import TableOfContent from "./TableOfContent";
import MainBlogContent from "./MainBlogContent";
import BlogSideBars from "./BlogSideBars";
import { PortableText } from "@portabletext/react";

const BlogContentSection = ({ content,authorInfo }: any) => {
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    // Function to extract headings from Portable Text content
    const extractHeadings = (content: any) => {
      const headingList: string[] = [];
      const headingStyles = /h[2]/; // Matches h2, h3, h4, h5, h6
    
      content?.forEach((block: any) => {
        if (block._type === "block" && block.style && headingStyles.test(block.style)) {
          headingList.push(block.children[0]?.text || "");
        }
      });
    
      setHeadings(headingList);
    };
    
    extractHeadings(content);
  }, [content]);

  return (
    <section className={classNames(section_wrapper_class, "flex  lg:min-h-screen items-start justify-between ")}>
      <div className="w-[25%] hidden lg:flex flex-col  max-h-  gap-y-4 bottom-0 sticky top-[6.5rem] ">
        <SocialIconsContainer />
      
        <TableOfContent headings={headings} />
      </div>
      <div className="w-full bg-blue-30  lg:w-[48%]">
           <MainBlogContent authorInfo={authorInfo} data={content} />
     

      </div>
      <BlogSideBars />
    </section>
  );
};

export default BlogContentSection;
