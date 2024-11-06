import classNames, { section_wrapper_class, text_h2_class, text_h3_class, text_para_2, text_para_3 } from '@/helpers/common'
import React from 'react'
import dummyDisplay from "@/assets/dummyDisplay.webp"
import Image from 'next/image'
interface Props{
    heading?:string
    paraText?:string,
    date?:string
    name?:string
    product?:string
    duration?:string
}
const BlogBanner = ({heading,paraText,date,name,product,duration}:Props) => {
  return (
    <section className={classNames(section_wrapper_class,"bg-gradient-to-r p-6 lg:p-10 from-[#079DFC] to-[#72EFDD] rounded-2xl")} >
      <div className="flex flex-col-reverse lg:flex-row gap-6 items-center justify-between ">
        <div className="w-full lg:w-1/2">
            { heading && <h2 className={classNames(text_h3_class,"text-gray-900")}>{heading}</h2>}
            {paraText && <p className={classNames(text_para_3,"text-gray-800")}>{paraText}</p>}
            <div className="flex gap-y-2 gap-x-6 lg:gap-6 flex-wrap">
               {date && <p>{date}</p>}
                {name && <p>{name}</p>}
               {product && <p className='font-semibold'>{product}</p>}
               { duration && <p>{duration}</p>}
            </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end"><Image src={dummyDisplay} alt='image'></Image></div>
      </div>
    </section>
  )
}

export default BlogBanner
