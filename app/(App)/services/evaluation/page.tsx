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

import LandingLayout from "../../layoutPage";
import ChallengesSection from "@/views/ServicePageViews/ChallengesSection";
import BenefitSection from "@/views/ServicePageViews/BenefitSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon from "@/assets/Icon.webp";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import Icon4 from "@/assets/Icon-4.webp";
import Icon5 from "@/assets/Icon-5.webp";

import Icon6 from "@/assets/Icon-6.webp";
import Icon7 from "@/assets/Icon-7.webp";
import Icon8 from "@/assets/Icon-8.webp";


import Icon9 from "@/assets/Icon-9.webp";

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
import serviceHeroImg from "@/assets/serviceHeroImg.webp";

// const FaqsSection = dynamic(() => import('@/sections/FaqsSection')),{ss};
// const ContactForm = dynamic(() => import('@/Components/common/ContactForm'));
// const BannerSection = dynamic(() => import('@/sections/TestimonialSection'));
// const HoveredTextSection = dynamic(() => import('@/sections/HoveredTextSection'));
// const LogosCarousel = dynamic(() => import('@/views/LogosCarousel'));
// const CustomCarousalSection = dynamic(() => import('@/sections/CustomCarousalSection'));
// const BenefitsSection = dynamic(() => import('@/sections/BenefitsSection'));
// const OppositeCarousal = dynamic(() => import('@/sections/OppositeCarousal'));
// const StepperSection = dynamic(() => import('@/sections/StepperSection'));
// const PointsandImagesSection = dynamic(() => import('@/views/ComputerVisionDevelopment/Section6'));
// const CustomerTestimonials = dynamic(() => import('@/sections/CustomersTestimonial'));
// const ProductsCarousalSection = dynamic(() => import('@/sections/ProducstsCarousal'));
// const CaseStudiesCarousalSection = dynamic(() => import('@/sections/CaseStudiesCarousalSection'));
// const LogosSection = dynamic(() => import('@/sections/LogosSection'));

