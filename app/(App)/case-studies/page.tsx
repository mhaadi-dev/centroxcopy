import React from 'react'
import LandingLayout from '../layoutPage'
import classNames, { section_wrapper_class } from '@/helpers/common'
import { HeroSection } from '@/sections/HeroSection'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import imageBG from "@/assets/ImageBG.webp"
import imageBG2 from "@/assets/Image BG2.webp"
import CommonDisplayCardsGrid from '@/Components/common/CommonDisplayCardsGrid';
import servicebg from "@/assets/Servicebg.webp"
import IndustryBanner from '@/Components/common/IndustryBanner';
import LandingContactSection from '@/views/LandingPageViews/LandingContactSection';
import SearchResultComponent from '@/Components/common/SearchResultComponent';


const page = () => {
    const benefitsData = [
        { 
         headerData:{
             tagText: "",
             headingText: "More Case Studies",
             para1Text:
               "Company Updates and Technology Updates",
             heading2Text: "",
             para2Text:""
         },
         data: [{
           icon: "",
           heading: "Deep Understanding",
           description:
             "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Personalized Engagement",
           description:
             "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Seamless Integration",
           description:
             "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Scalability & Availability",
           description:
             "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Data-Driven Insights",
           description:
             "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Brand Consistency",
           description:
             "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
           linkText: "",
           linkWithIcon: true,
         }],
         caption:"",
         btnText:""
     
     }
       ];
  return (
    <LandingLayout subNav={true} >
      
        <section className="">
        <HeroSection heroClassName=''  bgimage1={servicebg} tags={true} divider={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
        <HeroSection bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage2={imageBG} heroClassName='h-auto lg:min-h-[90vh] !pt-4' tags={true} divider={true} reverse={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
        <HeroSection bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage1={imageBG2} heroClassName='h-auto lg:min-h-[80vh] !pt-4' tags={true} divider={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
        <HeroSection bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage2={imageBG} heroClassName='h-auto lg:min-h-[80vh] !pt-4' tags={true} divider={true} reverse={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>

        </section>
        <CommonDisplayCardsGrid tags={true} caseStudyCards={true} data={benefitsData} />
        <IndustryBanner heading="Good Stuff is all here" description="We will help you develope what ever you desire in your AI developement. This is a place holder" isBooking btnText="Talk to Our AI Expert" />
        <LandingContactSection/>
    </LandingLayout>
  )
}

export default page
