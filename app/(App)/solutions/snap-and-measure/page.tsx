//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import Icon14 from "@/assets/Icon-14.svg";
import Icon16 from "@/assets/Icon-16.webp"
import Icon17 from "@/assets/Icon-17.webp"
import Icon18 from "@/assets/Icon-18.webp"

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";
import kubernetes from "@/assets/kubernetes-icon-white logo.webp"
import weightandbiases from "@/assets/evaluationlogos/wandb-dots-logo (1) 1.webp"
import mlflow from "@/assets/mlflowlogo.webp";

import IndustryBanner from "@/Components/common/IndustryBanner";

import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import snapmeasureHero from "@/assets/solutions/snapmeasureHero.svg";
import eggcrack from "@/assets/solutions/EggCrack.svg";
import strategy from "@/assets/solutions/Strategy.svg";
import checkerboard from "@/assets/solutions/Checkerboard.svg";
import SolutionsImage1 from "@/assets/solutions/Capture Body Dimensions.webp";
import SolutionsImage2 from "@/assets/solutions/Virtual tryon.webp";
import SolutionsImage3 from "@/assets/solutionPic3.webp";
import SolutionsImage4 from "@/assets/Streamline prod dev image.png";
import industryPic1 from "@/assets/solutions/sol-industry-1.webp";
import industryPic2 from "@/assets/solutions/Brick & mortae.webp";
import industryPic3 from "@/assets/solutions/Fashion & brands.webp";
import solutionbg1 from "@/assets/solutions/solutionbg1.webp"
import solutionbg2 from "@/assets/solutions/solutionbg2.webp"
import opencv from "@/assets/opencv-plain logo.webp"
import dockers from "@/assets/docker-icon logo.webp"
import keras from "@/assets/keras-plain logo.webp"
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";
import ContactInput from "@/Components/common/ContactInput";
import SectionTag from "@/Components/common/SectionTag";
import ProtectedSolutionView from "@/Components/common/ProtectedSolutionView";

export const metadata = {
  title:"Body measurement AI-Powered Tool for Apparel | Centrox AI",
  description:"With Body Measurement tool improves apparel sizing accuracy, reduces returns, and enhances customer satisfaction. Try for free & your business growth.",
  alternates: {
    canonical: "https://centrox.ai/solutions/snap-and-measure",
  },
}



