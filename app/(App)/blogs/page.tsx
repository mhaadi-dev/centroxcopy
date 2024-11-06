import React from 'react'
import LandingLayout from '../layoutPage'
import BlogHeader from '@/Components/common/BlogHeader'
import BlogBanner from '@/Components/common/BlogBanner'
import CommonDisplayCardsGrid from '@/Components/common/CommonDisplayCardsGrid'
import TabsWithGridCards from '@/Components/common/TabsWithGridCards'
import IndustryBanner from '@/Components/common/IndustryBanner'


const page = () => {
    const benefitsData = [
        { 
         headerData:{
             tagText: "",
             headingText: "Blogs to Read",
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
           label:"hello"
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
    <LandingLayout subNav title="Blogs">
     <BlogHeader headingText='Blogs' paraText='Company Updates and Technology Updates'/>
     <BlogBanner heading='Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platformz' paraText='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.' date="Aug 14, 2024" name='Ahmed Ali' product='Product' duration='20 min read'/>
     <TabsWithGridCards headingText='Artificial Intelligence'/>
     <IndustryBanner heading="All the Good Stuff is here" description="Read these blogs to get to know more about Centrox." btnText="Talk to us" isBooking/>
     <TabsWithGridCards headingText='ML Ops'/>

    </LandingLayout>
  )
}

export default page
