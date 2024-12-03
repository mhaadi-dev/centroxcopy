//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon4 from "@/assets/Icon-4.svg";
import Icon5 from "@/assets/Icon-5.svg";

import Icon6 from "@/assets/Icon-6.svg";
import Icon7 from "@/assets/Icon-7.svg";
import Icon8 from "@/assets/Icon-8.svg";

import Icon10 from "@/assets/Icon-13.svg";
import Icon11 from "@/assets/Icon-11.svg";
import Icon12 from "@/assets/Icon-12.svg";
import Icon13 from "@/assets/Icon-13.svg";
import Icon14 from "@/assets/Icon-14.svg";


import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
// import serviceHeroImg from "@/assets/serviceHeroImg.webp";
import IndustryBanner from "@/Components/common/IndustryBanner";

import kserve from "@/assets/evaluationlogos/k-serve-white.webp"
import seldon from "@/assets/evaluationlogos/seldon-logo-white.webp"
import tensorflowserving from "@/assets/evaluationlogos/tensorflow-svgrepo-com 1.webp"
import prometeus from "@/assets/evaluationlogos/cbi--prometheusio 1.webp"
import grafana from "@/assets/evaluationlogos/grafana-svgrepo-com 1.webp"
import airflow from "@/assets/evaluationlogos/airflow-svgrepo-com 1.webp"
import weightandbiases from "@/assets/evaluationlogos/wandb-dots-logo (1) 1.webp"
import commet from "@/assets/evaluationlogos/comet-logo-1 1.webp"
import dvc from "@/assets/evaluationlogos/dvc.webp"
import gitlfs from "@/assets/evaluationlogos/git-lfs-logo 1.webp"
import jenkins from "@/assets/evaluationlogos/jenkins.webp"
import gitlab from "@/assets/evaluationlogos/gitlab-svgrepo-com 1.webp"
import parchiderm from "@/assets/evaluationlogos/pachyderm (1).webp"
import servicebg from "@/assets/Servicebg.webp"
import evaluation from "@/assets/Pipeline1.svg"
import deployment_bottlenecks from "@/assets/bentobox/Deployment Bottlenecks.svg"
import kubernetes from "@/assets/kubernetes-icon-white logo.webp"
import githubci from "@/assets/evaluationlogos/githubci.svg"

export const metadata = {
  title:"MLOps Consulting for Evaluating & Streamline AI Pipelines | Centrox AI",
  description:"Optimize model performance, enhance scalability, and boost collaboration. Streamline AI pipelines with Centrox AI MLOps consulting. Book a call today!"
}

