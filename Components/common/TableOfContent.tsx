"use client"
import { useEffect, useState } from "react";
import classNames, { text_para_2, text_para_3 } from '@/helpers/common';
import { slugify } from '@/sanity/lib/helpers';
import React from 'react';
import useSize from "@/helpers/windowWidth";

interface TableOfContentProps {
  headings: string[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ headings }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tableOfContent,showTableOfContent]=useState(false)
  const {width}=useSize()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;

      if (target && target.tagName === "A" && target.hash) {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; 
          let targetPosition=0;
          if(width && width < 768){
             targetPosition = targetElement.offsetTop - navbarHeight +  150;

          }else{
           targetPosition = targetElement.offsetTop + navbarHeight +  420 ;

          }

          // Scroll to the target element with smooth behavior and offset
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const tocLinks = document.querySelectorAll('a[href^="#"]');
    tocLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      tocLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  });

  return (
    <> 
    {/* FOR DESKTOP */}
    <div className="bg-gray80 b w-full hidden lg:flex  overflow-hidden flex-col gap-y-4   text-white border-gray-100/60 ">
    <div className="overflow-y-auto flex flex-col gap-y-2 lg:h-[17rem] 2xl:min-h-screen">
      <p className={classNames(text_para_3, "font-semibold")}>Table of Contents</p>
      <ol
        className={classNames(
          "text-[#E5E7EB] list- flex  flex-col text-[0.9rem] 2xl:text-[1.05rem] px-1",
          "list-inside"
        )}
      >
        {headings.map((heading, index) => {
          const anchorId = slugify(heading);
          return (
            <li
              key={index}
              className={classNames(
                "w-full px-2 py-1 rounded-sm",
                selectedIndex === index ? "bg-[#079DFC4D]" : ""
              )}
            >
              <a
                href={`#${anchorId}`}
                className={classNames(
                  selectedIndex == index ?  "text-[#E5E7EB] text-[0.75rem] lg:text-[0.75rem] 2xl:text-[1rem] hover:text-blue-azure" :
                  "text-gray-400 text-[0.75rem] lg:text-[0.75rem] 2xl:text-[1rem] hover:text-blue-azure"
                )}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  </div>
  
    </>
   
  
  );
};

export default TableOfContent;
