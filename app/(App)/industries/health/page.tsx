//@ts-nocheck
import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { FaqsSection } from "@/sections/FaqsSection";



import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon14 from "@/assets/Icon-14.webp";
import liama from "@/assets/liama.webp";


import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";
import IndustryBanner from "@/Components/common/IndustryBanner";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import strategy from "@/assets/solutions/Strategy.webp";
import checkerboard from "@/assets/solutions/Checkerboard.webp";
import SolutionsImage1 from "@/assets/solutions/Data integration.webp";
import SolutionsImage2 from "@/assets/Transparent Insights.webp";
import SolutionsImage3 from "@/assets/solutionPic3.webp";
import SolutionsImage4 from "@/assets/research automation.webp";
import Icon16 from "@/assets/Icon-16.webp"
import Icon17 from "@/assets/Icon-17.webp"
import Icon18 from "@/assets/Icon-18.webp"
import Icon51 from "@/assets/Icon-51.webp"
import Icon52 from "@/assets/Icon-52.webp"
import gpt from "@/assets/gpt.webp"
import langchain from "@/assets/langchain.webp"
import tableau from "@/assets/tableau logo.webp"
import powerbi from "@/assets/powerbi.webp"
import healthhero from "@/assets/industries/Hero Image health.svg"
import custombuilt from "@/assets/bentobox/Neural Network.svg"
import scalable from "@/assets/bentobox/Scalable AI.svg"







