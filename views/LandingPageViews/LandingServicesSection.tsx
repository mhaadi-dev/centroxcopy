import SectionTag from '@/Components/common/SectionTag'
import { TabCarousel } from '@/Components/common/TabCarousel'
import React from 'react'


import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common';

const LandingServicesSection = (props:any) => {
  return (
    <>
    <div className='sr-only'>Centrox services</div>
    <section id="services" aria-label='landing services' className={classNames(section_wrapper_class,"")}>
       
        <section aria-label="Centrox Services" className="text-white flex flex-col gap-y-[0.9rem] ">
        <SectionTag text='Services' className=""/>
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
