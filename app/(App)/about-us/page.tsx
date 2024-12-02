import React from 'react'
import LandingLayout from '../layout'
import GridPicturesAbout from '@/Components/common/GridPicturesAbout'
import { HeroSection } from '@/sections/HeroSection'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import IndustryBanner from '@/Components/common/IndustryBanner';
import classNames, { section_wrapper_class, text_h1_main, text_para_main } from '@/helpers/common';
import aboutbg from "@/assets/aboutbg.webp"

import Image from 'next/image';
import Timeline from '@/Components/common/Timeline';
import about1 from "@/assets/about/about1.webp"
import about2 from "@/assets/about/about2.webp"
import about3 from "@/assets/about/about3.webp"
import about4 from "@/assets/about/about4.webp"
import about5 from "@/assets/about/about5.webp"
import about6 from "@/assets/about/about6.webp"
import whatwedotoday from "@/assets/about/whatwedotoday.webp"
import CommonDisplayCardsGrid from '@/Components/common/CommonDisplayCardsGrid';
import Icon39 from "@/assets/Icon-39.webp";
const page = () => {
  const data1=[
    {
      alt:"hello",
      caption:"",
      img:about1
  },
  {
    alt:"hello",
    caption:"",
    img:about2
},
{
  alt:"hello",
  caption:"",
  img:about3
},
]
const data2=[
  {
    alt:"hello",
    caption:"",
    img:about4
},
{
  alt:"hello",
  caption:"",
  img:about5
},
{
alt:"hello",
caption:"",
img:about6
},
]

  return (
   
<>
<div className="h-auto 2xl:min-h-screen   mt-24 ">
        <div className=' rotate-180  '>
          <Image src={aboutbg} alt='background' className=' w-full h-full object-cover'></Image>
        </div>
        <section className={classNames(section_wrapper_class,"flex flex-col gap-4  !mt-0  py-10 lg:py-16")}>
             <h1 className={classNames(text_h1_main,"text-center")}>Accelerating Your Gen AI Journey</h1>
        <p className={classNames(text_para_main,"text-center mx-auto")}>Centrox AI is a full-cycle AI development company on a mission to augment startups that are moving the innovation needle in Gen AI. We want to enable you to focus on your core product and achieve your business goals faster while we take over your Gen AI development life cycle. We want to put our AI technical depth, collaborative approach, and commitment to delivering to good use by helping you out.</p>
        </section>
        <div className=' '>
          <Image src={aboutbg} alt='background' className=' w-full h-full object-cover'></Image>
        </div>
      </div>
      <Timeline/>
      <HeroSection moveToSection='solutions' imgClassName='lg:h-auto lg:w-auto' btnText='Checkout Our Work' img={whatwedotoday} isGradientText={false} description="Today, Centrox is at the forefront of the Generative AI solutions industry. We collaborate with ambitious startups that are pushing the boundaries of what's possible with LLMs. We provide the technical expertise, strategic guidance, and collaborative approach needed to navigate the complexities of Generative AI development and deployment. Our solutions span various industries, including healthcare, fashion, real estate, and more, empowering startups to achieve their AI goals and gain a competitive edge." heading='What We Do Today: Augmenting Gen AI Startups'/>
      <GridPicturesAbout linkText="/team" data={data1} headingText='Our Culture & Values' paraText="We're a team of driven individuals who thrive on technical challenges, continuous learning, and open collaboration. We embrace the entrepreneurial spirit and understand the fast-paced nature of startups. Our commitment to transparency, data-driven decision-making, and delivering tangible results sets us apart."
      btnText='Meet the Team'
      />
      <GridPicturesAbout moveToSection='services' data={data2} linkText="/" headingText='Our Expertise' paraText="Our team consists of experienced AI engineers and researchers with deep knowledge of LLM architecture, training, optimization, and deployment. We stay at the cutting edge of AI research, actively contributing to the open-source community and ensuring our clients benefit from the latest advancements in Generative AI."
      btnText='Explore Our Services' reverse
      />
      <IndustryBanner btnText="Book 1:1 Session" isBooking heading="Let's Discuss Your Vision." description="Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment."/>
</>
      

  
  )
}

export default page
