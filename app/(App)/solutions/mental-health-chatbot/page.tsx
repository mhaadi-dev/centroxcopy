//@ts-nocheck


import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";


import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";


import Icon9 from "@/assets/Icon-9.svg";


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
import dialogflow from "@/assets/dialogflow.svg";
import IndustryBanner from "@/Components/common/IndustryBanner";

import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import solutionbg1 from "@/assets/solutions/solutionbg2.webp";
import solutionbg2 from "@/assets/solutions/solutionbg1.webp";
import IndustryPic1 from "@/assets/industry1.webp"
import emotionalsupporthero from "@/assets/solutions/Emotional Support.svg"
import Icon19 from "@/assets/Icon-19.webp"
import Icon23 from "@/assets/Icon-23.webp"
import Icon24 from "@/assets/Icon-24.webp"

import Icon22 from "@/assets/Icon-22.webp"
import Icon21 from "@/assets/Icon-21.webp"
import Icon25 from "@/assets/Icon-25.webp"
import Icon26 from "@/assets/Icon-26.webp"
import finance from "@/assets/Finance.webp"
import education from "@/assets/Education.webp"
import customerservice from "@/assets/customerservice.webp"
import langchain from "@/assets/langchain.webp"
import langgraph from "@/assets/langgraph.png"



