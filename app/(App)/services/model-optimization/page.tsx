//@ts-nocheck
import { sanityFetch } from "@/sanity/lib/client";
import dynamic from "next/dynamic";

import { SERVICES_PAGE_QUERY } from "@/sanity/query";
import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";
import { CustomCarousalSection } from "@/sections/CustomCarousalSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { OppositeCarousal } from "@/sections/OppositeCarousal";
import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import { CustomerTestimonials } from "@/sections/CustomersTestimonial";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { CaseStudiesCarousalSection } from "@/sections/CaseStudiesCarousalSection";
import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";
import { ContactForm } from "@/Components/common/ContactForm";
import { BannerSection } from "@/sections/TestimonialSection";
import { HoveredTextSection } from "@/sections/HoveredTextSection";
import bgImage from "@/public/images/customchatbot/customchatbotbg.webp";

import LandingLayout from "../../layout";
import ChallengesSection from "@/views/ServicePageViews/ChallengesSection";
import BenefitSection from "@/views/ServicePageViews/BenefitSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon5 from "@/assets/Icon-5.webp";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import Icon4 from "@/assets/Icon-4.webp";
import Icon6 from "@/assets/Icon-6.webp";
import Icon9 from "@/assets/Icon-9.webp";
import Icon7 from "@/assets/Icon-7.webp"
import Icon10 from "@/assets/Icon-10.webp";
import Icon11 from "@/assets/Icon-11.webp";
import Icon12 from "@/assets/Icon-12.webp";
import Icon13 from "@/assets/Icon-13.webp";
import Icon14 from "@/assets/Icon-14.webp";
import liama from "@/assets/liama.webp";
import falcon from "@/assets/falcon.webp";
import gptneox from "@/assets/GPT-NeoX.webp";

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
import IndustryBanner from "@/Components/common/IndustryBanner";
import servicebg from "@/assets/Servicebg.webp"
import modeloptimization from "@/assets/AI Model Optimization.svg"



