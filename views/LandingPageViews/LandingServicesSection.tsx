import SectionTag from '@/Components/common/SectionTag'
import { TabCarousel } from '@/Components/common/TabCarousel'
import React from 'react'
import LabelIcon from "@/assets/labelIcon.webp";
import gear from "@/assets/gear.webp";
import menubars from "@/assets/barsmenu.webp";
import equalizer from "@/assets/equalizer.webp";
import robot from "@/assets/robot.webp";
import usericon from "@/assets/usericon.webp";
import loop from "@/assets/loop.webp";
import rocket from "@/assets/rocket.webp";
import progressbars from "@/assets/progressbars.webp";

const LandingServicesSection = () => {
  const servicesTabs = [
    { name: "Data Annotations", href: "#", current: true },
    { name: "LLM Development", href: "#", current: false },
    { name: "ML Ops", href: "#", current: false },
  ];
  // data
  const cardsData = [
    {
      subInfo:{
        heading:"Data Solutions: The Foundation of High-Performing LLMs",
        description:""
      },
      data:[
        {
           icon:LabelIcon,
           heading:"Annotation & Labeling",
           description:"We leverage cutting-edge AI-powered annotation tools to efficiently process and label your data. But we don’t stop there, Our team of annotators then meticulously cross-verifies and refines the AI-generated annotations, ensuring the highest level of accuracy, consistency, and alignment with your specific use case.",
           linkText:"Learn More",
           linkWithIcon:true
        },
        {
          icon:gear,
          heading:"Data Validation & Quality Assurance",
          description:"We implement rigorous quality assurance processes to validate your data, identify and address any inconsistencies, and ensure your LLM is trained on the most reliable information.",
          linkText:"Learn More",
          linkWithIcon:true
        }

      ]
    },
    {
      subInfo:{
        heading:"LLM Development: Custom Models and Intelligent Applications",
        description:"We specialize in engineering bespoke LLMs and intelligent applications that align with your unique business needs and technical requirements:"
      },
      data:[
        {
           icon:menubars,
           heading:"Custom LLM Development",
           description:"We'll collaborate closely with your team to design and develop a custom LLM architecture optimized for your specific domain and use case. We'll leverage advanced techniques such as transfer learning, fine-tuning, and reinforcement learning to ensure your model achieves state-of-the-art performance.",
           linkText:"Learn More",
           linkWithIcon:true
        },
        {
          icon:robot,
          heading:"Custom Chatbot Development",
          description:"We'll build intelligent conversational AI solutions that seamlessly integrate into your existing product and provide natural language understanding, engaging interactions, and actionable insights. We'll ensure your chatbot aligns with your brand voice and delivers a superior user experience.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:equalizer,
          heading:"Fine-Tuning & Optimization",
          description:"We'll fine-tune pre-trained LLMs on your proprietary data, enabling them to adapt to your domain-specific language and tasks. We'll employ cutting-edge optimization techniques to maximize efficiency, reduce inference latency, and minimize computational costs.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:usericon,
          heading:"Agentic AI",
          description:"Partner with Centrox AI to develop intelligent AI agents and workflows that automate tasks, make decisions, and drive business growth. With our expertise in Agentic AI workflows, we can help you with developing custom solutions tailored to your specific needs.",
          linkText:"Learn More",
          linkWithIcon:true
        }

      ]
    },
    {
      subInfo:{
        heading:"MLOps: Streamlined Deployment and Continuous Improvement",
        description:"We ensure your LLMs are seamlessly deployed, optimized, and continuously improved for real-world impact:"
      },
      data:[
        {
           icon:rocket,
           heading:"Deployment & Scaling",
           description:"We'll deploy your LLM into your production environment, handling infrastructure provisioning, scaling, and monitoring to ensure high availability and optimal performance. We'll work with you to address any security or compliance concerns.",
           linkText:"Learn More",
           linkWithIcon:true
        },
        {
          icon:loop,
          heading:"Optimization",
          description:"We'll continuously monitor your LLM's performance and implement fine-tuning and retraining strategies to enhance accuracy, reduce bias, and ensure your LLM adapts to evolving user needs and data distributions.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:progressbars,
          heading:"Evaluation",
          description:"We'll leverage advanced analytics and visualization tools to provide detailed metrics and insights into your LLM's performance, enabling you to track progress, identify areas for improvement and make data-driven decisions.",
          linkText:"Learn More",
          linkWithIcon:true
        }

      ]
    }
  ]
  return (
    <>
    <div className='sr-only'>Centrox services</div>
    <section aria-label='landing services' className='w-[90%] sm:w-auto  mx-[1.5rem] 2xl:mx-[15rem] mt-12'>
        <SectionTag text='Services' className="justify-start"/>
        <section aria-label="Centrox Services" className="text-white mx-auto lg:pl-14 ">
        <h2 className="font-semibold text-start text-[1.5rem] lg:text-5xl my-4">
        End-to-End Gen AI Services From Idea To Impact
        </h2>
        <p className="text-start w-full text-[1rem] lg:w-[60%]  sm:text-[1.5rem]">
        Centrox AI offers full-cycle Gen AI development services designed to meet your specific needs and accelerate your product roadmap.
        </p>
      </section>
      <TabCarousel cardsData={cardsData} isCardLayout={true} headerTabs={servicesTabs}/>
    </section>
    </>
    
  )
}

export default LandingServicesSection
