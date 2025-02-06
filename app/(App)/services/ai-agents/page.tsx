//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import Icon4 from "@/assets/Icon-4.svg";
import Icon5 from "@/assets/Icon-5.svg";
import Icon9 from "@/assets/Icon-9.svg";

import Icon10 from "@/assets/Icon-13.svg";
import Icon11 from "@/assets/Icon-11.svg";
import Icon12 from "@/assets/Icon-12.svg";
import Icon13 from "@/assets/Icon-13.svg";
import Icon14 from "@/assets/Icon-14.svg";
import Icon7 from "@/assets/Icon-7.svg";
import Icon6 from "@/assets/Icon-6.svg";


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
import AIagent from "@/assets/Agentic AI1.svg"
import goal_oriented from "@/assets/bentobox/Goal Oriented.svg"
import langchain from "@/assets/bentobox/Langchain framework.svg"
import dataanalysis from "@/assets/bentobox/Data Analysis & Insights-1.svg"
import knowledgable from "@/assets/bentobox/Knowledge graphs & reasoning.svg"
import Head from "next/head";
import type { Metadata } from "next";
export const metadata:Metadata = {
  title: "Empower Your Business with Agentic AI Solutions | Centrox AI",
  description: "Develop intelligent AI agents and workflows to automate tasks, make data-driven decisions, and grow for scalable solutions. Book a free session today.",
  alternates: {
    canonical: "https://centrox.ai/services/ai-agents",
  },
};
export default async function Page({ params }: { params: { slug: string } }) {
  const benefitsData = [
    {
      headerData: {
        tagText: "Challenges",
        headingText: "The Ultimate Challenge for AI", // Updated heading
        para1Text:
          "While large language models (LLMs) have made significant strides in natural language understanding and generation, they often fall short when faced with complex, real-world tasks that demand more than just linguistic capabilities. Traditional automation tools and even powerful LLMs often fall short when it comes to handling the complex, dynamic nature of real-world tasks.",
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
          alt: "Adapt and Learn icon", // Alt text based on heading
        },
        {
          icon: Icon13,
          heading: "Make Autonomous Decisions", // Updated heading
          description:
            "They rely on predefined rules or human intervention, hindering their ability to operate independently and make intelligent choices in real-time.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Make Autonomous Decisions icon", // Alt text based on heading
        },
        {
          icon: Icon14,
          heading: "Collaborate Effectively", // Updated heading
          description:
            "They operate in isolation, unable to coordinate actions or share information with other systems to achieve complex goals.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Collaborate Effectively icon", // Alt text based on heading
        },
      ]
,      
      caption: "Centrox AI can help in building intelligent AI agents that overcome these limitations. Our solutions empower you to automate intricate processes, make data-driven decisions at scale, and achieve unprecedented levels of efficiency.",
      btnText: "Schedule 1:1 Session", // Updated button text
    },
  ];
  const benefitsData2 = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "How Agentic AI Can Benefit You?", // Updated heading
        para1Text:
          "Imagine a workforce augmented by intelligent AI agents that can", // Updated para1Text
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
          alt: "Automate Complex, End-to-End Processes icon", // Alt text based on heading
        },
        {
          icon: Icon13,
          heading: "Make Data-Driven Decisions at Scale", // Updated heading
          description:
            "Analyze vast amounts of data in real-time, identify patterns, and make informed decisions, enabling you to respond quickly to market changes and opportunities.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Make Data-Driven Decisions at Scale icon", // Alt text based on heading
        },
        {
          icon: Icon14,
          heading: "Enhance Customer Experiences", // Updated heading
          description:
            "Provide personalized and responsive interactions with customers through AI-powered chatbots and virtual assistants, improving satisfaction and loyalty.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Enhance Customer Experiences icon", // Alt text based on heading
        },
        {
          icon: Icon12,
          heading: "Drive Innovation", // New heading
          description:
            "Unlock new possibilities for product development and service delivery through intelligent automation and data-driven insights.", // New description
          linkText: "",
          linkWithIcon: true,
          alt: "Drive Innovation icon", // Alt text based on heading
        },
        {
          icon: Icon10,
          heading: "Achieve Unprecedented Efficiency", // New heading
          description:
            "Streamline operations, reduce manual effort, and optimize resource allocation, leading to significant cost savings and improved productivity.", // New description
          linkText: "",
          linkWithIcon: true,
          alt: "Achieve Unprecedented Efficiency icon", // Alt text based on heading
        },
      ]
