//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import servicebg from "@/assets/Servicebg.webp"
import Icon4 from "@/assets/Icon-4.svg";

import Icon9 from "@/assets/Icon-9.svg";

import Icon10 from "@/assets/Icon-13.svg";
import Icon11 from "@/assets/Icon-11.svg";
import Icon12 from "@/assets/Icon-12.svg";
import Icon13 from "@/assets/Icon-13.svg";
import Icon14 from "@/assets/Icon-14.svg";
import liama from "@/assets/liama.webp";
import falcon from "@/assets/falcon.webp";
import gptneox from "@/assets/GPT-NeoX.webp";

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";

import IndustryBanner from "@/Components/common/IndustryBanner";
import dataannotation from "@/assets/Data Annotations1.svg"
import accurateannotation from "@/assets/bentobox/Accurate Annotations.svg"
import comprehensive_solution from "@/assets/bentobox/Comprehensive solution.svg"
import domain_specific from "@/assets/bentobox/Domain Specific Expertise.svg"
import { bentobox } from "@/store/imageStore";

export const metadata = {
  title:"Data Annotations and Labelling Services for AI & ML | Centrox AI",
  description:"Offering scalable, high-quality data annotation services. Providing precise, efficient solutions, specializing in image, video, audio, and text annotations. Book Now.",
  alternates: {
    canonical: "https://centrox.ai/services/data-annotations-and-labelling",
  },
}

