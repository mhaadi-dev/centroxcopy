import SectionTag from '@/Components/common/SectionTag'
import { TabCarousel } from '@/Components/common/TabCarousel'
import React from 'react'
import LabelIcon from "@/assets/labelIcon.webp";
import gear from "@/assets/gear.webp";
import menubars from "@/assets/menubars.webp";


const LandingServicesSection = () => {
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
        heading:"MLOps: Streamlined Deployment and Continuous Improvement",
        description:"We ensure your LLMs are seamlessly deployed, optimized, and continuously improved for real-world impact:"
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
    }
  ]
  return (
    <>
    <div className='sr-only'>Centrox services</div>
    <section aria-label='landing services' className='w-[90%] sm:w-auto mx-[1.5rem] lg:mx-[15rem] mt-12'>
        <SectionTag text='Services' className="justify-start"/>
        <section aria-label="Centrox Services" className="text-white mx-auto pl-0 lg:pl-14 ">
        <h2 className="font-semibold text-start text-[1.5rem] lg:text-5xl my-4">
        End-to-End Gen AI Services From Idea To Impact
        </h2>
        <p className="text-start w-full text-[1rem] sm:w-[60%]  sm:text-[1.5rem]">
        Centrox AI offers full-cycle Gen AI development services designed to meet your specific needs and accelerate your product roadmap.
        </p>
      </section>
      <TabCarousel cardsData={cardsData} isCardLayout={true} />
    </section>
    </>
    
  )
}

export default LandingServicesSection
