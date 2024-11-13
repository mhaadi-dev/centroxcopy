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
import kubernetes from "@/assets/kubernetes-icon-white logo.webp"
import weightandbiases from "@/assets/evaluationlogos/wandb-dots-logo (1) 1.webp"
import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
import serviceHeroImg from "@/assets/serviceHeroImg.webp";
import rasa from "@/assets/Rasa-white.webp";
import dialogflow from "@/assets/dialogflow.svg";
import IndustryBanner from "@/Components/common/IndustryBanner";
import LandingLayout from "../../layout";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import snapmeasureHero from "@/assets/solutions/snapmeasureHero.webp";
import eggcrack from "@/assets/solutions/EggCrack.webp";
import strategy from "@/assets/solutions/Strategy.webp";

import Icon16 from "@/assets/Icon-16.webp"
import Icon17 from "@/assets/Icon-17.webp"
import Icon18 from "@/assets/Icon-18.webp"
import Icon53 from "@/assets/Icon-53.webp"
import Icon54 from "@/assets/Icon-54.webp"
import Icon55 from "@/assets/Icon-55.webp"
import Icon56 from "@/assets/Icon-56.webp"
import Icon57 from "@/assets/Icon-57.webp"
import gpt from "@/assets/gpt.webp"
import langchain from "@/assets/langchain.webp"
import tableau from "@/assets/tableau logo.webp"
import powerbi from "@/assets/powerbi.webp"
import realestatehero from "@/assets/realestate.webp"






