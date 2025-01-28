import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import classNames, { section_wrapper_class, text_h1_main, text_h2_class, text_h3_class, text_para_2, text_para_3 } from '@/helpers/common'
import revenue from "@/assets/revenue.svg"
// import mhbn from "@/assets/mhbnimg.webp"
import avatar from "@/assets/testimonial-avatar.jpg"
interface Props{
    headingText?:string
    heading2Text?:string,
    para1Text?:string,
    para2Text?:string,
    review?:string
    image?:any,
    name?:string,
    position?:string,
    revenue?:string
}
const WhatOurClientSay = (props:Props) => {
  return (
    <section className={classNames(section_wrapper_class,"")}>
    <SectionHeader headingText={props?.headingText} para1Text={props.para1Text} para2Text={props?.para2Text} heading2Text={props.heading2Text} />
    <div className="flex  flex-col-reverse pt-8  lg:flex-row gap-8 border-2 rounded-2xl" style={{
        border:"1px solid rgba(6, 119, 230, 0.8)",
        background:"radial-gradient(270% 67.74% at 20% 100%, rgba(7, 157, 252, 0.18) 0%, rgba(4, 93, 150, 0.06) 100%), #060606"
    }}>
        <div className="w-full   lg:w-1/3 mt-2 lg:mt-6 relative  flex items-center">
            <Image className="pr-6 object-cover  mt-auto lg:pr-0 rounded-bl-2xl" src={revenue} alt="background">
            </Image>
            <div className='z-[5]  absolute left-8 lg:left-14 bottom-[4rem] lg:bottom-[6.5rem]'>
                  <p className={classNames(text_h1_main)}>{props?.revenue}</p>
            <p className={classNames(text_para_2)}>Revenue Increase</p> 
            </div>
         
            </div>
        <div className="w-full h-full px-4 py-4 lg:pt-4 lg:pb-10 lg:w-2/3  flex flex-col gap-y-3">
            {props?.review && <p className={classNames(text_para_2)}>{props?.review}</p>}
            <div className="flex flex-col gap-y-2">
                <Image width={75} height={75} className="rounded-xl" src={avatar} alt="client"></Image>
                <div className="">
                    {props?.name && <p className={classNames(text_para_3,"font-semibold")}>{props.name}</p>}
                    {props?.position && <p className={classNames(text_para_3)}>{props?.position}</p>}
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default WhatOurClientSay
