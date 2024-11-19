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

import LandingLayout from "../../layout";
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
import qwen from "@/assets/qwen.webp";

import pytorch from "@/assets/pytorchlogo.webp";
import huggingface from "@/assets/huggingfacelogo.webp";
import tensorflow from "@/assets/tensorflow.webp";

import aws from "@/assets/awslogo.webp";
import azure from "@/assets/azure-plainlogo.webp";
import googlecloud from "@/assets/Googlecloud.webp";

import mlflow from "@/assets/mlflowlogo.webp";
import kubeflow from "@/assets/kubeflowlogo.webp";
import serviceHeroImg from "@/assets/serviceHeroImg.svg";
import rasa from "@/assets/Rasa-white.webp"
import dialogflow from "@/assets/dialogflow.svg"
import IndustryBanner from "@/Components/common/IndustryBanner";
import servicebg from "@/assets/Servicebg.webp"
import consistencyicon from "@/assets/consistency.webp"
import insightsicon from "@/assets/Insights.webp"
import scalibilityicon from "@/assets/Scalability & availability.webp"

export default async function Page({ params }: { params: { slug: string } }) {


  const benefitsData = [
   { 
    headerData:{
        tagText: "Benefits",
        headingText: "How Custom Chatbots Fill The Gaps",
        para1Text:
          "Custom chatbots, fine-tuned on your data and aligned with your business objectives, offer a transformative solution.",
        heading2Text: "",
        para2Text:""
    },
    data: [{
      icon: Icon12,
      heading: "Deep Understanding",
      description:
        "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
      linkText: "",
      linkWithIcon: true,
    },
    {
      icon: Icon13,
      heading: "Personalized Engagement",
      description:
        "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
      linkText: "",
      linkWithIcon: true,
    },
    {
      icon: Icon14,
      heading: "Seamless Integration",
      description:
        "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
      linkText: "",
      linkWithIcon: true,
    },
    {
      icon: scalibilityicon,
      heading: "Scalability & Availability",
      description:
        "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
      linkText: "",
      linkWithIcon: true,
    },
    {
      icon: insightsicon,
      heading: "Data-Driven Insights",
      description:
        "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
      linkText: "",
      linkWithIcon: true,
    },
    {
      icon: consistencyicon,
      heading: "Brand Consistency",
      description:
        "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
      linkText: "",
      linkWithIcon: true,
    }],
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
        },
        {
          icon: Icon10,
          heading: "Inflexible Responses",
          description:
            "Pre-defined responses and rigid decision trees often result in robotic and unhelpful interactions. Customers expect personalized and empathetic conversations, which generic chatbots fail to deliver, leading to unsatisfactory engagement.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon11,
          heading: "Missed Opportunities",
          description:
            "Off-the-shelf solutions lack the capability to utilize your unique data and knowledge base to offer personalized recommendations, proactive support, or seamless system integration. This limits your ability to fully leverage AI for business growth.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: Icon4,
          heading: "Brand Misalignment",
          description:
            "A chatbot that doesn’t reflect your brand’s voice and values can create a disconnect with your customers, damaging your reputation and reducing trust. Consistency with your brand is crucial for building strong customer relationships.",
          linkText: "",
          linkWithIcon: true,
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
    heading: "Reduce churn and maximise retention. With Custom AI Chatbots",
    description:
      "Be Available For Your Customers 24/7.Partner with Centrox AI to build intelligent chatbots that know your business as well as you do,, streamline support, and drive conversions. Our tailored solutions leverage LLMs to deliver a superior user experience.",
    btnText: "Book A Call Now",
    includeDots: false,
    img: serviceHeroImg,
    reverse: false,
  };
  const arrayData = 
   { headerData:{
    tagText: "advantages",
    heading: "Why Work With Centrox?",
    description:
      "We're not just another chatbot development company. We're your strategic AI partner.",
   },data:[{
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
      heading: "How We Build AI Chatbots",
      description: "We offer comprehensive chatbot development services tailored to your unique needs.",
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
                    "We leverage powerful LLMs like GPT-3.5, GPT-4, or other open-source models to power your chatbot's intelligence that ensures prompt engineering.",
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
          <HeroSection {...heroData}   bgimage1={servicebg} bgClassName="opacity-60"  />
          <LogosCarousel />
          <CommonDisplayCardsGrid
            data={challengeData}
          />
          <CommonDisplayCardsGrid
            data={benefitsData}
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
          {/* <LandingCaseStudySection/> */}
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
