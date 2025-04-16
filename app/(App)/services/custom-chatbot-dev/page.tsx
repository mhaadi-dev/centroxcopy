//@ts-nocheck

import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";

import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

import { LogosSection } from "@/sections/LogosSection";
import { FaqsSection } from "@/sections/FaqsSection";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import Icon4 from "@/assets/Icon-4.svg";
import Icon9 from "@/assets/Icon-9.svg";

import Icon10 from "@/assets/Icon-13.svg";
import Icon11 from "@/assets/Icon-11.svg";
import Icon12 from "@/assets/Icon-12.svg";
import Icon13 from "@/assets/Icon-13.svg";
import Icon14 from "@/assets/Icon-14.svg";
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
import serviceHeroImg from "@/assets/serviceHeroImg1.svg";
import rasa from "@/assets/Rasa-white.webp"
import dialogflow from "@/assets/dialogflow.svg"
import IndustryBanner from "@/Components/common/IndustryBanner";
import servicebg from "@/assets/Servicebg.webp"
import consistencyicon from "@/assets/consistency.webp"
import insightsicon from "@/assets/Insights.webp"
import scalibilityicon from "@/assets/Scalability & availability.webp"
import langchain from "@/assets/langchain.webp"
import langgraph from "@/assets/LangGraph Icon.svg"
export const metadata = {
  title:"Build your Custom AI Chatbot For Customer Support | Centrox AI",
  description:"Develop custom AI chatbots for personalized, scalable support. Enhance customer engagement and streamline operations. Book your session with Centrox AI",
  alternates: {
    canonical: "https://centrox.ai/services/custom-chatbot-dev",
  },
}


