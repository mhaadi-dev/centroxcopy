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
import snapmeasureHero from "@/assets/solutions/snapmeasureHero.webp";
import eggcrack from "@/assets/solutions/EggCrack.webp";
import strategy from "@/assets/solutions/Strategy.webp";
import checkerboard from "@/assets/solutions/Checkerboard.webp";
import SolutionsImage1 from "@/assets/solutionpic1.webp";
import SolutionsImage2 from "@/assets/solutionPic2.webp";
import SolutionsImage3 from "@/assets/solutionPic3.webp";
import SolutionsImage4 from "@/assets/solutionPic4.webp";
import industryPic1 from "@/assets/solutions/sol-industry-1.webp";
import industryPic2 from "@/assets/industry2.webp";
import industryPic3 from "@/assets/industry3.webp";
import industryPic4 from "@/assets/industry4.webp";

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
        tagText: "",
        headingText: "",
        para1Text:
          "Are sizing inconsistencies and high return rates impacting your bottom line?",
        para2Text: "",
        heading2Text:
          "The traditional approach to apparel sizing presents significant challenges for businesses and customers alike",
      },
      data: [
        {
          icon: eggcrack, // Replace with the correct icon for Inaccurate Measurements
          heading: "Inaccurate Measurements",
          description:
            "Manual measurements, whether taken in-store or self-reported by customers, are prone to human error. This leads to inconsistent sizing, customer frustration, and ultimately, increased return rates.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: strategy, // Replace with the correct icon for High Return Rates
          heading: "High Return Rates",
          description:
            "Ill-fitting garments are a major contributor to costly returns, impacting profitability and damaging customer loyalty. The environmental impact of these returns is also a growing concern.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: checkerboard, // Replace with the correct icon for Limited Personalization
          heading: "Limited Personalization",
          description:
            "Generic sizing charts and one-size-fits-all approaches can't cater to the diverse range of body shapes and preferences in today's market. Customers crave personalized experiences and garments that fit them perfectly.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI's body measurement tool addresses these challenges head-on, providing a data-driven solution to revolutionize how you capture and utilize body data. Our AI-powered technology enables you to create a more personalized, efficient, and sustainable approach to apparel sizing and shopping.",
      btnText: "Get A Free Trial",
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

  const solutionsData = [
    {
      img: SolutionsImage1,
      description:
        "Extract precise measurements from simple photographs, eliminating the need for physical measuring tapes or in-person fittings. Our technology uses advanced pose estimation and body landmark detection to accurately identify key points on the body, ensuring precise measurements even from standard smartphone photos.",
      heading: "Capture Body Dimensions",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage2,
      description:
        "Provides intelligent property search, answer queries, schedule viewings, and offer tailored recommendations.Integrates with real estate databases and APIs to provide up-to-date property information and streamline the customer journey.",
      heading: "Virtual Try-Ons",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage3,
      description:
        "Utilizes computer vision and deep learning algorithms to accurately estimate body dimensions from just two photos.Enables precise garment fitting, personalized recommendations, and reduced return rates for fashion retailers.",
      heading: "Personalize Recommendations",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage4,
      description:
        "Automates the process of tagging fashion products with relevant attributes (style, color, neckline, etc.) using computer vision and image recognition techniques.Improves efficiency, accuracy, and consistency in product cataloging for fashion retailers.",
      heading: "Streamline Product Dev",
      btnText: "",
      link: "",
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
    heading: "Measurements Beyond Tape",
    description:
      "Improve your apparel business with Centrox AI's body measurement tool. Our AI-powered solution accurately captures body dimensions from photos, enhancing fit, reducing returns, and improving the shopping experience.",
    btnText: "Try for Free",
    includeDots: false,
    img: snapmeasureHero,
    reverse: false,
    className: "lg:!w-1/3",
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
  const tabs = [
    {
      name: "E-commerce",
      href: "#",
      current: true,
      cta: "Try For Free",
    },
    {
      name: "Brick-and-Mortar Retail",
      href: "#",
      current: false,
      cta: "Try For Free",
    },
    {
      name: "Fashion Brands & Designers",
      href: "#",
      current: false,
      cta: "Try For Free",
    },
  ];
  const gradientCardData = [
    {
      image: industryPic1,
      data: [
        {
          heading: "Reduce Return Rates",
          description:
            "Minimize costly returns due to sizing issues, boosting customer satisfaction and loyalty.",
        },
        {
          heading: "Increase Conversions",
          description:
            "Empower customers to shop confidently online with accurate size recommendations and virtual try-ons.",
        },
        {
          heading: "Personalize the Shopping Experience",
          description:
            "Offer tailored product suggestions based on individual body measurements and preferences.",
        },
      ],
    },
    {
      image: industryPic1,
      data: [
        {
          heading: "AI-Powered Design Tools",
          description:
            "Accelerate the design process with generative models that assist in creating innovative concepts, generating unique patterns and textures, and streamlining production workflows, fostering creativity and efficiency.",
        },
        {
          heading: "Personalized Fashion Recommendations",
          description:
            "Leverage LLMs to analyze customer preferences, body measurements, and style goals to offer tailored fashion recommendations, enhancing the online shopping experience and driving conversions.",
        },
        {
          heading: "Dynamic Content Generation",
          description:
            "Automate the creation of product descriptions, social media captions, and marketing materials, saving time and resources while ensuring consistent brand messaging.",
        },
      ],
    },
    {
      image: industryPic1,
      data: [
        {
          heading: "Property Descriptions & Listings",
          description:
            "Utilize LLMs to generate compelling and informative property descriptions and listings, highlighting key features and attracting potential buyers.",
        },
        {
          heading: "Virtual Property Tours",
          description:
            "Create immersive 3D virtual tours with AI-generated environments and interactive elements, allowing potential buyers to explore properties remotely and enhancing their decision-making process.",
        },
        {
          heading: "Personalized Property Recommendations",
          description:
            "Leverage LLMs to analyze user preferences and search history to provide tailored property recommendations, improving the efficiency of property search and discovery.",
        },
      ],
    },
    {
      image: industryPic1,
      data: [
        {
          heading: "Fraud Detection & Prevention",
          description:
            "Implement advanced AI models to analyze transaction data, identify patterns indicative of fraudulent activity, and proactively prevent financial losses.",
        },
        {
          heading: "Personalized Financial Advice",
          description:
            "Leverage LLMs to provide tailored financial recommendations based on individual risk profiles, investment goals, and market trends.",
        },
        {
          heading: "Customer Support Automation",
          description:
            "Deploy intelligent chatbots to handle routine customer inquiries, provide account information, and assist with basic transactions, improving efficiency and customer satisfaction.",
        },
      ],
    },
  ];
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <LandingSolutionsSection
            data={solutionsData}
            heading="Measurement Precision With AI"
            description="Our body measurement tool leverages computer vision and machine learning algorithms to"
          />
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
          <LandingIndustriesSection
          gradientCardData={gradientCardData}
            caption="Whether you're an online retailer, a brick-and-mortar store, or a fashion brand, our AI body measurement tool can help you transform your business, improve customer satisfaction, and drive growth."
            tabs={tabs}
            heading={"Revolutionize Retail & Fashion with AI Body Measurement"}
            description="Our AI-powered body measurement technology is a game-changerfor the retail and fashion industries"
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
          <IndustryBanner
            heading="Revolutionize your Business 
with AI-Powered Body Measurements"
            description="Schedule a technical discussion with our experts to learn how our tool can be integrated into your existing systems."
            btnText="Book a Technical Demo"
            isBooking
          />
        </main>
      </LandingLayout>
    </div>
  );
}
