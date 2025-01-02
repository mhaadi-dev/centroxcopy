"use client"
import { useEffect, useState } from "react";
import classNames, { text_para_2, text_para_3 } from '@/helpers/common';
import { slugify } from '@/sanity/lib/helpers';
import React from 'react';

interface TableOfContentProps {
  headings: string[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ headings }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;

      if (target && target.tagName === "A" && target.hash) {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Adjust 'nav' selector if needed
          const targetPosition = targetElement.offsetTop - navbarHeight + 48; // You can adjust the +48 based on your offset need

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
    <div className="bg-gray-800/80 border-2 w-full flex  overflow-hidden flex-col gap-y-4 py-10 px-4 text-white border-gray-100/60 rounded-xl">
    <div className="overflow-y-auto  flex flex-col gap-y-4 lg:h-[19rem] 2xl:min-h-screen">
      <p className={classNames(text_para_2, "font-semibold")}>Table of Contents</p>
      <ol
        className={classNames(
          "text-[#E5E7EB] list-decimal flex  flex-col text-[0.9rem] 2xl:text-[1.05rem]",
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
                  "text-[#E5E7EB] text-[0.75rem] lg:text-[0.75rem] 2xl:text-[1.1rem] hover:text-blue-azure"
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
  
  );
};

export default TableOfContent;
