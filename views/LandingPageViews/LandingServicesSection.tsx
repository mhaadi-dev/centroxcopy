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
           icon:Icon,
           heading:"Annotation & Labeling",
           description:"We leverage cutting-edge AI-powered annotation tools to efficiently process and label your data. But we don’t stop there, Our team of annotators then meticulously cross-verifies and refines the AI-generated annotations, ensuring the highest level of accuracy, consistency, and alignment with your specific use case.",
           linkText:"Learn More",
           linkWithIcon:true
        },
        {
          icon:Icon2,
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
          icon:Icon3,
          heading:"Custom Chatbot Development",
          description:"We'll build intelligent conversational AI solutions that seamlessly integrate into your existing product and provide natural language understanding, engaging interactions, and actionable insights. We'll ensure your chatbot aligns with your brand voice and delivers a superior user experience.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:Icon4,
          heading:"Fine-Tuning & Optimization",
          description:"We'll fine-tune pre-trained LLMs on your proprietary data, enabling them to adapt to your domain-specific language and tasks. We'll employ cutting-edge optimization techniques to maximize efficiency, reduce inference latency, and minimize computational costs.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:Icon5,
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
           icon:Icon6,
           heading:"Deployment & Scaling",
           description:"We'll deploy your LLM into your production environment, handling infrastructure provisioning, scaling, and monitoring to ensure high availability and optimal performance. We'll work with you to address any security or compliance concerns.",
           linkText:"Learn More",
           linkWithIcon:true
        },
        {
          icon:Icon7,
          heading:"Optimization",
          description:"We'll continuously monitor your LLM's performance and implement fine-tuning and retraining strategies to enhance accuracy, reduce bias, and ensure your LLM adapts to evolving user needs and data distributions.",
          linkText:"Learn More",
          linkWithIcon:true
        },
        {
          icon:Icon8,
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
    <section id="services" aria-label='landing services' className={classNames(section_wrapper_class,"")}>
       
        <section aria-label="Centrox Services" className="text-white flex flex-col gap-y-[1rem] ">
        <SectionTag text='Services' className="!justify-start"/>
        <h2 className={classNames(text_h2_class)}>
        End-to-End Gen AI Services From Idea To Impact
        </h2>
        <p className={classNames(text_para_2,"w-[80%]")}>
        Centrox AI offers full-cycle Gen AI development services designed to meet your specific needs and accelerate your product roadmap.
        </p>
      </section>
      <TabCarousel cardsData={cardsData} isCardLayout={true} headerTabs={servicesTabs}/>
    </section>
    </>
    
  )
}

export default LandingServicesSection
