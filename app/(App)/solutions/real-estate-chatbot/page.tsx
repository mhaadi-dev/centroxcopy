//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import Icon47 from "@/assets/Icon-47.webp";

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
import rasa from "@/assets/Rasa-white.webp"
import dialogflow from "@/assets/dialogflow.svg"
import IndustryBanner from "@/Components/common/IndustryBanner";

import solutionbg1 from "@/assets/solutions/solutionbg2.webp"
import solutionbg2 from "@/assets/solutions/solutionbg1.webp"
import realestatehero from "@/assets/solutions/Real estatehero.svg"
import Icon27 from "@/assets/Icon-27.webp";
import Icon29 from "@/assets/Icon-29.webp";
import Icon30 from "@/assets/Icon-30.webp";
import Icon32 from "@/assets/Icon-32.webp";
import Icon33 from "@/assets/Icon-33.webp";
import Icon34 from "@/assets/Icon-34.webp";
import Icon35 from "@/assets/Icon-35.webp";
import Icon36 from "@/assets/Icon-36.webp";
import Icon37 from "@/assets/Icon-37.webp";
import Icon38 from "@/assets/Icon-38.webp";

import Icon48 from "@/assets/Icon-48.webp";
import Icon9 from "@/assets/Icon-9.svg";
import realestate_agents from "@/assets/bentobox/Real estate agents.svg"
import agencies from "@/assets/bentobox/Agencies.svg"




