import classNames, { section_wrapper_class, text_h1_main, text_para_2 } from '@/helpers/common'
import Image from 'next/image'
import React from 'react'
import dotsbg from "@/assets/customchatbotbg.webp"

interface Props{
    headingText?:string,
    paraText?:string,
    includeDots?:boolean
}

const BlogHeader = ({ headingText, paraText, includeDots }: Props) => {
    return (
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 object-cover z-[1]">
          <Image src={dotsbg} alt="background" layout="fill" objectFit="cover" />
        </div>
        <section className={classNames(section_wrapper_class, "relative z-[1] pb-24   mt-8   flex flex-col gap-4  justify-center items-center")}>
          {headingText && <h1 className={classNames(text_h1_main)}>{headingText}</h1>}
          {paraText && <p className={classNames(text_para_2,"text-center")}>{paraText}</p>}
        </section>
      </header>
    );
  };
  
  export default BlogHeader;
