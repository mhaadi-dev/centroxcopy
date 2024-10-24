import { Navbar } from "@/Components/Navbar/navbar";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import { LandingAboutUs } from "@/views/LandingAboutUs";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import { sanityFetch } from "@/sanity/lib/client";
import { LANDING_PAGE_QUERY } from "@/sanity/query";
// import { Testimonial } from "@/views/Testimonial";

import { POCS } from "@/views/POCS";

// import WebsiteFooter from "@/Components/common/WebsiteFooter";
// import  BannerSection  from "@/Components/MainPageComponents/Banner";
import dynamic from "next/dynamic";
import useScrollToElement from "@/deploy/hooks/useScrollToElement";
import Image from "next/image";
import { Button } from "@/Components/Button.js/button";
import LandingBlogSection from "@/views/LandingPageViews/LandingBlogSection";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingHeroSection from "@/views/LandingPageViews/LandingHeroSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import LandingServicesSection from "@/views/LandingPageViews/LandingServicesSection";
import LandingFAQSection from "@/views/LandingPageViews/LandingFAQSection";
import LandingContactSection from "@/views/LandingPageViews/LandingContactSection";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import LandingTestimonialSection from "@/views/LandingPageViews/LandingTestimonialSection";
import Icon from "@/assets/Icon.webp";
import Icon2 from "@/assets/Icon-1.webp";
import Icon3 from "@/assets/Icon-3.webp";
import Icon4 from "@/assets/Icon-4.webp";
import Icon5 from "@/assets/Icon-5.webp";
import Icon6 from "@/assets/Icon-6.webp";
import Icon7 from "@/assets/Icon-7.webp";
import Icon8 from "@/assets/Icon-8.webp";
import menubars from "@/assets/barsmenu.webp";
import SolutionsImage1 from "@/assets/solutionpic1.webp";
import SolutionsImage2 from "@/assets/solutionPic2.webp";
import SolutionsImage3 from "@/assets/solutionPic3.webp";
import SolutionsImage4 from "@/assets/solutionPic4.webp";
import industryPic1 from "@/assets/industry1.webp";
import industryPic2 from "@/assets/industry2.webp";
import industryPic3 from "@/assets/industry3.webp";
import industryPic4 from "@/assets/industry4.webp";

const WebsiteFooter = dynamic(
  () => import("@/Components/common/WebsiteFooter"),
  { ssr: false }
);

const BannerSection = dynamic(
  () => import("@/Components/MainPageComponents/Banner"),
  { ssr: false }
);

const Testimonial = dynamic(() => import("@/views/Testimonial"), {
  ssr: false,
});

