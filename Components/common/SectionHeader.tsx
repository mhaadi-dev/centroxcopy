import classNames, { text_h2_class, text_h3_class, text_para_2 } from '@/helpers/common'
import React from 'react'
import SectionTag from './SectionTag'

interface Props{
  
    tagText?:string
    headingText?:string
    para1Text?:string
    addPara2?:boolean
    para2Text?:string
    heading2Text?:string

}
const SectionHeader = ({tagText="",headingText="",para1Text="",para2Text="",heading2Text=""}:Props) => {
  return (
    <section aria-label="Centrox Industries" className="text-white flex flex-col gap-y-4 ">
        {tagText && <SectionTag text={tagText}/>}
    <h2 className={classNames(text_h2_class,"text-center")}>
    {headingText}
    </h2>
    <p className={classNames(text_para_2,"w-full sm:w-[67%]  mx-auto text-center")}>
        {para1Text}
    </p>
    {heading2Text &&  <h2 className={classNames(text_h3_class,"text-center w-full lg:w-[70%] mx-auto")}>
    {heading2Text}
    </h2>}
   { para2Text && <p className={classNames(text_para_2,"w-full sm:w-[60%] mx-auto text-center")}>
    {para2Text}
    </p>}
</section>
  )
}

export default SectionHeader
