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


export default async function Page({ params }: { params: { slug: string } }) {


  const benefitsData = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "How We Help Your Model Speak Your Language", // Updated heading
        para1Text:
          "Fine-tuning is the key to exploiting your AI model's full potential. At Centrox AI, we specialize in tailoring state-of-the-art models to your specific needs, resulting in:", // Updated first paragraph
        heading2Text: "Key Features & Benefits",
      },
      data: [
        {
          icon: Icon12,
          heading: "Domain Adaptation", // Updated heading
          description:
            "Your model will understand your industry's unique vocabulary, terminology, and context, leading to drastically improved accuracy and relevance.", // Updated description
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "Enhanced Performance", // Updated heading
          description:
            "Achieve state-of-the-art results on your specific tasks, even with limited labeled data.", // Updated description
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Reduced Bias & Improved Fairness", // Updated heading
          description:
            "Mitigate unwanted biases in pre-trained models, ensuring your AI solutions are fair and ethical.", // Updated description
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon6,
          heading: "Optimized Efficiency", // Updated heading
          description:
            "Reduce model size and computational requirements, enabling faster inference and deployment on resource-constrained environments.", // Updated description
          linkText: "Learn More",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Explore Our Fine-Tuning Expertise",
    },
  ];

  const challengeData = [
    {
      headerData: {
        tagText: "Challenges",
        headingText: "The Challenge of Generic AI Models",
        para1Text:
          "Pre-trained models often fall short when it comes to real-world applications. They struggle to:",
        para2Text:
          "",
      },
      data: [
        {
          icon: Icon9,
          heading: "Generalization",
          description:
            "Pre-trained models often struggle to adapt to your unique dataset and specific task requirements, leading to subpar performance and relevance.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Maintaining Accuracy",
          description:
            "Delivering consistently reliable and precise outputs can be a challenge when using pre-trained models in real-world scenarios.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Avoiding Bias",
          description:
            "Mitigating inherent biases in large pre-trained models is crucial to ensure fair and ethical AI solutions.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Optimizing Efficiency",
          description:
            "Pre-trained models often require significant computational resources, making it difficult to run efficiently, especially with limited infrastructure.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
      ],
      caption:
        "These limitations can hinder innovation and impede your AI initiatives.",
      btnText: " Discuss Your Fine-Tuning Challenges",
    },
  ];

  const questions = [
    {
      question: "What kind of data do you need to train a custom LLM?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How long does it take to develop a custom LLM?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What is the cost of custom LLM development?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "How do you ensure data security and privacy during the development process?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What level of involvement will my team have in the project?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Can you help us with ongoing model maintenance and updates?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  const stepperData = {
    heading: "How Do We Fine-Tune?",
    description:
      "We follow a data-driven, iterative process to ensure optimal results:",
    data: [
      {
        title: "In-Depth Needs Analysis", // Updated title
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
                text: "We collaborate closely with your team to understand your specific use case, data characteristics, and performance objectives.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Strategic Model Selection", // Updated title
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
                text: "We leverage our deep knowledge of the AI landscape to recommend the most suitable pre-trained model architecture for your needs, considering factors like task suitability, computational efficiency, and licensing requirements.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Preparation & Augmentation", // Updated title
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
                text: "We employ advanced techniques to clean, preprocess, and augment your data, ensuring it's primed for optimal model training.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Hyperparameter Optimization", // Updated title
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
                text: "We leverage cutting-edge tools and techniques (grid search, random search, Bayesian optimization) to fine-tune hyperparameters and extract maximum performance from your model.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Iterative Training & Evaluation", // Updated title
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
                text: "We continuously train and evaluate the model, tracking progress on key metrics and industry benchmarks.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Deployment & Monitoring", // Updated title
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
                text: "We seamlessly transition your fine-tuned model to production, ensuring smooth integration and ongoing monitoring for optimal performance.", // Updated content
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Get Started with Fine-Tuning", // Updated button text
  };
  const arrayData = 
   {
    headerData:{
        tagText:"Resolving",
        heading:"Addressing Your AI Challenges",
        description:"We understand the complexities of AI model development. Our fine-tuning expertise helps you overcome common challenges:        "
    } 
    ,data:[{
      heading: "Data Scarcity", // Updated heading
      description:
        "Achieve exceptional results even with limited labeled data through techniques like transfer learning and data augmentation.", // Updated description
    },
    {
      heading: "Overfitting & Generalization", // Updated heading
      description:
        "Prevent overfitting and ensure your model generalizes well to new, unseen data.", // Updated description
    },
    {
      heading: "Bias Mitigation", // Updated heading
      description:
        "Identify and address potential biases in pre-trained models to ensure fair and ethical AI solutions.", // Updated description
    },
    {
      heading: "Performance Bottlenecks", // Updated heading
      description:
        "Optimize model size and complexity for efficient inference and deployment, even on resource-constrained environments.", // Updated description
    }],
    btnText:"Overcome Your AI Challenges with Centrox AI"
}
  
  
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading={"Fine-Tune A Models To Make It Truly Yours"}
            description={
              " At Centrox AI, we help you go beyond the limitations of pre-trained models and achieve peak performance on your specific tasks."
            }
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={benefitsData} />
          <StepperSection data={stepperData} />
          {/* <LogosSection data={techStackData} /> */}
          <PointsandImagesSection arrayData={arrayData} />
          {/* <LandingCaseStudySection /> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading="We understand the complexities and nuances of LLM development, and we're here to address your concerns"
            data={questions}
          />
        </main>
      </LandingLayout>
    </div>
  );
}
