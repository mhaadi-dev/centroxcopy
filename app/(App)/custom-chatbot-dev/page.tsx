//@ts-nocheck
import { sanityFetch } from "@/sanity/lib/client";
import dynamic from 'next/dynamic';

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

import LandingLayout from "../layoutPage";
import ChallengesSection from "@/views/ServicePageViews/ChallengesSection";
import BenefitSection from "@/views/ServicePageViews/BenefitSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon from "@/assets/Icon.webp";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import Icon4 from "@/assets/Icon-4.webp"
import Icon6 from "@/assets/Icon-6.webp"
import Icon9 from "@/assets/Icon-9.webp"

import Icon10 from "@/assets/Icon-10.webp"
import Icon11 from "@/assets/Icon-11.webp"
import Icon12 from "@/assets/Icon-12.webp"
import Icon13 from "@/assets/Icon-13.webp"
import Icon14 from "@/assets/Icon-14.webp"
import liama from "@/assets/liama.webp"
import falcon from "@/assets/falcon.webp"
import gptneox from "@/assets/GPT-NeoX.webp"

import pytorch from "@/assets/pytorchlogo.webp"
import huggingface from "@/assets/huggingfacelogo.webp"
import tensorflow from "@/assets/tensorflow.webp"

import aws from "@/assets/awslogo.webp"
import azure from "@/assets/azure-plainlogo.webp"
import googlecloud from "@/assets/Googlecloud.webp"

import mlflow from "@/assets/mlflowlogo.webp"
import kubeflow from "@/assets/kubeflowlogo.webp"
import serviceHeroImg from "@/assets/serviceHeroImg.webp"






// const FaqsSection = dynamic(() => import('@/sections/FaqsSection')),{ss};
// const ContactForm = dynamic(() => import('@/Components/common/ContactForm'));
// const BannerSection = dynamic(() => import('@/sections/TestimonialSection'));
// const HoveredTextSection = dynamic(() => import('@/sections/HoveredTextSection'));
// const LogosCarousel = dynamic(() => import('@/views/LogosCarousel'));
// const CustomCarousalSection = dynamic(() => import('@/sections/CustomCarousalSection'));
// const BenefitsSection = dynamic(() => import('@/sections/BenefitsSection'));
// const OppositeCarousal = dynamic(() => import('@/sections/OppositeCarousal'));
// const StepperSection = dynamic(() => import('@/sections/StepperSection'));
// const PointsandImagesSection = dynamic(() => import('@/views/ComputerVisionDevelopment/Section6'));
// const CustomerTestimonials = dynamic(() => import('@/sections/CustomersTestimonial'));
// const ProductsCarousalSection = dynamic(() => import('@/sections/ProducstsCarousal'));
// const CaseStudiesCarousalSection = dynamic(() => import('@/sections/CaseStudiesCarousalSection'));
// const LogosSection = dynamic(() => import('@/sections/LogosSection'));

export default async function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   console.log("slug is", slug);
//   let landingPageData;
//   let data;
//   try {
//     landingPageData = await sanityFetch({
//       query: SERVICES_PAGE_QUERY,
//       params: { slug },
//     });

//     if (
//       landingPageData &&
//       Array.isArray(landingPageData) &&
//       landingPageData.length > 0
//     ) {
//       let obj = landingPageData[0];

//       if (obj) {
//         const entries = Object.entries(obj);

//         const sortedEntries = entries.sort((a, b) => {
//           const orderA = a[1]?.order ?? Number.MAX_VALUE;
//           const orderB = b[1]?.order ?? Number.MAX_VALUE;
//           return orderA - orderB;
//         });

//         data = sortedEntries;
//         console.log("new data is", data[0][1]);
//       } else {
//         console.log("No valid data found in landingPageData");
//       }
//     } else {
//       console.log("No data received or data is not an array");
//     }
//   } catch (error) {
//     console.error("Error fetching or processing landing page data:", error);
//   }
//   console.log("data is",data,)


