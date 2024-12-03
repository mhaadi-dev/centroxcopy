//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import Icon4 from "@/assets/Icon-4.svg";
import Icon6 from "@/assets/Icon-6.svg";
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

import generalization from "@/assets/bentobox/Generalization.svg"
import optimizing_efficiency from "@/assets/bentobox/Optimizing Efficiency.svg"

import IndustryBanner from "@/Components/common/IndustryBanner";
import finetuninghero from "@/assets/Fine Tuning.svg"
import servicebg from "@/assets/Servicebg.webp"


export const metadata = {
  title:"Fine Tune AI Model Solutions to get Peak Performance | Centrox AI ",
  description:"Unlock full potential of your AI models with Centrox AI fine-tuning expertise. Achieve accuracy, reduce bias, and optimize performance. Book Session Now"
}
export default async function Page({ params }: { params: { slug: string } }) {
  const benefitsData = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "How We Help Your Model Speak Your Language", // Updated heading
        para1Text:
          "Fine-tuning is the key to exploiting your AI model's full potential. At Centrox AI, we specialize in tailoring state-of-the-art models to your specific needs.", // Updated first paragraph
        heading2Text: "",
      },
      data: [
        {
          icon: Icon12,
          heading: "Domain Adaptation", // Updated heading
          description:
            "Your model will understand your industry's unique vocabulary, terminology, and context, leading to drastically improved accuracy and relevance.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Domain Adaptation",
        },
        {
          icon: Icon13,
          heading: "Enhanced Performance", // Updated heading
          description:
            "Achieve state-of-the-art results on your specific tasks, even with limited labeled data.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Enhanced Performance",
        },
        {
          icon: Icon14,
          heading: "Reduced Bias & Improved Fairness", // Updated heading
          description:
            "Mitigate unwanted biases in pre-trained models, ensuring your AI solutions are fair and ethical.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Reduced Bias & Improved Fairness",
        },
        {
          icon: Icon6,
          heading: "Optimized Efficiency", // Updated heading
          description:
            "Reduce model size and computational requirements, enabling faster inference and deployment on resource-constrained environments.", // Updated description
          linkText: "",
          linkWithIcon: true,
          alt: "Optimized Efficiency",
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
          "Pre-trained models often fall short when it comes to real-world applications. They struggle to deliver some aspects mentioned below.",
        para2Text: "",
      },
      data: [
        {
          icon: null,
          heading: "Generalization",
          description:
            "Pre-trained models often struggle to adapt to your unique dataset and specific task requirements, leading to subpar performance and relevance.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: generalization,
          alt: "Generalization in Pre-trained AI models",
        },
        {
          icon: Icon10,
          heading: "Maintaining Accuracy",
          description:
            "Delivering consistently reliable and precise outputs can be a challenge when using pre-trained models in real-world scenarios.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          bentoImage: null,
          alt: "Maintaining Accuracy",
        },
        {
          icon: Icon11,
          heading: "Avoiding Bias",
          description:
            "Mitigating inherent biases in large pre-trained models is crucial to ensure fair and ethical AI solutions.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 1,
          bentoImage: null,
          alt: "Avoiding Bias",
        },
        {
          icon: null,
          heading: "Optimizing Efficiency",
          description:
            "Pre-trained models often require significant computational resources, making it difficult to run efficiently, especially with limited infrastructure.",
          linkText: "",
          linkWithIcon: true,
          colSpan: 2,
          bentoImage: optimizing_efficiency,
          alt: "Optimization and Efficiency in Pre-trained AI models.",
        },
      ],
      
      caption:
        "These limitations can hinder innovation and impede your AI initiatives.",
      btnText: " Discuss Your Fine-Tuning Challenges",
    },
  ];

  const questions = [
    {
      question: "What specific AI models and tasks can you fine-tune?",
      answer:
        "We specialize in fine-tuning a range of models, including transformer-based architectures like BERT, GPT, and T5, as well as computer vision models like ResNet and EfficientNet. Our expertise covers tasks like natural language understanding, sentiment analysis, image classification, object detection, and industry-specific domains that require specialized adaptation.",
    },
    {
      question: "How much data do I need for effective fine-tuning?",
      answer:
        "The amount of data required depends on the complexity of the task and the model you're working with. In many cases, effective fine-tuning can be achieved with a few thousand high-quality labeled examples. For niche or specialized domains, even a few hundred samples, when paired with techniques like transfer learning, can yield good results.",
    },
    {
      question: "Can you help us with data preparation and augmentation?",
      answer:
        "Yes, we handle the entire data preparation process. This includes cleaning, preprocessing, and applying augmentation techniques like oversampling, synthetic data generation, and contextual data enrichment to ensure your dataset is ready for optimal model training.",
    },
    {
      question: "What techniques do you use to optimize hyperparameters?",
      answer:
        "We use a combination of grid search, random search, and Bayesian optimization to fine-tune hyperparameters. These methods allow us to systematically explore the hyperparameter space, focusing on the configurations that maximize your model’s performance while maintaining efficiency.",
    },
    {
      question:
        "How do you ensure the fine-tuned model generalizes well to new data?",
      answer:
        "We take several steps to promote generalization, including using cross-validation, monitoring training for overfitting signs, and applying regularization techniques. Additionally, we incorporate diverse data sources during training and use iterative evaluation on real-world samples to make sure the model performs consistently across different scenarios.",
    },
  ];

  const techStackData = [
    {
      title: "Foundation Models",
      content: [
        {
          alt: "Llama icon",
          caption: "Llama",
          img: liama,
        },
        {
          alt: "Falcon icon",
          caption: "Falcon",
          img: falcon,
        },
        {
          alt: "Qwen icon",
          caption: "Qwen",
          img: gptneox,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "PyTorch icon",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Hugging Face Transformers icon",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "TensorFlow icon",
          caption: "TensorFlow",
          img: tensorflow,
        },
      ],
    },
    {
      title: "Infrastructure",
      content: [
        {
          alt: "AWS icon",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Azure icon",
          caption: "Azure",
          img: azure,
        },
        {
          alt: "Google Cloud icon",
          caption: "Google Cloud",
          img: googlecloud,
        },
      ],
    },
    {
      title: "MLOps Tools",
      content: [
        {
          alt: "MLflow icon",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Kubeflow icon",
          caption: "Kubeflow",
          img: kubeflow,
        },
      ],
    },
  ];
  
  const stepperData = {
    heading: "How Do We Fine-Tune?",
    description:
      "We follow a data-driven, iterative process to ensure optimal results.",
      alt:"Fine Tuning AI Model Process",
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
  const arrayData = {
    headerData: {
      tagText: "Resolving",
      heading: "Addressing Your AI Challenges",
      description:
        "We understand the complexities of AI model development. Our fine-tuning expertise helps you overcome common challenges.     ",
    },
    data: [
      {
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
      },
    ],
    btnText: "Overcome Your AI Challenges with Centrox AI",
  };

  return (
    <div>
  
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading={"Fine-Tune Models To Make It Truly Yours"}
            alt="Fine tuning pre trained AI models"
            description={
              " At Centrox AI, we help you go beyond the limitations of pre-trained models and achieve peak performance on your specific tasks."
            }
            img={finetuninghero}
            bgimage1={servicebg}
            btnText="Schedule a Session"
            bgClassName="opacity-60" 
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} resizeableCardsLayout gridCols={3} />
          <CommonDisplayCardsGrid data={benefitsData} />
          <StepperSection data={stepperData} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results."
            }
          />
          {/* <LogosSection data={techStackData} /> */}
          <PointsandImagesSection arrayData={arrayData} />
          {/* <LandingCaseStudySection /> */}
          <IndustryBanner
            heading="Your AI Journey Starts Here"
            description="Ready to unleash the full potential of your AI models?
Schedule a technical deep-dive with our team to discuss your fine-tuning needs and explore how we can collaborate to achieve your goals.
"
            isBooking
            btnText="Book a Technical Discussion"
          />
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
        </main>
    
    </div>
  );
}