export default async function Page({ params }: { params: { slug: string } }) {


  const cardsSolutions = [
    {
      headerData: {
        tagText: "Evaluation",
        headingText: "Document Evaluation",
        para1Text:
          "Our chatbot generates Gen AI responses to enhance the real estate processes.",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: Icon48, // Replace with the correct icon for In-Depth Document Analysis
          heading: "In-Depth Document Analysis",
          description:
            "With the motivation to enhance your business productivity, our AI chatbot provides an in-depth report for the document that has been uploaded on it, by giving a detailed breakdown of the key elements involved in it.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon30, // Replace with the correct icon for Rapid Response Capabilities
          heading: "Rapid Response Capabilities",
          description:
            "We understand the importance of your precious time, and how impactful it can be by providing you with a business solution which gives you a competitive edge over your competitors by serving prompt analysis reports, or responses for the relevant query.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon34, // Replace with the correct icon for Tailored Insights
          heading: "Tailored Insights",
          description:
            "This real estate AI assistant provides personalised guidance based on your specific documents, enhancing the decision-making process; ultimately providing you with a dependable source for enhancing your business productivity.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon33, // Replace with the correct icon for Market Intelligence
          heading: "Market Intelligence",
          description:
            "Our real estate chatbot is smart enough to keep you informed about current trends and property evaluations to refine your investment strategies, making your strategy more effective and intelligent to compete in the market.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Try it for Free",
    },
  ];
  
  
  
      
  // const stepperdata = {
  //   heading: "Our Development Process",
  //   description:
  //     "At Centrox AI, our Smart Chatbot has been meticulously engineered to address challenges in document analysis and interpretation. Here’s a detailed look at our development process, incorporating technical insights:",
  //   data: [
  //     {
  //       title: "Assess Requirements",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69ae",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We start by thoroughly analyzing user needs, document types, and unique challenges in document handling. This helps us define specific requirements for interaction and insight extraction that shape the chatbot's development.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Integrate Technology",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69af",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We incorporate GPT-3.5 for natural language processing, with Langchain Libraries for robust prompt engineering. These tools integrate seamlessly into our system, creating a solid foundation for accurate responses.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Custom Prompt Design",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b0",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "Our team designs custom prompts tailored to each document type and user scenario. This ensures the chatbot can provide precise, context-relevant answers based on the actual content of the documents.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Train and Fine-Tune Models",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b1",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "Using a range of document datasets, we train and fine-tune the chatbot. This process enhances its ability to summarize and accurately address user queries, adapting to various document nuances.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Deploy Solution",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b2",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "After rigorous testing, the chatbot is deployed on our platform, optimized for scalability and designed to support a growing user base seamlessly.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //     {
  //       title: "Ongoing Optimization",
  //       content: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           _key: "6fc8ac5c69b3",
  //           markDefs: [],
  //           children: [
  //             {
  //               _type: "span",
  //               marks: [],
  //               text: "We continually monitor performance, gathering insights from user interactions to make regular adjustments. This ensures the chatbot stays responsive and increasingly effective.",
  //             },
  //           ],
  //         },
  //       ],
  //       status: false,
  //     },
  //   ],
  //   btnText: "Let's Discuss Your Project",
  // };
  
  


  const challengeData = [
    {
      headerData: {
        tagText: "The problem",
        headingText: "Tackling Real Estate Challenges Head-On",
        para1Text:
          "In the fast-paced world of real estate, inefficiencies can lead to missed opportunities. Many professionals can possibly face some challenges which can be a reason for inconvenience for them, but incorporating this real estate chatbot can save them from facing this.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon35, // Replace with the correct icon for Fragmented Information
          heading: "Fragmented Information",
          description:
            "One of the major challenges which professionals can face for their real estate queries is Accessing scattered sources to find out the relevant information for making the critical decisions, which can cause major delays and errors.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon29, // Replace with the correct icon for Inefficient Reviews
          heading: "Inefficient Reviews",
          description:
            "As much as doing this research and analysis for real estate manually can be time consuming resulting in slower response, but it can also get tiring; ultimately compromising the productivity and profitability, as the reviews made by manual systems could have errors. This challenge can effectively be catered from these AI chatbots.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon47, // Replace with the correct icon for Inaccurate Assessments
          heading: "Inaccurate Assessments",
          description:
            "The analysis done manually might have errors and inaccuracies which can comprise the entire analysis report, and might lead to losses to the business organisation. Our real estate chatbot aims to minimise these losses by ensuring accurate analysis, and delivering comprehensive reports.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption:
        "Our chatbot ensures after in-depth analysis your decisions are based on reliable data.",
      btnText: "Get A Free Trial",
    },
  ];
  
  
  const cardsData2 = [
    {
      headerData: {
        tagText: "Benefits",
        headingText: "With Centrox AI, You Benefit From:",
        para1Text:
          "By choosing the expert team of Centrox AI, you feel relaxed as we aim to provide quality services.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: Icon37, // Replace with the correct icon for Data Integrity
          heading: "Data Integrity",
          description:
            "The experts at Centrox AI utilise such algorithms which ensure high-quality assessments, minimising risks. We realise the importance of data, therefore we extend enough efforts to ensure that your valuable data remains secure and private.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon36, // Replace with the correct icon for Operational Efficiency
          heading: "Operational Efficiency",
          description:
            "We understand the importance of operational efficiency your AI chatbot real estate solution requires. Therefore we provide you with an engaging chatbot for immediate insights, freeing your team to focus on high-impact tasks.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon27, // Replace with the correct icon for Fast Security Measures
          heading: "Fast Security Measures",
          description:
            "For keeping your essential data private, we prioritise the protection of your sensitive data, adhering to the highest privacy standards. This helps us in providing you with a dependable and reliable solution.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon9, // Replace with the correct icon for Scalable Solutions
          heading: "Scalable Solutions",
          description:
            "We know that the market trend and demands keep changing with each passing day, so we provide you with such a real estate AI chatbot which can adapt effortlessly to increasing demands while maintaining performance.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "Talk to Our AI Expert",
    },
  ];
  
  const cardsData3 = [
    {
      headerData: {
        tagText: "Innovation",
        headingText: "Empowering Real Estate Professionals",
        para1Text:
          "You're One Step Away from Real Estate Innovation. Our chatbot serves diverse stakeholders in the industry.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          icon: null, // Replace with the correct icon for Real Estate Agents
          heading: "Real Estate Agents",
          description:
            "This efficient AI chatbot for the real estate industry can facilitate efficient property evaluations, improving client interactions and accelerating transactions, which can significantly increase your business profit.",
          linkText: "",
          linkWithIcon: true,
          colSpan:2,
          bentoImage:realestate_agents
        },
        {
          icon: Icon32, // Replace with the correct icon for Investors
          heading: "Investors",
          description:
            "It lets investors make decisions based on data and enhance their portfolio management. This can actually speed up the decision-making process for investors by providing them with a compelling report that encourages them to proceed forward.",
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: Icon38, // Replace with the correct icon for Construction Firms
          heading: "Construction Firms",
          description:
            "Smooths the process of document reviews to maintain project timelines and compliance. This holds critical importance in providing you with a dependable way to review the documents without going through the hassle of searching.",
          linkText: "",
          linkWithIcon: true,
          colSpan:1
        },
        {
          icon: null, // Replace with the correct icon for Agencies
          heading: "Agencies",
          description:
            "Provides immediate support through our chatbot, allowing agents to concentrate on closing deals. This can help agencies focus more on compelling clients to invest.",
          linkText: "",
          linkWithIcon: true,
          colSpan:2,
          bentoImage:agencies
        },
      ],
      caption:
        "Regardless of your role, Centrox AI enhances your capabilities and drives growth.",
      btnText: "Schedule a Demo",
    },
  ];
  
  

  const questions = [
    {
      question: "How does Centrox AI ensure the accuracy of document analysis in real estate?",
      answer: "The chatbot made by our AI experts leverages advanced machine learning models tailored to real estate, ensuring accurate insights. The chatbots we deliver are equipped with the ability to analyze the critical detail found within the document. Based on this in-depth analysis, it can also provide reliable recommendations."
    },
    {
      question: "What types of documents can I upload for analysis?",
      answer: "This real estate chatbot, prepared by our experts at Centrox AI, allows users to upload a wide range of documents related to real estate, including lease contracts, purchase agreements, appraisal reports, and construction project files. This advanced chatbot speeds up the process for analysis, saving a lot of time."
    },
    {
      question: "How quickly can I get answers after uploading my documents?",
      answer: "We know the importance of time for businesses, especially as it can provide a competitive edge. Therefore, our AI assistant chatbot is optimized to deliver an analysis report instantly after a document is uploaded. This analysis report also provides users with recommendations for fruitful results."
    },
    {
      question: "How does Centrox AI handle data security for my sensitive real estate documents?",
      answer: "At Centrox, data security is our priority. We understand the potential consequences a data privacy breach could have on your business. Our AI experts follow the highest industry standards to ensure complete data protection for users."
    },
    {
      question: "Can Centrox AI’s chatbot assist in understanding current real estate market trends?",
      answer: "The AI assistant real estate chatbot provides an efficient and reliable solution for understanding market trends. It can generate effective reports accordingly, helping to strengthen your business's competitive edge."
    },
    {
      question: "What makes Centrox AI different from other AI solutions in real estate?",
      answer: "At Centrox AI, our main aim is to promote a quality tech revolution in the market. Our AI experts perform deep and comprehensive research on your real estate challenges to develop an optimized solution that effectively addresses and resolves your queries."
    }
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
          img: qwen,
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
      title: "Conversational AI Platforms",
      content: [
        {
          alt: "Icon",
          caption: "Rasa",
          img: rasa,
        },
        {
          alt: "Icon",
          caption: "Dialogflow",
          img: dialogflow,
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
  const heroData = {
    heading: "Your Real Estate Analysis with Gen AI",
    description:
      "We deliver a chatbot that empowers individuals to analyse documents quickly and accurately. By simply uploading your files, gain insights and actionable recommendations regarding land purchases, sales, rents, and construction projects.",
    btnText: "Try it for Free",
    includeDots: false,
    img:realestatehero,
    reverse: false,
  };
  
  const arrayData = {
    headerData: {
      tagText: "Our Commitment",
      heading: "Why Centrox AI Stands Out?",
      description:
        "Our commitment to excellence in AI and real estate innovation sets us apart as your trusted partner.",
    },
    data: [
      {
        heading: "Expertise in AI and Real Estate",
        description:
          "Our team comprises specialists with a deep understanding of both domains, ensuring practical, high-quality solutions.",
      },
      {
        heading: "Customised Solutions",
        description:
          "We adapt our technology to meet your unique needs, allowing for smooth integration into existing systems. We work closely so that we can bring your business idea to reality, which is not only beneficial for customers only, but also enhances your business growth too.",
      },
      {
        heading: "Collaborative Development",
        description:
          "We work alongside your team to align our solutions with your strategic goals, because we acknowledge your trust in us. Therefore we aim to have an in-depth understanding of your idea and accordingly maintain the touch with your team until satisfaction has been reached.",
      },
      {
        heading: "Results-Oriented Approach",
        description:
          "Our focus is on delivering measurable outcomes that drive efficiency and support growth. Therefore we deliver such efficient AI chatbot assistants that guarantees exceptional assistance, which can significantly enhance your business growth.",
      },
      {
        heading: "Transparent Engagement",
        description:
          "We maintain open communication throughout our partnership, keeping you informed at every stage. This not only helps us in keeping you informed, but also helps us in getting feedback which can enable us in enhancing its effectiveness.",
      },
    ],
    btnText: "Book a 1-1 Session",
  };
  
  
  
  
 
    
  return (
    <div>
    
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection  {...heroData} bgimage1={solutionbg1} bgimage2={solutionbg2} bgClassName="opacity-30" />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          {/* <LandingSolutionsSection/> */}
          <CommonDisplayCardsGrid
            data={cardsSolutions}
          /> 
          {/* <StepperSection data={stepperdata}/> */}
          <CommonDisplayCardsGrid
            data={cardsData2}
          /> 
            <CommonDisplayCardsGrid
            data={cardsData3}
            resizeableCardsLayout
            gridCols={3}
          /> 
          {/* <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots:"
            }
            caption=""
            btnText="Let’s Discuss Further"
          /> */}
          {/* <LandingIndustriesSection/> */}
      
         
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
          <IndustryBanner heading="Talk to Our AI Expert" description="Ready to enhance your real estate analysis with AI?
Schedule a consultation with our experts to explore how Centrox AI can elevate your operations." btnText="Lets Connect" isBooking/>
        </main>
     
    </div>
  );
}