export default async function Page({ params }: { params: { slug: string } }) {
 

  const benefitsData = [
    {
      headerData: {
        tagText: "Our flow", 
        headingText: "Optimize. Deploy. Scale.", 
        para1Text: "We guide you through every step of the model optimization process.", // Removed previous paragraph 1 text
        heading2Text: "", 
      },
      data: [
        {
          icon: Icon12,
          heading: "In-Depth Performance Analysis",
          description:
            "We meticulously profile your model to identify bottlenecks and areas for improvement.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "Optimization Strategy Development",
          description:
            "We collaborate with you to define clear optimization goals and select the most appropriate techniques.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Iterative Optimization & Evaluation",
          description:
            "We apply optimization techniques and rigorously evaluate their impact on performance, accuracy, and efficiency.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon6, // Ensure to use a relevant icon for this entry
          heading: "Deployment & Monitoring",
          description:
            "We seamlessly integrate optimized models into your production environment, ensuring smooth operation and ongoing performance tracking.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon7, // Ensure to use a relevant icon for this entry
          heading: "Continuous Refinement",
          description:
            "We continuously monitor and optimize your models, adapting them to evolving data and usage patterns.", // Updated description
          linkText: "",
          linkWithIcon: true,
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
        },
        {
          icon: Icon13,
          heading: "High Computational Cost",
          description: `
          Heavy computations demand high computational costs, as delivering a solution which covers the specific needs efficiently utilises a good share of these resources which is a challenge that can hinder the optimization.
          `,
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Difficulty Scaling",
          description: `
          It is extremely important to prepare your AI model efficiently enough so that it has the potential to keep it up with the changing trends, because a model lacking the flexibility for scalability can become a challenge while optimising.
          `,
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Monitoring Post-Deployment Performance",
          description: `
            Optimizing post-deployment performance can be challenging, especially with real-time data variations and unique environmental factors affecting model performance.
          `,
          linkText: "",
          linkWithIcon: true,
        },
      ],
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
          heading: "Proven Expertise", // Updated heading
          description:
            "Our team possesses deep knowledge of AI optimization techniques and best practices.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1
        },
        {
          icon: Icon13,
          heading: "Custom Solutions", // Updated heading
          description:
            "We tailor our optimization strategies to your specific model architecture, data, and deployment environment.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2
        },
        {
          icon: Icon14,
          heading: "Collaborative Approach", // Updated heading
          description:
            "We work closely with your team, fostering knowledge transfer and empowering you to take ownership of your optimization process.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2
        },
        {
          icon: Icon6, 
          heading: "Results-Oriented", // Updated heading
          description:
            "We focus on delivering measurable improvements in performance, efficiency, and scalability.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1
        },
      ],
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
            "Reduce model size and computational requirements without sacrificing accuracy, enabling faster inference and deployment on resource-constrained environments.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon10,
          heading: "Pruning & Sparsity",
          description:
            "Eliminate redundant parameters and connections, streamlining your model for improved efficiency.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon11,
          heading: "Knowledge Distillation",
          description:
            "Transfer knowledge from larger, complex models to smaller, more efficient ones, maintaining performance while reducing resource consumption.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: null,
          heading: "Hardware-Specific Optimization",
          description:
            "Fine-tune models for optimal performance on specific hardware architectures (CPUs, GPUs, TPUs, etc.).", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:2
        },
        {
          icon: Icon5, // Ensure to use a relevant icon for this entry
          heading: "Algorithm & Architecture Refinement",
          description:
            "Collaborate with your team to explore alternative model architectures or algorithms that may offer better performance or efficiency trade-offs.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
      ],
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
  
  
  const techStackData = [
    {
      title: "Foundation Models",
      content: [
        {
          alt: "icon",
          caption: "Liama",
          img: liama,
        },
        {
          alt: "icon",
          caption: "Falcon",
          img: falcon,
        },
        {
          alt: "icon",
          caption: "Qwen",
          img: gptneox,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "Icon",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Icon",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "Icon",
          caption: "Tensorflow",
          img: tensorflow,
        },
      ],
    },
    {
      title: "Infrastructure",
      content: [
        {
          alt: "Icon",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Icon",
          caption: "Azure",
          img: azure,
        },
        {
          alt: "Icon",
          caption: "Google Cloud",
          img: googlecloud,
        },
      ],
    },
    {
      title: "MLOps Tools",
      content: [
        {
          alt: "Icon",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Kubeflow",
          img: kubeflow,
        },
      ],
    },
  ];
  const arrayData = {
    headerData: {
      tagText: "Advantage", 
      heading: "The Performance Advantage",
      description: "Optimized AI Models from Centrox AI Deliver Tangible Benefits", 
    },
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
  

  const stepperdata = {
    heading: "How We Work",
    description:
      "Our collaborative, iterative process ensures a tailored and effective LLM solution:",
    data: [
      {
        title: "Deep Dive & Discovery",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69ae",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We begin by thoroughly understanding your project goals, data types, and specific annotation needs.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Custom Model Blueprinting",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69af",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We collaborate with you to design a model architecture that leverages the strengths of foundation models while addressing your unique requirements. We consider factors like model size, computational constraints, and desired capabilities.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Curation & Enhancement",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69b0",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We work with your datasets, applying cleaning, augmentation, and labeling techniques as needed to create a high-quality training corpus that accurately reflects your domain knowledge. We also help you identify and acquire additional data sources if necessary.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Iterative Training & Optimization",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69b1",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We utilize a combination of fine-tuning, RLHF, and prompt engineering to train your LLM iteratively. We continuously evaluate performance, share insights, and refine the model to achieve optimal results. We employ advanced techniques like hyperparameter tuning, early stopping, and learning rate scheduling to ensure efficient training and prevent overfitting.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Seamless Deployment & Integration",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69b2",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We deploy your custom LLM into your production environment, ensuring a smooth transition and minimal disruption to your existing workflows. We provide support for integrating the model with your applications and systems, leveraging APIs or SDKs as needed.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Ongoing Monitoring & Support",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "6fc8ac5c69b3",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We provide continuous monitoring, retraining, and optimization to ensure your AI model continues to deliver value as your data and needs evolve. We offer expert guidance and support to address any challenges or questions that arise, helping you maintain peak performance and adapt to changing requirements.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Let's Discuss Your Project",
  };
  return (
    <div>
   
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Optimise Your AI Model For Maximum Performance & Efficiency." 
            description="Helping You Achieve Peak AI Performance Without Compromising Accuracy With Model Optimisation."
            btnText="Book A Call Now" 
            bgimage1={servicebg}
            img={modeloptimization}
            bgClassName="opacity-60" 
          
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