export default async function Page({ params }: { params: { slug: string } }) {
    const benefitsData = [
        {
          headerData: {
            tagText: "Benefits", // Updated tagText
            headingText: "The Benefits of MLOps Consulting", // Updated headingText
            para1Text:
              "Partnering with Centrox AI for MLOps consulting can help you achieve:", // Updated para1Text
            heading2Text: "",
            para2Text: "",
          },
          data: [
            {
              icon: Icon12,
              heading: "Accelerated Time-to-Market", // Updated heading
              description:
                "Streamline your AI development lifecycle and get your models into production faster, gaining a competitive edge.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon13,
              heading: "Improved Model Performance & Reliability", // Updated heading
              description:
                "Optimize your models for accuracy, efficiency, and scalability, ensuring they deliver consistent results in real-world environments.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon14,
              heading: "Enhanced Collaboration & Productivity", // Updated heading
              description:
                "Foster better communication and collaboration between data scientists and engineers, breaking down silos and enabling faster iteration.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon6,
              heading: "Reduced Costs & Risks", // Updated heading
              description:
                "Optimize resource utilization, minimize downtime, and proactively address potential issues, leading to cost savings and reduced risk.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon7, // Added relevant icon for this entry
              heading: "Data-Driven Decision Making", // Updated heading
              description:
                "Gain insights into model performance and usage patterns, enabling you to make informed decisions about model updates and improvements.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon8, // Added relevant icon for this entry
              heading: "Scalability & Flexibility", // Updated heading
              description:
                "Build AI infrastructure that can adapt to your growing needs and support future innovation.", // Updated description
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption: "",
          btnText: "Unlock the Power of MLOps for Your Business", // Updated button text
        },
      ];
      

  const challengeData = [
    {
      headerData: {
        tagText: "Challenge", // Updated tagText
        headingText: "The MLOps Challenge", // Updated headingText
        para1Text: "Are your AI initiatives hindered by operational complexities?", // Updated para1Text
        para2Text: "", 
        heading2Text: "", 
      },
      data: [
        {
          icon: Icon9,
          heading: "Deployment Bottlenecks", // Updated heading
          description:
            "Transitioning models from development to production can be slow, error-prone, and require significant manual effort.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Scalability Concerns", // Updated heading
          description:
            "As your models and data grow, ensuring they can handle increasing demand and perform efficiently becomes critical.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Reproducibility Issues", // Updated heading
          description:
            "Inconsistencies in environments and dependencies can make it difficult to reproduce experiment results and deploy models reliably.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Monitoring & Maintenance Overhead", // Updated heading
          description:
            "Manually tracking model performance, detecting drift, and managing updates can be time-consuming and inefficient.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon5, // Added a new icon for this challenge
          heading: "Collaboration Challenges", // Updated heading
          description:
            "Siloed workflows between data scientists and engineers can hinder innovation and slow down development cycles.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI can consult you on Machine Learning Operations, helping you overcome these obstacles and build a robust, scalable, and efficient AI infrastructure that accelerates your time-to-market and maximizes the value of your AI investments.", // Updated caption
      btnText: "Discuss Your MLOps Challenges", // Updated button text
    },
  ];
  

  const questions = [
    {
      question: "What kind of data do you need to train a custom LLM?",
      answer:
        "We typically require a variety of proprietary data from your business, including FAQs, product documentation, and customer interaction logs.",
    },
    {
      question: "How long does it take to develop a custom LLM?",
      answer:
        "The development timeline depends on the complexity of the project and data availability, usually ranging from 6 to 12 weeks.",
    },
    {
      question: "What is the cost of custom LLM development?",
      answer:
        "Costs vary based on project requirements, including data processing, model fine-tuning, and integration needs.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We follow strict data security protocols, including encryption, secure storage, and access control, to safeguard your data.",
    },
    {
      question: "What level of involvement will my team have?",
      answer:
        "We work collaboratively with your team throughout the project, ensuring alignment and allowing for iterative feedback.",
    },
    {
      question: "Can you help with ongoing maintenance and updates?",
      answer:
        "Yes, we offer post-launch support, including model monitoring, updates, and retraining as needed to maintain high performance.",
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
  const heroData = {
    heading: "Reduce churn and maximise retention. With Custom AI Chatbots",
    description:
      "Be Available For Your Customers 24/7.Partner with Centrox AI to build intelligent chatbots that know your business as well as you do,, streamline support, and drive conversions. Our tailored solutions leverage LLMs to deliver a superior user experience.",
    btnText: "Book A Call Now",
    includeDots: false,
    img: serviceHeroImg,
    reverse: false,
  };
  const arrayData = {
    headerData: {
      tagText: "Advantages", // Updated tagText
      heading: "The Centrox AI Difference", // Updated heading
      description:
        "We're not just consultants; we're your MLOps partners:", // Updated description
    },
    data: [
      {
        heading: "Deep Expertise", // Updated heading
        description:
          "Our team possesses extensive experience in MLOps, machine learning, and software engineering.", // Updated description
      },
      {
        heading: "Customized Solutions", // Updated heading
        description:
          "We tailor our approach to your specific needs and infrastructure.", // Updated description
      },
      {
        heading: "Collaborative Approach", // Updated heading
        description:
          "We work closely with your team, fostering knowledge transfer and empowering you to take ownership of your MLOps processes.", // Updated description
      },
      {
        heading: "Results-Oriented", // Updated heading
        description:
          "We focus on delivering tangible outcomes, from faster deployment cycles to improved model performance and ROI.", // Updated description
      },
      {
        heading: "Transparency & Communication", // Updated heading
        description:
          "We maintain open communication throughout the engagement, providing regular updates and clear explanations.", // Updated description
      },
    ],
    btnText: "Partner with Us to Optimize Your AI Lifecycle", // Updated button text
  };
  

  const stepperdata = {
    heading: "How We Build AI Chatbots",
    description:
      "We offer comprehensive chatbot development services tailored to your unique needs.",
    data: [
      {
        title: "Needs Assessment & Conversational Design",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step1",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We collaborate closely with your team to define your chatbot's goals, target audience, and desired capabilities. We conduct user research and analyze customer interactions to understand their needs, pain points, and communication styles. Using this information, we craft natural and intuitive dialogues that guide users toward their goals, providing a seamless and enjoyable experience.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "LLM Selection & Fine-Tuning",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step2",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We leverage powerful LLMs like GPT-3.5, GPT-4, or other open-source models to power your chatbot's intelligence. Our team fine-tunes the model on your proprietary data, ensuring it understands your industry-specific jargon, product offerings, and customer needs. We also employ prompt engineering, few-shot learning, and other advanced techniques to optimize the model's performance and adaptability.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Integration & Deployment",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step3",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We integrate your chatbot into your website, mobile app, messaging platforms (like WhatsApp, Facebook Messenger, etc.), and other channels to provide a consistent user experience across all touchpoints. We ensure that the chatbot is scalable and reliable, capable of handling high volumes of inquiries without sacrificing performance. Additionally, we connect your chatbot to your CRM, knowledge base, or other backend systems, enabling real-time access to customer data and automated actions.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Testing & Refinement",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step4",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We conduct extensive testing to identify and address any potential errors, inconsistencies, or biases in the chatbot's responses. Based on user feedback and data analytics, we continuously monitor and refine the chatbot's performance to ensure it stays aligned with your evolving business needs.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Schedule A Discussion",
  };

  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Streamline Your AI Pipelines For Faster Time-To-Market"
            description="Partner with Centrox AI as we guide and consult you on streamlining your AI development lifecycle, optimizing model performance, and ensuring scalability and reliability in production."
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={benefitsData} />
          {/* <StepperSection data={stepperdata} /> */}
          {/* <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots:"
            }
          /> */}
          <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner:"
            }
            
          />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading="We understand the complexities and nuances of LLM development, and we're here to address your concerns"
            data={questions}
          />
        </main>
      </LandingLayout>
    </div>
  );
}