// import useScrollToElement from "@/hooks/useScrollToElement";
const data = [
  {
    img: dummyDisplay,
    description:
      "Meta4 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 1",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:
      "Meta2 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 2",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:
      "Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 3",
    date: "July 17, 2024",
  },
];
export default async function Home() {
  const data: any = await sanityFetch({
    query: LANDING_PAGE_QUERY,
  });

  //  useScrollToElement();
  const servicesTabs = [
    { name: "Data Annotations", href: "#", current: true },
    { name: "LLM Development", href: "#", current: false },
    { name: "ML Ops", href: "#", current: false },
  ];
  // data
  const cardsData = [
    {
      subInfo: {
        heading: "Data Solutions: The Foundation of High-Performing LLMs",
        description: "",
      },
      data: [
        {
          icon: Icon,
          heading: "Annotation & Labeling",
          description:
            "We leverage cutting-edge AI-powered annotation tools to efficiently process and label your data. But we don’t stop there, Our team of annotators then meticulously cross-verifies and refines the AI-generated annotations, ensuring the highest level of accuracy, consistency, and alignment with your specific use case.",
          linkText: "Learn More",
          link: "services/data-annotations-and-labelling",
          linkWithIcon: true,
        },
        {
          icon: Icon2,
          heading: "Data Validation & Quality Assurance",
          description:
            "We implement rigorous quality assurance processes to validate your data, identify and address any inconsistencies, and ensure your LLM is trained on the most reliable information.",
          linkText: "Learn More",
          link: "services/data-validation",
          linkWithIcon: true,
        },
      ],
    },
    {
      subInfo: {
        heading: "LLM Development: Custom Models and Intelligent Applications",
        description:
          "We specialize in engineering bespoke LLMs and intelligent applications that align with your unique business needs and technical requirements:",
      },
      data: [
        {
          icon: menubars,
          heading: "Custom LLM Development",
          description:
            "We'll collaborate closely with your team to design and develop a custom LLM architecture optimized for your specific domain and use case. We'll leverage advanced techniques such as transfer learning, fine-tuning, and reinforcement learning to ensure your model achieves state-of-the-art performance.",
          linkText: "Learn More",
          link: "services/custom-llm-dev",
          linkWithIcon: true,
        },
        {
          icon: Icon3,
          heading: "Custom Chatbot Development",
          description:
            "We'll build intelligent conversational AI solutions that seamlessly integrate into your existing product and provide natural language understanding, engaging interactions, and actionable insights. We'll ensure your chatbot aligns with your brand voice and delivers a superior user experience.",
          linkText: "Learn More",
          link: "services/custom-chatbot-dev",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Fine-Tuning & Optimization",
          description:
            "We'll fine-tune pre-trained LLMs on your proprietary data, enabling them to adapt to your domain-specific language and tasks. We'll employ cutting-edge optimization techniques to maximize efficiency, reduce inference latency, and minimize computational costs.",
          linkText: "Learn More",
          link: "services/ai-finetuning",
          linkWithIcon: true,
        },
        {
          icon: Icon5,
          heading: "Agentic AI",
          description:
            "Partner with Centrox AI to develop intelligent AI agents and workflows that automate tasks, make decisions, and drive business growth. With our expertise in Agentic AI workflows, we can help you with developing custom solutions tailored to your specific needs.",
          linkText: "Learn More",
          link: "services/ai-agents",
          linkWithIcon: true,
        },
      ],
    },
    {
      subInfo: {
        heading: "MLOps: Streamlined Deployment and Continuous Improvement",
        description:
          "We ensure your LLMs are seamlessly deployed, optimized, and continuously improved for real-world impact:",
      },
      data: [
        {
          icon: Icon6,
          heading: "Deployment & Scaling",
          description:
            "We'll deploy your LLM into your production environment, handling infrastructure provisioning, scaling, and monitoring to ensure high availability and optimal performance. We'll work with you to address any security or compliance concerns.",
          linkText: "Learn More",
          link: "services/custom-llm-dev",
          linkWithIcon: true,
        },
        {
          icon: Icon7,
          heading: "Optimization",
          description:
            "We'll continuously monitor your LLM's performance and implement fine-tuning and retraining strategies to enhance accuracy, reduce bias, and ensure your LLM adapts to evolving user needs and data distributions.",
          linkText: "Learn More",
          link: "services/model-optimization",
          linkWithIcon: true,
        },
        {
          icon: Icon8,
          heading: "Evaluation",
          description:
            "We'll leverage advanced analytics and visualization tools to provide detailed metrics and insights into your LLM's performance, enabling you to track progress, identify areas for improvement and make data-driven decisions.",
          linkText: "Learn More",
          link: "services/evaluation",
          linkWithIcon: true,
        },
      ],
    },
  ];
  const solutionsData = [
    {
      img: SolutionsImage1,
      description:
        "Provides empathetic support and personalized coping strategies for individuals experiencing emotional distress.Trained on a curated dataset of evidence-based therapeutic techniques and mental health resources.",
      heading: "Mental Health Chatbot",
      btnText: "Try for Free",
      link: "solutions/mental-health-chatbot",
    },
    {
      img: SolutionsImage2,
      description:
        "Provides intelligent property search, answer queries, schedule viewings, and offer tailored recommendations.Integrates with real estate databases and APIs to provide up-to-date property information and streamline the customer journey.",
      heading: "Real-Estate Chatbot ",
      btnText: "Try for Free",
      link: "solutions/real-estate-chatbot",
    },
    {
      img: SolutionsImage3,
      description:
        "Utilizes computer vision and deep learning algorithms to accurately estimate body dimensions from just two photos.Enables precise garment fitting, personalized recommendations, and reduced return rates for fashion retailers.",
      heading: "Body Measurements Tool",
      btnText: "Try for Free",
      link: "solutions/snap-and-measure",
    },
    {
      img: SolutionsImage4,
      description:
        "Automates the process of tagging fashion products with relevant attributes (style, color, neckline, etc.) using computer vision and image recognition techniques.Improves efficiency, accuracy, and consistency in product cataloging for fashion retailers.",
      heading: "Labelling Dresses with AI",
      btnText: "Try for Free",
      link: "solutions/labelling-dresses-with-ai",
    },
  ];
  const tabs = [
    {
      name: "Healthcare",
      href: "#",
      current: true,
      cta: "Try Our Mental Health Chatbot",
    },
    {
      name: "Fashion Retail",
      href: "#",
      current: false,
      cta: "Try Our Body Measurement Tool",
    },
    {
      name: "Real Estate",
      href: "#",
      current: false,
      cta: "Try Our Real Estate Chatbot",
    },
    {
      name: "Fintech",
      href: "#",
      current: false,
      cta: "Learn more about AI in Fintech",
    },
  ];
  const gradientCardData = [
    {
      image: industryPic1,
      data: [
        {
          heading: "Medical Text Generation",
          description:
            "Automate the creation of clinical notes, discharge summaries, and other medical documents, freeing up valuable time for healthcare professionals and improving documentation accuracy.",
        },
        {
          heading: "Personalized Health Recommendations",
          description:
            "Leverage LLMs to analyze patient data and generate tailored health recommendations, promoting proactive health management and improving patient outcomes.",
        },
        {
          heading: "Mental Health Support",
          description:
            "Deploy our Mental Health Chatbot, a compassionate AI companion trained on evidence-based therapeutic techniques to support emotional well-being and offer personalized coping strategies.",
        },
      ],
    },
    {
      image: industryPic2,
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
      image: industryPic3,
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
      image: industryPic4,
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
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden gap-10 max-w-[2500px] mx-auto">
      <Navbar />
      <LandingHeroSection />
      <LogosCarousel />
      <LandingAboutUs />
      <LandingServicesSection
        servicesTabs={servicesTabs}
        cardsData={cardsData}
        heading="End-to-End Gen AI Services From Idea To Impact"
        description="Centrox AI offers full-cycle Gen AI development services designed to meet your specific needs and accelerate your product roadmap."
      />
      <LandingSolutionsSection
        data={solutionsData}
        heading="Centrox's Solutions"
        description="Explore our suite of production-ready Generative AI products, built to address real-world challenges across diverse industries."
        tagHeading="Solution"
      />
      <LandingIndustriesSection
        tabs={tabs}
        gradientCardData={gradientCardData}
        heading="Empowering AI Innovators Across Industries"
        description="Generative AI and LLMs are transforming industries across the board. 
        Centrox has partnered with companies to deliver impactful LLM solutions in diverse domains."
        h2class="lg:!w-full"
        caption=""
      />
      {/* <LandingCaseStudySection/> */}
      <LandingTestimonialSection />
      {/* <LandingBlogSection/> */}
      <LandingContactSection />
      <LandingFAQSection />

      {/* <Section3 /> */}
      {/* <POCS />
      <Testimonial />
      <BannerSection /> */}
      <WebsiteFooter />
    </main>
  );
}
