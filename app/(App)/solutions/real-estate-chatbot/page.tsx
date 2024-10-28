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


import ChallengesSection from "@/views/ServicePageViews/ChallengesSection";
import BenefitSection from "@/views/ServicePageViews/BenefitSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon from "@/assets/Icon.webp";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import Icon4 from "@/assets/Icon-4.webp";
import Icon6 from "@/assets/Icon-6.webp";
import Icon9 from "@/assets/Icon-9.webp";

import Icon10 from "@/assets/Icon-10.webp";
import Icon11 from "@/assets/Icon-11.webp";
import Icon12 from "@/assets/Icon-12.webp";
import Icon13 from "@/assets/Icon-13.webp";
import Icon14 from "@/assets/Icon-14.webp";
import liama from "@/assets/liama.webp";
import falcon from "@/assets/falcon.webp";
import qwen from "@/assets/qwen.webp";

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
import serviceHeroImg from "@/assets/serviceHeroImg.webp";
import rasa from "@/assets/Rasa-white.webp"
import dialogflow from "@/assets/dialogflow.svg"
import IndustryBanner from "@/Components/common/IndustryBanner";
import LandingLayout from "../../layoutPage";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp"
import solutionbg2 from "@/assets/solutions/solutionbg2.webp"


export default async function Page({ params }: { params: { slug: string } }) {


  const cardsSolutions = [
    {
      headerData: {
        tagText: "Evaluation",
        headingText: "Document Evaluation",
        para1Text:
          "Our chatbot generates Gen AI responses to enhance real estate processes.",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for In-Depth Document Analysis
          heading: "In-Depth Document Analysis",
          description:
            "Upload real estate documents for a thorough breakdown of key details, powered by custom machine learning models tailored for the industry.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Rapid Response Capabilities
          heading: "Rapid Response Capabilities",
          description:
            "Get quick, accurate answers to your inquiries without delays.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Tailored Insights
          heading: "Tailored Insights",
          description:
            "Receive personalised guidance based on your specific documents, enhancing the decision-making process.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Market Intelligence
          heading: "Market Intelligence",
          description:
            "Stay informed about current trends and property evaluations to refine your investment strategies.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Try it for Free",
    },
  ];
  
  
      
  // const stepperdata = {
  //   heading: "Our Development Process",
  //   description:
  //     "At Centrox AI, our Smart Chatbot has been meticulously engineered to address challenges in document analysis and interpretation. Here’s a detailed look at our development process, incorporating technical insights:",
  //   data: [
  //     {
  //       title: "Assess Requirements",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69ae",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We start by thoroughly analyzing user needs, document types, and unique challenges in document handling. This helps us define specific requirements for interaction and insight extraction that shape the chatbot's development.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Integrate Technology",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69af",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We incorporate GPT-3.5 for natural language processing, with Langchain Libraries for robust prompt engineering. These tools integrate seamlessly into our system, creating a solid foundation for accurate responses.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Custom Prompt Design",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b0",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "Our team designs custom prompts tailored to each document type and user scenario. This ensures the chatbot can provide precise, context-relevant answers based on the actual content of the documents.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Train and Fine-Tune Models",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b1",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "Using a range of document datasets, we train and fine-tune the chatbot. This process enhances its ability to summarize and accurately address user queries, adapting to various document nuances.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Deploy Solution",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b2",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "After rigorous testing, the chatbot is deployed on our platform, optimized for scalability and designed to support a growing user base seamlessly.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Ongoing Optimization",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b3",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We continually monitor performance, gathering insights from user interactions to make regular adjustments. This ensures the chatbot stays responsive and increasingly effective.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //   ],
  //   btnText: "Let's Discuss Your Project",
  // };
  
  


  const challengeData = [
    {
      headerData: {
        tagText: "The problem",
        headingText: "Tackling Real Estate Challenges Head-On",
        para1Text:
          "In the fast-paced world of real estate, inefficiencies can lead to missed opportunities. Many professionals face:",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for Fragmented Information
          heading: "Fragmented Information",
          description:
            "Accessing scattered sources complicates critical decisions, causing delays and errors.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Inefficient Reviews
          heading: "Inefficient Reviews",
          description:
            "Time-consuming document evaluations can slow down operations and impact profitability.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Inaccurate Assessments
          heading: "Inaccurate Assessments",
          description:
            "Manual analyses can introduce errors, leading to costly mistakes.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Our chatbot ensures that after in-depth analysis, your decisions are based on reliable data.",
      btnText: "Get A Free Trial",
    },
  ];
  
  const cardsData2 = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "With Centrox AI, You Benefit From:",
        para1Text: "",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for Data Integrity
          heading: "Data Integrity",
          description:
            "Our algorithms ensure high-quality assessments, minimising risks.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Operational Efficiency
          heading: "Operational Efficiency",
          description:
            "Engage with our chatbot for immediate insights, freeing your team to focus on high-impact tasks.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Fast Security Measures
          heading: "Fast Security Measures",
          description:
            "We prioritise the protection of your sensitive data, adhering to the highest privacy standards.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Scalable Solutions
          heading: "Scalable Solutions",
          description:
            "Adapt effortlessly to increasing demands while maintaining performance.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Talk to Our AI Expert",
    },
  ];
  const cardsData3 = [
    {
      headerData: {
        tagText: "",
        headingText: "Empowering Real Estate Professionals",
        para1Text: "You're One Step Away from Real Estate Innovation. Our chatbot serves diverse stakeholders in the industry.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for Real Estate Agents
          heading: "Real Estate Agents",
          description:
            "Facilitate efficient property evaluations, improving client interactions and accelerating transactions.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Investors
          heading: "Investors",
          description:
            "Make data-driven decisions and enhance portfolio management with insightful analyses.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Construction Firms
          heading: "Construction Firms",
          description:
            "Streamline document reviews to maintain project timelines and ensure compliance.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Agencies
          heading: "Agencies",
          description:
            "Provide immediate support through our chatbot, allowing agents to concentrate on closing deals.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "Regardless of your role, Centrox AI enhances your capabilities and drives growth.",
      btnText: "Schedule a Demo",
    },
  ];
  

  const questions = [
    {
      question: "How does Centrox AI ensure the accuracy of document analysis in real estate?",
      answer: 
        "The chatbot made by our AI experts leverages advanced machine learning models tailored to real estate, ensuring accurate insights. The chatbots we deliver are equipped with the ability to analyze the critical details found within the document. Based on this in-depth analysis, it can also provide reliable recommendations.",
    },
    {
      question: "What types of documents can I upload for analysis?",
      answer: 
        "This real estate chatbot prepared by our experts at Centrox AI allows users to upload a wide range of documents related to real estate, including lease contracts, purchase agreements, appraisal reports, and construction project files. This advanced chatbot speeds up the process for analysis and saves a lot of time.",
    },
    {
      question: "How quickly can I get answers after uploading my documents?",
      answer: 
        "We understand the importance of time for businesses, especially how it can provide you with a competitive edge. Therefore, we have developed our AI assistant chatbot in an optimized manner so that it can deliver an analysis report instantly after a document is uploaded. This analysis report also provides users with recommendations, which can yield fruitful results.",
    },
    {
      question: "How does Centrox AI handle data security for my sensitive real estate documents?",
      answer: 
        "At Centrox, data security is our priority, as we understand the potential consequences of a data privacy breach for your business. Therefore, our AI experts ensure adherence to the highest industry standards to guarantee complete data protection for users.",
    },
    {
      question: "Can Centrox AI’s chatbot assist in understanding current real estate market trends?",
      answer: 
        "Yes, the chatbot provides market intelligence insights, helping you stay updated on trends, valuations, and investment opportunities, enabling you to make strategic decisions.",
    },
    {
      question: "What makes Centrox AI different from other AI solutions in real estate?",
      answer: 
        "Centrox AI combines AI expertise with real estate industry knowledge, creating a focused, customized solution. Our commitment to measurable outcomes, collaborative development, and transparent communication distinguishes us from others.",
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
          img: qwen,
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
      title: "Conversational AI Platforms",
      content: [
        {
          alt: "Icon",
          caption: "Rasa",
          img: rasa,
        },
        {
          alt: "Icon",
          caption: "Dialogflow",
          img: dialogflow,
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
    heading: "Your Real Estate Analysis with Gen AI",
    description:
      "We deliver a chatbot that empowers individuals to analyse documents quickly and accurately. By simply uploading your files, gain insights and actionable recommendations regarding land purchases, sales, rents, and construction projects.",
    btnText: "Try it for Free",
    includeDots: false,
    img: serviceHeroImg,
    reverse: false,
  };
  
  const arrayData = {
    headerData: {
      tagText: "Our Commitment",
      heading: "Why Centrox AI Stands Out?",
      description:
        "Our commitment to excellence in AI and real estate innovation sets us apart as your trusted partner.",
    },
    data: [
      {
        heading: "Expertise in AI and Real Estate",
        description:
          "Our team comprises specialists with a deep understanding of both domains, ensuring practical, high-quality solutions.",
      },
      {
        heading: "Customised Solutions",
        description:
          "We adapt our technology to meet your unique needs, allowing for smooth integration into existing systems.",
      },
      {
        heading: "Collaborative Development",
        description:
          "We work alongside your team to align our solutions with your strategic goals.",
      },
      {
        heading: "Results-Oriented Approach",
        description:
          "Our focus is on delivering measurable outcomes that drive efficiency and support growth.",
      },
      {
        heading: "Transparent Engagement",
        description:
          "We maintain open communication throughout our partnership, keeping you informed at every stage.",
      },
    ],
    btnText: "Book a 1-1 Session",
  };
  
  
  
 
    
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} bgimage1={solutionbg1} bgimage2={solutionbg2} bgClassName="opacity-30" />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          {/* <LandingSolutionsSection/> */}
          <CommonDisplayCardsGrid
            data={cardsSolutions}
          /> 
          {/* <StepperSection data={stepperdata}/> */}
          <CommonDisplayCardsGrid
            data={cardsData2}
          /> 
            <CommonDisplayCardsGrid
            data={cardsData3}
          /> 
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots:"
            }
            caption=""
            btnText="Let’s Discuss Further"
          />
          {/* <LandingIndustriesSection/> */}
      
         
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
          <IndustryBanner heading="Talk to Our AI Expert" description="Ready to enhance your real estate analysis with AI?
Schedule a consultation with our experts to explore how Centrox AI can elevate your operations." btnText="Lets Connect" isBooking/>
        </main>
      </LandingLayout>
    </div>
  );
}
