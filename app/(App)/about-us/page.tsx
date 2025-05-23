import React from 'react'
import LandingLayout from '../layout'
import GridPicturesAbout from '@/Components/common/GridPicturesAbout'
import { HeroSection } from '@/sections/HeroSection'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import IndustryBanner from '@/Components/common/IndustryBanner';
import classNames, { section_wrapper_class, text_h1_main, text_para_main } from '@/helpers/common';
import aboutbg from "@/assets/aboutbg.webp"
//images
import Image from 'next/image';
import Timeline from '@/Components/common/Timeline';
import about1 from "@/assets/about/about1.webp"
import about2 from "@/assets/about/about2.webp"
import about3 from "@/assets/about/about3.webp"
import about4 from "@/assets/about/about4.webp"
import about5 from "@/assets/about/about5.webp"
import about6 from "@/assets/about/about6.webp"
import whatwedotoday from "@/assets/about/whatwedotoday.webp"
export const metadata={
  title:"About Us | Centrox AI – Gen AI Development Experts",
  description:"Centrox AI LLM experts with Gen AI startups, providing full-cycle AI development. We accelerate innovation, enabling them to achieve their goals faster. Book a session now!",
  alternates: {
    canonical: "https://centrox.ai/about-us",
  },
}
const page = () => {
  const data1=[
    {
      alt:"hello",
      caption:"",
      img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about4.webp"
  },
  {
    alt:"hello",
    caption:"",
    img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about2.webp"
},
{
  alt:"hello",
  caption:"",
  img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about5.webp"
},
]
const data2=[
  {
    alt:"hello",
    caption:"",
    img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about6.webp"
},
{
  alt:"hello",
  caption:"",
  img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about1.webp"
},
{
alt:"hello",
caption:"",
img:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/about3.webp"
},
]

  return (
   
<>
<div className="h-auto 2xl:min-h-screen   mt-24 ">
        <div className=' rotate-180  '>
          <Image src={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/aboutbg.webp"} width={1716} height={244} alt='background' className=' w-full h-full object-cover'></Image>
        </div>
        <section className={classNames(section_wrapper_class,"flex flex-col gap-4  !mt-0  py-10 lg:py-16")}>
             <h1 className={classNames(text_h1_main,"text-center")}>Accelerating Your Gen AI Journey</h1>
        <p className={classNames(text_para_main,"text-center mx-auto")}>At Centrox AI we envision to effectively contribute to the ongoing AI revolution, we offer our specialized services in GenAI eventually strengthening the business by delivering AI powered tailored solutions. We empower your business by plugging in our customized solution which guarantees prompt and quality results. Our experts are committed to ensure advanced AI solutions in areas such as LLM  Development, MLOps at Scale, and Data Ops for Model Quality Optimization. We are aiming to lead the AI innovation within the region through our engineered solutions which are innovative and safe.</p>
        </section>
        <div className=' '>
          <Image src={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/aboutbg.webp"} width={1716} height={244} alt='background' className=' w-full h-full object-cover'></Image>
        </div>
      </div>
      <Timeline/>
      <HeroSection isAboutPage moveToSection='solutions' imgClassName='lg:h-auto lg:w-auto' btnText='Checkout Our Work' img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/whatwedotoday.webp"} isGradientText={false} description="Today we at Centrox AI have evolved as a team of growing and reliable generative AI solution providers,  ambitious towards advancing the potential of LLM to receive the best virtues it can offer. We extend our technical expertise, guidance, and collaborated approach to ensure quality Generative AI development and deployment. We deliver solutions for healthcare, retail,real estate, fashion and more industries empowering them to achieve their goals, along with gaining a significant competitive edge." heading='What We Do Today?'/>
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