export default async function Page({ params }: { params: { slug: string } }) {


  const benefitsData = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "Unlock the Power of Quality Annotation",
        para1Text:
          "Rich in quality annotation helps artificial intelligence improve its performance over time, allowing models to understand and process real-world information effectively.",
        heading2Text: "",
        para2Text: "",
      },
       data : [
        {
          icon: null, // Ensure you have the correct icon for Accurate Annotation
          heading: "Accurate Annotation",
          description:
            "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition, making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento14,
          alt: "Illustration of a facial landmark detection wireframe showcasing accurate annotation for object detection"  // No alt text, icon is null
        },
        {
          icon: Icon13,
          heading: "Efficient Annotation",
          description:
            "Centrox's annotation processes allow large-scale data handling, enhancing productivity in areas such as sports analytics, surveillance, and autonomous driving systems.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Efficient Annotation"  // Added alt text based on heading
        },
        {
          icon: Icon14,
          heading: "Competitive Pricing",
          description:
            "Save time, resources, and operational overhead by choosing an expert solution. Maintain high standards without the challenges of hiring, training, and managing staff. We handle the complexities while you focus on your core goals.",
          linkText: "",
          linkWithIcon: true,
          alt: "Competitive Pricing"  // Added alt text based on heading
        },
        {
          icon: null,
          heading: "Comprehensive Solutions",
          description:
            "Receive customized categories and multiple attributes per instance, matching your exact project requirements.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento8,
          alt: "Representing customized, comprehensive solutions matching your exact project requirements."  // No alt text, icon is null
        },
        {
          icon: null,
          heading: "Domain-Specific Expertise",
          description:
            "Our deep understanding of NLPs fits our workflow in assisting in your critical application development.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: bentobox.services.bento9,
          alt: "NLP gear icon with connected boxes, representing domain expertise in natural language processing for app development"  // No alt text, icon is null
        },
        {
          icon: Icon12,
          heading: "Security and Compliance",
          description:
            "We safeguard the sensitive information of your data to industry standards, providing you with peace of mind.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          alt: "Security and Compliance"  // Added alt text based on heading
        },
      ],
      caption: "",
      btnText: "Talk to our AI expert", // Updated CTA
    },
  ];
  
  const challengeData = [
    {
      headerData: {
        tagText: "Services",
        headingText: "What Centrox Annotation Offers?",
        para1Text:
          "",
        para2Text: "",
        heading2Text: "",
      },
      data : [
        {
          icon: Icon9,
          heading: "Image Annotations",
          description:
            "Centrox provides detailed object detection, segmentation, and landmark recognition services, ensuring precise identification and labelling within images.",
          linkText: "",
          linkWithIcon: true,
          alt: "Image Annotations"
        },
        {
          icon: Icon10,
          heading: "Video Annotations",
          description:
            "Centrox specializes in movement prediction by analyzing and tracking objects within videos, offering valuable insights for sports analytics, surveillance, and autonomous driving systems.",
          linkText: "",
          linkWithIcon: true,
          alt: "Video Annotations"
        },
        {
          icon: Icon11,
          heading: "Audio Annotation",
          description:
            "Improve model understanding with accurate speech recognition. Quality audio annotation services are essential for virtual assistants, call center analytics, podcast transcription, and multilingual speech applications.",
          linkText: "",
          linkWithIcon: true,
          alt: "Audio Annotation"
        },
        {
          icon: Icon4,
          heading: "Text Annotation",
          description:
            "Enhance your textual datasets with multiple languages and scripts. We offer text classification, keyphrase extraction, intent classification, question answering, and text summarization.",
          linkText: "",
          linkWithIcon: true,
          alt: "Text Annotation"
        },
      ],
      
      caption:
        "",
      btnText: "Explore more",
    },
  ];
  

  const questions = [
    {
      question: "How does Centrox handle large and complex datasets for annotation?",
      answer: "At Centrox, we scale our annotation services by utilizing a robust team of skilled annotators who can efficiently manage extensive and complex datasets. Our workflow is designed to handle high volumes of data while ensuring consistent quality and accuracy across all tasks."
    },
    {
      question: "What steps are taken to ensure the accuracy and relevance of annotations for specialized domains?",
      answer: "We assign domain experts or annotators with specialized knowledge to handle niche tasks. This ensures that annotations are both contextually accurate and relevant, meeting the unique requirements of specialized or technical fields."
    },
    {
      question: "How does Centrox’s feedback loop enhance the quality of annotations during a project?",
      answer: "Our feedback loop involves iterative reviews and updates based on client feedback and internal quality checks. Annotators receive continuous guidance and corrections, which helps refine and improve annotation quality throughout the project."
    },
    {
      question: "What protocols are in place to manage and correct annotation errors?",
      answer: "We have a multi-layered approach to error management, including initial quality checks, random sampling of annotated data for review, and detailed feedback mechanisms. This approach helps promptly identify and rectify errors, ensuring high-quality results."
    },
    {
      question: "How does Centrox train annotators for specific project requirements?",
      answer: "Annotators undergo rigorous project-specific training, which includes detailed guidelines and examples tailored to each task. We provide ongoing support to ensure that they are fully equipped to deliver accurate and high-quality annotations."
    },
    {
      question: "What measures does Centrox take to ensure consistency in annotations across different annotators?",
      answer: "We maintain consistency by establishing clear annotation guidelines and standards. Regular calibration sessions and cross-annotator reviews are conducted to ensure that all team members adhere to the same quality benchmarks."
    },
    {
      question: "How does Centrox manage changes in project scope or annotation guidelines during an ongoing project?",
      answer: "We employ a structured change management process to adapt to updates in guidelines or project scope. This includes reviewing training materials, updating annotators, and communicating changes effectively to ensure seamless transitions."
    },
    {
      question: "What reporting and analytics does Centrox provide to track annotation progress and quality?",
      answer: "We offer comprehensive reporting and analytics tools that provide insights into project progress, quality metrics, and annotation performance. These reports help you monitor the status of your project and make informed decisions based on real-time data."
    },
    {
      question: "How does Centrox handle urgent or high-priority annotation requests?",
      answer: "For urgent requests, we prioritize them by allocating additional resources and adjusting workflows to meet tight deadlines. Our team is adept at managing high-priority tasks efficiently while maintaining high standards of quality."
    },
    {
      question: "How does Centrox approach multilingual or cross-linguistic annotation tasks?",
      answer: "We deploy annotators fluent in the relevant languages and use specialized tools to handle linguistic nuances. This ensures accurate and contextually appropriate annotations across multiple languages."
    }
  ];
  


  
  const heroData = {
    heading: "Advanced Annotation for Superior Data Quality",
    description:
      "Our scalable and high-quality data annotation services help you keep pace with innovation! Our expert-driven approach ensures raw data is transformed into high-quality labelled data across all industries. Our claim to fame is solving complex AI projects by refining machine learning algorithms.",
    btnText: "Book A Call Now",
    includeDots: false,
    img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/services/Data+Annotations1.svg", 
    reverse: false,
  };
  
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "Why Us?",
      description:
        "Our mission lies in providing solutions that abide by international standards,We prioritise customer satisfaction, and keep them in loop until contentment has been achieved.we commit to deliver data annotation service that promises.",
    },
    data: [
      {
        heading: "Quality Annotation",
        description:
          "The labelled data set we deliver to our clients are of top tier quality, ensuring a reliable training process for computing more accurate results for desired problems that the user may encounter in the real world scenario.",
      },
      {
        heading: "High-Volume Annotation Expertise",
        description:
          "Our data annotators possess the expertise for labelling the large and quality data, in order to ensure the provision of a dataset that is balanced and diverse while holding the ability to resolve any given query which is expected from it.",
      },
      {
        heading: "Cost-Effective Solutions",
        description:
          "We understand the importance of finances therefore we aim to introduce quality data annotation services that can encourage in producing cost effective solutions to provide it to the users.",
      },
      {
        heading: "Competitive Pricing",
        description:
          "Our vision is to strengthen the tech revolution where we offer our quality data annotation services at extremely competitive pricing to ensure you receive quality annotation services at best price.",
      },
 
    ],
    btnText: "",
  };
  

  const stepperdata = {
    heading: "Our Process for Data Annotation",
    description:
      "We offer a structured and efficient data annotation process tailored to meet your project requirements.",
    data: [
      {
        title: "Understanding Your Requirements",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step1",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We begin by thoroughly understanding your project goals, data types, and specific annotation needs.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Planning the Workflow",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step2",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We design a detailed workflow and train our internal team accordingly. Collaborative meetings with project managers, AI/ML engineers, and QA specialists are scheduled regularly to ensure the process meets quality standards.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Collection and Preparation",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step3",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We gather the necessary data and prepare it for annotation, ensuring it is organized and ready for the next steps.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Annotations",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step4",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "Our annotation team meticulously labels your data, maintaining high consistency and accuracy throughout the process.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Quality Check",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step5",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We implement iterative feedback mechanisms, review a sample of the annotated dataset, and apply automated scoring to ensure high quality and accuracy.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Comprehensive Data Delivery and Support",
        content: [
          {
            _type: "block",
            style: "normal",
            _key: "step6",
            markDefs: [],
            children: [
              {
                _type: "span",
                marks: [],
                text: "We deliver ready-to-integrate annotated data and provide ongoing support to ensure alignment with evolving project needs.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Let’s Begin Annotation",
    alt:"Our Process for Data Annotation",
  };
  
  return (
    <div>
   
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
        <HeroSection {...heroData} alt="Type of Data Annotation"  bgimage1={servicebg} img={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/services/Data+Annotations1.svg"} bgClassName="opacity-60"   />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          <CommonDisplayCardsGrid
            data={benefitsData}
            resizeableCardsLayout
            gridCols={3}
          />
          <StepperSection data={stepperdata} />
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
          <IndustryBanner heading="Talk to Our AI Expert" description="Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment." btnText="Book 1:1 Call" isBooking/>
        </main>
   
    </div>
  );
}
