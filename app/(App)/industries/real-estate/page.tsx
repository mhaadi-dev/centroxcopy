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
import LandingLayout from "../../layoutPage";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import snapmeasureHero from "@/assets/solutions/snapmeasureHero.webp";
import eggcrack from "@/assets/solutions/EggCrack.webp";
import strategy from "@/assets/solutions/Strategy.webp";
import checkerboard from "@/assets/solutions/Checkerboard.webp";
import SolutionsImage1 from "@/assets/solutions/Capture Body Dimensions.webp";
import SolutionsImage2 from "@/assets/solutions/Virtual tryon.webp";
import SolutionsImage3 from "@/assets/solutionPic3.webp";
import SolutionsImage4 from "@/assets/solutionPic4.webp";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp"
import solutionbg2 from "@/assets/solutions/solutionbg2.webp"
import opencv from "@/assets/opencv-plain logo.webp"
import dockers from "@/assets/docker-icon logo.webp"
import keras from "@/assets/keras-plain logo.webp"
import Icon16 from "@/assets/Icon-16.webp"
import Icon17 from "@/assets/Icon-17.webp"
import Icon18 from "@/assets/Icon-18.webp"
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
        tagText: "",
        headingText: "The Real Estate Challenge",
        para1Text:
          "Are you looking to leverage AI to its full potential in the fast-paced real estate market?",
        para2Text: "Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry.",
        heading2Text:
          "",
      },
      data: [
        {
          icon: eggcrack, // Information Overload
          heading: "Information Overload",
          description:
            "Sifting through vast amounts of property data, market trends, and customer preferences can be overwhelming and time-consuming.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: strategy, // Inefficient Processes
          heading: "Inefficient Processes",
          description:
            "Manual tasks like property descriptions, lead qualification, and document management can slow down your operations and hinder growth.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: checkerboard, // Limited Personalization
          heading: "Limited Personalization",
          description:
            "Providing tailored recommendations and experiences to clients can be challenging without deep insights into their needs and preferences.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon16, // Missed Opportunities (same icon reused as per previous specification)
          heading: "Missed Opportunities",
          description:
            "Identifying emerging market trends and investment opportunities requires constant vigilance and data analysis.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI understands these hurdles. We specialize in building custom LLM-powered solutions that address these pain points head-on, enabling you to gain a competitive advantage in the real estate market.",
      btnText: "Try Our Solution For FREE",
    },
  ];
  
  

  const questions = [
    {
      question: "What types of data can you use to build AI models for real estate?",
      answer:
        "We can leverage a wide range of data sources, including property listings, historical transaction data, market trends, demographic information, and even social media sentiment. The specific data requirements will depend on your use case and goals.",
    },
    {
      question: "How do you ensure the accuracy and reliability of your AI models?",
      answer:
        "We employ rigorous testing and validation methodologies, including cross-validation and real-world data evaluation. We also prioritize transparency and explainability, allowing you to understand how our models make decisions.",
    },
    {
      question: "Can your AI solutions integrate with our existing CRM and property management systems?",
      answer:
        "Absolutely. We have extensive experience in integrating AI models with various third-party systems and platforms, ensuring a seamless and efficient workflow.",
    },
    {
      question: "How do you address potential biases in AI models for real estate?",
      answer:
        "We're committed to ethical AI development. We proactively address bias by carefully curating training data, employing fairness-aware algorithms, and conducting ongoing audits and evaluations.",
    },
    {
      question: "What kind of support do you offer after project completion?",
      answer:
        "We provide comprehensive support and maintenance services, including model monitoring, retraining, and updates to ensure your AI solutions continue to perform optimally and adapt to your evolving needs.",
    },
  ];
  
  

  const solutionsData = [
    {
      img: SolutionsImage1, // Replace with an appropriate image for Search & Recommendations
      description:
        "Go beyond keyword matching. Our NLP-powered search understands user intent, delivering personalized property recommendations that boost engagement and conversions.",
      heading: "Search & Recommendations",
      tabheading: "Personalized Search",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage2, // Replace with an appropriate image for Qualify & Nurture Leads
      description:
        "Deploy AI chatbots and virtual assistants to engage leads 24/7, answer questions, and qualify prospects, freeing up your team to focus on closing deals.",
      heading: "Qualify & Nurture Leads",
      tabheading: "Lead Engagement",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage3, // Replace with an appropriate image for Analyze Documents
      description:
        "Extract key information from contracts and leases, automate summarization, and identify potential risks, streamlining due diligence and ensuring compliance.",
      heading: "Analyze Documents",
      tabheading: "Document Analysis",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage4, // Replace with an appropriate image for Analyze Market Trends
      description:
        "Analyze market sentiment, track competitors, and gain data-driven insights to inform strategic decisions and stay ahead of the curve.",
      heading: "Analyze Market Trends",
      tabheading: "Market Analysis",
      btnText: "",
      link: "",
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
    heading: "Building AI To Elevate Real Estate Customer Experience",
    description:
      "Partner with Centrox AI to leverage AI and LLMs in the real estate industry. Enhance property search, automate tasks, and gain valuable insights to drive smarter decisions and boost your bottom line.",
    btnText: "Book 1:1 Session",
    includeDots: false,
    img: realestatehero, // Replace 'snapmeasureHero' with the appropriate image for real estate context if available
    reverse: false,
    className: "lg:!w-1/3 !w-4/5 mx-auto",
  };
  
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "Why Centrox AI?",
      description: "We're your trusted partner in AI innovation.",
    },
    data: [
      {
        heading: "Deep Expertise",
        description:
          "Our team comprises seasoned AI researchers and engineers with a proven track record in the real estate industry.",
      },
      {
        heading: "Custom Solutions",
        description:
          "We build AI solutions tailored to your unique needs and challenges.",
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
          "We maintain open communication throughout the entire development process.",
      },
    ],
    btnText: "Partner with Us on Your AI Journey",
  };
  
  
