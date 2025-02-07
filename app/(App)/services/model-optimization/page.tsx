//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon5 from "@/assets/Icon-5.svg";

import Icon6 from "@/assets/Icon-6.svg";
import Icon9 from "@/assets/Icon-9.svg";
import Icon7 from "@/assets/Icon-7.svg"
import Icon10 from "@/assets/Icon-13.svg";
import Icon11 from "@/assets/Icon-11.svg";
import Icon12 from "@/assets/Icon-12.svg";
import Icon13 from "@/assets/Icon-13.svg";
import Icon14 from "@/assets/Icon-14.svg";

import IndustryBanner from "@/Components/common/IndustryBanner";
import servicebg from "@/assets/Servicebg.webp"
import modeloptimization from "@/assets/AI Model Optimization.svg"
import customsolutions from "@/assets/bentobox/Custom solution.svg"
import collaborativeapproach from "@/assets/bentobox/Collabrative approach.svg"
import hardware_specific from "@/assets/bentobox/Hardware Specific.svg"
import { bentobox } from "@/store/imageStore";

export const metadata = {
  title:"AI Model Optimization Services - Maximize Performance | Centrox AI",
  description:"With Centrox AI model optimization services, optimize your AI models for peak performance, reduce costs, and improve scalability. Book a session now!",
  alternates: {
    canonical: "https://centrox.ai/services/model-optimization",
  },
}
export default async function Page({ params }: { params: { slug: string } }) {
 

  const benefitsData = [
    {
      headerData: {
        tagText: "Our flow", 
        headingText: "Optimize. Deploy. Scale.", 
        para1Text: "We guide you through every step of the model optimization process.", // Removed previous paragraph 1 text
        heading2Text: "", 
      },
      data : [
        {
          icon: Icon12,
          heading: "In-Depth Performance Analysis",
          description: "We meticulously profile your model to identify bottlenecks and areas for improvement.",
          linkText: "",
          linkWithIcon: true,
          alt: "In-Depth Performance Analysis"
        },
        {
          icon: Icon13,
          heading: "Optimization Strategy Development",
          description: "We collaborate with you to define clear optimization goals and select the most appropriate techniques.",
          linkText: "",
          linkWithIcon: true,
          alt: "Optimization Strategy Development"
        },
        {
          icon: Icon14,
          heading: "Iterative Optimization & Evaluation",
          description: "We apply optimization techniques and rigorously evaluate their impact on performance, accuracy, and efficiency.",
          linkText: "",
          linkWithIcon: true,
          alt: "Iterative Optimization & Evaluation"
        },
        {
          icon: Icon6,
          heading: "Deployment & Monitoring",
          description: "We seamlessly integrate optimized models into your production environment, ensuring smooth operation and ongoing performance tracking.",
          linkText: "",
          linkWithIcon: true,
          alt: "Deployment & Monitoring"
        },
        {
          icon: Icon7,
          heading: "Continuous Refinement",
          description: "We continuously monitor and optimize your models, adapting them to evolving data and usage patterns.",
          linkText: "",
          linkWithIcon: true,
          alt: "Continuous Refinement"
        },
      ],
      
      caption: "", // Kept caption empty as per the previous state
      btnText: "Optimize Your Models Today", // Updated button text
    },
  ];
  const benefitsData2 = [
    {
      headerData: {
        tagText: "Challenge",
        headingText: "The Optimization Challenge",
        para1Text: "Are your AI models hindering your product's performance?",
      },
      data: [
        {
          icon: Icon12,
          heading: "Slow Inference Times",
          description: `
            In real-world scenarios, it's critical for your model to deliver prompt responses to user queries. Proactive responses demand heavy computations and resources, presenting a significant challenge during optimization.
          `,
          linkText: "",
          linkWithIcon: true,
          alt: "Slow Inference Times"
        },
        {
          icon: Icon13,
          heading: "High Computational Cost",
          description: `
            Heavy computations demand high computational costs, as delivering a solution which covers the specific needs efficiently utilises a good share of these resources which is a challenge that can hinder the optimization.
          `,
          linkText: "",
          linkWithIcon: true,
          alt: "High Computational Cost"
        },
        {
          icon: Icon14,
          heading: "Difficulty Scaling",
          description: `
            It is extremely important to prepare your AI model efficiently enough so that it has the potential to keep it up with the changing trends, because a model lacking the flexibility for scalability can become a challenge while optimising.
          `,
          linkText: "",
          linkWithIcon: true,
          alt: "Difficulty Scaling"
        },
        {
          icon: Icon10,
          heading: "Monitoring Post-Deployment Performance",
          description: `
            Optimizing post-deployment performance can be challenging, especially with real-time data variations and unique environmental factors affecting model performance.
          `,
          linkText: "",
          linkWithIcon: true,
          alt: "Monitoring Post-Deployment Performance"
        },
      ]
      ,
      caption:
        "Don't let suboptimal models hold you back. Centrox AI can help with AI model optimization, helping you extract maximum performance and efficiency from your AI investments.",
      btnText: "Book A 1:1 Session",
    },
  ];
  

  const benefitsData3 = [
    {
      headerData: {
        tagText: "Optimization Partner", // Updated tagText
        headingText: " Your AI Optimization Partner ", // Updated headingText
        para1Text: "Centrox AI is your trusted collaborator in achieving AI excellence.", // Updated para1Text
        heading2Text: "", 
      },
      data: [
        {
          icon: Icon12,
          heading: "Proven Expertise",
          description:
            "Our team possesses deep knowledge of AI optimization techniques and best practices.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Proven Expertise"
        },
        {
          icon: null,
          heading: "Custom Solutions",
          description:
            "We tailor our optimization strategies to your specific model architecture, data, and deployment environment.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento11,
          alt: "Rocket icon representing custom solutions for optimizing model"
        },
        {
          icon: null,
          heading: "Collaborative Approach",
          description:
            "We work closely with your team, fostering knowledge transfer and empowering you to take ownership of your optimization process.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento12,
          alt: "Document icon with connected team members representing a collaborative approach"
        },
        {
          icon: Icon6,
          heading: "Results-Oriented",
          description:
            "We focus on delivering measurable improvements in performance, efficiency, and scalability.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Results-Oriented"
        },
      ]
      ,
      caption: "", 
      btnText: "Talk to our AI Expert", 
    },
  ];
  const challengeData = [
    {
      headerData: {
        tagText: "Performance", 
        headingText: "Unleashing Model Performance", 
        para1Text: "We employ a range of advanced techniques to optimize your AI models.", 
        para2Text: "", 
      },
      data: [
        {
          icon: Icon9,
          heading: "Quantization",
          description:
            "Reduce model size and computational requirements without sacrificing accuracy, enabling faster inference and deployment on resource-constrained environments.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Quantization"
        },
        {
          icon: Icon10,
          heading: "Pruning & Sparsity",
          description:
            "Eliminate redundant parameters and connections, streamlining your model for improved efficiency.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Pruning & Sparsity"
        },
        {
          icon: Icon11,
          heading: "Knowledge Distillation",
          description:
            "Transfer knowledge from larger, complex models to smaller, more efficient ones, maintaining performance while reducing resource consumption.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Knowledge Distillation"
        },
        {
          icon: null,
          heading: "Hardware-Specific Optimization",
          description:
            "Fine-tune models for optimal performance on specific hardware architectures (CPUs, GPUs, TPUs, etc.).",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento10,
          alt: "GPU icon representing hardware-specific optimization for fine-tuning models"
        },
        {
          icon: Icon5,
          heading: "Algorithm & Architecture Refinement",
          description:
            "Collaborate with your team to explore alternative model architectures or algorithms that may offer better performance or efficiency trade-offs.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Algorithm & Architecture Refinement"
        }
      ]
      ,
      caption:
        "Our deep understanding of AI optimization techniques empowers us to tailor solutions to your specific needs and constraints.", // Updated caption
      btnText: "Book A Call", // Updated button text
    },
  ];
  
  const questions = [
    {
      question: "What types of AI models can you optimize?",
      answer:
        "We specialize in optimizing a broad spectrum of models, from traditional machine learning to state-of-the-art deep learning architectures. Whether it’s CNNs for computer vision, LSTMs and Transformers for NLP, or reinforcement learning agents, our techniques are adaptable to the unique demands of each model architecture.",
    },
    {
      question: "What specific optimization techniques do you specialize in?",
      answer:
        "We leverage a range of advanced techniques such as quantization, pruning, sparsity, knowledge distillation, and hardware-specific optimizations (e.g., for GPUs, TPUs). We also refine algorithms and architectures to explore novel approaches that maintain or enhance performance while reducing computational overhead. Our focus is on practical trade-offs that maximize model efficiency without compromising accuracy.",
    },
    {
      question: "How much improvement in performance can I expect?",
      answer:
        "Performance gains vary based on the model and use case, but our optimization processes typically result in up to 2-5x faster inference times and a reduction in model size by 50-70%, all while maintaining accuracy within a margin that won’t degrade user experience. We aim to push the efficiency frontier while respecting the complexity of your real-world deployment constraints.",
    },
    {
      question: "How do you ensure that model accuracy is not compromised during optimization?",
      answer:
        "We adopt a rigorous approach to ensure accuracy is preserved. By using methods like knowledge distillation, we maintain the original model’s predictive power while compressing and optimizing its structure. Every optimization step is evaluated against a comprehensive test suite to guarantee that the trade-offs we introduce have minimal impact on accuracy.",
    },
    {
      question: "Can you help us optimize models for deployment on edge devices?",
      answer:
        "Absolutely. Optimizing for edge deployments is one of our core strengths. We specialize in making models lightweight and efficient enough to run on resource-constrained environments without sacrificing performance, through techniques like quantization and pruning tailored for edge hardware.",
    },
  ];
  
  
 
  const arrayData = {
    headerData: {
      tagText: "Advantage", 
      heading: "The Performance Advantage",
      description: "Optimized AI models from Centrox AI deliver tangible benefits enhancing your business growth.", 
    },
    alt:"The Performance Advantage",
    data: [
      {
        heading: "Faster Inference",
        description:
          "Reduce latency and improve user experience with real-time or near-real-time responses.", // Updated description
      },
      {
        heading: "Reduced Costs",
        description:
          "Lower computational resource requirements, leading to significant cost savings.", // Updated description
      },
      {
        heading: "Improved Scalability",
        description:
          "Handle increased traffic and demand without sacrificing performance.", // Updated description
      },
      {
        heading: "Enhanced Efficiency",
        description:
          "Maximize the utilization of your existing hardware and infrastructure.", // Updated description
      },
      {
        heading: "Competitive Edge",
        description:
          "Deploy models that outperform the competition and deliver superior user experiences.", // Updated description
      },
    ],
    btnText: "Book Your 1:1 Session", // Updated button text
  };
  

  
  return (
    <div>
   
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Optimise Your AI Model For Maximum Performance & Efficiency." 
            description="Helping You Achieve Peak AI Performance Without Compromising Accuracy With Model Optimisation."
            btnText="Book A Call Now" 
            bgimage1={servicebg}
            img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/services/AI+Model+Optimization.svg"}
            bgClassName="opacity-60" 
            alt="Optimizing AI model for maximizing performance and efficiency"
          />

          <LogosCarousel />
          <CommonDisplayCardsGrid data={benefitsData2} />
          <CommonDisplayCardsGrid data={challengeData} resizeableCardsLayout gridCols={3} />
          <CommonDisplayCardsGrid data={benefitsData} />
          {/* <StepperSection data={stepperdata} /> */}
          {/* <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results:"
            }
          /> */}
          <PointsandImagesSection arrayData={arrayData} />
          <CommonDisplayCardsGrid data={benefitsData3} resizeableCardsLayout gridCols={3} />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner heading={"Take the Next Step "} description="Ready to unlock the full potential of your AI models? Schedule a technical deep-dive with our team to discuss your optimization needs and explore how we can help you achieve peak performance." isBooking={true} btnText="Book 1:1 Session"/>

          {/* <IndustryBanner heading="Talk to Our AI Expert" description="Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment." btnText="Book 1:1 Call" isBooking/> */}
        </main>
   
    </div>
  );
}
