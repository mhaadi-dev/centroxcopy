import classNames, { text_para_2, text_para_3 } from '@/helpers/common';
import { slugify } from '@/sanity/lib/helpers';
import React from 'react';

interface TableOfContentProps {
  headings: string[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ headings }) => {

  return (
    <div className='bg-gray-800/80 border-2 w-full flex overflow-y-auto min-h-screen flex-col gap-y-4 py-10 px-5 text-white border-gray-100/60 rounded-xl h-full'>
      <p className={classNames(text_para_2, "font-semibold")}>Table of Contents</p>
      <ol className={classNames("text-[#E5E7EB] px-6 list-decimal flex flex-col justify-center text-[0.9rem] 2xl:text-[1.05rem]")}>
        {headings.map((heading, index) => {
          const anchorId = slugify(heading); 
          return (
            <li key={index} className='w-full'>
              <a href={`#${anchorId}`}
               className={classNames("text-[#E5E7EB] text-[0.75rem]  lg:text-[0.75rem] 2xl:text-[1.1rem] focus:text-blue-azure hover:text-blue-azure my-1")}
               >
                {heading}
              </a>
            </li>
          );
        })}
        
      </ol>
    </div>
  );
};

export default TableOfContent;