export default async function Page({ params }: { params: { slug: string } }) {
    const benefitsData = [
        {
          headerData: {
            tagText: "Benefits", // Updated tagText
            headingText: "The Benefits of MLOps Consulting", // Updated headingText
            para1Text:
              "Partnering with Centrox AI for MLOps consulting can help you achieve.", // Updated para1Text
            heading2Text: "",
            para2Text: "",
          },
          data: [
            {
              icon: Icon12,
              heading: "Accelerated Time-to-Market",
              description:
                "Streamline your AI development lifecycle and get your models into production faster, gaining a competitive edge.",
              linkText: "",
              linkWithIcon: true,
              alt: "Accelerated Time-to-Market"
            },
            {
              icon: Icon13,
              heading: "Improved Model Performance & Reliability",
              description:
                "Optimize your models for accuracy, efficiency, and scalability, ensuring they deliver consistent results in real-world environments.",
              linkText: "",
              linkWithIcon: true,
              alt: "Improved Model Performance & Reliability"
            },
            {
              icon: Icon14,
              heading: "Enhanced Collaboration & Productivity",
              description:
                "Foster better communication and collaboration between data scientists and engineers, breaking down silos and enabling faster iteration.",
              linkText: "",
              linkWithIcon: true,
              alt: "Enhanced Collaboration & Productivity"
            },
            {
              icon: Icon6,
              heading: "Reduced Costs & Risks",
              description:
                "Optimize resource utilization, minimize downtime, and proactively address potential issues, leading to cost savings and reduced risk.",
              linkText: "",
              linkWithIcon: true,
              alt: "Reduced Costs & Risks"
            },
            {
              icon: Icon7,
              heading: "Data-Driven Decision Making",
              description:
                "Gain insights into model performance and usage patterns, enabling you to make informed decisions about model updates and improvements.",
              linkText: "",
              linkWithIcon: true,
              alt: "Data-Driven Decision Making"
            },
            {
              icon: Icon8,
              heading: "Scalability & Flexibility",
              description:
                "Build AI infrastructure that can adapt to your growing needs and support future innovation.",
              linkText: "",
              linkWithIcon: true,
              alt: "Scalability & Flexibility"
            }
          ],
          caption: "",
          btnText: "Unlock the Power of MLOps for Your Business", // Updated button text
        },
      ];
      

  const challengeData = [
    {
      headerData: {
        tagText: "Challenge", // Updated tagText
        headingText: "The MLOps Challenge", // Updated headingText
        para1Text: "Are your AI initiatives hindered by operational complexities?", // Updated para1Text
        para2Text: "", 
        heading2Text: "", 
      },
      data: [
        {
          icon: null,
          heading: "Deployment Bottlenecks", // Updated heading
          description:
            "Transitioning models from development to production can be slow, error-prone, and require significant manual effort.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:2,
          bentoImage:deployment_bottlenecks
        },
        {
          icon: Icon10,
          heading: "Scalability Concerns", // Updated heading
          description:
            "As your models and data grow, ensuring they can handle increasing demand and perform efficiently becomes critical.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon11,
          heading: "Reproducibility Issues", // Updated heading
          description:
            "Inconsistencies in environments and dependencies can make it difficult to reproduce experiment results and deploy models reliably.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon4,
          heading: "Monitoring & Maintenance Overhead", // Updated heading
          description:
            "Manually tracking model performance, detecting drift, and managing updates can be time-consuming and inefficient.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon5, // Added a new icon for this challenge
          heading: "Collaboration Challenges", // Updated heading
          description:
            "Siloed workflows between data scientists and engineers can hinder innovation and slow down development cycles.", // Updated description
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
      ],
      caption:
        "Centrox AI can consult you on Machine Learning Operations, helping you overcome these obstacles and build a robust, scalable, and efficient AI infrastructure that accelerates your time-to-market and maximizes the value of your AI investments.", // Updated caption
      btnText: "Discuss Your MLOps Challenges", // Updated button text
    },
  ];
  

  const questions = [
    {
      question: "What MLOps tools and platforms do you specialize in?",
      answer:
        "We specialize in a variety of industry-leading MLOps tools such as Kubeflow, Airflow, and Argo Workflows for orchestration, TensorFlow Serving and KServe for model deployment, Prometheus and Grafana for monitoring, and MLflow and Weights & Biases for experiment tracking. Additionally, we leverage cloud platforms like AWS, GCP, and Azure to ensure seamless scalability and integration with your existing workflows.",
    },
    {
      question: "How do you ensure the security and privacy of our models and data?",
      answer:
        "Security and privacy are paramount in every solution we design. We implement robust access control mechanisms, data encryption at rest and in transit, and adhere to best practices in cloud security. We also ensure compliance with relevant regulations such as GDPR, HIPAA, and industry-specific standards to protect your models and data throughout the MLOps lifecycle.",
    },
    {
      question: "Can you help us implement MLOps best practices within our existing infrastructure?",
      answer:
        "Absolutely. We tailor our MLOps consulting services to fit within your current infrastructure, whether it’s on-premise, cloud-based, or hybrid. We assess your existing setup, identify gaps, and recommend optimizations without disrupting your operations. Our goal is to integrate MLOps best practices that enhance efficiency and scalability while minimizing overhead.",
    },
    {
      question: "How do you measure and track the success of your MLOps solutions?",
      answer:
        "We establish clear key performance indicators (KPIs) aligned with your business goals, such as reduced deployment times, improved model accuracy, and streamlined workflows. We also set up monitoring and reporting systems that provide real-time insights into model performance, resource utilization, and system health, enabling you to track success and iterate as needed.",
    },
    {
      question: "What experience do you have in working with [specific industry or application]?",
      answer:
        "Our team has a wealth of experience across industries such as healthcare, finance, e-commerce, and technology. We tailor our MLOps strategies to meet the specific challenges of your industry, whether it’s ensuring compliance in highly regulated sectors, optimizing for real-time decision-making, or scaling AI to meet growing user demand. We can provide case studies and examples relevant to your field.",
    },
  ];
  
  

  const techStackData = [
    {
      title: "Orchestration & Automation",
      content: [
        {
          alt: "Kubeflow",
          caption: "Kubeflow",
          img: kubeflow,
        },
        {
          alt: "Airflow",
          caption: "Airflow",
          img: airflow,
        },
        {
          alt: "Kubernetes",
          caption: "Kubernetes",
          img: kubernetes,
        },
      ],
    },
    {
      title: "Model Deployment & Serving",
      content: [
        {
          alt: "TensorFlow Serving",
          caption: "TensorFlow Serving",
          img: tensorflowserving,
        },
        {
          alt: "KServe",
          caption: "KServe",
          img: kserve,
        },
        {
          alt: "Seldon Core",
          caption: "Seldon Core",
          img: seldon,
        },
      ],
    },
    {
      title: "Monitoring & Observability",
      content: [
        {
          alt: "Prometheus",
          caption: "Prometheus",
          img: prometeus,
        },
        {
          alt: "Grafana",
          caption: "Grafana",
          img: grafana,
        },
        {
          alt: "MLflow",
          caption: "MLflow",
          img: mlflow,
        },
      ],
    },
    {
      title: "Experiment Tracking",
      content: [
        {
          alt: "MLflow",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Weights & Biases",
          caption: "Weights & Biases",
          img: weightandbiases,
        },
        {
          alt: "CometML",
          caption: "CometML",
          img: commet,
        },
      ],
    },
    {
      title: "Data Versioning & Management",
      content: [
        {
          alt: "DVC",
          caption: "DVC",
          img: dvc,
        },
        {
          alt: "Git LFS",
          caption: "Git LFS",
          img: gitlfs,
        },
        {
          alt: "Pachyderm",
          caption: "Pachyderm",
          img: parchiderm,
        },
      ],
    },
    {
      title: "Cloud Platforms",
      content: [
        {
          alt: "AWS",
          caption: "AWS",
          img: aws,
        },
        {
          alt: "Google Cloud Platform",
          caption: "GCP",
          img: googlecloud,
        },
        {
          alt: "Azure",
          caption: "Azure",
          img: azure,
        },
      ],
    },
    {
      title: "CI/CD Tools",
      content: [
        {
          alt: "Jenkins",
          caption: "Jenkins",
          img: jenkins,
        },
        {
          alt: "GitLab CI",
          caption: "GitLab CI",
          img: gitlab,
        },
        {
          alt: "githubci",
          caption: "Gihub CI",
          img: githubci,
        },
      ],
    },
  ];
  
  
  
  const arrayData = {
    headerData: {
      tagText: "Advantages", // Updated tagText
      heading: "The Centrox AI Difference", // Updated heading
      description:
        "We're not just consultants; we're your MLOps partners.", // Updated description
    },
    data: [
      {
        heading: "Deep Expertise", // Updated heading
        description:
          "Our team possesses extensive experience in MLOps, machine learning, and software engineering.", // Updated description
      },
      {
        heading: "Customized Solutions", // Updated heading
        description:
          "We tailor our approach to your specific needs and infrastructure.", // Updated description
      },
      {
        heading: "Collaborative Approach", // Updated heading
        description:
          "We work closely with your team, fostering knowledge transfer and empowering you to take ownership of your MLOps processes.", // Updated description
      },
      {
        heading: "Results-Oriented", // Updated heading
        description:
          "We focus on delivering tangible outcomes, from faster deployment cycles to improved model performance and ROI.", // Updated description
      },
      {
        heading: "Transparency & Communication", // Updated heading
        description:
          "We maintain open communication throughout the engagement, providing regular updates and clear explanations.", // Updated description
      },
    ],
    btnText: "Partner with Us to Optimize Your AI Lifecycle", 
  };
  

 

  return (
    <div>
     
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection
            heading="Streamline Your AI Pipelines For Faster Time-To-Market"
            description="Partner with Centrox AI as we guide and consult you on streamlining your AI development lifecycle, optimizing model performance, and ensuring scalability and reliability in production."
            bgimage1={servicebg}
            img={evaluation}
            bgClassName="opacity-60" 
            alt="Managing and evaluating ML Ops and AI dev"
           
          />
          <LogosCarousel />
          <CommonDisplayCardsGrid data={challengeData} gridCols={3} resizeableCardsLayout />
          <CommonDisplayCardsGrid data={benefitsData} />
          {/* <StepperSection data={stepperdata} /> */}
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to deliver the best possible results."
            }
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
          <IndustryBanner heading="Take the Next Step" description="Ready to streamline your AI pipelines and accelerate your time-to-market?
Schedule a free consultation with our MLOps experts today." isBooking btnText="Book Your Free Consultation"/>
        </main>
    
    </div>
  );
}
