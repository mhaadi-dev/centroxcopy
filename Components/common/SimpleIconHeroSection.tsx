import classNames, { section_wrapper_class, text_h2_class, text_para_2, text_para_3 } from '@/helpers/common'
import Image from 'next/image'
import React from 'react'
import dummyDisplay from "@/assets/dummyDisplay.webp"
import Icon1 from "@/assets/Icon-1.webp"
import serviceherobg from "@/assets/Servicebg.webp"
import checker from "@/assets/checker.webp"
import { reverse } from 'dns'
interface Props{
    headingText?:string
    paraText?:string
    Icon?:any
    image?:any
    reverse?:boolean
    bulletPoints?:boolean
}
const SimpleIconHeroSection = ({headingText,paraText,Icon,image,reverse,bulletPoints}:Props) => {
  return (
    <section className='relative py-10 sm:py-0 '>
    <Image src={serviceherobg} alt='background' className={classNames('absolute right-0 top-0',reverse? "!left-0":"right-0")}></Image>
    <section className={classNames(section_wrapper_class," flex flex-col lg:flex-row h-auto lg:min-h-screen  items-center gap-8 justify-between",reverse? "flex-col-reverse lg:!flex-row-reverse":"lg:flex-row")}>
        <div className="w-full lg:w-1/2 z-[1] flex flex-col h-full gap-y-3 ">
        <Image src={Icon1} alt="Icon"></Image>
        {headingText&& <h2 className={classNames(text_h2_class)}>{headingText}</h2>}
       {paraText && <p className={classNames(text_para_2)}>{paraText} </p>}
       {bulletPoints && <ul className='flex  flex-col gap-y-4 mt-6'>
        <li className='flex  gap-x-4 items-start'>
            <Image src={checker} alt="checkicon"></Image>
            <p className={classNames(text_para_2)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</p>
        </li>
        <li className='flex gap-x-4 items-start'>
            <Image src={checker} alt="checkicon"></Image>
            <p className={classNames(text_para_2)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</p>
        </li>
        <li className='flex gap-x-4 items-start'>
            <Image src={checker} alt="checkicon"></Image>
            <p className={classNames(text_para_2)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</p>
        </li>
        <li className='flex gap-x-4 items-start'>
            <Image src={checker} alt="checkicon"></Image>
            <p className={classNames(text_para_2)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</p>
        </li>
    
       
       </ul>}
        </div>
        <div className={classNames("w-full lg:w-1/2 z-[1]   flex justify-center lg:justify-end",reverse?"lg:!justify-start":"")}> <Image src={dummyDisplay} alt="image"></Image> </div>
</section> 
    </section>
   
  )
}

export default SimpleIconHeroSection
