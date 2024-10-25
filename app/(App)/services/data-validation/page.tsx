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

import LandingLayout from "../../layoutPage";
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

import Icon1 from "@/assets/Icon.webp";
import Icon2 from "@/assets/Icon-1.webp";
import Icon3 from "@/assets/Icon-3.webp";
import Icon5 from "@/assets/Icon-5.webp";
import Icon7 from "@/assets/Icon-7.webp";
import Icon8 from "@/assets/Icon-8.webp";
import menubars from "@/assets/barsmenu.webp";

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
import LandingServicesSection from "@/views/LandingPageViews/LandingServicesSection";
import IndustryBanner from "@/Components/common/IndustryBanner";
import servicebg from "@/assets/Servicebg.webp"

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
  const benefitsData = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "Transform Data into a Strategic Advantage",
        para1Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon12,
          heading: "Enhanced Accuracy",
          description:
            "Validated data means your AI models are more precise and deliver reliable results.",
          linkText: "",
          linkWithIcon: false,
        },
        {
          icon: Icon13,
          heading: "Scalable Solutions",
          description:
            "Our technology scales with your data, ensuring top performance no matter how much you have.",
          linkText: "",
          linkWithIcon: false,
        },
        {
          icon: Icon14,
          heading: "Accelerated Insights",
          description:
            "Automated validation speeds up data processing, so you can make quicker, well-informed decisions.",
          linkText: "",
          linkWithIcon: false,
        },
        {
          icon: Icon6,
          heading: "Regulatory Compliance",
          description:
            "We help ensure your data practices comply with industry regulations, keeping your organisation and stakeholders protected.",
          linkText: "",
          linkWithIcon: false,
        },
      ],
      caption:
        "Do you want to experience our Human-in-the-Loop process for validation?",
      btnText: "Book A Call",
    },
  ];

  const challengeData = [
    {
      headerData: {
        tagText: "Service Offerings", 
        headingText: "Drive Performance with Data Excellence",
        para1Text:
          "Here’s how our approach ensures your data effectively supports your AI models.",
        para2Text: "", // Removed as not needed
      },
      data: [
        {
          icon: Icon9,
          heading: "Data Ingestion", // Combined under the main heading
          description: `
            We begin by integrating seamlessly with your current data sources.Gathering data from multiple sources to ensure it’s comprehensive and accurate. Structuring and formatting the data to make it ready for thorough validation. Ensures your data is precise. We use advanced algorithms for error detection, bias identification, and data cleaning, improving the overall quality and usability of your dataset.
          `,
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Real-Time Monitoring", // Combined under the main heading
          description: `
            To keep data quality high,
            Monitoring systems that catch and address issues as they occur.
          `,
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Reporting and Insights", // Combined under the main heading
          description: `
            We’re committed to providing actionable insights: Highlighting key data quality metrics and validation outcomes, with recommendations for data improvements to enhance data quality further.
          `,
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "It's time for you to drive performance with data excellence through our comprehensive approach to data management.",
      btnText: "Optimize your data",
    },
  ];
  
  const questions = [
    {
      question:
        "Can Centrox AI’s validation solution integrate with our current systems?",
      answer:
        "Definitely! Our solutions are designed to fit right into your existing setup, so you can keep your workflows running smoothly.",
    },
    {
      question: "How does Centrox AI manage real-time data validation?",
      answer:
        "We validate your data in real-time, ensuring everything is accurate and up-to-date as it moves through your systems without slowing anything down.",
    },
    {
      question: "How customizable is your data validation service?",
      answer:
        "We tailor our data validation to your specific needs, allowing you to set the rules and checks that make the most sense for your business.",
    },
    {
      question: "Can Centrox AI scale as our data grows?",
      answer:
        "Absolutely. Our platform can easily handle more data as your business expands, without compromising on validation quality.",
    },
    {
      question:
        "Does Centrox AI work with both structured and unstructured data?",
      answer:
        "Yes, we can validate everything from databases and spreadsheets to text files, emails, and beyond.",
    },
    {
      question: "How does Centrox AI handle cloud-based data validation?",
      answer:
        "We work seamlessly with cloud environments, ensuring your data stays accurate whether it’s on-premise, in the cloud, or both.",
    },
    {
      question: "How does Centrox AI manage data from multiple sources?",
      answer:
        "We’re great at untangling complex data environments. We standardize and validate everything from different sources to keep it all consistent.",
    },
    {
      question:
        "How quickly will we see results after starting with Centrox AI?",
      answer:
        "You’ll notice improvements in data quality almost right away, with major reductions in errors within the first few weeks.",
    },
    {
      question:
        "What kind of reports and insights do you provide during data validation?",
      answer:
        "We give you clear, detailed reports that show data quality, any issues we find, and trends, so you can make decisions with confidence.",
    },
    {
      question:
        "How does Centrox AI make sure the implementation doesn’t disrupt our operations?",
      answer:
        "We plan carefully and execute smoothly, so your day-to-day operations continue without any major interruptions.",
    },
    {
      question:
        "How does Centrox AI’s data validation improve decision-making?",
      answer:
        "With accurate data, your analytics and decisions are more reliable, helping you make smarter business moves.",
    },
    {
      question:
        "What ongoing support does Centrox AI offer for data validation?",
      answer:
        "We’re here for you with continuous support, regular updates, and new features to keep your validation process running smoothly and effectively.",
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
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "Why Us?",
      description: "",
    },
    data: [
      {
        heading: "Enhanced Data Accuracy",
        description:
          "Our data validation services achieve a 40% improvement in data accuracy, ensuring more reliable and precise information for your business operations.",
      },
      {
        heading: "Reduced Data Errors",
        description:
          "With our services, experience a 35% reduction in data errors, minimising mistakes and enhancing the overall quality of your data.",
      },
      {
        heading: "",
        description: "",
      },
      {
        heading: "",
        description: "",
      },
      {
        heading: "",
        description: "",
      },
    ],
    btnText: "Book A Free Consultation",
  };

  const stepperdata = {
    heading: "Our Process of Improving Quality",
    description:
      "Our strategic approach to improving the quality of data demands a thorough understanding of your objectives, which helps us improve the accuracy of your AI models.",
    data: [
      {
        title: "Inaccuracy Rectification",
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
                text: "Our validation processes detect and rectify inaccuracies, ensuring your data is reliable and effective.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Unification",
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
                text: "Seamlessly merge data from various sources into a unified, accurate dataset.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Bias Removal",
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
                text: "Identify and eliminate biases to enhance fairness and precision in your AI models.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Consistency Checks",
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
                text: "Applying consistency checks to ensure uniformity.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Dataset Enhancement",
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
                text: "Enhancing datasets with relevant information to improve its usability for more accurate model training.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Quality Assurance",
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
                text: "Conduct tests to verify data quality, ensuring it meets model performance criteria, and implement ongoing updates to maintain quality throughout the process.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Let's Begin Validation",
  };
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
          icon: Icon1,
          heading: "Annotation & Labeling",
          description:
            "We leverage cutting-edge AI-powered annotation tools to efficiently process and label your data. But we don’t stop there, Our team of annotators then meticulously cross-verifies and refines the AI-generated annotations, ensuring the highest level of accuracy, consistency, and alignment with your specific use case.",
          linkText: "Learn More",
          link: "services/data-annotations-&-labelling",
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
          link: "services/ai-model-deployment",
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
          link: "",
          linkWithIcon: true,
        },
      ],
    },
  ];

  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Enhance Your AI with Unmatched Data Accuracy"
            description="Achieve better results in a smarter way. Enhance data accuracy while making processes more efficient at lower operational cost."
            btnText="Talk to Us"
            bgimage1={servicebg}
          />

          <LogosCarousel />
      
          {/* <CommonDisplayCardsGrid data={challengeData} /> */}
          {/* <LandingServicesSection
            servicesTabs={servicesTabs}
            cardsData={cardsData}
            heading="Service Offerings"
            description="Here’s how our approach ensures your data effectively supports your AI models:"
          /> */}
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={benefitsData} />
          <StepperSection data={stepperdata} />
          {/* <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results:"
            }
          /> */}
          <PointsandImagesSection arrayData={arrayData} />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner heading="Do you have any queries around your data validation process?" description="Let's discuss over a 30-mins call around how we can help you
" btnText="Book A Call" isBooking/>
        </main>
      </LandingLayout>
    </div>
  );
}
