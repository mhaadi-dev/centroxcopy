import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common'
import React from 'react'
import { Button } from '../Button.js/button'

import { VerticalCarousal } from './VeritcalCarousal';

import arrow from "@/assets/RightArrow.svg"
import Link from 'next/link';
interface Props{
    headingText?:string,
    paraText?:string,
    btnText?:string
    reverse?:boolean
    data?:any,
    linkText?:string
    moveToSection?:string
}
function GridPicturesAbout({headingText,paraText,btnText,reverse,data,linkText,moveToSection=""}:Props) {
 
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
     {btnText &&  <> 
     <Link href={linkText || ""}>
      <Button moveToSection={moveToSection}  Icon={arrow} iconClassName='!-mt-1' isLefticon={false}  className='w-[70%] lg:!w-[60%]' content={btnText}/>
     </Link>
      
     </>  }
    </div>
    <VerticalCarousal data={data} />
    {/* <div className="w-full flex justify-center lg:justify-end items-center">
      <Image src={sectionImg} alt="section img" className="w-4/5" />
    </div> */}
  </section>  )
}

export default GridPicturesAbout
