//@ts-nocheck


import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";


import Icon14 from "@/assets/Icon-14.svg";
import liama from "@/assets/liama.webp";



import huggingface from "@/assets/huggingfacelogo.webp";


import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import IndustryBanner from "@/Components/common/IndustryBanner";

import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";

import strategy from "@/assets/solutions/Strategy.svg";
import checkerboard from "@/assets/solutions/Checkerboard.svg";
import SolutionsImage1 from "@/assets/solutions/Capture Body Dimensions.webp";
import SolutionsImage2 from "@/assets/solutions/Virtual tryon.webp";

import SolutionsImage4 from "@/assets/solutionPic4.webp";

import opencv from "@/assets/opencv-plain logo.webp"

import Icon16 from "@/assets/Icon-16.webp"
import Icon17 from "@/assets/Icon-17.webp"

import Icon49 from "@/assets/Icon-49.webp"
import Icon50 from "@/assets/Icon-50.webp"
import gpt from "@/assets/gpt.webp"
import langchain from "@/assets/langchain.webp"
import tableau from "@/assets/tableau logo.webp"
import powerbi from "@/assets/powerbi.webp"
import retailhero from "@/assets/solutions/Hero Image-retail.webp"
import recommendationImage from "@/assets/solutions/Image for Recommendation Engine - Solutions.webp"


export const metadata = {
  title:"Fashion Retail AI Solutions - Personalize Shopping | Centrox AI ",
  description:"Transform fashion retail with Centrox AI, accurate sizing, personalized recommendations, and inventory management. Enhance customer experience",
  alternates: {
    canonical: "https://centrox.ai/industries/retail",
  },

}




