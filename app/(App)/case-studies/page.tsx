import React from 'react'
import { HeroSection } from '@/sections/HeroSection'
import imageBG from "@/assets/ImageBG.webp"
import servicebg from "@/assets/Servicebg.webp"
import IndustryBanner from '@/Components/common/IndustryBanner';
import LandingContactSection from '@/views/LandingPageViews/LandingContactSection';;



export const metadata={
	title:"Case Studies - Real-World Gen AI Solutions | Centrox AI",
	description:"Explore Centrox AI case studies showcasing successful partnerships and enterprise adoption of Generative AI, including Llama deployments and AI driven innovations.",
	alternates: {
		canonical: "https://centrox.ai/case-studies",
	  },
}

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
       const navItems = [
        {
          subNavTitle: "Artificial Intelligence",
          subItems: [
            { subTitle: "AI ethics and bias", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Machine Learning",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "ML Ops",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Generative AI",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Data Annotation",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        }
      ];
      const caseStudy1={
        heading:"Pocketmate.AI your reliable mental health support.",
        para1Text:"Pocketmate.AI offers support to individuals seeking mental-health assistance. It enables users to book sessions with professional therapists, ensuring timely and effective support.",
        image:"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/casestudies/pocketmate_research.webp"
    }
    const caseStudy2={
      heading:"Optimizing dumpster placement using image recognition.",
      para1Text:"Our solution ensures convenient, efficient, and eco-friendly waste disposal while prioritizing user satisfaction and reliability. Some of the major benefits this tool delivers are explained below.",
  }
  return (
 
      <>
      {/* <SubnavBar imageLink='/case-studies' title='Case Studies' navItems={navItems}/> */}
      <section className="">
        <HeroSection isCasestudy link='/case-studies/pocketmate' heroClassName='h-auto lg:min-h-[90vh] !pt-4'   bgimage1={servicebg} tags={true} divider={true} btnText='Read Case Study' img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/casestudies/pocketmate_research.webp"} isGradientText={false} heading={caseStudy1.heading} description={caseStudy1.para1Text}/>
        <HeroSection isCasestudy link="/case-studies/rentuhbin" moveToSection='/case-studies/rentuhbin' bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage2={imageBG} heroClassName='h-auto lg:min-h-[90vh] !pt-4'  tags={true} divider={true} reverse={true} btnText='Read Case Study' img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/casestudies/rentuhbin_research.webp"} isGradientText={false} heading={caseStudy2.heading} description={caseStudy2.para1Text}/>
        {/* <HeroSection bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage1={imageBG2} heroClassName='h-auto lg:min-h-[90vh] !pt-4' tags={true} divider={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
        <HeroSection bgClassName='w-[90%] !object-contain lg:!w-2/5 opacity-50' bgimage2={imageBG} heroClassName='h-auto lg:min-h-[90vh] !pt-4' tags={true} divider={true} reverse={true} btnText='Read Case Study' img={dummyDisplay} isGradientText={false} heading='Meta and Centrox Partner to Drive Enterprise Adoption' description='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/> */}

        </section>
        {/* <CommonDisplayCardsGrid tags={true} caseStudyCards={true} data={benefitsData} /> */}
        <IndustryBanner heading="Your AI Dream, Our Mission" description="Partner with Us to Bridge the Gap Between Innovation and Reality." isBooking btnText="Talk to Our AI Expert" />
        <LandingContactSection/>
      </>
 
  )
}

export default page
