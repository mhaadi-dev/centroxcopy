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
        tagText: "AI Agent Advantage",
        headingText: "The AI Agent Advantage", // Updated heading
        para1Text:
          "While large language models (LLMs) have made significant strides in natural language understanding and generation, they often fall short when faced with complex, real-world tasks that demand more than just linguistic capabilities. Traditional automation tools and even powerful LLMs often fall short when it comes to handling the complex, dynamic nature of real-world tasks. They struggle to:",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon12,
          heading: "Adapt and Learn", // Updated heading
          description:
            "Rigid rule-based systems can't evolve with your business or handle unexpected situations. LLMs, while impressive, lack the ability to learn from experience and improve their decision-making over time.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "Make Autonomous Decisions", // Updated heading
          description:
            "They rely on predefined rules or human intervention, hindering their ability to operate independently and make intelligent choices in real-time.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Collaborate Effectively", // Updated heading
          description:
            "They operate in isolation, unable to coordinate actions or share information with other systems to achieve complex goals.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
      
      ],
      caption: "Centrox AI can help in building intelligent AI agents that overcome these limitations. Our solutions empower you to automate intricate processes, make data-driven decisions at scale, and achieve unprecedented levels of efficiency.",
      btnText: "Schedule 1:1 Session", // Updated button text
    },
  ];
  const benefitsData2 = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "How Agentic AI Can Benefit You", // Updated heading
        para1Text:
          "Imagine a workforce augmented by intelligent AI agents that can:", // Updated para1Text
        heading2Text: "", // Removed unnecessary second heading
      },
      data: [
        {
          icon: Icon12,
          heading: "Automate Complex, End-to-End Processes", // Updated heading
          description:
            "From data collection and analysis to decision-making and execution, AI agents can handle intricate workflows, freeing up your team for higher-value tasks.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "Make Data-Driven Decisions at Scale", // Updated heading
          description:
            "Analyze vast amounts of data in real-time, identify patterns, and make informed decisions, enabling you to respond quickly to market changes and opportunities.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Enhance Customer Experiences", // Updated heading
          description:
            "Provide personalized and responsive interactions with customers through AI-powered chatbots and virtual assistants, improving satisfaction and loyalty.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon12,
          heading: "Drive Innovation", // New heading
          description:
            "Unlock new possibilities for product development and service delivery through intelligent automation and data-driven insights.", // New description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Achieve Unprecedented Efficiency", // New heading
          description:
            "Streamline operations, reduce manual effort, and optimize resource allocation, leading to significant cost savings and improved productivity.", // New description
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Agentic AI can do this and a lot more. All you need is the right team to help you build your intelligent AI agents. We can help!", // Updated caption
      btnText: "Book Your 1:1 Session", // Updated button text
    },
  ];
  const benefitsData3 = [
    {
      headerData: {
        tagText: "Optimization Challenge",
        headingText: "The Optimization Challenge", // Updated heading
        para1Text:
          "Are your AI models hindering your product's performance?", // Updated para1Text
        heading2Text: "", // Removed unnecessary second heading
      },
      data: [
        {
          icon: Icon12,
          heading: "Slow Inference Times", // Updated heading
          description:
            "Slow inference times impacting user experience?", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "High Computational Costs", // Updated heading
          description:
            "High computational costs straining your budget?", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Difficulty Scaling", // Updated heading
          description:
            "Difficulty scaling to meet growing demand?", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Don't let suboptimal models hold you back. Centrox AI can help with AI model optimization, helping you extract maximum performance and efficiency from your AI investments.", // Updated caption
      btnText: "Book A 1:1 Session", // Updated button text
    },
  ];
  
  const challengeData = [
    {
      headerData: {
        tagText: "Use Cases",
        headingText: "Use Cases We’ve Worked On", // Updated heading
        para1Text:
          "Centrox AI has the capability to design, build, and deploy AI agents and workflows that address your specific needs. Our experience in Agentic AI so far incorporates various domains and industries, including:", // Updated paragraph
        para2Text: "",
      },
      data: [
        {
          icon: Icon9,
          heading: "Customer Service & Support", // Updated heading
          description:
            "Intelligent chatbots and virtual assistants that provide 24/7 support, handle inquiries, and resolve issues proactively.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Data Analysis & Insights", // Updated heading
          description:
            "AI agents that extract valuable information from large datasets, identify trends, and generate actionable insights to inform your strategic decision-making.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Process Automation", // Updated heading
          description:
            "Streamline and optimize your workflows with AI agents that perform repetitive tasks, manage complex processes, and make data-driven decisions, freeing up your team for higher-value activities.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Recommendation Engines", // Updated heading
          description:
            "Deliver personalized recommendations to your customers, boosting engagement and sales.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon5, // Replace this icon with the appropriate one for Fraud Detection & Prevention
          heading: "Fraud Detection & Prevention", // Updated heading
          description:
            "AI agents that monitor transactions, identify suspicious activity, and prevent fraud in real-time.", // Updated description
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Having said that, no two use cases are the same. Therefore, we work closely with you to understand your unique challenges and design AI agents that align with your business goals and technical requirements.", // Updated caption
      btnText: "Discuss Your Business Goals", // Updated button text
    },
  ];
  

  const questions = [
    {
      question: "What kind of data do you need to train a custom LLM?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How long does it take to develop a custom LLM?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What is the cost of custom LLM development?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "How do you ensure data security and privacy during the development process?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What level of involvement will my team have in the project?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Can you help us with ongoing model maintenance and updates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  const stepperData = {
    heading: "How We Build Agentic AI?", // Updated heading
    description:
      "We follow a structured, iterative process to ensure the success of your AI agent projects:", // Updated description
    data: [
      {
        title: "Needs Assessment & Discovery", // Updated title
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
                text: "We collaborate with you to define your goals, identify use cases, and assess your data and infrastructure. We conduct thorough research and analysis to understand your industry, competitors, and target audience.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Agent Design & Architecture", // Updated title
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
                text: "We design the AI agent's architecture, capabilities, and interactions with other systems, considering scalability, security, and maintainability. We select the most appropriate technologies and frameworks based on your requirements and constraints.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Model Development & Training", // Updated title
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
                text: "We leverage our expertise in machine learning, NLP, and CV to build and train the underlying models that power the agent's intelligence. We employ advanced techniques like reinforcement learning, transfer learning, and active learning to optimize model performance.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Workflow Orchestration", // Updated title
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
                text: "We design and implement robust workflows that govern the agent's interactions and decision-making, ensuring seamless coordination and collaboration. We leverage cloud-based or on-premises orchestration tools to manage and scale your AI workflows efficiently.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Testing & Validation", // Updated title
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
                text: "We conduct rigorous testing to validate the agent's performance, accuracy, and reliability across various scenarios. We implement continuous integration and continuous deployment (CI/CD) pipelines to streamline the testing and deployment process.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Deployment & Monitoring", // Updated title
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
                text: "We deploy the AI agent into your production environment, ensuring a smooth transition and minimal disruption. We provide comprehensive monitoring and management tools to track agent performance, identify potential issues, and enable continuous improvement.", // Combined content
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Get Started Today", // Updated button text
  };
  
  const arrayData = {
    headerData: {
      tagText: "", // Updated tag text
      heading: "Why Centrox AI?", // Updated heading
      description:
        "Centrox AI is your collaborator in AI innovation:", // Updated description
    },
    data: [
      {
        heading: "Proven Expertise", // Updated heading
        description:
          "Our team is based on seasoned AI researchers and engineers with deep knowledge of machine learning, NLP, CV, and other AI domains.", // Updated description
      },
      {
        heading: "Custom Solutions", // Updated heading
        description:
          "We build AI agents and workflows tailored to your unique needs and challenges.", // Updated description
      },
      {
        heading: "Collaborative Approach", // Updated heading
        description:
          "We work closely with your team, fostering knowledge exchange and a shared passion for AI advancement.", // Updated description
      },
      {
        heading: "Results-Oriented", // Updated heading
        description:
          "We're committed to delivering solutions that solve real-world problems and drive business growth.", // Updated description
      },
      {
        heading: "Transparency & Communication", // Updated heading
        description:
          "We maintain open communication throughout the entire development process, keeping you informed and involved every step of the way.", // Updated description
      },
      {
        heading: "Focus on Innovation", // Updated heading
        description:
          "We're constantly exploring the latest AI research and techniques to ensure your solutions are at the forefront of technology.", // Updated description
      },
    ],
    btnText: "Book A Call To Discuss More", // Updated button text
  };
  
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading={"Empower Your Business with Intelligent AI Agents"}
            description={
              "Partner with Centrox AI to develop intelligent AI agents and workflows that automate tasks, make decisions, and drive business growth. With our expertise in Agentic AI workflows, we can help you with developing custom solutions tailored to your specific needs."
            }
            btnText="Book A FREE 1:1 Session"
          />

          <LogosCarousel />
          <CommonDisplayCardsGrid data={benefitsData} />
          <CommonDisplayCardsGrid data={challengeData} />
          
          <StepperSection data={stepperData} />
          <CommonDisplayCardsGrid data={benefitsData2} />
          {/* <LogosSection data={techStackData} /> */}
          <PointsandImagesSection arrayData={arrayData} />
          {/* <LandingCaseStudySection /> */}
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
