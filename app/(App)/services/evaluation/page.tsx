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
import IndustryBanner from "@/Components/common/IndustryBanner";

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
      question: "What MLOps tools and platforms do you specialize in?",
      answer:
        "We specialize in a variety of industry-leading MLOps tools such as Kubeflow, Airflow, and Argo Workflows for orchestration, TensorFlow Serving and KServe for model deployment, Prometheus and Grafana for monitoring, and MLflow and Weights & Biases for experiment tracking. Additionally, we leverage cloud platforms like AWS, GCP, and Azure to ensure seamless scalability and integration with your existing workflows.",
    },
    {
      question: "How do you ensure the security and privacy of our models and data?",
      answer:
        "Security and privacy are paramount in every solution we design. We implement robust access control mechanisms, data encryption at rest and in transit, and adhere to best practices in cloud security. We also ensure compliance with relevant regulations such as GDPR, HIPAA, and industry-specific standards to protect your models and data throughout the MLOps lifecycle.",
    },
    {
      question: "Can you help us implement MLOps best practices within our existing infrastructure?",
      answer:
        "Absolutely. We tailor our MLOps consulting services to fit within your current infrastructure, whether it’s on-premise, cloud-based, or hybrid. We assess your existing setup, identify gaps, and recommend optimizations without disrupting your operations. Our goal is to integrate MLOps best practices that enhance efficiency and scalability while minimizing overhead.",
    },
    {
      question: "How do you measure and track the success of your MLOps solutions?",
      answer:
        "We establish clear key performance indicators (KPIs) aligned with your business goals, such as reduced deployment times, improved model accuracy, and streamlined workflows. We also set up monitoring and reporting systems that provide real-time insights into model performance, resource utilization, and system health, enabling you to track success and iterate as needed.",
    },
    {
      question: "What experience do you have in working with [specific industry or application]?",
      answer:
        "Our team has a wealth of experience across industries such as healthcare, finance, e-commerce, and technology. We tailor our MLOps strategies to meet the specific challenges of your industry, whether it’s ensuring compliance in highly regulated sectors, optimizing for real-time decision-making, or scaling AI to meet growing user demand. We can provide case studies and examples relevant to your field.",
    },
  ];
  
  

  const techStackData = [
    {
      title: "Orchestration & Automation",
      content: [
        {
          alt: "Icon",
          caption: "Kubeflow",
          img: kubeflow,
        },
        {
          alt: "Icon",
          caption: "Airflow",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Argo Workflows",
          img: mlflow,
        },
      ],
    },
    {
      title: "Model Deployment & Serving",
      content: [
        {
          alt: "Icon",
          caption: "TensorFlow Serving",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "KServe",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Seldon Core",
          img: mlflow,
        },
      ],
    },
    {
      title: "Monitoring & Observability",
      content: [
        {
          alt: "Icon",
          caption: "Prometheus",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Grafana",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "MLflow",
          img: mlflow,
        },
      ],
    },
    {
      title: "Experiment Tracking",
      content: [
        {
          alt: "Icon",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Weights & Biases",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "CometML",
          img: mlflow,
        },
      ],
    },
    {
      title: "Data Versioning & Management",
      content: [
        {
          alt: "Icon",
          caption: "DVC",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Git LFS",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Pachyderm",
          img: mlflow,
        },
      ],
    },
    {
      title: "Cloud Platforms",
      content: [
        {
          alt: "Icon",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Icon",
          caption: "GCP",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "Azure",
          img: azure,
        },
      ],
    },
    {
      title: "CI/CD Tools",
      content: [
        {
          alt: "Icon",
          caption: "Jenkins",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "GitLab CI",
          img: mlflow,
        },
        {
          alt: "Icon",
          caption: "CircleCI",
          img: mlflow,
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
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results:"
            }
          />
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
            subHeading=""
            data={questions}
          />
          <IndustryBanner heading="Take the Next Step" description="Ready to streamline your AI pipelines and accelerate your time-to-market?
Schedule a free consultation with our MLOps experts today." isBooking btnText="Book Your Free Consultation"/>
        </main>
      </LandingLayout>
    </div>
  );
}