const benefitsData = [
    {
      icon: Icon12,
      heading: "Deep Understanding",
      description:
        "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon13,
      heading: "Personalized Engagement",
      description:
        "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon14,
      heading: "Seamless Integration",
      description:
        "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon6,
      heading: "Scalability & Availability",
      description:
        "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon6,
      heading: "Data-Driven Insights",
      description:
        "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon6,
      heading: "Brand Consistency",
      description:
        "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];
  
  
  const benefitHeaderData={
    tagText:"Benefits",
    headingText:"How Custom Chatbots Fill The Gaps",
    para1Text:"Custom chatbots, fine-tuned on your data and aligned with your business objectives, offer a transformative solution:",
    heading2Text:""
  }
  const challengesHeaderData={
    tagText:"Challenges",
    headingText:"The Problem With Generic Bots",
    para1Text:"While off-the-shelf chatbots may seem like a quick and easy solution, they often fall short when it comes to meeting the unique needs of AI-driven businesses.",
    para2Text:"",
  }

  const challengeData = [
    {
      icon: Icon9,
      heading: "Limited Understanding",
      description:
        "Generic models are trained on vast amounts of general data, but they struggle to grasp the nuances of industry-specific jargon, complex queries, and subtle customer intent. This leads to frustrating user experiences and missed business opportunities.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon10,
      heading: "Inflexible Responses",
      description:
        "Pre-defined responses and rigid decision trees often result in robotic and unhelpful interactions. Customers expect personalized and empathetic conversations, which generic chatbots fail to deliver, leading to unsatisfactory engagement.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon11,
      heading: "Missed Opportunities",
      description:
        "Off-the-shelf solutions lack the capability to utilize your unique data and knowledge base to offer personalized recommendations, proactive support, or seamless system integration. This limits your ability to fully leverage AI for business growth.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon4,
      heading: "Brand Misalignment",
      description:
        "A chatbot that doesn’t reflect your brand’s voice and values can create a disconnect with your customers, damaging your reputation and reducing trust. Consistency with your brand is crucial for building strong customer relationships.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];
  
  const questions = [
    {
      question: "What kind of data do you need to train a custom LLM?",
      answer:
        "We typically require a variety of proprietary data from your business, including FAQs, product documentation, and customer interaction logs.",
    },
    {
      question: "How long does it take to develop a custom LLM?",
      answer: "The development timeline depends on the complexity of the project and data availability, usually ranging from 6 to 12 weeks.",
    },
    {
      question: "What is the cost of custom LLM development?",
      answer: "Costs vary based on project requirements, including data processing, model fine-tuning, and integration needs.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We follow strict data security protocols, including encryption, secure storage, and access control, to safeguard your data.",
    },
    {
      question: "What level of involvement will my team have?",
      answer:
        "We work collaboratively with your team throughout the project, ensuring alignment and allowing for iterative feedback.",
    },
    {
      question: "Can you help with ongoing maintenance and updates?",
      answer:
        "Yes, we offer post-launch support, including model monitoring, updates, and retraining as needed to maintain high performance.",
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
          img: gptneox,
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
  const heroData={
    heading: "Reduce churn and maximise retention. With Custom AI Chatbots",
    description: "Be Available For Your Customers 24/7.Partner with Centrox AI to build intelligent chatbots that know your business as well as you do,, streamline support, and drive conversions. Our tailored solutions leverage LLMs to deliver a superior user experience.",
    btnText: "Book A Call Now",
    includeDots:false,
    img: serviceHeroImg,
    reverse: false
    }
    const arrayData = [
        {
          heading: "Deep Expertise",
          description: "Our team comprises tenured AI researchers and engineers with a proven track record in chatbot development and LLM fine-tuning."
        },
        {
          heading: "Collaborative Approach",
          description: "We believe in open communication, knowledge sharing, and working closely with your team to ensure your vision is realized."
        },
        {
          heading: "Tailored Solutions",
          description: "We understand that every business is unique. We craft custom chatbot solutions that address your specific challenges and goals."
        },
        {
          heading: "Results-Driven Focus",
          description: "We're committed to delivering measurable results that drive business value and impact your bottom line."
        },
        {
          heading: "Passion for Innovation",
          description: "We stay at the forefront of AI research and development, constantly pushing the boundaries of what's possible with chatbots."
        },
    
      ];
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData}/>
          <LogosCarousel/>
          <CommonDisplayCardsGrid cardsData={challengeData} headerData={challengesHeaderData} includeButton={true} buttonText="Book 1:1 Session" cardsCaption="Centrox AI understands these limitations. We can help in building custom LLM-powered chatbots that transcend these challenges, delivering intelligent, engaging, and impactful conversations that elevate your customer experience."/>
          <CommonDisplayCardsGrid cardsData={benefitsData} headerData={benefitHeaderData} includeButton={true} buttonText="Schedule A Meeting Today"/>
          <StepperSection/>
          <LogosSection data={techStackData}/>
          <PointsandImagesSection arrayData={arrayData} heading={"Why Work With Centrox?"} description={"We're not just another chatbot development company. We're your strategic AI partner:"} />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection addTag={true} heading="We're Often Asked" subHeading="We understand the complexities and nuances of LLM development, and we're here to address your concerns" data={questions} />
        </main>
      </LandingLayout>
    </div>
  );
}