,      
      caption:
        "Agentic AI can do this and a lot more. All you need is the right team to help you build your intelligent AI agents. We can help!", // Updated caption
      btnText: "Book Your 1:1 Session", // Updated button text
    },
  ];
  const benefitsData3 = [
    {
      headerData: {
        tagText: "Key Characteristics",
        headingText: "Key Characteristics of AI Agents", // Updated heading
        para1Text:
          "", // Updated para1Text
        heading2Text: "", // Removed unnecessary second heading
      },
      data: [
        {
          icon: null,
          heading: "Goal-Oriented", // Updated heading
          description:
            "AI agents are designed with specific goals in mind, whether it's maximizing customer satisfaction, optimizing supply chains, or detecting fraud.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: goal_oriented,
          alt: "Goal Oriented AI Agents", // Left blank for null icon
        },
        {
          icon: Icon13,
          heading: "Autonomous", // Updated heading
          description:
            "AI agents can operate independently, making decisions and taking actions without constant human supervision.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Autonomous icon", // Alt text based on heading
        },
        {
          icon: Icon9,
          heading: "Adaptive", // Updated heading
          description:
            "AI agents can learn from their experiences and adjust their behavior to achieve their goals in dynamic environments.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Adaptive icon", // Alt text based on heading
        },
        {
          icon: Icon6,
          heading: "Collaborative", // Updated heading
          description:
            "AI agents can communicate and cooperate with other AI agents to achieve complex, multi-step tasks.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Collaborative icon", // Alt text based on heading
        },
        {
          icon: Icon7,
          heading: "Explainable", // Updated heading
          description:
            "AI agents provide insights into their decision-making processes, promoting transparency and trust.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Explainable icon", // Alt text based on heading
        },
      ]
,      
      caption:
        "", // Updated caption
      btnText: "", // Updated button text
    },
  ];
  const benefitsData4 = [
    {
      headerData: {
        tagText: "AI Workflows",
        headingText: "Orchestrating Intelligent Action", // Updated heading
        para1Text:
          "", // Updated para1Text
        heading2Text: "", // Removed unnecessary second heading
      },
      data: [
        {
          icon: Icon12,
          heading: "Defined Roles & Responsibilities", // Updated heading
          description:
            "AI workflows define clear roles and responsibilities for each agent within the system, ensuring smooth operations and goal alignment.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Defined Roles & Responsibilities", // Alt text based on heading
        },
        {
          icon: Icon13,
          heading: "Facilitated Communication", // Updated heading
          description:
            "AI workflows facilitate communication and data exchange between agents, ensuring collaboration and synergy across the system.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Facilitated Communication", // Alt text based on heading
        },
        {
          icon: Icon7,
          heading: "Dynamic Decision-Making", // Updated heading
          description:
            "Workflows enable dynamic decision-making based on real-time data and feedback, allowing AI agents to adapt to changes and optimize outcomes.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Dynamic Decision-Making", // Alt text based on heading
        },
        {
          icon: Icon9,
          heading: "Scalability & Fault Tolerance", // Updated heading
          description:
            "AI workflows ensure scalability and fault tolerance, allowing the system to handle complex and demanding workloads without disruption.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Scalability & Fault Tolerance", // Alt text based on heading
        },
      ]
,      
      caption:
        "", // Updated caption
      btnText: "", // Updated button text
    },
  ];
  const benefitsData5 = [
    {
      headerData: {
        tagText: "Key Technologies",
        headingText: "Key Technologies Powering Agentic AI", // Updated heading
        para1Text:
          "", // Removed unnecessary first paragraph
        heading2Text: "", // Removed unnecessary second heading
      },
      data: [
        {
          icon: null,
          heading: "Knowledge Graphs & Reasoning", // Updated heading
          description:
            "Allow agents to store and reason about complex relationships between entities and concepts, enabling intelligent decision-making.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          alt: "Interconnected nodes illustrating knowledge graphs for reasoning and intelligent decisions", // Empty alt text as icon is null
          bentoImage: knowledgable,
        },
        {
          icon: Icon12,
          heading: "Reinforcement Learning", // Updated heading
          description:
            "Agents learn through trial and error, optimizing their actions to maximize rewards and minimize penalties.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Reinforcement Learning", // Alt text based on heading
        },
     
        {
          icon: Icon13,
          heading: "Natural Language Processing (NLP)", // Updated heading
          description:
            "Enables agents to understand and respond to human language, facilitating seamless communication and collaboration.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Natural Language Processing (NLP)", // Alt text based on heading
        },
        {
          icon: null,
          heading: "LangChain Framework", // Updated heading
          description:
            "A powerful framework for developing applications powered by language models, enabling seamless interaction with various tools and data sources.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          alt: "interconnected data nodes representing the LangChain framework for developing language model applications.", // Empty alt text as icon is null
          bentoImage: langchain,
        },
      ],
      
      caption: "", // No caption needed
      btnText: "Book A Call Now", // Updated button text
    },
  ];
  
  
  
  const challengeData = [
    {
      headerData: {
        tagText: "Use Cases",
        headingText: "Use Cases We’ve Worked On", // Updated heading
        para1Text:
          "Centrox AI has the capability to design, build, and deploy AI agents and workflows that address your specific needs. Our experience in Agentic AI so far incorporates various domains and industries.", 
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
          colSpan: 1,
          alt: "Customer Service & Support", // Alt text based on heading
        },
        {
          icon: null,
          heading: "Data Analysis & Insights", // Updated heading
          description:
            "AI agents that extract valuable information from large datasets, identify trends, and generate actionable insights to inform your strategic decision-making.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          alt: "Representing data analysis and AI agents extracting trends and actionable information", // Empty alt text as icon is null
          bentoImage: dataanalysis,
        },
        {
          icon: Icon11,
          heading: "Process Automation", // Updated heading
          description:
            "Streamline and optimize your workflows with AI agents that perform repetitive tasks, manage complex processes, and make data-driven decisions, freeing up your team for higher-value activities.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Process Automation", // Alt text based on heading
        },
        {
          icon: Icon4,
          heading: "Recommendation Engines", // Updated heading
          description:
            "Deliver personalized recommendations to your customers, boosting engagement and sales.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Recommendation Engines", // Alt text based on heading
        },
        {
          icon: Icon5, // Replace this icon with the appropriate one for Fraud Detection & Prevention
          heading: "Fraud Detection & Prevention", // Updated heading
          description:
            "AI agents that monitor transactions, identify suspicious activity, and prevent fraud in real-time.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Fraud Detection & Prevention", // Alt text based on heading
        },
      ],
      
      caption:
        "Having said that, no two use cases are the same. Therefore, we work closely with you to understand your unique challenges and design AI agents that align with your business goals and technical requirements.", // Updated caption
      btnText: "Discuss Your Business Goals", // Updated button text
    },
  ];
  

  const questions = [
    {
      question: "What Are the Real-World Limitations of LLMs in Task Automation, and How Do Agentic AI Solutions Address Them?",
      answer:
        "Agentic AI surpasses the limitations of standard LLMs, which often struggle with complex, evolving tasks that require learning from experience. Unlike LLMs that rely on static responses, AI agents can adapt, learn over time, and make autonomous decisions, enabling them to handle unpredictable real-world scenarios.",
    },
 
    {
      question: "What Steps Are Involved in Developing a Scalable AI Workflow That Integrates Multiple AI Agents?",
      answer:
        "Creating a scalable AI workflow involves defining roles, facilitating data flow between agents, and ensuring fault tolerance. Using orchestration tools, we design workflows that allow agents to communicate and collaborate, dynamically adjusting based on real-time data to handle complex multi-step tasks efficiently.",
    },
    {
      question: "How Do AI Agents Ensure Transparency in Decision-Making to Gain Stakeholder Trust?",
      answer:
        "Transparency is built into AI agents through explainability features that provide clear insights into decision-making processes. By using knowledge graphs and advanced reasoning techniques, agents can articulate the rationale behind actions, promoting trust and allowing you to trace decision paths with clarity.",
    },
    {
      question: "What Kind of Infrastructure is Required to Deploy and Scale Agentic AI Systems Efficiently?",
      answer:
        "Deploying Agentic AI requires a well-structured infrastructure, including distributed systems, microservices architecture, and cloud or on-premise orchestration tools. This setup allows for scalable, fault-tolerant operations, ensuring that AI agents can handle large volumes of data and complex tasks without downtime.",
    },
    {
      question: "How Can Agentic AI Integrate with Existing Systems to Improve Operational Efficiency Without Causing Disruptions?",
      answer:
        "Agentic AI is designed to seamlessly integrate with existing systems, using APIs, microservices, and modular architecture. This ensures that AI agents can function alongside legacy systems, allowing incremental upgrades without disrupting current workflows while boosting overall operational efficiency.",
    },
    {
      question: "What Are the Best Practices for Testing and Validating the Performance of AI Agents in Complex Environments?",
      answer:
        "Testing involves a rigorous validation phase across multiple scenarios, ensuring reliability and accuracy. This includes setting up CI/CD pipelines for continuous testing, real-world simulation environments, and A/B testing for performance benchmarking, all aimed at minimizing biases and ensuring consistent results under varying conditions.",
    },
  ];
  
  const techStackData = [
    {
      title: "Foundation Models",
      content: [
        {
          alt: "Llama Foundation Model",
          caption: "Llama",
          img: liama,
        },
        {
          alt: "Falcon Foundation Model",
          caption: "Falcon",
          img: falcon,
        },
        {
          alt: "Qwen Foundation Model",
          caption: "Qwen",
          img: gptneox,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "PyTorch Framework",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Hugging Face Transformers Framework",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "Tensorflow Framework",
          caption: "Tensorflow",
          img: tensorflow,
        },
      ],
    },
    {
      title: "Infrastructure",
      content: [
        {
          alt: "AWS Infrastructure",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Azure Infrastructure",
          caption: "Azure",
          img: azure,
        },
        {
          alt: "Google Cloud Infrastructure",
          caption: "Google Cloud",
          img: googlecloud,
        },
      ],
    },
    {
      title: "MLOps Tools",
      content: [
        {
          alt: "MLflow Tool",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Kubeflow Tool",
          caption: "Kubeflow",
          img: kubeflow,
        },
      ],
    },
  ];
  
  const stepperData = {
    heading: "How We Build Agentic AI?", // Updated heading
    description:"We follow a structured, iterative process to ensure the success of your AI agent projects.",
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
    btnText: "Get Started Today",
    alt:"AI Agent Building Process" // Updated button text
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
     
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading={"Empower Your Business with Intelligent AI Agents"}
            description={
              "Partner with Centrox AI to develop intelligent AI agents and workflows that automate tasks, make decisions, and drive business growth. With our expertise in Agentic AI workflows, we can help you with developing custom solutions tailored to your specific needs."
            }
            btnText="Book A FREE 1:1 Session"
            bgimage1={servicebg}
            img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/services/Agentic+AI1.svg"}
            bgClassName="opacity-60" 
            alt="Structure and functioning of AI agents"
       
          />
          
          <LogosCarousel />
          <CommonDisplayCardsGrid data={benefitsData} gridCols={3} />
          <IndustryBanner heading="Understanding the Agentic AI Paradigm" description="AI agents represent a significant advancement in artificial intelligence, moving beyond passive tools to active, intelligent entities that can operate autonomously and collaborate effectively."/>
          <CommonDisplayCardsGrid data={benefitsData3} resizeableCardsLayout gridCols={3} />
          <CommonDisplayCardsGrid data={benefitsData4} />
          <CommonDisplayCardsGrid data={benefitsData5} resizeableCardsLayout gridCols={3} />
          
          <CommonDisplayCardsGrid data={challengeData} resizeableCardsLayout gridCols={3} />
          
          <StepperSection data={stepperData} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results."
            }
          />
          <CommonDisplayCardsGrid data={benefitsData2} />
          <PointsandImagesSection arrayData={arrayData} />
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner heading="Talk to Our AI Expert" description="Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment." btnText="Book 1:1 Call" isBooking/>
        </main>
     
    </div>
  );
}
