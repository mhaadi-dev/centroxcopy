import classNames, { section_wrapper_class, text_h1_main, text_para_2 } from '@/helpers/common'
import React from 'react'
import dummyDisplay from "@/assets/dummyDisplay.webp"
import Image from 'next/image'
interface Props{
    heading?:string
    para1Text?:string
    image?:any
}
const CaseStudyBanner = ({heading,para1Text,image}:Props) => {
  return (
    <section className={classNames(section_wrapper_class,"text-center pt-16 lg:pt-28 flex flex-col justify-center items-center gap-y-4 lg:gap-y-6")}>
     {heading && <h1 className={classNames(text_h1_main)}>{heading}</h1>}
     {para1Text && <p className={classNames(text_para_2,"w-full sm:w-[60%] mx-auto")}>{para1Text}</p>}
     <Image className='w-full' src={dummyDisplay} alt="image"></Image>
    </section>
  )
}

export default CaseStudyBanner
