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
import LandingLayout from "../../layout";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp"
import solutionbg2 from "@/assets/solutions/solutionbg2.webp"
import industryPic1 from "@/assets/solutions/sol-industry-1.webp";
import opencv from "@/assets/opencv-plain logo.webp"
import dockers from "@/assets/docker-icon logo.webp"
import keras from "@/assets/keras-plain logo.webp"
import kubernetes from "@/assets/kubernetes-icon-white logo.webp"
import weightandbiases from "@/assets/evaluationlogos/wandb-dots-logo (1) 1.webp"
import labellinghero from "@/assets/solutions/labeling dresses with ai hero.webp"
import Icon42 from "@/assets/Icon-42.webp"
import Icon43 from "@/assets/Icon-43.webp"
import Icon44 from "@/assets/Icon-44.webp"
import Icon45 from "@/assets/Icon-45.webp"
import Icon46 from "@/assets/Icon-46.webp"
import Icon47 from "@/assets/Icon-47.webp"
import Icon48 from "@/assets/Icon-48.webp"
import industryPic2 from "@/assets/solutions/Brick & mortae.webp";
import industryPic3 from "@/assets/Brands.webp";






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
              icon: Icon42, // Replace with the correct icon for Time-Consuming & Labor-Intensive
              heading: "Time-Consuming & Labor-Intensive",
              description:
                "Assigning tags and attributes to each product manually is a tedious and time-consuming process, requiring significant human resources and effort.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon46, // Replace with the correct icon for Prone to Human Error
              heading: "Prone to Human Error",
              description:
                "Manual labeling is susceptible to inconsistencies, inaccuracies, and subjective interpretations, leading to mislabeled products and a frustrating user experience.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon9, // Replace with the correct icon for Limited Scalability
              heading: "Limited Scalability",
              description:
                "As your product catalog grows, manual tagging becomes increasingly unsustainable, hindering your ability to expand your offerings and reach new customers.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon43, // Replace with the correct icon for Impact on Search & Discovery
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
              icon: Icon47, // Replace with the correct icon for Streamline Catalog Management
              heading: "Streamline Catalog Management",
              description:
                "Automate product tagging, saving time and resources while ensuring consistency and accuracy across your catalog.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon43, // Replace with the correct icon for Improve Search & Discovery
              heading: "Improve Search & Discovery",
              description:
                "Enhance search relevance and accuracy, helping customers find the products they're looking for quickly and easily, leading to increased conversions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon45, // Replace with the correct icon for Reduce Returns
              heading: "Reduce Returns",
              description:
                "Minimize returns due to product misrepresentation by providing accurate product attributes.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon48, // Replace with the correct icon for Accelerate Time-to-Market
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
          question: "How accurate is Centrox AI's image labeling tool for fashion products?",
          answer: "Our AI-powered tool is designed to deliver highly accurate results by utilizing state-of-the-art computer vision and deep learning models. Through continuous training and refinement, we have achieved an overall accuracy score of 85%.",
        },
        {
          question: "Can your image labeling tool handle a variety of fashion products and styles?",
          answer: "Yes, our tool can handle a wide range of fashion products, including dresses, tops, pants, accessories, and more. It adapts to different styles, materials, colors, and trends, ensuring accurate tagging across your catalog.",
        },
        {
          question: "How do you maintain the privacy and security of our product images during processing?",
          answer: "We prioritize data security and privacy in every step of our process. All product images are processed securely, adhering to industry standards and data protection protocols. We can also provide additional security measures as needed.",
        },
        {
          question: "Can your labeling tool integrate with our existing e-commerce platform?",
          answer: "Yes, our solution is designed to be flexible and can integrate seamlessly with most e-commerce platforms. Our team works closely with you to ensure compatibility and a smooth setup, making the integration process hassle-free.",
        },
        {
          question: "What kind of support is provided after the labeling tool is implemented?",
          answer: "Centrox AI offers comprehensive post-implementation support, including troubleshooting, updates, and adjustments based on your feedback. Our dedicated support team ensures that your labeling tool continues to perform optimally as your product catalog grows.",
        },
        {
          question: "How quickly can we label and update our product catalog using your tool?",
          answer: "Our AI labeling tool enables faster catalog updates, drastically reducing the time needed for product tagging compared to manual efforts. The exact speed depends on your catalog size and specific requirements, but most clients experience a significant reduction in tagging time.",
        },
        {
          question: "Can we customize the attributes and tags according to our specific brand needs?",
          answer: "Absolutely. Our tool is designed to be flexible, allowing you to define custom tags and attributes that align with your brand and product specifications, ensuring consistency with your brand's unique voice and style.",
        },
      ];
      
  
  

      const techStackData = [
   
        {
          title: "Deep Learning Frameworks",
          content: [
            {
              alt: "Icon",
              caption: "PyTorch",
              img: pytorch,
            },
          
            {
              alt: "Icon",
              caption: "Tensorflow",
              img: tensorflow,
            },
          ],
        },
        {
          title: "Libraries",
          content: [
            {
              alt: "Icon",
              caption: "Hugging Face Transformers",
              img: huggingface,
            },
          
            {
              alt: "Icon",
              caption: "Keras",
              img: keras,
            },
            {
              alt: "Icon",
              caption: "OpenCV",
              img: opencv,
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
          title: "Infrastructure & Orchestration",
          content: [
            {
              alt: "Icon",
              caption: "Kubernetes",
              img: kubernetes,
            },
            {
              alt: "Icon",
              caption: "Dockers",
              img: dockers,
            },
          ],
        },
        {
          title: "Monitoring & Experiment Tracking",
          content: [
            {
              alt: "Icon",
              caption: "MLflow",
              img: mlflow,
            },
            {
              alt: "Icon",
              caption: "Weight & Biases",
              img: weightandbiases,
            },
            {
              alt: "Icon",
              caption: "Tensorflow",
              img: tensorflow,
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
    img: labellinghero,
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
  const tabs = [
    {
      name: "E-commerce Platforms",
      href: "#",
      current: true,
      cta: "Test It Out",
    },
    {
      name: "Fashion Retailers",
      href: "#",
      current: false,
      cta: "Test It Out",
    },
    {
      name: "Fashion Brands & Designers",
      href: "#",
      current: false,
      cta: "Test It Out",
    },
  ];
  
  const gradientCardData = [
    {
      image: industryPic1,
      data: [
        {
          heading: "Enhanced Product Discoverability",
          description:
            "Improve search accuracy and product recommendations for an efficient shopping experience.",
        },
        {
          heading: "Reduced Returns",
          description:
            "Offer accurate sizing to reduce returns caused by fit issues.",
        },
        {
          heading: "Seamless Integration",
          description:
            "Integrate effortlessly into your platform to streamline catalog management.",
        },
      ],
    },
    {
      image: industryPic2,
      data: [
        {
          heading: "Catalog Optimization",
          description:
            "Automate product tagging and size recommendations to save time and resources.",
        },
        {
          heading: "Improved Shopping Experience",
          description:
            "Personalize fit and style suggestions to enhance customer satisfaction.",
        },
        {
          heading: "Inventory Insights",
          description:
            "Use customer data to optimize inventory, minimizing stockouts and overstock.",
        },
      ],
    },
    {
      image: industryPic3,
      data: [
        {
          heading: "Product Insights",
          description:
            "Leverage body measurement data to gain insights into product fit and trending styles.",
        },
        {
          heading: "Custom Garment Design",
          description:
            "Enable tailored offerings based on customer measurements and preferences.",
        },
        {
          heading: "Inclusive Sizing",
          description:
            "Expand size ranges to cater to diverse body shapes, promoting brand inclusivity.",
        },
      ],
    },
  ];
  
 
    
  return (
    <div>
  
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection img={labellinghero} {...heroData} bgimage1={solutionbg1} bgimage2={solutionbg2} bgClassName="opacity-30" />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          <CommonDisplayCardsGrid
            data={cardSection2data}
          />
          {/* <LandingSolutionsSection/> */}
        
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
           tabs={tabs}
           isBookingButton
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
          <IndustryBanner heading="Take the Next Step" description="Ready to streamline your product tagging and enhance your e-commerce experience? Schedule a free consultation with our AI experts today." btnText="Book Your Free Call" isBooking/>
        </main>
    
    </div>
  );
}
