import SectionTag from '@/Components/common/SectionTag'
import { TabCarousel } from '@/Components/common/TabCarousel'
import React from 'react'

import menubars from "@/assets/barsmenu.webp";

import Icon from "@/assets/Icon.webp";
import Icon2 from "@/assets/Icon-1.webp";
import Icon3 from "@/assets/Icon-3.webp";
import Icon4 from "@/assets/Icon-4.webp";
import Icon5 from "@/assets/Icon-5.webp";
import Icon6 from "@/assets/Icon-6.webp";
import Icon7 from "@/assets/Icon-7.webp";
import Icon8 from "@/assets/Icon-8.webp";
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common';

const LandingServicesSection = (props:any) => {
  return (
    <>
    <div className='sr-only'>Centrox services</div>
    <section id="services" aria-label='landing services' className={classNames(section_wrapper_class,"")}>
       
        <section aria-label="Centrox Services" className="text-white flex flex-col gap-y-[1rem] ">
        <SectionTag text='Services' className="!justify-start"/>
        {props.heading && <h2 className={classNames(text_h2_class)}>
        {props.heading}
        </h2>}
        {props.description && <p className={classNames(text_para_2,"w-[80%]")}>
           {props.description}
        </p>}
      </section>
      <TabCarousel cardsData={props?.cardsData} isCardLayout={true} headerTabs={props?.servicesTabs}/>
    </section>
    </>
    
  )
}

export default LandingServicesSection