export default async function Page({ params }: { params: { slug: string } }) {

  const challengeData = [
    {
      headerData: {
        tagText: "The Problem",
        headingText: "Overcoming Obstacles in Emotional Support",
        para1Text:
          "In times of emotional distress, people often find themselves facing scattered information, long wait times for professional support, or inadequate resources.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon23, // Replace with the correct icon for Lack of Clarity
          heading: "Lack of Clarity",
          description:
            "General support systems often flood users with excessive, irrelevant information, which can add to their confusion.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon19, // Replace with the correct icon for Unfiltered Advice
          heading: "Unfiltered Advice",
          description:
            "Many chatbots provide vague or out-of-context responses, detracting from the user’s immediate needs.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon24, // Replace with the correct icon for Inappropriate Suggestions
          heading: "Inappropriate Suggestions",
          description:
            "Some services may inadvertently give advice that’s beyond their scope, including medical guidance, which could mislead or overwhelm users.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI developed this chatbot to counter these challenges head-on, offering clear, boundary-driven assistance without prescribing medication or straying off-topic.",
      btnText: "Talk to Our Bot now",
    },
  ];
  const cardsData = [
    {
      headerData: {
        tagText: "Solutions",
        headingText:
          "Targeted, Boundaried Support with Centrox AI's Health Chatbot",
        para1Text:
          "Our AI health chatbot is built on advanced prompt engineering, ensuring it delivers precise, relevant responses and disregards any irrelevant queries. Below you can find how we’ve structured this tool to offer the most value.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon22, // Replace with the correct icon for Laser-Focused Responses
          heading: "Laser-Focused Responses",
          description:
            "Users get answers to their queries that are straightforward and concise, reducing confusion and promoting clarity in times of distress.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon25, // Replace with the correct icon for Boundaries in Place
          heading: "Boundaries in Place",
          description:
            "The chatbot will not attempt to address or provide advice on complex medical conditions or treatments—it remains firmly within the limits of general emotional support.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon21, // Replace with the correct icon for No Medication Suggestions
          heading: "No Medication Suggestions",
          description:
            "The chatbot is not designed to offer medical prescriptions or therapeutic treatments, ensuring users receive only appropriate guidance that aligns with their immediate emotional needs.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI’s chatbot counters these challenges head-on, providing clear, boundary-driven assistance without prescribing medication or straying off-topic.",
      btnText: "Get Instant Support",
    },
  ];
  const cardsData2 = [
    {
      headerData: {
        tagText: "Adaptable AI Solution",
        headingText: "What AI Solutions Can Do for you?",
        para1Text:
          "Centrox’s approach isn’t limited to health. The precision and expertise behind our chatbot can be applied to develop AI assistants for any service industry.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon26, // Replace with the correct icon for Contextual, Accurate Responses
          heading: "Contextual, Accurate Responses",
          description:
            "Bots that deliver the exact information needed, no more, no less, tailored to specific industry needs.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon25, // Replace with the correct icon for Defined Boundaries
          heading: "Defined Boundaries",
          description:
            "Just as our health chatbot stays within general emotional support, your service can have similarly clear operational limits for optimized user experience.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon9, // Replace with the correct icon for High Scalability
          heading: "High Scalability",
          description:
            "From handling a small user base to supporting a large-scale service operation, our chatbot technology adapts to your needs with ease.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI provides adaptable chatbot solutions for a wide range of service industries, ensuring contextual support and scalability.",
      btnText: "Know More",
    },
  ];
  
  const questions = [
    {
      question: "Can the chatbot handle multilingual support?",
      answer:
        "Yes, the chatbot developed by the AI experts at Centrox AI has the potential to handle multilingual support. If the model deployed in this chatbot is trained on the dataset of multiple languages, then this can enable the chatbot to extend its support to the customers in multiple languages according to their choice. This can significantly help in enhancing customer support by providing a reliable means that can serve its support to a diverse audience.",
    },
    {
      question: "How can I customize the chatbot for my specific industry?",
      answer:
        "If you are convinced of our potential, then you should definitely book your consultation session with the AI experts at Centrox AI to discuss the unique idea you have for your business. Our team will get in touch with you to understand your idea and requirements for your AI-powered business solutions, and will architect and design a customized solution for your particular requirements that will utilize the resources in the most optimized way.",
    },
    {
      question: "Does the chatbot offer round-the-clock assistance?",
      answer:
        "Yes, the AI assistant chatbot developed by the experts at Centrox AI possesses the ability to operate 24/7, ensuring continuous support without the need for additional staffing. This chatbot is a very ideal development, delivering customer service and support in industries where availability is critical.",
    },
    {
      question: "How does the chatbot handle complex queries or escalations?",
      answer:
        "If the chatbot prepared by Centrox AI encounters a question that falls outside the defined boundaries or requires more detailed and specialized assistance needing human involvement, it will instantly suggest the user seek further assistance from human support, ensuring that the complex query is dealt with the relevant care and attention it demands.",
    },
    {
      question: "What AI technology powers Centrox AI's chatbot?",
      answer:
        "The AI assistant chatbot prepared by our expert team at Centrox AI is powered by OpenAI, Anthropic and Llama, enabling advanced prompt engineering. This  OpenAI assistant is then fine-tuned to deliver accurate responses while being aware of defined boundaries. The Langchain libraries utilized enhance the chatbot's ability to manage conversations efficiently.",
    },
    {
      question: "Is Centrox AI’s chatbot suitable for other industries?",
      answer:
        "Yes, the AI chatbot developed by the Centrox AI expert team is highly adaptable and can be applied across multiple industries, including customer service, finance, and education. The design of this AI chatbot assistant holds the flexibility for industry-specific customizations, providing it versatility.",
    },
    {
      question: "How secure is the information I share with the Centrox AI chatbot?",
      answer:
        "The AI experts at Centrox AI realize the importance and sensitivity of ensuring security for users' confidential information. Therefore, our team prioritizes user privacy and collaborates effectively to deliver a solution that ensures promising encrypted data handling. We have designed our chatbot to maintain confidentiality and protection of users' information in all interactions.",
    },
    {
      question: "How do I get started with Centrox AI’s chatbot?",
      answer:
        "You can begin your journey of bringing your own business requirement-specific chatbot to reality by clicking on the 'Meet our Experts' button to interact with our team. Our team will closely work together to understand your business requirements, so they can architect and deliver the customized solution catering to your desired industry-specific queries.",
    },
  ];
  

  const techStackData = [
    {
      title: "Foundation Models",
      content: [
        {
          alt: "Llama",
          caption: "Llama",
          img: liama,
        },
        {
          alt: "Falcon",
          caption: "Falcon",
          img: falcon,
        },
        {
          alt: "Qwen",
          caption: "Qwen",
          img: qwen,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "PyTorch",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Hugging Face Transformers",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "Tensorflow",
          caption: "Tensorflow",
          img: tensorflow,
        },
      ],
    },
    {
      title: "Infrastructure",
      content: [
        {
          alt: "AWS",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Azure",
          caption: "Azure",
          img: azure,
        },
        {
          alt: "Google Cloud",
          caption: "Google Cloud",
          img: googlecloud,
        },
      ],
    },
    {
      title: "Conversational AI Platforms",
      content: [
        {
          alt: "Langchain",
          caption: "Langchain",
          img: langchain,
        },
        {
          alt: "LangGraph",
          caption: "LangGraph",
          img: langgraph,
        },
      ],
    },
    {
      title: "MLOps Tools",
      content: [
        {
          alt: "MLflow",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Kubeflow",
          caption: "Kubeflow",
          img: kubeflow,
        },
      ],
    },
  ];
  const heroData = {
    heading: "Assistance for Emotional Support",
    description:
      "Centrox AI introduces an advanced mental health chatbot designed specifically to assist individuals who are upset and seeking general emotional support. This AI-driven tool provides quick, actionable guidance without the need for human interaction.",
    btnText: "Talk to Our Bot Now",
    includeDots: false,
    img: emotionalsupporthero, // Ensure `serviceHeroImg` is the relevant image for this hero section
    reverse: false,
  };

  const arrayData = {
    headerData: {
      tagText: "Advantages",
      heading: "Why Centrox AI Stands Out?",
      description: "Centrox provides unmatched precision in chatbot design:",
    },
    data: [
      {
        heading: "Focused and Accurate Response",
        description:
          "The chatbot’s ability to respond accurately while rejecting irrelevant queries is driven by finely tuned AI models, enabling efficient, reliable communication.",
      },
      {
        heading: "Improvised Performance",
        description:
          "Whether your goal is improving customer service or offering industry-specific insights, we build AI solutions that fit seamlessly into your ecosystem.",
      },
      {
        heading: "User Controlled Conversation",
        description:
          "With our chatbot, you maintain full control over the scope of conversations, ensuring users stay on topic while receiving the most relevant information.",
      },
    ],
    btnText: "Book A Call Today",
  };
  
  const tabs = [
    {
      name: "Healthcare",
      href: "#",
      current: true,
      cta: "Get Started",
    },
    {
      name: "Customer Service",
      href: "#",
      current: false,
      cta: "Try For Free",
    },
    {
      name: "Finance",
      href: "#",
      current: false,
      cta: "Discover More",
    },
    {
      name: "Education",
      href: "#",
      current: false,
      cta: "Learn More",
    },
  ];
  
  const gradientCardData = [
    {
      image: IndustryPic1,
      data: [
        {
          heading: "Symptom Checks and Triage",
          description:
            "This marvellous AI chatbot can be used in the health sector for creating an engaging conversation with users to provide them with basic guidance for understanding their symptoms and recommending appropriate care. ",
        },
        {
          heading: "Mental Health Support",
          description:
            "The developed AI chatbot can be used as a mental health support chat assistant to provide you emotional support while you are going through a rough phase in your life.",
        },
        {
          heading: "Appointment Scheduling and Reminders",
          description:
            "In today's fast paced world, where time holds prime importance this AI enabled chatbot can assist in scheduling appointments along with giving reminders, so that your health doesnt get compromised.",
        },
      ],
    },
    {
      image: customerservice,
      data: [
        {
          heading: "24/7 Customer Support",
          description:
            "An efficient 24/7 customer support AI chatbot can significantly uplift the customer support services, with its prompt and focused response it can play a key role in strengthening service provider and client relations. ",
        },
        {
          heading: "Order Tracking and Status Updates",
          description:
            "AI Powered chatbot which comes with the ability to keep customers in the loop by continuously keeping them updated with their order status, along with providing them real-time updates about orders delivery time.",
        },
        {
          heading: "Product or Service Recommendations",
          description:
            "These days where everyone is falling short on time and have a brief attention span, having an AI assistant which can ensure product and service recommendation according to personalised interest can really encourage suggesting useful products. ",
        },
      ],
    },
    {
      image: finance,
      data: [
        {
          heading: "Account Overview and Balances",
          description:
            "These AI chatbots can be used for keeping a track of your account information that includes: balance amounts, recent transactions, and providing your account or IBAN number which can cater basic user queries related to account overview.",
        },
        {
          heading: "Fraud Alerts and Security Tips",
          description:
            "This automated assistant is intelligent enough to update you with the fraud and security tips to save you from any potential inconvenience which can result in loss of your valuable data or funds.",
        },
        {
          heading: "Bill Payment Assistance",
          description:
            "Our smart AI chatbot assistant can be used to help users in their bill payment procedure by continuously reminding them about bill payments after a specific time period,so that you never miss your deadline for bill payment.",
        },
      ],
    },
    {
      image: education,
      data: [
        {
          heading: "Homework Assistance and Academic Q&A",
          description:
            "This AI chatbot assistant has great capabilities to become your dependable study partner as it can help you with your particular queries, and can really provide a comprehensive and focused response for your specific queries.",
        },
        {
          heading: "Exam Preparation and Study Resources",
          description:
            "As a student while studying you require instant access to resources which have the ability to solve or answer your specific point of confusion, by suggesting relevant links and study material which can cover your confusion. ",
        },
        {
          heading: "Progress Tracking and Reminders",
          description:
            "The chatbot can help you to track your study performance, which can assist you in restructuring your strategy for having more focused and productive study sessions. This can also provide you reminders for studying so that you remain on your plan without getting distracted.",
        },
      ],
    },
  ];
  
  return (
    <div>
      
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            {...heroData}
            bgimage1={solutionbg1}
            bgimage2={solutionbg2}
            bgClassName="opacity-30"
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} gridCols={3}/>
          <CommonDisplayCardsGrid data={cardsData} gridCols={3}/>
          {/* <LandingSolutionsSection /> */}
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots:"
            }
            caption=""
            btnText="Let’s Discuss Further"
          />
          <CommonDisplayCardsGrid data={cardsData2} gridCols={3} />

          <LandingIndustriesSection gradientCardData={gradientCardData} tabs={tabs} isBookingButton btnText="Talk to Us Now" />

          <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner"
            }
          />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner
            heading="Create Your Custom AI Chatbot"
            description="Are you ready to develop a chatbot that delivers precise, focused support, no matter the industry?
            Get in touch with Centrox today to see how we can build a solution tailored to your needs."
            btnText="Book a Demo"
            isBooking
          />
        </main>
    
    </div>
  );
}