export default async function Page({ params }: { params: { slug: string } }) {
    const benefitsData = [
        {
          headerData: {
            tagText: "Benefits",
            headingText: "Key Benefits for Real Estate Professionals",
            para1Text: "Partnering with Centrox AI empowers you to attain excellence.",
            heading2Text: "",
            para2Text: "",
          },
           data : [
            {
              icon: Icon16, // Replace with the correct icon for Competitive Edge
              alt: "Gain a Competitive Edge",
              heading: "Gain a Competitive Edge",
              description:
                "Leverage AI to differentiate your services, attract more clients, and close deals faster.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon17, // Replace with the correct icon for Streamlined Operations
              alt: "Streamline Operations",
              heading: "Streamline Operations",
              description:
                "Automate manual tasks, improve efficiency, and reduce operational costs.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon14, // Replace with the correct icon for Data-Driven Decisions
              alt: "Make Data-Driven Decisions",
              heading: "Make Data-Driven Decisions",
              description:
                "Access real-time insights and analytics to inform your business strategies and investment decisions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon50, // Replace with the correct icon for Enhanced Customer Experiences
              alt: "Enhance Customer Experiences",
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
            headingText: "Challenges in Fashion Retail",
            para1Text:
              "Fashion retail faces several key issues which are listed below.",
            para2Text: "",
            heading2Text: "",
          },
          data: [
            {
              icon: Icon49, // Sizing Accuracy
              alt: "Sizing Accuracy",
              heading: "Sizing Accuracy",
              description:
                "Many retailers struggle with ensuring accurate fit, leading to increased returns and customer dissatisfaction.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: strategy, // Inventory Management
              alt: "Inventory Management",
              heading: "Inventory Management",
              description:
                "Maintaining optimal stock levels to meet customer demand can be challenging, resulting in either shortages or excess inventory.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: checkerboard, // Personalization
              alt: "Limited Personalization",
              heading: "Limited Personalization",
              description:
                "Delivering customised recommendations that truly resonate with customers remains a significant challenge, affecting engagement and loyalty.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon16, // Operational Success
              alt: "Operational Success",
              heading: "Operational Success",
              description:
                "Effectively managing these issues is crucial for operational success and customer satisfaction.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption:
            "Effectively managing these issues is crucial for operational success and customer satisfaction.",
          btnText: "Book a Call Now",
        },
      ];
      
  
  

      const questions = [
        {
          question: "How does body measurement technology work?",
          answer: "Our body measurement technology uses advanced AI algorithms to analyse images of customers and extract accurate body dimensions. This technology allows for precise fit predictions, significantly reducing the likelihood of returns and improving customer satisfaction. By integrating with your online platform, it ensures a seamless fitting experience.",
        },
        {
          question: "How does Centrox AI’s solution integrate with existing e-commerce platforms?",
          answer: "Our technology is designed for easy integration with most e-commerce platforms through APIs and SDKs. We provide comprehensive documentation and support to ensure a smooth implementation process. Our team works closely with yours to adapt our solution to your specific system requirements and ensure compatibility.",
        },
        {
          question: "Can Centrox AI’s solutions scale with our business growth?",
          answer: "Yes, Centrox AI’s solutions are built to scale. Whether you're expanding your product range, increasing your customer base, or entering new markets, our technology adapts to growing demands. Our cloud-based infrastructure supports scalability, ensuring that performance remains consistent as your business grows.",
        },
        {
          question: "What data privacy measures are in place with Centrox AI’s technology?",
          answer: "We prioritise data security and comply with stringent data protection regulations. All customer data used for body measurements is anonymized and securely stored. Our systems implement robust encryption protocols and regular security audits to protect sensitive information and maintain compliance with industry standards.",
        },
        {
          question: "How does Centrox AI ensure the accuracy of its body measurement technology?",
          answer: "Accuracy is achieved through continuous model training and validation using diverse datasets. Our technology undergoes rigorous testing and refinement to ensure high precision. We also offer ongoing updates to our algorithms based on feedback and performance metrics to maintain accuracy.",
        },
        {
          question: "What kind of support can we expect during and after implementation?",
          answer: "Centrox AI provides comprehensive support throughout the implementation process, including setup assistance, integration support, and training for your team. Post-implementation, we offer ongoing technical support, performance monitoring, and updates to ensure that our solutions continue to meet your needs effectively.",
        },
        {
          question: "How can we measure the ROI of implementing Centrox AI’s solutions?",
          answer: "ROI can be assessed through key performance indicators such as reduced return rates, increased customer satisfaction scores, and enhanced sales figures. We provide detailed analytics and reporting tools that track the impact of our solutions, allowing you to evaluate their effectiveness and justify the investment.",
        },
      ];
      
  
  

  const solutionsData = [
    {
      img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/solutions/Capture+Body+Dimensions.webp", // Body Measurement Technology
      description:
        "Utilising CNNs and image processing techniques, our body measurement tool accurately extracts critical dimensions from user-uploaded images, ensuring a precise fit and reducing return rates.",
      heading: "Body Measurement Technology",
      tabheading: "Accurate Fit Solutions",
      btnText: "",
      link: "",
      alt:"AI as body measurement tool"
    },
    {
      img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/solutions/Virtual+tryon.webp", // Predictive Inventory Management
      description:
        "Deploy time-series forecasting algorithms using RNNs to analyze historical sales data and market trends, predicting demand fluctuations to optimize inventory levels.",
      heading: "Predictive Inventory Management",
      tabheading: "Inventory Optimization",
      btnText: "",
      link: "",
      alt:"AI as inventory management tool"
    },
    {
      img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/solutions/Image+for+Recommendation+Engine+-+Solutions.webp", // Personalized Recommendations
      description:
        "Refine your recommendation engines with our data-driven technology, delivering relevant product suggestions that improve customer interaction and boost sales.",
      heading: "Personalized Recommendations",
      tabheading: "Recommendation Engine",
      btnText: "",
      link: "",
      alt:"AI as recommendation engine"
    },
    {
      img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/solutions/solutionPic4.webp", // Additional Solution
      description:
        "Address additional challenges in fashion retail with our comprehensive AI solutions tailored to enhance operational efficiency and customer satisfaction.",
      heading: "Comprehensive AI Solutions",
      tabheading: "Tailored Strategies",
      btnText: "",
      link: "",
      alt:"AI as additional solution"
    },
  ];
  
  

  const techStackData = [
    {
      title: "Large Language Models (LLMs)",
      content: [
        {
          alt: "GPT-4",
          caption: "GPT-4",
          img: gpt,
        },
        {
          alt: "Llama",
          caption: "Llama",
          img: liama,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "OpenCV",
          caption: "OpenCV",
          img: opencv,
        },
        {
          alt: "Hugging Face Transformers",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "LangChain",
          caption: "LangChain",
          img: langchain,
        },
      ],
    },
    {
      title: "Cloud Platforms",
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
      title: "Data Visualization Tools",
      content: [
        {
          alt: "Tableau",
          caption: "Tableau",
          img: tableau,
        },
        {
          alt: "PowerBi",
          caption: "PowerBi",
          img: powerbi,
        },
      ],
    },
  ];
  
  const heroData = {
    heading: "Create Personalised Shopping Experiences",
    description:
      "Refine your fashion retail operations with Centrox AI's advanced solutions. Our technology addresses critical industry challenges, providing effective strategies for accurate sizing, efficient inventory management, and personalised customer experiences.",
    btnText: "Talk to our Experts",
    includeDots: false,
    img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/industries/Hero+Image-retail.webp", // Replace 'fashionHero' with the appropriate image for fashion retail context if available
    reverse: false,
    className: "lg:!w-1/3 !w-4/5 mx-auto",
  };
  

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
      "AI Project Development Lifecycle for Fashion and Retail Industry.",
      alt:"AI Project Development Lifecycle for Fashion and Retail Industry",
    data: [
      {
        title: "Ideation",
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
                text: "We define project goals specific to the fashion and retail industry, focusing on challenges like inventory management and personalized shopping experiences.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Preparation",
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
                text: "We collect and preprocess relevant data, including customer behavior and sales trends, ensuring it is clean and accurately labeled.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Model Development",
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
                text: "We select computational models tailored for the industry, fine-tuning them to cater to large datasets for precise predictions.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Validation and Testing",
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
                text: "The model is rigorously tested against real-world scenarios and industry benchmarks to ensure accuracy and reliability.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Deployment",
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
                text: "Once the model reaches the desired accuracy, it's integrated into your infrastructure for efficient real-time operation.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Continuous Improvement",
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
                text: "We assist in scaling the AI system, training it on additional data, and expanding its capabilities to meet evolving demands.",
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
    
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} alt="AI in Creating Personalised Shopping Experiences "  moveToSection=""
            link=""/>
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <LandingSolutionsSection
            data={solutionsData}
            heading="Solutions for Fashion Retail"
            description="We can assist you in staying ahead by offering solutions designed to tackle your specific challenges."
          />
          <CommonDisplayCardsGrid data={benefitsData} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful combination of cutting-edge technologies to build, train, and deploy your AI solutions."
            }
            caption="We continuously evaluate and adopt the latest advancements in the AI ecosystem, ensuring your solutions are built on the most robust and efficient technologies available."
            btnText="Let’s Discuss Further"
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

          {/* <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
            }
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
            description="Optimise operations and reduce costs with scalable technology matching to your retail business needs.           
            "
            btnText="Book Your Free Consultation"
            isBooking
          />
        </main>
    
    </div>
  );
}
