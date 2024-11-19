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
const challengeData = [
  {
    headerData: {
      tagText: "Challenges",
      headingText: "The Challenge of Generic LLMs",
      para1Text:
        "Are you pushing the boundaries of what's possible with AI, but pre-trained models are holding you back?",
      para2Text:
        "You're not alone. Many startups are facing the limitations of generic LLMs.",
    },
    data: [
      {
        icon: null,
        heading: "Domain-Speum-pagecific Challenges",
        description:
          "Generic models often struggle with industry-specific jargon, terminology, and nuanced context, leading to inaccurate or irrelevant outputs. This can severely impact the user experience and hinder the effectiveness of your AI applications.",
        linkText: "",
        linkWithIcon: true,
        colSpan:2
      },
      {
        icon: Icon39,
        heading: "Performance Bottlenecks",
        description:
          "Large pre-trained models can be computationally expensive and slow, making them impractical for real-time applications or deployment on resource-constrained environments. This can lead to delays, increased costs, and frustrated users.",
        linkText: "",
        linkWithIcon: true,
        colSpan:1
      },
      {
        icon: Icon39,
        heading: "Data Scarcity",
        description:
          "Training effective LLMs typically requires vast amounts of high-quality, labeled data, which can be costly and time-consuming to acquire. This can significantly slow down your development process and limit the potential of your AI solutions.",
        linkText: "",
        linkWithIcon: true,
        colSpan:1
      },
      {
        icon: null,
        heading: "Bias & Fairness",
        description:
          "Pre-trained models can inherit biases from their training data, leading to unfair or discriminatory outputs. This can have serious ethical and legal implications for your business.",
        linkText: "",
        linkWithIcon: true,
        colSpan:2
      },
    ],
    caption:
      "Centrox AI understands these pain points. We have the expertise to build custom LLMs that overcome these limitations and deliver exceptional results for your specific needs.",
    btnText: "Schedule A Discussion",
  },
];
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
      <CommonDisplayCardsGrid resizeableCardsLayout  data={challengeData} gridCols={3}/>
      <Timeline/>
      <HeroSection moveToSection='solutions' btnText='Checkout Our Work' img={whatwedotoday} isGradientText={false} description="Today, Centrox is at the forefront of the Generative AI solutions industry. We collaborate with ambitious startups that are pushing the boundaries of what's possible with LLMs. We provide the technical expertise, strategic guidance, and collaborative approach needed to navigate the complexities of Generative AI development and deployment. Our solutions span various industries, including healthcare, fashion, real estate, and more, empowering startups to achieve their AI goals and gain a competitive edge." heading='What We Do Today: Augmenting Gen AI Startups'/>
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
