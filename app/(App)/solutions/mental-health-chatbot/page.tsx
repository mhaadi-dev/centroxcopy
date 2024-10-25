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
import rasa from "@/assets/Rasa-white.webp";
import dialogflow from "@/assets/dialogflow.svg";
import IndustryBanner from "@/Components/common/IndustryBanner";
import LandingLayout from "../../layoutPage";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp";
import solutionbg2 from "@/assets/solutions/solutionbg2.webp";

export default async function Page({ params }: { params: { slug: string } }) {
  const cardsSolutions = [
    {
      headerData: {
        tagText: "AI-powered Solution",
        headingText: "Our AI-powered solution offers",
        para1Text: "",
        heading2Text: "",
        para2Text: "",
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
        },
      ],
      caption: "",
      btnText: "Get Free Body Measurements",
    },
  ];

  const challengeData = [
    {
      headerData: {
        tagText: "The Problem",
        headingText: "Overcoming Obstacles in Emotional Support",
        para1Text:
          "In times of emotional distress, people often find themselves facing scattered information, long wait times for professional support, or inadequate resources. Traditional resources struggle with",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for Lack of Clarity
          heading: "Lack of Clarity",
          description:
            "General support systems often flood users with excessive, irrelevant information, which can add to their confusion.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Unfiltered Advice
          heading: "Unfiltered Advice",
          description:
            "Many chatbots provide vague or out-of-context responses, detracting from the user’s immediate needs.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Inappropriate Suggestions
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
        tagText: "A Solution",
        headingText:
          "Targeted, Boundaried Support with Centrox AI's Health Chatbot",
        para1Text:
          "Our AI health chatbot is built on advanced prompt engineering, ensuring it delivers precise, relevant responses and disregards any irrelevant queries. Here’s how we’ve structured this tool to offer the most value:",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon, // Replace with the correct icon for Laser-Focused Responses
          heading: "Laser-Focused Responses",
          description:
            "Users get answers to their queries that are straightforward and concise, reducing confusion and promoting clarity in times of distress.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for Boundaries in Place
          heading: "Boundaries in Place",
          description:
            "The chatbot will not attempt to address or provide advice on complex medical conditions or treatments—it remains firmly within the limits of general emotional support.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon, // Replace with the correct icon for No Medication Suggestions
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
      question:
        "How do you ensure data security and privacy during the development process?",
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
    heading: "Assistance for Emotional Support",
    description:
      "Centrox AI introduces an advanced mental health chatbot designed specifically to assist individuals who are upset and seeking general emotional support. This AI-driven tool provides quick, actionable guidance without the need for human interaction.",
    btnText: "Talk to Our Bot Now",
    includeDots: false,
    img: serviceHeroImg, // Ensure `serviceHeroImg` is the relevant image for this hero section
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
          <HeroSection
            {...heroData}
            bgimage1={solutionbg1}
            bgimage2={solutionbg2}
            bgClassName="opacity-30"
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={cardsData} />
          <LandingSolutionsSection />
          <CommonDisplayCardsGrid data={cardsSolutions} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots:"
            }
            caption=""
            btnText="Let’s Discuss Further"
          />
          <LandingIndustriesSection />

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
      </LandingLayout>
    </div>
  );
}