export default async function Page({ params }: { params: { slug: string } }) {
  const cardsSolutions = [
    {
      headerData: {
        tagText: "AI-powered Solution",
        headingText: "What Our AI-Powered Solution Offers?",
        para1Text: "Our AI powered solution is introduced to provide you an automated way to make your tasks execution easy.",
        heading2Text: "",
        para2Text: "",
      },
      data : [
        {
          icon: Icon16,
          alt: "Unmatched Accuracy",
          heading: "Unmatched Accuracy",
          description:
            "Achieve measurement precision comparable to professional tailors, ensuring a perfect fit for your customers.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon17,
          alt: "Data Security & Privacy",
          heading: "Data Security & Privacy",
          description:
            "Implement robust measures to protect sensitive customer data, ensuring compliance with privacy regulations and building trust with your users.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          alt: "Scalability",
          heading: "Scalability",
          description:
            "Handle large volumes of measurements efficiently, supporting your business growth and providing a seamless experience even during peak shopping periods.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon18,
          alt: "Integration",
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
        tagText: "Challenges",
        headingText: " ",
        para1Text:
          "",
        para2Text: "The traditional approach to apparel sizing presents significant challenges for businesses and customers alike.",
        heading2Text:
          "Are sizing inconsistencies and high return rates impacting your bottom line?",
      },
       data :[
        {
          icon: eggcrack, // Replace with the correct icon for Inaccurate Measurements
          alt: "Inaccurate Measurements", // Alt text same as heading
          heading: "Inaccurate Measurements",
          description:
            "Manual measurements, whether taken in-store or self-reported by customers, are prone to human error. This leads to inconsistent sizing, customer frustration, and ultimately, increased return rates.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: strategy, // Replace with the correct icon for High Return Rates
          alt: "High Return Rates", // Alt text same as heading
          heading: "High Return Rates",
          description:
            "Ill-fitting garments are a major contributor to costly returns, impacting profitability and damaging customer loyalty. The environmental impact of these returns is also a growing concern.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: checkerboard, // Replace with the correct icon for Limited Personalization
          alt: "Limited Personalization", // Alt text same as heading
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
      question: "How accurate is Centrox AI's body measurement tool?",
      answer: "Our tool achieves high accuracy by using advanced computer vision and machine learning algorithms. It is designed to provide measurements comparable to those of professional tailors, ensuring a precise fit for a wide range of body shapes and clothing types."
    },
    {
      question: "Can the body measurement tool handle different types of clothing and body shapes?",
      answer: "Yes, our tool is versatile and can accommodate various clothing styles and body shapes. It is optimized to accurately capture measurements for different garments, enabling precise recommendations and a personalized shopping experience for diverse body types."
    },
    {
      question: "How does Centrox AI ensure the privacy and security of customer data?",
      answer: "Data security is a top priority for us. We use strict security protocols and follow industry-standard practices to protect customer data, ensuring compliance with privacy regulations and building customer trust."
    },
    {
      question: "Can the body measurement tool integrate with our existing e-commerce platform or mobile app?",
      answer: "Yes, our tool is designed for easy integration with most e-commerce platforms and mobile apps. Our team will work with you to ensure seamless compatibility, so you can enhance your customer experience without disrupting your current systems."
    },
    {
      question: "What kind of support is provided after the tool is implemented?",
      answer: "Centrox AI offers comprehensive post-implementation support, including troubleshooting, software updates, and adjustments as needed. Our dedicated support team ensures your tool continues to operate efficiently as your business grows."
    },
    {
      question: "How does the tool help reduce return rates?",
      answer: "By providing accurate, AI-driven body measurements and size recommendations, our tool minimizes the chances of sizing issues, helping customers find their best fit on the first try. This reduces return rates, boosts customer satisfaction, and strengthens brand loyalty."
    },
    {
      question: "Is the tool user-friendly for customers to use at home?",
      answer: "Absolutely! Our body measurement tool is designed for convenience. Customers can capture measurements using their smartphones, allowing for an easy, contactless experience that can be done from anywhere."
    }
  ];
  

  const solutionsData = [
    {
      img: SolutionsImage1,
      description:
        "Extract precise measurements from simple photographs, eliminating the need for physical measuring tapes or in-person fittings. Our technology uses advanced pose estimation and body landmark detection to accurately identify key points on the body, ensuring precise measurements even from standard smartphone photos.",
      heading: "Accurately Capture Body Dimensions",
      tabheading:"Capture Body Dimensions",
      btnText: "",
      link: "",
      alt:"capture and measure body dimensions"
    },
    {
      img: SolutionsImage2,
      description:
        "Allow customers to visualize how garments will fit and look on their own bodies in a virtual environment. This empowers customers to make more confident purchase decisions, reducing the likelihood of returns and enhancing the overall shopping experience.",
      heading: "Enable Virtual Try-Ons",
      tabheading: "Virtual Try-Ons",
      btnText: "",
      link: "",
      alt:"Virtual Try-Ons: Allow customers to visualize how garments will fit and look on their own bodies"
    },
    {
      img: SolutionsImage3,
      description:
        " Offer tailored product suggestions based on individual body measurements and preferences, going beyond generic size charts to provide a truly personalized shopping journey.",
      heading: "Personalize Recommendations",
      tabheading: "Personalize Recommendations",
      btnText: "",
      link: "",
      alt:"Personalised Recommendations: Offer tailored product suggestions based on individual body measurements and preferences"
    },
    {
      img: SolutionsImage4,
      description:
        "Gain valuable insights into customer body data to inform design and sizing decisions, reducing production costs, minimizing waste, and improving fit accuracy across your product lines.",
      heading: "Streamline Product Development",
      tabheading: "Streamline Product Dev",
      btnText: "",
      link: "",
      alt:"Streamline Product Development"
    },
  ];

  const techStackData = [
    {
      title: "Deep Learning Frameworks",
      content: [
        {
          alt: "PyTorch",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Tensorflow",
          caption: "Tensorflow",
          img: tensorflow,
        },
      ],
    },
    {
      title: "Libraries",
      content: [
        {
          alt: "Hugging Face Transformers",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "Keras",
          caption: "Keras",
          img: keras,
        },
        {
          alt: "OpenCV",
          caption: "OpenCV",
          img: opencv,
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
      title: "Infrastructure & Orchestration",
      content: [
        {
          alt: "Kubernetes",
          caption: "Kubernetes",
          img: kubernetes,
        },
        {
          alt: "Dockers",
          caption: "Dockers",
          img: dockers,
        },
      ],
    },
    {
      title: "Monitoring & Experiment Tracking",
      content: [
        {
          alt: "MLflow",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Weight & Biases",
          caption: "Weight & Biases",
          img: weightandbiases,
        },
        {
          alt: "Tensorflow",
          caption: "Tensorflow",
          img: tensorflow,
        },
      ],
    },
  ];
  
  const heroData = {
    heading: "Measurement Precision with AI",
    description:
      "Our body measurement tool integrates computer vision and machine learning algorithms to extend convenience for measurement, and can consequently help you in various tasks where accurate measurement is crucial.",
    btnText: "Try for Free",
    includeDots: false,
    img: snapmeasureHero,
    reverse: false,
    className: "lg:!w-1/3 !w-4/5 mx-auto",
  };
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "The Centrox AI Advantage",
      description: "We're your trusted partner in AI innovation.",
    },
    alt:"The Centrox AI Advantage",
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
      alt:"AI in E-commerce",
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
      image: industryPic2,
      alt:"AI in Brick and Mortar Retail",
      data: [
        {
          heading: "Enhance In-Store Experiences",
          description:
            "Accelerate the design process with generative models that assist in creating innovative concepts, generating unique patterns and textures, and streamlining production workflows, fostering creativity and efficiency.Provide a contactless and efficient way for customers to get accurate measurements, eliminating the need for fitting rooms and improving the overall shopping experience.",
        },
        {
          heading: "Optimize Inventory Management",
          description:
            "Gain data-driven insights into customer body shapes to make more informed inventory decisions, reducing overstock and stockouts.",
        },
        {
          heading: "Offer Custom Tailoring",
          description:
            "Leverage precise body measurements to offer personalized tailoring and alterations, creating a unique and valuable service for your customers.",
        },
      ],
    },
    {
      image: industryPic3,
      alt:"AI in Fashion Brands & Designes",
      data: [
        {
          heading: "Streamline Product Development",
          description:
            "Gather valuable data on customer body shapes and sizes to inform design and sizing decisions, leading to better-fitting garments and reduced production costs.",
        },
        {
          heading: "Create Inclusive Sizing",
          description:
            "Develop size ranges that cater to a wider variety of body shapes, promoting inclusivity and expanding your customer base.",
        },
        {
          heading: "Offer Made-to-Measure Options",
          description:
            "Leverage AI-powered body measurements to provide customers with the option for custom-made clothing, creating a truly personalized shopping experience.",
        },
      ],
    },
  
  ];
  return (
    <div>
    
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection alt="AI-powered Body measurement tool" {...heroData} bgimage1={solutionbg2} bgimage2={solutionbg1} bgClassName="opacity-30"/>
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} gridCols={3} />
          <LandingSolutionsSection
            data={solutionsData}
            heading="Measurement Precision With AI"
            description="Our body measurement tool integrates computer vision and machine learning algorithms to extend convenience for measurement, and can consequently help you in various tasks where accurate measurement is crucial."
          />
          
          {/* <iframe src="https://bm.demo.centrox.ai:8443/" className="w-full h-[120vh]"></iframe> */}
          <CommonDisplayCardsGrid data={cardsSolutions} />
          {/* <section className={classNames(section_wrapper_class)}>
    
    <header aria-label="Centrox Contact" className="flex flex-col gap-y-4 ">
    <SectionTag text="Solution"/>
      <h2 className={classNames(text_h2_class,"text-center")}>
        AI Powered Measurement Tool
      </h2>
      <p className={classNames(text_para_2,"text-center w-full sm:w-[60%] mx-auto")}>
      To access the demo for the solution please provide your email.
      </p>
    </header>
    <ContactInput/>
  </section> */}

  <ProtectedSolutionView/>
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots."
            }
            caption=""
            btnText="Let’s Discuss Further"
          />
          <LandingIndustriesSection
          gradientCardData={gradientCardData}
            caption="Whether you're an online retailer, a brick-and-mortar store, or a fashion brand, our AI body measurement tool can help you transform your business, improve customer satisfaction, and drive growth."
            tabs={tabs}
            heading={"Revolutionize Retail & Fashion with AI Body Measurement"}
            description="Our AI-powered body measurement technology is a game-changerfor the retail and fashion industries."
            isBookingButton={true}
          />

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
            description="Ready to revolutionize your business with AI-powered body measurements?
            Schedule a technical discussion with our experts to learn how our tool can be integrated into your existing systems.
            "
            btnText="Book a Technical Demo"
            isBooking
          />
        </main>
 
    </div>
  );
}