export default async function Page({ params }: { params: { slug: string } }) {


  const benefitsData = [
   { 
    headerData:{
        tagText: "Benefits",
        headingText: "How Custom Chatbots Fill The Gaps?",
        para1Text:
          "Custom chatbots, fine-tuned on your data and aligned with your business objectives, offer a transformative solution.",
        heading2Text: "",
        para2Text:""
    },
    data: [
      {
        icon: Icon12,
        heading: "Deep Understanding",
        description:
          "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
        linkText: "",
        linkWithIcon: true,
        alt: "Deep Understanding",
      },
      {
        icon: Icon13,
        heading: "Personalized Engagement",
        description:
          "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
        linkText: "",
        linkWithIcon: true,
        alt: "Personalized Engagement",
      },
      {
        icon: Icon14,
        heading: "Seamless Integration",
        description:
          "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
        linkText: "",
        linkWithIcon: true,
        alt: "Seamless Integration",
      },
      {
        icon: scalibilityicon,
        heading: "Scalability & Availability",
        description:
          "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
        linkText: "",
        linkWithIcon: true,
        alt: "Scalability & Availability",
      },
      {
        icon: insightsicon,
        heading: "Data-Driven Insights",
        description:
          "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
        linkText: "",
        linkWithIcon: true,
        alt: "Data-Driven Insights",
      },
      {
        icon: consistencyicon,
        heading: "Brand Consistency",
        description:
          "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
        linkText: "",
        linkWithIcon: true,
        alt: "Brand Consistency",
      },
    ],
    
    caption:"",
    btnText:"Schedule A Meeting Today"

}
  ];



  const challengeData = [
    {
      headerData: {
        tagText: "Challenges",
        headingText: "The Problem With Generic Bots",
        para1Text:
          "While off-the-shelf chatbots may seem like a quick and easy solution, they often fall short when it comes to meeting the unique needs of AI-driven businesses.",
        para2Text: "",
        heading2Text:""
      },
      data: [
        {
          icon: Icon9,
          heading: "Limited Understanding",
          description:
            "Generic models are trained on vast amounts of general data, but they struggle to grasp the nuances of industry-specific jargon, complex queries, and subtle customer intent. This leads to frustrating user experiences and missed business opportunities.",
          linkText: "",
          linkWithIcon: true,
          alt: "Limited Understanding",
        },
        {
          icon: Icon10,
          heading: "Inflexible Responses",
          description:
            "Pre-defined responses and rigid decision trees often result in robotic and unhelpful interactions. Customers expect personalized and empathetic conversations, which generic chatbots fail to deliver, leading to unsatisfactory engagement.",
          linkText: "",
          linkWithIcon: true,
          alt: "Inflexible Responses",
        },
        {
          icon: Icon11,
          heading: "Missed Opportunities",
          description:
            "Off-the-shelf solutions lack the capability to utilize your unique data and knowledge base to offer personalized recommendations, proactive support, or seamless system integration. This limits your ability to fully leverage AI for business growth.",
          linkText: "",
          linkWithIcon: true,
          alt: "Missed Opportunities",
        },
        {
          icon: Icon4,
          heading: "Brand Misalignment",
          description:
            "A chatbot that doesn’t reflect your brand’s voice and values can create a disconnect with your customers, damaging your reputation and reducing trust. Consistency with your brand is crucial for building strong customer relationships.",
          linkText: "",
          linkWithIcon: true,
          alt: "Brand Misalignment",
        },
      ],
      
      caption:"Centrox AI understands these limitations. We can help in building custom LLM-powered chatbots that transcend these challenges, delivering intelligent, engaging, and impactful conversations that elevate your customer experience.",
      btnText:"Book 1:1 Session"
    },
  ];

  const questions = [
    {
      question: "What kind of data do you need to train a custom chatbot?",
      answer:
        "To train a custom chatbot, we primarily use your business’s proprietary data, such as customer interactions, FAQs, product information, support tickets, and knowledge base. The richer and more specific the data, the better the chatbot can understand and respond to your customers with accurate, contextually appropriate answers.",
    },
    {
      question: "How long does it take to develop a custom chatbot?",
      answer:
        "The timeline depends on the complexity of the project, the level of customization required, and the integration needs. Typically, development can range from 4 to 12 weeks, including the design, training, testing, and deployment phases.",
    },
    {
      question: "What is the cost of custom chatbot development?",
      answer:
        "Our pricing is tailored to your specific requirements, factoring in aspects like the complexity of conversational flows, integrations, LLM fine-tuning, and ongoing maintenance. Contact us for a detailed estimate based on your needs.",
    },
    {
      question: "How do you ensure data security and privacy during the development process?",
      answer:
        "We adhere to stringent security protocols to ensure the safety of your data. This includes encryption, access control, and compliance with global data privacy regulations like GDPR. We also implement secure API practices and conduct regular security audits to mitigate risks.",
    },
    {
      question: "What level of involvement will my team have in the project?",
      answer:
        "We collaborate closely with your team throughout the project to ensure the chatbot aligns with your goals and vision. Your input is crucial during the needs assessment, design, and testing phases, and we provide regular updates to ensure transparency and effective communication.",
    },
    {
      question: "Can you help us with ongoing chatbot maintenance and updates?",
      answer:
        "Yes, we offer ongoing maintenance and support services to keep your chatbot up-to-date and performing optimally. This includes regular updates, fine-tuning based on user feedback, and continuous monitoring to ensure the chatbot adapts to evolving business needs.",
    },
  ];
  
  

  const techStackData = [
    {
      title: "Foundation Models",
      content: [
        {
          alt: "Llama",
          caption: "Llama",
          img: liama,
        },
        {
          alt: "Falcon",
          caption: "Falcon",
          img: falcon,
        },
        {
          alt: "Qwen",
          caption: "Qwen",
          img: qwen,
        },
      ],
    },
    {
      title: "Frameworks",
      content: [
        {
          alt: "PyTorch",
          caption: "PyTorch",
          img: pytorch,
        },
        {
          alt: "Hugging Face Transformers",
          caption: "Hugging Face Transformers",
          img: huggingface,
        },
        {
          alt: "Tensorflow",
          caption: "Tensorflow",
          img: tensorflow,
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
      title: "Conversational AI Platforms",
      content: [
        {
          alt: "Langchain",
          caption: "Langchain",
          img: langchain,
        },
        {
          alt: "LangGraph",
          caption: "LangGraph",
          img: langgraph,
        },
      ],
    },
    {
      title: "MLOps Tools",
      content: [
        {
          alt: "MLflow",
          caption: "MLflow",
          img: mlflow,
        },
        {
          alt: "Kubeflow",
          caption: "Kubeflow",
          img: kubeflow,
        },
      ],
    },
  ];
  
  const heroData = {
    heading: "Reduce churn and maximise retention. With Custom AI Chatbots",
    description:
      "Be Available For Your Customers 24/7. Partner with Centrox AI to build intelligent chatbots that know your business as well as you do, streamline support, and drive conversions. Our tailored solutions leverage LLMs to deliver a superior user experience.",
    btnText: "Book A Call Now",
    includeDots: false,
    img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/services/serviceHeroImg1.svg",
    reverse: false,
  };
  const arrayData = 
   { headerData:{
    tagText: "advantages",
    heading: "Why Work With Centrox?",
    description:
      "We're not just another chatbot development company. We're your strategic AI partner.",
   },alt:"Data management system",data:[{
      heading: "Deep Expertise",
      description:
        "Our team comprises tenured AI researchers and engineers with a proven track record in chatbot development and LLM fine-tuning.",
    },
    {
      heading: "Collaborative Approach",
      description:
        "We believe in open communication, knowledge sharing, and working closely with your team to ensure your vision is realized.",
    },
    {
      heading: "Tailored Solutions",
      description:
        "We understand that every business is unique. We craft custom chatbot solutions that address your specific challenges and goals.",
    },
    {
      heading: "Results-Driven Focus",
      description:
        "We're committed to delivering measurable results that drive business value and impact your bottom line.",
    },
    {
      heading: "Passion for Innovation",
      description:
        "We stay at the forefront of AI research and development, constantly pushing the boundaries of what's possible with chatbots.",
    },],btnText:"Schedule a Session"}
  
    const stepperdata = {
      heading: "How We Build a Chatbot?",
      description: "We offer comprehensive chatbot development services tailored to your unique needs.",
      alt:"How the AI life cycle works",
      data: [
        {
          title: "Needs Assessment",
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
                  text:
                    "We begin our journey towards building the AI chatbot by closely collaborating with your team to understand and define your chatbot's goals, target audience, and desired capabilities.",
                },
              ],
            },
          ],
          status: false,
        },
        {
          title: "Conversational Design",
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
                  text:
                    "We conduct thorough research and analysis around customers' latest interest trends to provide an engaging design that translates your vision.",
                },
              ],
            },
          ],
          status: false,
        },
        {
          title: "LLM Selection",
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
                  text:
                    "We leverage powerful LLMs like OpenAI, Anthropic, Gemini and open source Llama models to power your chatbot's intelligence that ensures prompt engineering.",
                },
              ],
            },
          ],
          status: false,
        },
        {
          title: "Fine-Tuning",
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
                  text:
                    "We fine-tune the model on your proprietary data, ensuring it understands your industry-specific jargon, product offerings, and customer needs and has the ability to adapt.",
                },
              ],
            },
          ],
          status: false,
        },
        {
          title: "Integration & Deployment",
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
                  text:
                    "We integrate your chatbot into your website, mobile app, messaging platforms (like WhatsApp, Facebook Messenger, etc.), and other channels, providing a consistent user experience, along with ensuring seamless backend integration that ensures scalability and reliability.",
                },
              ],
            },
          ],
          status: false,
        },
        {
          title: "Testing & Refinement",
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
                  text:
                    "We conduct extensive testing to identify and address any potential errors, inconsistencies, or biases in the chatbot's responses. We also utilize feedback and data analytics to keep up your chatbot performance with the evolving trends.",
                },
              ],
            },
          ],
          status: false,
        },
      ],
      btnText: "Schedule A Discussion",
    };
    
  return (
    <div>
   
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection {...heroData}  moveToSection=""
            link="" alt="Process of AI-powered Chatbots "  bgimage1={servicebg} bgClassName="opacity-60"  />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          <CommonDisplayCardsGrid
            data={benefitsData}
            gridCols={3}
          />
          <StepperSection data={stepperdata} />
          <LogosSection
            data={techStackData}
            heading={"Our Tech Stack"}
            description={
              "We leverage a powerful and flexible tech stack to build high-performing chatbots."
            }
            caption=""
            btnText="Let’s Discuss Further"
          />
          <PointsandImagesSection
            arrayData={arrayData}
            heading={"Why Work With Centrox?"}
            description={
              "We're not just another chatbot development company. We're your strategic AI partner."
            }
          />
          <FaqsSection
            addTag={true}
            heading="We're Often Asked"
            subHeading=""
            data={questions}
          />
          <IndustryBanner heading="Ready To Build A Better Connection With Your Customers?" description="Book an exclusive 1:1 call with us today and discuss how we can help you retain current customers and win new ones by communicating better through a GPT you can call your own." btnText="Book Your 1:1 Session" isBooking/>
        </main>
  
    </div>
  );
}
