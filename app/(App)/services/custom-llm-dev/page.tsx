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
import gptneox from "@/assets/GPT-NeoX.webp";

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
import LandingLayout from "../../layoutPage";

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
        headingText: "Tailor-Made LLMs",
        para1Text:
          "For startups like you, the best foot forward is to customise existing LLMs according to your unique business needs. We collaborate deeply with your team throughout the entire development lifecycle, ensuring your LLM is deeply integrated, optimised, adaptable, and cutting-edge.",
        heading2Text: "Key Features & Benefits",
      },
      data: [
        {
          icon: Icon12,
          heading: "Deeply Integrated",
          description:
            "We meticulously analyze your codebase, data pipelines, and research objectives to create LLMs that seamlessly fit into your existing workflows and infrastructure. This ensures smooth integration and minimizes disruptions.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon13,
          heading: "Optimized for Performance",
          description:
            "We employ advanced techniques like quantization, distillation, and parallelization to ensure maximum efficiency on your hardware, even with large-scale models. This results in faster inference times, reduced costs, and improved user experience.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon14,
          heading: "Adaptable & Scalable",
          description:
            "Your AI needs evolve, and so should your models. We build LLMs that can learn and grow alongside your projects, effortlessly integrating with your existing systems and scaling to handle increasing demands",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon6,
          heading: "Cutting-Edge",
          description:
            "We're on the top of latest advancements in LLM which has made us adept in incorporating the latest research in transformer architectures, RLHF, chain-of-thought prompting, and retrieval-augmented generation (RAG). This ensures your solutions are always at the cutting edge of AI innovation.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Book Free Technical Consultation",
    },
  ];

  const challengeData = [
    {
      headerData: {
        tagText: "Challenges",
        headingText: "The Challenge of Generic LLMs",
        para1Text:
          "Are you pushing the boundaries of what's possible with AI, but pre-trained models are holding you back?",
        para2Text:
          "You're not alone. Many startups are facing the limitations of generic LLMs:",
      },
      data: [
        {
          icon: Icon9,
          heading: "Domain-Speum-pagecific Challenges",
          description:
            "Generic models often struggle with industry-specific jargon, terminology, and nuanced context, leading to inaccurate or irrelevant outputs. This can severely impact the user experience and hinder the effectiveness of your AI applications.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon10,
          heading: "Performance Bottlenecks",
          description:
            "Large pre-trained models can be computationally expensive and slow, making them impractical for real-time applications or deployment on resource-constrained environments. This can lead to delays, increased costs, and frustrated users.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Data Scarcity",
          description:
            "Training effective LLMs typically requires vast amounts of high-quality, labeled data, which can be costly and time-consuming to acquire. This can significantly slow down your development process and limit the potential of your AI solutions.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Bias & Fairness",
          description:
            "Pre-trained models can inherit biases from their training data, leading to unfair or discriminatory outputs. This can have serious ethical and legal implications for your business.",
          linkText: "Learn More",
          linkWithIcon: true,
        },
      ],
      caption:
        "Centrox AI understands these pain points. We have the expertise to build custom LLMs that overcome these limitations and deliver exceptional results for your specific needs.",
      btnText: "Schedule A Discussion",
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
  const arrayData = {
    headerData: {
      tagText: "advantages",
      heading: "What You Gain",
      description:
        "We leverage a powerful and flexible tech stack to deliver the best possible results:",
    },
    data: [
      {
        heading:
          "Focus on Core Innovation​​​​‌‍​‍​‍‌‍‌​‍‌‍‍‌‌‍‌‌‍‍‌‌‍‍​‍​‍​‍‍​‍​‍‌​‌‍​‌‌‍‍‌‍‍‌‌‌​‌‍‌​‍‍‌‍‍‌‌‍​‍​‍​‍​​‍​‍‌‍‍​‌​‍‌‍‌‌‌‍‌‍​‍​‍​‍‍​‍​‍​‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‍‌‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‍‌‌‌‍‌​‌‍‍‌‌‌​​‍‌‍‌‌‍‌‍‌​‌‍‌‌​‌‌​​‌​‍‌‍‌‌‌​‌‍‌‌‌‍‍‌‌​‌‍​‌‌‌​‌‍‍‌‌‍‌‍‍​‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​​​‌‍​​‌‌​​‍​‌‌​‍‌‌‍​‍​​‌​​​‍‌‌‍‌‍​‍‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‍​‍‌‌",
        description:
          "Free up your internal resources to focus on your core product and research, while we handle the complexities of LLM engineering. This allows you to accelerate your development cycles and bring your AI innovations to market faster.",
      },
      {
        heading: "Achieve Superior Performance",
        description:
          "Leverage fine-tuned models that outperform generic solutions, delivering higher accuracy, relevance, and efficiency. This translates to better user experiences, improved decision-making, and increased business value.​​",
      },
      {
        heading: "Unlock New Capabilities",
        description:
          "Build intelligent automation, generative AI tools, research assistants, and more, expanding your AI toolkit and opening up new possibilities for your product or service.​​",
      },
      {
        heading: "Mitigate Risks",
        description:
          "Address challenges like bias, data security, and scalability with our expertise and proven processes. We ensure your AI solutions are robust, reliable, and compliant with industry standards.",
      },
      {
        heading:
          "Gain a Competitive Edge​​​​‌‍​‍​‍‌‍‌​‍‌‍‍‌‌‍‌‌‍‍‌‌‍‍​‍​‍​‍‍​‍​‍‌​‌‍​‌‌‍‍‌‍‍‌‌‌​‌‍‌​‍‍‌‍‍‌‌‍​‍​‍​‍​​‍​‍‌‍‍​‌​‍‌‍‌‌‌‍‌‍​‍​‍​‍‍​‍​‍​‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‍‌‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‍‌‌‌‍‌​‌‍‍‌‌‌​​‍‌‍‌‌‍‌‍‌​‌‍‌‌​‌‌​​‌​‍‌‍‌‌‌​‌‍‌‌‌‍‍‌‌​‌‍​‌‌‌​‌‍‍‌‌‍‌‍‍​‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​‌‌​‌​​​‌​​‍​​‌‍​‌‍​​‍​​​‍​​​​​‌​‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‍​‍‌‌",
        description:
          "Leverage the power of custom LLMs to differentiate your product, provide unique value to your customers, and stay ahead of the competition in the rapidly evolving AI landscape.",
      },
    ],
    btnText: "Book A Free Consultation",
  };

  const stepperdata = {
    heading: "How We Work",
    description:
      "Our collaborative, iterative process ensures a tailored and effective LLM solution:",
    data: [
      {
        title: "Deep Dive & Discovery",
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
                text: "We begin by thoroughly understanding your project goals, data types, and specific annotation needs.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Custom Model Blueprinting",
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
                text: "We collaborate with you to design a model architecture that leverages the strengths of foundation models while addressing your unique requirements. We consider factors like model size, computational constraints, and desired capabilities.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Data Curation & Enhancement",
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
                text: "We work with your datasets, applying cleaning, augmentation, and labeling techniques as needed to create a high-quality training corpus that accurately reflects your domain knowledge. We also help you identify and acquire additional data sources if necessary.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Iterative Training & Optimization",
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
                text: "We utilize a combination of fine-tuning, RLHF, and prompt engineering to train your LLM iteratively. We continuously evaluate performance, share insights, and refine the model to achieve optimal results. We employ advanced techniques like hyperparameter tuning, early stopping, and learning rate scheduling to ensure efficient training and prevent overfitting.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Seamless Deployment & Integration",
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
                text: "We deploy your custom LLM into your production environment, ensuring a smooth transition and minimal disruption to your existing workflows. We provide support for integrating the model with your applications and systems, leveraging APIs or SDKs as needed.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Ongoing Monitoring & Support",
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
                text: "We provide continuous monitoring, retraining, and optimization to ensure your AI model continues to deliver value as your data and needs evolve. We offer expert guidance and support to address any challenges or questions that arise, helping you maintain peak performance and adapt to changing requirements.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Let's Discuss Your Project",
  };

  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Engineering Custom LLMs from Ideation to Implementation"
            description="Overcome the limitations of generic LLMs. Centrox AI builds custom language models, fine-tuned on your data, to achieve superior performance and address your unique business challenges. Gain deeper insights, unlock new capabilities, and accelerate your AI initiatives."
            btnText="Book a FREE strategy Call"
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <CommonDisplayCardsGrid data={benefitsData} />
          <StepperSection data={stepperdata} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results:"
            }
          />
          <PointsandImagesSection arrayData={arrayData} />
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading="We understand the complexities and nuances of LLM development, and we're here to address your concerns"
            data={questions}
          />

          {/* {data?.length>0? data.map((val, index) => {
            
            switch (val[0]) {
              case "logoCarousal":
                return false && (<LogosCarousel data={val[1]?.content} />);
              case "heroSection":
                return  false && (
                  <HeroSection
                    heading={val[1]?.heading}
                    includeDots={val[1]?.includeDots}
                    description={val[1]?.description}
                    btnText={val[1]?.btnText}
                    reverse={val[1]?.reverse}
                    img={val[1]?.img}
                  />) 
                
              case "benefitsSection":
                return false && (
                  <BenefitsSection
                    mainDescription={val[1]?.description}
                    mainHeading={val[1]?.heading}
                    data={val[1]?.data}
                  />
                );
              case "customCarousal":
                return false &&  (
                  <CustomCarousalSection
                    data={val[1]?.data}
                    heading={val[1]?.heading}
                  />
                );
              case "whyUsSection":
                return false && ( <PointsandImagesSection data={val[1]} />);

              case "verticalCarouselSection":
                return false && (<OppositeCarousal data={val[1]} />);
              case "hoverAnimationSection":
                return false && (
                  <HoveredTextSection
                    heading={val[1]?.heading}
                    data={val[1]?.data}
                  />
                );
              case "stepperSection":
                return false && (
                  <StepperSection
                    heading={val[1]?.heading}
                    reverse={val[1]?.isReverse}
                    description={val[1]?.description}
                    data={val[1]?.data}
                    img={val[1]?.image}
                    button={val[1]?.btnText}
                  />
                );
              case "caseStudiesSection":
                return false && (
                  <CaseStudiesCarousalSection
                    heading={val[1]?.heading}
                    description={val[1]?.description}
                    data={val[1]?.data}
                  />
                );
              case "customerTestimonialSection":
                return false && (<CustomerTestimonials data={val[1]?.testimonials} />);
              case "productsSection":
                return false && (
                  <ProductsCarousalSection
                    heading={val[1]?.heading}
                    data={val[1]?.products}
                  />
                );

              case "techStackSection":
                return  true && (
                  <LogosSection
                    heading={"HELOOOOO"||val[1]?.heading}
                    description={val[1]?.description}
                    data={val[1]?.data}
                  />
                );
              case "faqsSection":
                return false && (
                  <FaqsSection heading={val[1]?.heading} data={questions} />
                );
              case "bannerSection":
                return  false &&(
                  <BannerSection
                    heading={val[1]?.heading}
                    btnText={val[1]?.btnText}
                    bgImage={val[1]?.bgImage}
                  />
                );
              case "contactUsSection":
                return  false &&(
                  <ContactForm
                    heading={val[1]?.heading}
                    description={val[1]?.description}
                    disclaimer={val[1]?.disclaimer}
                    img={val[1]?.img}
                  />
                );
            }
          }):""} */}
        </main>
      </LandingLayout>
    </div>
  );
}