//   const tabs = [
//     {
//       name: "E-commerce",
//       href: "#",
//       current: true,
//       cta: "Try For Free",
//     },
//     {
//       name: "Brick-and-Mortar Retail",
//       href: "#",
//       current: false,
//       cta: "Try For Free",
//     },
//     {
//       name: "Fashion Brands & Designers",
//       href: "#",
//       current: false,
//       cta: "Try For Free",
//     },
//   ];
//   const gradientCardData = [
//     {
//       image: industryPic1,
//       data: [
//         {
//           heading: "Reduce Return Rates",
//           description:
//             "Minimize costly returns due to sizing issues, boosting customer satisfaction and loyalty.",
//         },
//         {
//           heading: "Increase Conversions",
//           description:
//             "Empower customers to shop confidently online with accurate size recommendations and virtual try-ons.",
//         },
//         {
//           heading: "Personalize the Shopping Experience",
//           description:
//             "Offer tailored product suggestions based on individual body measurements and preferences.",
//         },
//       ],
//     },
//     {
//       image: industryPic2,
//       data: [
//         {
//           heading: "Enhance In-Store Experiences",
//           description:
//             "Accelerate the design process with generative models that assist in creating innovative concepts, generating unique patterns and textures, and streamlining production workflows, fostering creativity and efficiency.Provide a contactless and efficient way for customers to get accurate measurements, eliminating the need for fitting rooms and improving the overall shopping experience.",
//         },
//         {
//           heading: "Optimize Inventory Management",
//           description:
//             "Gain data-driven insights into customer body shapes to make more informed inventory decisions, reducing overstock and stockouts.",
//         },
//         {
//           heading: "Offer Custom Tailoring",
//           description:
//             "Leverage precise body measurements to offer personalized tailoring and alterations, creating a unique and valuable service for your customers.",
//         },
//       ],
//     },
//     {
//       image: industryPic3,
//       data: [
//         {
//           heading: "Streamline Product Development",
//           description:
//             "Gather valuable data on customer body shapes and sizes to inform design and sizing decisions, leading to better-fitting garments and reduced production costs.",
//         },
//         {
//           heading: "Create Inclusive Sizing",
//           description:
//             "Develop size ranges that cater to a wider variety of body shapes, promoting inclusivity and expanding your customer base.",
//         },
//         {
//           heading: "Offer Made-to-Measure Options",
//           description:
//             "Leverage AI-powered body measurements to provide customers with the option for custom-made clothing, creating a truly personalized shopping experience.",
//         },
//       ],
//     },
  
//   ];
  const stepperdata = {
    heading: "Our Process",
    description:
      "We follow a collaborative, iterative process to ensure the success of your AI project.",
    data: [
      {
        title: "Needs Assessment",
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
                text: "We analyze your goals, data, and infrastructure to define clear project requirements.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Engineering",
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
                text: "We clean, preprocess, and enhance your data to fuel model performance.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Custom Model Design",
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
                text: "We architect LLMs tailored to your use case, leveraging the latest techniques.",
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
                text: "We fine-tune and optimize your LLM for peak performance through iterative training.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Robust Validation & Testing",
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
                text: "We rigorously test for accuracy, reliability, and fairness to ensure robust model performance.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Seamless Deployment & Monitoring",
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
                text: "We deploy your model and provide ongoing support for seamless integration and monitoring.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Get Started with AI",
  };
  
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <LandingSolutionsSection
            data={solutionsData}
            heading="LLM Solutions Tailored to Real Estate"
            description="We leverage the power of Large Language Models (LLMs) to deliver cutting-edge solutions for the real estate industry."
          />
          <CommonDisplayCardsGrid data={benefitsData} />
          <StepperSection data={stepperdata} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful combination of cutting-edge technologies to build, train, and deploy your AI solutions."
            }
            caption="We continuously evaluate and adopt the latest advancements in the AI ecosystem, ensuring your solutions are built on the most robust and efficient technologies available."
            btnText="Let’s Discuss Further"
          />
          {/* <LandingIndustriesSection
          gradientCardData={gradientCardData}
            caption="Whether you're an online retailer, a brick-and-mortar store, or a fashion brand, our AI body measurement tool can help you transform your business, improve customer satisfaction, and drive growth."
            tabs={tabs}
            heading={"Revolutionize Retail & Fashion with AI Body Measurement"}
            description="Our AI-powered body measurement technology is a game-changerfor the retail and fashion industries."
            isBookingButton={true}
          /> */}

          <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
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
            heading=" Take the Next Step"
            description="Ready to transform your real estate business with AI?
            Schedule a free consultation with our experts today.            
            "
            btnText="Book Your Free Consultation"
            isBooking
          />
        </main>
      </LandingLayout>
    </div>
  );
}