export default async function Page({ params }: { params: { slug: string } }) {
    const benefitsData = [
        {
          headerData: {
            tagText: "Benefits",
            headingText: "Key Benefits for Real Estate Professionals",
            para1Text: "Partnering with Centrox AI empowers you to",
            heading2Text: "",
            para2Text: "",
          },
          data: [
            {
              icon: Icon16, // Replace with the correct icon for Competitive Edge
              heading: "Gain a Competitive Edge",
              description:
                "Leverage AI to differentiate your services, attract more clients, and close deals faster.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon17, // Replace with the correct icon for Streamlined Operations
              heading: "Streamline Operations",
              description:
                "Automate manual tasks, improve efficiency, and reduce operational costs.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon14, // Replace with the correct icon for Data-Driven Decisions
              heading: "Make Data-Driven Decisions",
              description:
                "Access real-time insights and analytics to inform your business strategies and investment decisions.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon18, // Replace with the correct icon for Enhanced Customer Experiences
              heading: "Enhance Customer Experiences",
              description:
                "Deliver personalized recommendations and proactive support, building stronger relationships with clients.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption: "",
          btnText: "Let’s Discuss Your Vision",
        },
      ];
      

      const challengeData = [
        {
          headerData: {
            tagText: "Challenges",
            headingText: "Addressing Healthcare’s Most Complex Challenges",
            para1Text:
              "Are you looking to leverage AI to its full potential in the dynamic healthcare sector?",
            para2Text: "Traditional AI systems often lack the capability to tackle the intricate challenges of healthcare.",
            heading2Text: "",
          },
          data: [
            {
              icon: Icon51, // Information Overload
              heading: "Precision Diagnostics",
              description:
                "Deploying AI to analyze vast, heterogeneous datasets—medical imaging, genetic information, clinical records—delivering diagnostic predictions that outperform traditional methods.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: strategy, // Inefficient Processes
              heading: "Real-Time Clinical Insights",
              description:
                "Custom-built neural networks that process multi-modal data streams, offering physicians predictive insights that adapt in real time to new patient information.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: checkerboard, // Limited Personalization
              heading: "Advanced Research & Drug Discovery",
              description:
                "Gen AI automates and accelerates research processes, predicting molecular behavior and simulating clinical trials, reducing the timeline for new drug development.",
              linkText: "",
              linkWithIcon: true,
            },
            {
              icon: Icon52, // Missed Opportunities
              heading: "Automated Medical Documentation",
              description:
                "AI-powered natural language models automate clinical note summarization, EHR management, and claims processing, optimizing operational efficiency.",
              linkText: "",
              linkWithIcon: true,
            },
          ],
          caption:
            "Centrox AI’s Gen AI solutions empower healthcare professionals to make faster, more informed decisions, enhancing both patient outcomes and operational efficiency.",
          btnText: "Try Our Solution For FREE",
        },
      ];
      
      
  
  

      const questions = [
        {
          question: "What distinguishes Centrox AI’s Gen AI models from other AI solutions in the healthcare market?",
          answer: "Unlike traditional AI models that analyze data within predefined parameters, Centrox AI's Gen AI models generate new hypotheses, insights, and clinical predictions from complex, multi-modal data sources. Our models are engineered for adaptability and precision in high-stakes environments, enabling healthcare professionals to make informed decisions with advanced tools that go beyond typical automation."
        },
        {
          question: "How does Generative AI expedite drug discovery and biomedical research?",
          answer: "Centrox AI's Generative AI models can simulate molecular interactions, predict treatment efficacy, and generate potential drug formulations by processing vast biomedical datasets. Our models rapidly explore pathways that would otherwise take years, accelerating drug discovery from concept to clinical trials. This leap in capability empowers pharmaceutical companies and research institutions to bring innovative treatments to market faster, significantly reducing R&D timelines and costs."
        },
        {
          question: "How do you mitigate bias in Gen AI for healthcare applications?",
          answer: "Bias in AI can have severe implications in healthcare, affecting patient care and treatment outcomes. Centrox AI deploys fairness-aware algorithms and conducts continuous audits across training datasets to identify and eliminate biases. Our Gen AI models are designed to uphold the highest ethical standards, ensuring equitable treatment recommendations across diverse patient populations, while maintaining the accuracy and integrity of healthcare outcomes."
        },
        {
          question: "What makes Centrox AI the leading choice for healthcare-focused AI solutions?",
          answer: "Our deep expertise in both AI and healthcare sets us apart. Centrox AI doesn’t just deliver AI solutions—we build custom, large-scale neural networks and machine learning models tailored for the healthcare sector. Our track record speaks for itself: AI deployments in leading healthcare systems that have transformed patient care, improved operational efficiency, and enabled groundbreaking discoveries in research. We are not just service providers but partners in innovation, working alongside you to achieve industry-defining results."
        },
      ];
      
  
  

  const solutionsData = [
    {
      img: SolutionsImage1, // Replace with an appropriate image for Multimodal Data Fusion
      description:
        "Our AI models integrate diverse data streams—clinical notes, imaging, genomics, and real-time monitoring—creating a unified platform for decision support with highly accurate and predictive insights.",
      heading: "Multimodal Data Fusion",
      tabheading: "Data Integration",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage2, // Replace with an appropriate image for Explainable AI
      description:
        "Generative models offer transparency in their reasoning, ensuring clinicians understand and trust AI’s diagnostic and treatment suggestions, which is crucial for clinical decision-making.",
      heading: "Explainable AI in Clinical Decision Support",
      tabheading: "Transparent Insights",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage3, // Replace with an appropriate image for AI-Powered Personalized Medicine
      description:
        "Utilizing patient-specific data, our models predict individualized treatment responses, empowering doctors with data-driven tools tailored to each patient’s unique profile.",
      heading: "AI-Powered Personalized Medicine",
      tabheading: "Tailored Treatments",
      btnText: "",
      link: "",
    },
    {
      img: SolutionsImage4, // Replace with an appropriate image for Generative AI in Biomedical Research
      description:
        "Automate literature reviews and synthesize new hypotheses from medical research data, predicting molecular interactions and generating new compounds for drug discovery.",
      heading: "Generative AI for Biomedical Research",
      tabheading: "Research Automation",
      btnText: "",
      link: "",
    },
  ];
  
  

  const techStackData = [
   
    {
      title: "Large Language Models (LLMs)",
      content: [
        {
          alt: "Icon",
          caption: "GPT-4",
          img: gpt,
        },
      
        {
          alt: "Icon",
          caption: "Llama",
          img: liama,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
      
      
        {
          alt: "Icon",
          caption: "pytorch",
          img: pytorch,
        },
        {
            alt: "Icon",
            caption: "Hugging Face Transformers",
            img: huggingface,
          },
        {
          alt: "Icon",
          caption: "LangChain",
          img: langchain,
        },
      ],
    },
    {
      title: "Cloud Platforms",
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
      title: "Data Visualization Tools",
      content: [
        {
          alt: "Icon",
          caption: "Tableau",
          img: tableau,
        },
        {
          alt: "Icon",
          caption: "PowerBi",
          img: powerbi,
        },
      ],
    },
  
  ];
  const heroData = {
    heading: "Transforming Healthcare with Generative AI",
    description:
      "Centrox AI develops LLM-based solutions that reshape healthcare operations. Our AI solutions are engineered to solve complex challenges, from predicting patient outcomes to automating critical processes, all with the precision and reliability that the healthcare industry demands.",
    btnText: "Try Our Chatbot for FREE",
    includeDots: false,
    img: healthhero, // Replace with the appropriate image for healthcare context
    reverse: false,
    className: "lg:!w-1/3 !w-4/5 mx-auto",
  };
  
  
  const arrayData = {
    headerData: {
      tagText: "Advantages",
      heading: "Why Gen AI is the Key for Healthcare Innovators",
      description: "At Centrox AI, we understand that healthcare decision-makers need more than just basic automation—they need intelligent systems that can adapt, learn, and evolve. Here’s how our Gen AI models are pushing healthcare forward:",
    },
    data: [
      {
        heading: "Adaptive Intelligence",
        description:
          "Our large-scale neural networks continuously learn from new data inputs, ensuring that AI evolves with medical knowledge and adapts to changes in patient care needs.",
      },
      {
        heading: "Streamlined Clinical Workflows",
        description:
          "By automating repetitive tasks such as claims processing, medical documentation, and patient communication, our AI systems free up healthcare professionals to focus on what truly matters—patient care.",
      },
      {
        heading: "Data-Driven Decision Making",
        description:
          "Custom AI models provide real-time, actionable insights across healthcare operations, from diagnostic support to strategic decision-making.",
      },
      {
        heading: "Enhanced Patient Outcomes",
        description:
          "Generative AI predicts disease trajectories, recommends personalised treatments, and monitors patient progress, ensuring a higher level of care.",
      },

    ],
    btnText: "Book a Session",
  };
  
  const arrayData2 = {
    headerData: {
      tagText: "Advantages",
      heading: "Why Choose Centrox AI",
      description: "At Centrox AI, we leverage unparalleled expertise and innovation in Gen AI to transform healthcare systems. Here’s how our solutions are making a real-world impact:",
    },
    data: [
      {
        heading: "Unparalleled Expertise",
        description:
          "Our team comprises leading researchers and engineers specializing in Gen AI and machine learning models, with a proven track record in healthcare innovation.",
      },
      {
        heading: "Real-World Impact",
        description:
          "Our AI solutions have been deployed in leading healthcare institutions, improving diagnostic accuracy, enhancing clinical workflows, and accelerating research.",
      },
      {
        heading: "Commitment to Innovation",
        description:
          "We push the boundaries of what AI can achieve in healthcare, staying at the forefront of Gen AI advancements.",
      },
      {
        heading: "Transparent, Explainable AI",
        description:
          "Our models provide not only accurate insights but also explain the underlying reasoning, offering full transparency in clinical decision support.",
      },
    ],
    btnText: "Let’s Discuss Your AI Needs",
  };
  
  
  
  const cardsData1 = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "Why Gen AI is the Key for Healthcare Innovators?",
        para1Text: "Centrox AI introduces solutions which are customized according to your healthcare specific requirements, becoming your reliable help in extending advanced healthcare support  to the patients.",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: Icon16, // Replace with the correct icon for Adaptive Intelligence
          heading: "Adaptive Intelligence",
          description:
            "Our large-scale neural networks continuously learn from new data inputs, ensuring the AI evolves with medical knowledge and adapts to patient care needs.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon17, // Replace with the correct icon for Streamlined Clinical Workflows
          heading: "Streamlined Clinical Workflows",
          description:
            "Automate repetitive tasks like claims processing and patient communication, allowing healthcare professionals to focus on patient care.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon14, // Replace with the correct icon for Data-Driven Decision Making
          heading: "Data-Driven Decision Making",
          description:
            "Access real-time, actionable insights to support diagnostics and strategic administrative decisions.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon18, // Replace with the correct icon for Enhanced Patient Outcomes
          heading: "Enhanced Patient Outcomes",
          description:
            "Predict disease trajectories and recommend personalized treatments to improve care and treatment success rates.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Book a Session",
    },
  ];
  const cardsData2 = [
    {
      headerData: {
        tagText: "Technology",
        headingText: "The Technology Behind Our Gen AI Solutions",
        para1Text: "Centrox AI combines the latest advancements in AI with deep healthcare expertise to create Gen AI systems that meet the demands of modern healthcare.",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: null, // Replace with the correct icon for Custom-Built Neural Networks
          heading: "Custom-Built Neural Networks",
          description:
            "Designed specifically for the healthcare domain, our networks are trained on diverse datasets, including imaging, genetic data, and real-world clinical data, ensuring highly specialized and accurate results.",
          linkText: "",
          linkWithIcon: true,
          colSpan:2,
          bentoImage:custombuilt
        },
        {
          icon: Icon17, // Replace with the correct icon for Advanced Personalization Engines
          heading: "Advanced Personalization Engines",
          description:
            "These engines analyze patient data at scale, enabling precise personalization in treatment plans and patient communication.",
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon14, // Replace with the correct icon for Large Language Models (LLMs)
          heading: "Large Language Models (LLMs)",
          description:
            "Trained to understand medical context and generate accurate clinical reports and diagnoses, improving efficiency and accuracy across tasks.",
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: null, // Replace with the correct icon for Scalable AI Infrastructure
          heading: "Scalable AI Infrastructure",
          description:
            "Deployed on secure, HIPAA-compliant cloud platforms, our AI solutions scale to support the needs of healthcare systems, from small clinics to large hospitals.",
          linkText: "",
          linkWithIcon: true,
          colSpan:2,
          bentoImage:scalable
        },
      ],
      caption: "",
      btnText: "Book a Session",
    },
  ];
  
const stepperdata = {
    heading: "Our Approach to Building AI for Healthcare",
    description:
      "We follow a collaborative, iterative process to ensure the success of your AI project.",
    data: [
      {
        title: "Data Strategy & Integration",
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
                text: "We start by understanding your unique data landscape, including structured and unstructured data such as EHRs, imaging, and clinical notes.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Custom Model Development",
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
                text: "We build and fine-tune large-scale neural networks optimized for your specific use cases, ensuring maximum performance and adaptability.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Testing & Validation",
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
                text: "Every model undergoes rigorous testing to meet industry standards for accuracy, safety, and explainability in a clinical setting.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Ongoing Optimization",
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
                text: "Post-deployment, we continuously monitor and enhance our AI systems to ensure they stay current with medical research and evolving healthcare practices.",
              },
            ],
          },
        ],
        status: false,
      },
      {
        title: "Seamless Deployment & Monitoring",
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
                text: "We deploy your model and provide ongoing support for seamless integration and monitoring.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "Talk to Our AI Expert",
  };
  
  
  return (
    <div>
  
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData} />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} />
          <LandingSolutionsSection
            data={solutionsData}
            heading="Gen AI Solutions Built for the Future of Healthcare"
            description="Centrox AI develops custom, large-scale neural networks and machine learning models that are purpose-built for the healthcare industry. These AI systems are not only fine-tuned to healthcare’s specific requirements but are also designed to evolve with advancements in medical science."
          />
          <CommonDisplayCardsGrid data={cardsData1} />
          <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
            }
          />
          <CommonDisplayCardsGrid data={cardsData2} gridCols={3} resizeableCardsLayout />

          <StepperSection data={stepperdata} />
          <PointsandImagesSection
            arrayData={arrayData2}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
            }
          />
          {/* <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful combination of cutting-edge technologies to build, train, and deploy your AI solutions."
            }
            caption="We continuously evaluate and adopt the latest advancements in the AI ecosystem, ensuring your solutions are built on the most robust and efficient technologies available."
            btnText="Let’s Discuss Further"
          /> */}
          {/* <LandingIndustriesSection
          gradientCardData={gradientCardData}
            caption="Whether you're an online retailer, a brick-and-mortar store, or a fashion brand, our AI body measurement tool can help you transform your business, improve customer satisfaction, and drive growth."
            tabs={tabs}
            heading={"Revolutionize Retail & Fashion with AI Body Measurement"}
            description="Our AI-powered body measurement technology is a game-changerfor the retail and fashion industries."
            isBookingButton={true}
          /> */}

       
          {/* <LandingCaseStudySection/> */}
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner
            heading=" Take the Next Step"
            description="Are you ready to avail the opportunity of AI-driven evolution in medicine? 
            Get ready to be at the forefront with Centrox.           
            "
            btnText="Book a Call now"
            isBooking
          />
        </main>
     
    </div>
  );
}
