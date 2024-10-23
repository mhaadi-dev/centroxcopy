import { Navbar } from "@/Components/Navbar/navbar";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import { LandingAboutUs } from "@/views/LandingAboutUs";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import { sanityFetch } from "@/sanity/lib/client";
import { LANDING_PAGE_QUERY } from "@/sanity/query";
// import { Testimonial } from "@/views/Testimonial";

import { POCS } from "@/views/POCS";

// import WebsiteFooter from "@/Components/common/WebsiteFooter";
// import  BannerSection  from "@/Components/MainPageComponents/Banner";
import dynamic from "next/dynamic";
import useScrollToElement from "@/deploy/hooks/useScrollToElement";
import Image from "next/image";
import { Button } from "@/Components/Button.js/button";
import LandingBlogSection from "@/views/LandingPageViews/LandingBlogSection";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingHeroSection from "@/views/LandingPageViews/LandingHeroSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import LandingServicesSection from "@/views/LandingPageViews/LandingServicesSection";
import LandingFAQSection from "@/views/LandingPageViews/LandingFAQSection";
import LandingContactSection from "@/views/LandingPageViews/LandingContactSection";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import LandingTestimonialSection from "@/views/LandingPageViews/LandingTestimonialSection";
import Icon from "@/assets/Icon.webp";
import Icon2 from "@/assets/Icon-1.webp";
import Icon3 from "@/assets/Icon-3.webp";
import Icon4 from "@/assets/Icon-4.webp";
import Icon5 from "@/assets/Icon-5.webp";
import Icon6 from "@/assets/Icon-6.webp";
import Icon7 from "@/assets/Icon-7.webp";
import Icon8 from "@/assets/Icon-8.webp";
import menubars from "@/assets/barsmenu.webp";


const WebsiteFooter = dynamic(
  () => import("@/Components/common/WebsiteFooter"),
  { ssr: false }
);

const BannerSection = dynamic(
  () => import("@/Components/MainPageComponents/Banner"),
  { ssr: false }
);

const Testimonial = dynamic(() => import("@/views/Testimonial"), {
  ssr: false,
});

// import useScrollToElement from "@/hooks/useScrollToElement";
const data = [
  {
    img: dummyDisplay,
    description:"Meta4 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 1",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:"Meta2 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 2",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:"Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 3",
    date: "July 17, 2024",
  },
];
export default async function Home() {


  const data: any = await sanityFetch({
    query: LANDING_PAGE_QUERY,
  });

  //  useScrollToElement();
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
           link:"services/data-annotations-and-labelling",
           linkWithIcon:true
        },
        {
          icon:Icon2,
          heading:"Data Validation & Quality Assurance",
          description:"We implement rigorous quality assurance processes to validate your data, identify and address any inconsistencies, and ensure your LLM is trained on the most reliable information.",
          linkText:"Learn More",
          link:"services/data-validation",
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
           link:"services/custom-llm-dev",
           linkWithIcon:true
        },
        {
          icon:Icon3,
          heading:"Custom Chatbot Development",
          description:"We'll build intelligent conversational AI solutions that seamlessly integrate into your existing product and provide natural language understanding, engaging interactions, and actionable insights. We'll ensure your chatbot aligns with your brand voice and delivers a superior user experience.",
          linkText:"Learn More",
          link:"services/custom-chatbot-dev",
          linkWithIcon:true
        },
        {
          icon:Icon4,
          heading:"Fine-Tuning & Optimization",
          description:"We'll fine-tune pre-trained LLMs on your proprietary data, enabling them to adapt to your domain-specific language and tasks. We'll employ cutting-edge optimization techniques to maximize efficiency, reduce inference latency, and minimize computational costs.",
          linkText:"Learn More",
          link:"services/ai-finetuning",
          linkWithIcon:true
        },
        {
          icon:Icon5,
          heading:"Agentic AI",
          description:"Partner with Centrox AI to develop intelligent AI agents and workflows that automate tasks, make decisions, and drive business growth. With our expertise in Agentic AI workflows, we can help you with developing custom solutions tailored to your specific needs.",
          linkText:"Learn More",
          link:"services/ai-agents",
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
           link:"services/custom-llm-dev",
           linkWithIcon:true
        },
        {
          icon:Icon7,
          heading:"Optimization",
          description:"We'll continuously monitor your LLM's performance and implement fine-tuning and retraining strategies to enhance accuracy, reduce bias, and ensure your LLM adapts to evolving user needs and data distributions.",
          linkText:"Learn More",
          link:"services/model-optimization",
          linkWithIcon:true
        },
        {
          icon:Icon8,
          heading:"Evaluation",
          description:"We'll leverage advanced analytics and visualization tools to provide detailed metrics and insights into your LLM's performance, enabling you to track progress, identify areas for improvement and make data-driven decisions.",
          linkText:"Learn More",
          link:"services/evaluation",
          linkWithIcon:true
        }

      ]
    }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden gap-10 max-w-[2500px] mx-auto">
      <Navbar />
      <LandingHeroSection />
      <LogosCarousel />
      <LandingAboutUs />
      <LandingServicesSection servicesTabs={servicesTabs} cardsData={cardsData} heading="End-to-End Gen AI Services From Idea To Impact" description="Centrox AI offers full-cycle Gen AI development services designed to meet your specific needs and accelerate your product roadmap."/>
      <LandingSolutionsSection/>
      <LandingIndustriesSection/>
      {/* <LandingCaseStudySection/> */}
      <LandingTestimonialSection/>
      {/* <LandingBlogSection/> */}
      <LandingContactSection/>
      <LandingFAQSection/>
      
      {/* <Section3 /> */}
      {/* <POCS />
      <Testimonial />
      <BannerSection /> */}
      <WebsiteFooter />
    </main>
  );
}





