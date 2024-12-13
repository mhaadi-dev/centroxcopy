//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon from "@/assets/Icon.svg";

import Icon9 from "@/assets/Icon-9.svg";


import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";

import IndustryBanner from "@/Components/common/IndustryBanner";


import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";

import solutionbg1 from "@/assets/solutions/solutionbg2.webp"
import solutionbg2 from "@/assets/solutions/solutionbg1.webp"
import industryPic1 from "@/assets/solutions/sol-industry-1.webp";
import opencv from "@/assets/opencv-plain logo.webp"
import dockers from "@/assets/docker-icon logo.webp"
import keras from "@/assets/keras-plain logo.webp"
import kubernetes from "@/assets/kubernetes-icon-white logo.webp"
import weightandbiases from "@/assets/evaluationlogos/wandb-dots-logo (1) 1.webp"
import labellinghero from "@/assets/solutions/labeling dresses with ai.svg"
import Icon42 from "@/assets/Icon-42.webp"
import Icon43 from "@/assets/Icon-43.webp"
import Icon45 from "@/assets/Icon-45.webp"
import Icon46 from "@/assets/Icon-46.webp"
import Icon47 from "@/assets/Icon-47.webp"
import Icon48 from "@/assets/Icon-48.webp"
import industryPic2 from "@/assets/solutions/Brick & mortae.webp";
import industryPic3 from "@/assets/Brands.webp";


export const metadata = {
  title:"Image Labeling AI-Powered for Fashion E-Commerce | Centrox AI",
  description:"With Centrox AI image labeling tool automates product tagging, improves search accuracy and streamline your fashion e-commerce. Try it for free today."
}



export default async function Page({ params }: { params: { slug: string } }) {

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
              icon: Icon42,
              heading: "Time-Consuming & Labor-Intensive",
              alt: "Time-Consuming & Labor-Intensive",
              description:
                "Assigning tags and attributes to each product manually is a tedious and time-consuming process, requiring significant human resources and effort.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon46,
              heading: "Prone to Human Error",
              alt: "Prone to Human Error",
              description:
                "Manual labeling is susceptible to inconsistencies, inaccuracies, and subjective interpretations, leading to mislabeled products and a frustrating user experience.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon9,
              heading: "Limited Scalability",
              alt: "Limited Scalability",
              description:
                "As your product catalog grows, manual tagging becomes increasingly unsustainable, hindering your ability to expand your offerings and reach new customers.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon43,
              heading: "Impact on Search & Discovery",
              alt: "Impact on Search & Discovery",
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
              icon: Icon47,
              heading: "Streamline Catalog Management",
              alt: "Streamline Catalog Management",
              description:
                "Automate product tagging, saving time and resources while ensuring consistency and accuracy across your catalog.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon43,
              heading: "Improve Search & Discovery",
              alt: "Improve Search & Discovery",
              description:
                "Enhance search relevance and accuracy, helping customers find the products they're looking for quickly and easily, leading to increased conversions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon45,
              heading: "Reduce Returns",
              alt: "Reduce Returns",
              description:
                "Minimize returns due to product misrepresentation by providing accurate product attributes.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon48,
              heading: "Accelerate Time-to-Market",
              alt: "Accelerate Time-to-Market",
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
              alt: "PyTorch Icon",
              caption: "PyTorch",
              img: pytorch,
            },
            {
              alt: "TensorFlow Icon",
              caption: "TensorFlow",
              img: tensorflow,
            },
          ],
        },
        {
          title: "Libraries",
          content: [
            {
              alt: "Hugging Face Transformers Icon",
              caption: "Hugging Face Transformers",
              img: huggingface,
            },
            {
              alt: "Keras Icon",
              caption: "Keras",
              img: keras,
            },
            {
              alt: "OpenCV Icon",
              caption: "OpenCV",
              img: opencv,
            },
          ],
        },
        {
          title: "Infrastructure",
          content: [
            {
              alt: "AWS Icon",
              caption: "AWS",
              img: aws,
            },
            {
              alt: "Azure Icon",
              caption: "Azure",
              img: azure,
            },
            {
              alt: "Google Cloud Icon",
              caption: "Google Cloud",
              img: googlecloud,
            },
          ],
        },
        {
          title: "Infrastructure & Orchestration",
          content: [
            {
              alt: "Kubernetes Icon",
              caption: "Kubernetes",
              img: kubernetes,
            },
            {
              alt: "Docker Icon",
              caption: "Docker",
              img: dockers,
            },
          ],
        },
        {
          title: "Monitoring & Experiment Tracking",
          content: [
            {
              alt: "MLflow Icon",
              caption: "MLflow",
              img: mlflow,
            },
            {
              alt: "Weight & Biases Icon",
              caption: "Weight & Biases",
              img: weightandbiases,
            },
            {
              alt: "TensorFlow Icon",
              caption: "TensorFlow",
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
      alt:"AI in Ecommerce Platforms",
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
      alt:"AI for Fashion Retailers",
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
      alt:"AI for Fashion Brands and Designers",
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
          <HeroSection alt="AI Image labeling your fashion products" img={labellinghero} {...heroData} bgimage1={solutionbg1} bgimage2={solutionbg2} bgClassName="opacity-30" />
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