export default async function Page({ params }: { params: { slug: string } }) {
    const benefitsData = [
        {
          headerData: {
            tagText: "Benefits",
            headingText: "Key Benefits for Real Estate Professionals",
            para1Text: "Partnering with Centrox AI empowers you to",
            heading2Text: "",
            para2Text: "",
          },
          data: [
            {
              icon: Icon16, // Replace with the correct icon for Competitive Edge
              heading: "Gain a Competitive Edge",
              description:
                "Leverage AI to differentiate your services, attract more clients, and close deals faster.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon17, // Replace with the correct icon for Streamlined Operations
              heading: "Streamline Operations",
              description:
                "Automate manual tasks, improve efficiency, and reduce operational costs.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon14, // Replace with the correct icon for Data-Driven Decisions
              heading: "Make Data-Driven Decisions",
              description:
                "Access real-time insights and analytics to inform your business strategies and investment decisions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon18, // Replace with the correct icon for Enhanced Customer Experiences
              heading: "Enhance Customer Experiences",
              description:
                "Deliver personalized recommendations and proactive support, building stronger relationships with clients.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption: "",
          btnText: "Let’s Discuss Your Vision",
        },
      ];
      

      const challengeData = [
        {
          headerData: {
            tagText: "Challenges",
            headingText: "The Fintech Frontier",
            para1Text: "Ready to transcend the limitations of traditional Fintech?",
            para2Text: "",
            heading2Text: "",
          },
          data: [
            {
              icon: eggcrack, // Information Overload
              heading: "Data Challenges",
              description:
                "The financial world is awash with data, but extracting actionable insights remains a challenge. Legacy systems, regulatory hurdles, and the demand for personalized experiences are just a few of the complexities you face.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: strategy, // Inefficient Processes
              heading: "Need for Dynamic Solutions",
              description:
                "Off-the-shelf AI models? They're often too generic, too rigid. You need solutions that are as dynamic and adaptable as the market itself. That's where Generative AI comes in.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption:
            "At Centrox AI, we're not just building models; we're crafting intelligent systems that understand, adapt, and evolve. We're here to help you navigate the complexities of fintech and unlock a new era of possibilities.",
          btnText: "Explore Generative AI Solutions for Fintech",
        },
      ];
      
      
  

      const questions = [
        {
          question: "What types of data can you use to build Generative AI models for fintech?",
          answer: "We work with a wide range of data types, including transactional data, customer profiles, financial market data, historical investment data, and textual data from sources such as news articles, customer interactions, and social media. Additionally, we can incorporate real-time data streams, enabling the AI models to deliver timely and relevant insights."
        },
        {
          question: "How do you ensure the accuracy and reliability of your Generative AI models?",
          answer: "We prioritize accuracy and reliability through rigorous model testing and validation. Our models undergo extensive training on diverse, high-quality datasets, followed by iterative refinement to ensure they meet specific performance criteria. We also continuously monitor the models post-deployment, making adjustments as needed to maintain optimal accuracy."
        },
        {
          question: "Can your AI solutions integrate with our existing financial systems and platforms?",
          answer: "Absolutely. Our Generative AI solutions are designed for seamless integration with your existing systems, whether you use traditional banking software, CRM platforms, or custom fintech applications. Our team will work with you to ensure a smooth and secure integration process, allowing our AI models to function alongside your current workflows."
        },
        {
          question: "How do you address potential biases in AI models for fintech?",
          answer: "We take a proactive approach to identifying and mitigating biases. This includes training our models on diverse datasets, conducting fairness testing, and implementing bias detection algorithms. Additionally, we continually monitor models in real-world use, making necessary adjustments to improve fairness and ensure ethical performance in compliance with industry regulations."
        },
        {
          question: "What kind of support do you offer after project completion?",
          answer: "We offer comprehensive post-project support, including monitoring, maintenance, and periodic model updates to adapt to new data and evolving requirements. Our support packages also include access to our experts for troubleshooting, optimization, and guidance on extending your AI capabilities as your business grows."
        },
      ];
      
  
  

  const cardsSolutions = [
    {
      headerData: {
        tagText: "AI-powered Solution",
        headingText: "Generative AI: Your Fintech Arsenal",
        para1Text: "We harness the power of Large Language Models (LLMs) to build solutions that redefine what's possible in fintech.",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: Icon53, // Replace with the correct icon for Personalized Financial Guides
          heading: "Personalized Financial Guides",
          description:
            "Imagine AI advisors that truly understand your customers. We build virtual assistants that offer tailored financial advice, investment recommendations, and educational content, all driven by the nuances of individual needs and risk profiles.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon57, // Replace with the correct icon for Customer Service, Reimagined
          heading: "Customer Service, Reimagined",
          description:
            "Forget scripted chatbots. Our conversational AI solutions engage in natural, meaningful dialogues, providing 24/7 support, answering complex queries, and guiding customers through financial processes with empathy and precision.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon54, // Replace with the correct icon for Content That Converts
          heading: "Content That Converts",
          description:
            "Say goodbye to generic marketing copy. We automate the creation of compelling product descriptions, personalized emails, and engaging social media content, all tailored to resonate with your target audience.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon55, // Replace with the correct icon for Fraud Detection, Evolved
          heading: "Fraud Detection, Evolved",
          description:
            "We go beyond rule-based systems. Our AI models detect subtle patterns and anomalies in real-time, proactively identifying and preventing fraudulent activity.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon56, // Replace with the correct icon for Risk Management, Reinvented
          heading: "Risk Management, Reinvented",
          description:
            "Navigate the complexities of risk assessment with AI-powered tools that analyze market trends, news sentiment, and economic indicators, providing data-driven insights for smarter decision-making.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Let's Architect Your AI-Powered Future",
    },
  ];
  
  
  

  const techStackData = [
   
    {
      title: "Large Language Models (LLMs)",
      content: [
        {
          alt: "Icon",
          caption: "GPT-4",
          img: gpt,
        },
      
        {
          alt: "Icon",
          caption: "Llama",
          img: liama,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
      
      
        {
          alt: "Icon",
          caption: "pytorch",
          img: pytorch,
        },
        {
            alt: "Icon",
            caption: "Hugging Face Transformers",
            img: huggingface,
          },
        {
          alt: "Icon",
          caption: "LangChain",
          img: langchain,
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
      title: "Data Visualization Tools",
      content: [
        {
          alt: "Icon",
          caption: "Tableau",
          img: tableau,
        },
        {
          alt: "Icon",
          caption: "PowerBi",
          img: powerbi,
        },
      ],
    },
  
  ];
  const heroData = {
    heading: "Gen AI Solutions for Fintech Use Cases",
    description:
      "Partner with Centrox AI to harness the transformative potential of Generative AI in fintech. Build intelligent applications, automate processes, and deliver exceptional customer experiences.",
    btnText: "Book 1:1 Session",
    includeDots: false,
    img: realestatehero, // Replace with an appropriate image for fintech context if available
    reverse: false,
    className: "lg:!w-1/3 !w-4/5 mx-auto",
  };
  
  
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "Why Centrox AI?",
      description: "We're not just another AI vendor. We're your strategic partner in innovation.",
    },
    data: [
      {
        heading: "Deep Expertise",
        description:
          "Our team is comprised of AI enthusiasts, researchers, and engineers who live and breathe the latest advancements in machine learning and natural language processing.",
      },
      {
        heading: "Collaborative Spirit",
        description:
          "We believe in working hand-in-hand with your team, fostering a culture of knowledge exchange and shared learning.",
      },
      {
        heading: "Tailored Solutions",
        description:
          "We don't believe in one-size-fits-all. We craft bespoke AI solutions that address your unique challenges and goals.",
      },
      {
        heading: "Results-Driven Focus",
        description:
          "We're not satisfied until you see tangible results. We measure success by the impact our solutions have on your bottom line.",
      },
      {
        heading: "Passion for the Cutting Edge",
        description:
          "We're constantly exploring the frontiers of AI, ensuring your solutions are built on the most advanced technologies available.",
      },
    ],
    btnText: "Partner with the AI Innovators",
  };
  
  

  const stepperdata = {
    heading: "Our Process",
    description:
      "We follow a collaborative, iterative process to ensure the success of your AI project.",
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
                text: "We roll up our sleeves and dive deep into your business, understanding your goals, challenges, and data landscape.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Alchemy",
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
                text: "We transform your raw data into a valuable asset, cleaning, preprocessing, and preparing it to fuel your AI models.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Model Crafting",
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
                text: "We architect and build custom LLM solutions tailored to your specific use case, leveraging the latest techniques.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Iterative Refinement",
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
                text: "We fine-tune and optimize your LLM through rigorous training and evaluation, ensuring peak performance.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Robust Validation",
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
                text: "We stress-test your model on diverse datasets, ensuring accuracy, reliability, and fairness.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Seamless Deployment",
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
                text: "We deploy your model into your production environment, providing ongoing monitoring and support to ensure its continued success.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Embark on Your AI Journey",
  };
  
  
  return (
    <div>
     
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={cardsSolutions} />
          {/* <CommonDisplayCardsGrid data={benefitsData} /> */}
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful combination of cutting-edge technologies to build, train, and deploy your AI solutions."
            }
            caption="We continuously evaluate and adopt the latest advancements in the AI ecosystem, ensuring your solutions are built on the most robust and efficient technologies available."
            btnText="Let’s Discuss Further"
          />
           <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
            }
          />
          
          <StepperSection data={stepperdata} />
        
          {/* <LandingIndustriesSection
          gradientCardData={gradientCardData}
            caption="Whether you're an online retailer, a brick-and-mortar store, or a fashion brand, our AI body measurement tool can help you transform your business, improve customer satisfaction, and drive growth."
            tabs={tabs}
            heading={"Revolutionize Retail & Fashion with AI Body Measurement"}
            description="Our AI-powered body measurement technology is a game-changerfor the retail and fashion industries."
            isBookingButton={true}
          /> */}

         
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner
            heading=" Take the Next Step"
            description="Ready to revolutionize your fintech business with Generative AI?
            Schedule a free consultation with our experts today.                       
            "
            btnText="Book Your Free Consultation"
            isBooking
          />
        </main>
     
    </div>
  );
}
