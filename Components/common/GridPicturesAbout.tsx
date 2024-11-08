import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common'
import React from 'react'
import { Button } from '../Button.js/button'
import sectionImg from "@/assets/aboutusbackground.webp";
import Image from 'next/image';
import { VerticalCarousal } from './VeritcalCarousal';
import dummyDisplay from "@/assets/dummyDisplay.webp";
import mhbn from "@/assets/mhbnimg.png"
import adeelimg from "@/assets/adeelImg.png"
import industrypic1 from "@/assets/industry1.webp"
import arrow from "@/assets/RightArrow.svg"
interface Props{
    headingText?:string,
    paraText?:string,
    btnText?:string
    reverse?:boolean
}
function GridPicturesAbout({headingText,paraText,btnText,reverse}:Props) {
    const data=[
      {
        alt:"hello",
        caption:"",
        img:mhbn
    },
    {
      alt:"hello",
      caption:"",
      img:adeelimg
  },{
    alt:"hello",
    caption:"",
    img:industrypic1
},{
  alt:"hello",
  caption:"",
  img:mhbn
}
  ]
  return (
    <section className={classNames(section_wrapper_class,"min-h-[70vh] flex flex-col mx-auto items-center lg:flex-row gap-12",reverse ? "lg:flex-row-reverse" : "")}>
        
    <div className="flex flex-col gap-8 w-full">
     {headingText &&  <h2 className={classNames(text_h2_class)}>
        {headingText}
      </h2>}
      {paraText&&<p className={classNames(text_para_2)}>
        {paraText}
      </p>}
      {/* <p className={sectionDiscriptions}>
        Proin faucibus nibh et sagittis a. Lacinia purus ac amet
        pellentesque aliquam enim.
      </p> */}
     {btnText && <Button  Icon={arrow} iconClassName='!-mt-1' isLefticon={false}  className='!w-[50%]' content={btnText}/>}
    </div>
    <VerticalCarousal data={data} />
    {/* <div className="w-full flex justify-center lg:justify-end items-center">
      <Image src={sectionImg} alt="section img" className="w-4/5" />
    </div> */}
  </section>  )
}

export default GridPicturesAbout
