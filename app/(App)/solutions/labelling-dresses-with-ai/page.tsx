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

import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import LandingLayout from "../../layoutPage";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp"
import solutionbg2 from "@/assets/solutions/solutionbg2.webp"

export default async function Page({ params }: { params: { slug: string } }) {


    const cardsSolutions = [
        {
          headerData: {
            tagText: "AI-powered Solution",
            headingText: "Our AI-powered solution offers",
            para1Text: "",
            heading2Text: "",
            para2Text: ""
          },
          data: [
            {
              icon: Icon, // Replace with the correct icon for Unmatched Accuracy
              heading: "Unmatched Accuracy",
              description:
                "Achieve measurement precision comparable to professional tailors, ensuring a perfect fit for your customers.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Data Security & Privacy
              heading: "Data Security & Privacy",
              description:
                "Implement robust measures to protect sensitive customer data, ensuring compliance with privacy regulations and building trust with your users.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Scalability
              heading: "Scalability",
              description:
                "Handle large volumes of measurements efficiently, supporting your business growth and providing a seamless experience even during peak shopping periods.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Integration
              heading: "Integration",
              description:
                "Seamlessly integrate the tool into your existing e-commerce platform or mobile app, enhancing your customer journey and providing a competitive advantage.",
              linkText: "",
              linkWithIcon: true,
            }
          ],
          caption: "",
          btnText: "Get Free Body Measurements"
        }
      ];
      



      const challengeData = [
        {
          headerData: {
            tagText: "Attention",
            headingText: "The Challenge of Manual Product Tagging",
            para1Text:
              "Is manual product tagging slowing down your e-commerce growth?",
            para2Text:
              "The fashion industry is dynamic and fast-paced. New styles, trends, and product variations emerge constantly, making it challenging to keep your product catalog up-to-date and organized. Manual product tagging, while necessary, can be a significant bottleneck for your business.",
            heading2Text: "",
          },
          data: [
            {
              icon: Icon, // Replace with the correct icon for Time-Consuming & Labor-Intensive
              heading: "Time-Consuming & Labor-Intensive",
              description:
                "Assigning tags and attributes to each product manually is a tedious and time-consuming process, requiring significant human resources and effort.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Prone to Human Error
              heading: "Prone to Human Error",
              description:
                "Manual labeling is susceptible to inconsistencies, inaccuracies, and subjective interpretations, leading to mislabeled products and a frustrating user experience.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Limited Scalability
              heading: "Limited Scalability",
              description:
                "As your product catalog grows, manual tagging becomes increasingly unsustainable, hindering your ability to expand your offerings and reach new customers.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Impact on Search & Discovery
              heading: "Impact on Search & Discovery",
              description:
                "Inaccurate or incomplete product data can negatively affect search relevance and product recommendations, leading to missed sales opportunities.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption:
            "Centrox AI's image labeling tool addresses these pain points head-on, providing an AI-powered solution to automate and streamline your product tagging process.",
          btnText: "Try It Yourself",
        },
      ];
      const cardSection2data=[
        {
          headerData: {
            tagText: "Transformation",
            headingText: "Transform Your E-commerce",
            para1Text:
              "Our AI image labeling solution delivers tangible benefits for your business.",
            para2Text:
              "",
            heading2Text: "",
          },
          data: [
            {
              icon: Icon, // Replace with the correct icon for Streamline Catalog Management
              heading: "Streamline Catalog Management",
              description:
                "Automate product tagging, saving time and resources while ensuring consistency and accuracy across your catalog.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Improve Search & Discovery
              heading: "Improve Search & Discovery",
              description:
                "Enhance search relevance and accuracy, helping customers find the products they're looking for quickly and easily, leading to increased conversions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Reduce Returns
              heading: "Reduce Returns",
              description:
                "Minimize returns due to product misrepresentation by providing accurate product attributes.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon, // Replace with the correct icon for Accelerate Time-to-Market
              heading: "Accelerate Time-to-Market",
              description:
                "Quickly onboard new products and update existing ones with minimal manual effort.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption:
            "",
          btnText: "Check Out Free Trial",
        },
      ];
      

  const questions = [
    {
      question: "What kind of data do you need to train a custom chatbot?",
      answer:
        "To train a custom chatbot, we primarily use your business’s proprietary data, such as customer interactions, FAQs, product information, support tickets, and knowledge base. The richer and more specific the data, the better the chatbot can understand and respond to your customers with accurate, contextually appropriate answers.",
    },
    {
      question: "How long does it take to develop a custom chatbot?",
      answer:
        "The timeline depends on the complexity of the project, the level of customization required, and the integration needs. Typically, development can range from 4 to 12 weeks, including the design, training, testing, and deployment phases.",
    },
    {
      question: "What is the cost of custom chatbot development?",
      answer:
        "Our pricing is tailored to your specific requirements, factoring in aspects like the complexity of conversational flows, integrations, LLM fine-tuning, and ongoing maintenance. Contact us for a detailed estimate based on your needs.",
    },
    {
      question: "How do you ensure data security and privacy during the development process?",
      answer:
        "We adhere to stringent security protocols to ensure the safety of your data. This includes encryption, access control, and compliance with global data privacy regulations like GDPR. We also implement secure API practices and conduct regular security audits to mitigate risks.",
    },
    {
      question: "What level of involvement will my team have in the project?",
      answer:
        "We collaborate closely with your team throughout the project to ensure the chatbot aligns with your goals and vision. Your input is crucial during the needs assessment, design, and testing phases, and we provide regular updates to ensure transparency and effective communication.",
    },
    {
      question: "Can you help us with ongoing chatbot maintenance and updates?",
      answer:
        "Yes, we offer ongoing maintenance and support services to keep your chatbot up-to-date and performing optimally. This includes regular updates, fine-tuning based on user feedback, and continuous monitoring to ensure the chatbot adapts to evolving business needs.",
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
    heading: "Let AI Label Your Fashion E-Commerce Products",
    description:
      "Streamline your fashion e-commerce with Centrox AI's image labeling tool. Automate product tagging, improve search accuracy, and deliver a better shopping experience.",
    btnText: "Try It For FREE",
    includeDots: false,
    img: serviceHeroImg,
    reverse: false,
  };
  
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "The Centrox AI Advantage",
      description: "We're your trusted partner in AI innovation:",
    },
    data: [
      {
        heading: "Deep Expertise",
        description:
          "Our team comprises seasoned AI researchers and engineers with a proven track record in AI solutions and services.",
      },
      {
        heading: "Custom Solutions",
        description:
          "We tailor our technology to your specific needs and integrate seamlessly with your existing systems.",
      },
      {
        heading: "Collaborative Approach",
        description:
          "We work closely with your team, fostering knowledge exchange and a shared passion for AI advancement.",
      },
      {
        heading: "Results-Oriented",
        description:
          "We're committed to delivering solutions that solve real-world problems and drive business growth.",
      },
      {
        heading: "Transparency & Communication",
        description:
          "We maintain open communication throughout the entire development process, keeping you informed and involved every step of the way.",
      },
    ],
    btnText: "Book A Call Today",
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
          <CommonDisplayCardsGrid
            data={cardSection2data}
          />
          <LandingSolutionsSection/>
          <CommonDisplayCardsGrid
            data={cardsSolutions}
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
          <LandingIndustriesSection/>
      
         
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
          <IndustryBanner heading="Revolutionize your Business 
with AI-Powered Body Measurements" description="Schedule a technical discussion with our experts to learn how our tool can be integrated into your existing systems." btnText="Book a Technical Demo" isBooking/>
        </main>
      </LandingLayout>
    </div>
  );
}
