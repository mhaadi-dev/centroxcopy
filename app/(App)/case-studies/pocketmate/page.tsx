import React from "react";
import LandingLayout from "../../layout";
import CaseStudyBanner from "@/Components/common/CaseStudyBanner";
import BannerSection from "@/Components/MainPageComponents/Banner";
import { VerticalCarousal } from "@/Components/common/VeritcalCarousal";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import classNames, {
  section_wrapper_class,
  text_h2_class,
  text_para_2,
  text_para_3,
} from "@/helpers/common";
import WhatOurClientSay from "@/Components/common/WhatOurClientSay";
import Image from "next/image";
import SimpleIconHeroSection from "@/Components/common/SimpleIconHeroSection";
import SubnavBar from "@/Components/Navbar/SubnavBar";
import { StepperSection } from "@/sections/StepperSection";
import { LogosSection } from "@/sections/LogosSection";
import aws from "@/assets/awslogo.webp"
import imageBG2 from "@/assets/Image BG2.webp"
import imageBG from "@/assets/ImageBG.webp"
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";

const page = ({ params }: { params: { slug: string } }) => {
const slugOptions=[{
  slug:"pocketmate",
  caseStudyBanner:{
    heading:"Pocketmate.ai your reliable mental health support; ensuring emotional contentment whenever or wherever you need it.",
    para1Text:"Pocketmate.ai offers support to individuals seeking mental-health assistance. It enables users to book sessions with professional therapists, ensuring timely and effective support.",
  },
  CommonDisplayCardsGrid:{
    gridCols:4,
    gradientBg:true,
    data: {
      headerData: {
        tagText: "AChivements",
        headingText: "Highlights for Metrics Achieved ",
        para1Text:
          "For startups like you, the best foot forward is to customise existing LLMs according to your unique business needs. We collaborate deeply with your team throughout the entire development lifecycle.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "56",
          symbol: "%",
          description: "This is something about metrics",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "96",
          symbol: "%",
          description: "This is something about metrics",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "200",
          symbol: "+",
          description: "This is something about metrics",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "100",
          symbol: "%",
          description: "This is something about metrics",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
      ],
    },
  
      
   }
}]
const banner1Data={
    heading:"Pocketmate.ai your reliable mental health support.",
    para1Text:"Pocketmate.ai offers support to individuals seeking mental-health assistance. It enables users to book sessions with professional therapists, ensuring timely and effective support.",
}
const heroSection1Data={
    heading:"The Problem",
    icon:"",
    description:"In today's busy and highly competitive world, many feel mental burnout, losing creativity, motivation, and direction. The constant hustle eventually results in leaving no time for evaluating and restructuring your own thoughts for your mental well being. Finding a friend or even a therapist to share your thoughts for redirection consumes a good amount of time and effort, this raises the need of having dependable 24/7  immediate support to become your companion by listening to your thoughts whenever or wherever you need it, and for extending personalized care according to your need."
}
const heroSection2Data={
    heading:"Research and Analysis",
    icon:"",
    description:"Delivering comprehensive mental health support through an AI driven solution is a complex task. After understanding the requirements, our experts did a thorough research in finding out the best possible approach for developing the required solution.Through our study we concluded that in order to extend an appropriate mental health support, we need two separate platforms: one for users, and the other for the professional therapist. Both of these platforms are linked with a content management system,which is managed by the admin panel. The Admin panel  manages the CMS along the business aspects like: subscription and platform fee for the therapy session."
}
const heroSection3Data={
    heading:"Healthcare",
    icon:"",
    description:"There are billions of people around the world,  and the health care providers we currently have in the world aren't enough to provide the relevant care for the entire population. This solution can be improvised for extending everyday healthcare support accessible to the population, by providing instant health care assistance and significantly reducing the extensive rush in the hospitals, caused by the patients with mild disease."
}
const heroSection4Data={
    heading:"Healthcare",
    icon:"",
    description:"There are billions of people around the world,  and the health care providers we currently have in the world aren't enough to provide the relevant care for the entire population. This solution can be improvised for extending everyday healthcare support accessible to the population, by providing instant health care assistance and significantly reducing the extensive rush in the hospitals, caused by the patients with mild disease."
}
  const data = [
    {
      headerData: {
        tagText: "",
        headingText: "Results ",
        para1Text:
          "The impact that our solution delivers is far reaching an extremely benefiting.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "98",
          symbol: "%",
          description: "Response time",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "96",
          symbol: "%",
          description: "Precise response",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "90",
          symbol: "%",
          description: "Reliable booking",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "100",
          symbol: "%",
          description: "Effective therapy",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },{
            Icon: null,
            heading: "100",
            symbol: "%",
            description: "No.of People supported",
            className: "h-full !rounded-3xl w-full",
            linkText: "",
          },
      ],
    },
  ];
  const data2 = [
    {
      headerData: {
        tagText: "Requirements",
        headingText: "",
        para1Text:
          "The Pocketmate.ai focuses on delivering quality mental health care to individuals all around the world. Some of the major aspects which this solution aims to cater are.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "Personalized therapy",
          symbol: "",
          description: "The aim is to extend mental health support for people all around the world for enhanced mental well being, by leveraging users with an AI powered chatbot that has the ability to become your trusted friend to listen you out and offer personalized care to ensure contentment.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Health monitoring and Assessment",
          symbol: "",
          description: "Provide a means to make the user more self-aware, by enabling them to conduct an assessment which analyzes their current mental state, and effectively categorize their stress, depression, or anxiety level.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Suggest treatment based on assessment scores",
          symbol: "",
          description: "Based on the assessment results ensure appropriate care according to their stress, anxiety, or depression intensity, by suggesting them with suitable exercises, tasks, or to do list, for an emotionally stable mental health.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "In-depth online Therapy",
          symbol: "",
          description: "Deliver an approach that effectively bridges the communication gap between the user and therapist, by not only providing a medium for scheduling and having a therapy session ,but also providing the chosen expert therapist with the user's mental health history which was communicated within the app by the user.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
      ],
    },
  ];
  const data3 = [
    {
      headerData: {
        tagText: "",
        headingText: "Benefits of Our Approach",
        para1Text:
          "Our solution is determined to ensure convenient, prompt, and effective mental health help accessible to people across the globe, significantly enhancing their mental well-being. Some of the major benefits our solution contributes are:",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "User-Friendly App",
          symbol: "",
          description: "The solution is designed from the user perspective to ensure quality mental health assistance whenever needed. The user interface and functionality are easy to use, making it accessible to users from diverse backgrounds and all age groups.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:2
        },
        {
          Icon: null,
          heading: "User-Controlled App Access",
          symbol: "",
          description: "We prioritize the security of your provided information and conversations with the AI assistant by implementing user-controlled access. This empowers users to authorize data sharing with a chosen professional therapist for therapeutic purposes.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:1
        },
        {
          Icon: null,
          heading: "Semi-Automatic Professional Therapist Profile Verification",
          symbol: "",
          description: "To ensure credible therapy, we have a semi-automatic verification process for therapist profiles. Professionals upload their details, which are then validated by an admin to maintain a high standard of care.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:1
        },
        {
          Icon: null,
          heading: "Reliable Therapy Sessions",
          symbol: "",
          description: "Our solution makes reliable therapy sessions accessible to everyone. Users can book audio or video therapy appointments with a chosen therapist at their preferred date and time, ensuring a smooth session for improved mental health.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:2
        },
      ],
    },
  ];
  const data4 = [
    {
      headerData: {
        tagText: "",
        headingText: "Challenges Encountered",
        para1Text: "Pocketmate.ai faced several challenges in delivering swift and compassionate mental health support.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "Delayed Response Times",
          symbol: "",
          description: "Response time is a critical aspect that plays a key role in customer satisfaction. Existing systems had slower response rates, potentially affecting user satisfaction and harming platform reputation.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Personalized and Focused Response",
          symbol: "",
          description: "Response quality is as important as speed in determining performance. Ensuring a focused, specific response from the AI chatbot for each user's query was challenging but crucial for effective mental health assistance.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Mood Detection Requirements",
          symbol: "",
          description: "Identifying the user's current mood and providing the required support is essential for personalized care. Accurately detecting emotions and delivering appropriate guidance proved challenging but necessary for a tailored user experience.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Privacy and Data Consent",
          symbol: "",
          description: "Data protection and privacy are paramount in today’s digital landscape. Preventing unauthorized access and ensuring user consent for data usage were critical to maintaining trust and security on the platform.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
      ],
    },
  ];
  const data5 = [
    {
      headerData: {
        tagText: "",
        headingText: "Delivered Solution Key Features",
        para1Text: "Pocketmate introduces essential features designed to be your mental health support companion, offering assistance on the go.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "AI Chatbot Assistant",
          symbol: "",
          description: "The AI chatbot assistant provides users with a safe space to express their mental state without fear of judgment. Users can share their thoughts in text or audio, and the assistant responds with insights that encourage self-awareness by helping them to reorganize and redirect their thoughts. All conversations are protected with end-to-end encryption for privacy.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Health Center",
          symbol: "",
          description: "Through our health assessment feature, users can evaluate their mental health by completing a questionnaire. This helps in identifying levels of stress, anxiety, or depression. With expert input, users receive customized to-do lists based on the intensity of their symptoms to support better mental well-being.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Mood Tracking",
          symbol: "",
          description: "This feature helps users track their mood over time, promoting self-awareness and supporting mental health by enabling users to monitor and manage their emotional patterns.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Remote Therapy",
          symbol: "",
          description: "Users can book audio or video therapy sessions with their chosen therapist at a convenient time and place. To enhance session effectiveness, users complete a questionnaire before the session to give therapists an overview of their mental health, allowing for better preparation and more personalized support.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
      ],
    },
  ];
  
  
  
  const navItems = [
    {
      subNavTitle: "Artificial Intelligence",
      subItems: [
        { subTitle: "AI ethics and bias", link: "" },
        { subTitle: "item 2", link: "" },
        { subTitle: "item 3", link: "" }
      ]
    },
    {
      subNavTitle: "Machine Learning",
      subItems: [
        { subTitle: "item 1", link: "" },
        { subTitle: "item 2", link: "" },
        { subTitle: "item 3", link: "" }
      ]
    },
    {
      subNavTitle: "ML Ops",
      subItems: [
        { subTitle: "item 1", link: "" },
        { subTitle: "item 2", link: "" },
        { subTitle: "item 3", link: "" }
      ]
    },
    {
      subNavTitle: "Generative AI",
      subItems: [
        { subTitle: "item 1", link: "" },
        { subTitle: "item 2", link: "" },
        { subTitle: "item 3", link: "" }
      ]
    },
    {
      subNavTitle: "Data Annotation",
      subItems: [
        { subTitle: "item 1", link: "" },
        { subTitle: "item 2", link: "" },
        { subTitle: "item 3", link: "" }
      ]
    }
  ];
  const stepperdata = {
    heading: "Our Process",
    description: "Our structured approach ensures a quality solution, developed through a series of focused steps.",
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
                text: "We initiate our process by having a detailed discussion to understand your requirements, expectations, and goals. Our experts share their insights to craft a strategy aligned with your vision.",
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
                text: "We collaborate with you to design a model that is best suited to meet your requirements, setting a strong foundation for solution development.",
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
                text: "We prepare quality data by gathering relevant data, assigning appropriate labels, and structuring it effectively. This critical step empowers the model to achieve the desired performance.",
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
                text: "We iteratively train the model using a mix of fine-tuning, RHLF, and prompt engineering. Continuous performance evaluation helps refine the model for optimal results.",
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
                text: "We ensure a seamless deployment of our solution into your existing environment, minimizing disruption and providing expert integration with your app or system.",
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
                text: "We offer continuous monitoring and support, with regular evaluations, retraining, and optimizations based on evolving data trends to ensure sustained value.",
              },
            ],
          },
        ],
        status: false,
      },
    ],
    btnText: "",
  };
  const techStackData = [
    {
      title: "AI Tools",
      content: [
        {
          alt: "icon",
          caption: "OpenAI",
          img: aws, // Replace with the correct path to the OpenAI icon image
        },
        {
          alt: "icon",
          caption: "Agora",
          img: aws, // Replace with the correct path to the Agora icon image
        },
        {
          alt: "icon",
          caption: "Stripe",
          img: aws, // Replace with the correct path to the Stripe icon image
        },
        {
          alt: "icon",
          caption: "IAP",
          img: aws, // Replace with the correct path to the IAP icon image
        },
      ],
    },
    {
      title: "DevOps",
      content: [
        {
          alt: "Icon",
          caption: "AWS",
          img: aws, // Replace with the correct path to the AWS icon image
        },
        {
          alt: "Icon",
          caption: "Cuba Backend",
          img: aws, // Replace with the correct path to the Cuba Backend icon image
        },
      ],
    },
    {
      title: "Frontend Development",
      content: [
        {
          alt: "Icon",
          caption: "React Native",
          img: aws, // Replace with the correct path to the React Native icon image
        },
        {
          alt: "Icon",
          caption: "Java",
          img: aws, // Replace with the correct path to the Java icon image
        },
        {
          alt: "Icon",
          caption: "Kotlin",
          img: aws, // Replace with the correct path to the Kotlin icon image
        },
      ],
    },
    {
      title: "Backend Development",
      content: [
        {
          alt: "Icon",
          caption: "Node Services",
          img: aws, // Replace with the correct path to the Node Services icon image
        },
      ],
    },
  ];
 
  const data6 = [
    {
      headerData: {
        tagText: "",
        headingText: "Application for Other Business",
        para1Text: "While this is an amazing solution for providing mental health support, this also holds the potential for serving as a key aspect in benefiting businesses by providing them the required automation for improving their efficiency.",
        para2Text: "",
        heading2Text: "",
      },
      data: [
        {
          Icon: null,
          heading: "Healthcare",
          symbol: "",
          description: "There are billions of people around the world, and the health care providers we currently have in the world aren't enough to provide the relevant care for the entire population. This solution can be improvised for extending everyday healthcare support accessible to the population, by providing instant health care assistance and significantly reducing the extensive rush in the hospitals, caused by the patients with mild disease.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
        },
        {
          Icon: null,
          heading: "Legal Service",
          symbol: "",
          description: "This solution has the potential for being transformed in such a way so that it can be used as a legal advisor and for effectively finding a trustworthy lawyer to provide you appropriate consultancy for your specific complex case, and accordingly suggest you strategy and measures for your case proceedings.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:2
        },
        {
          Icon: null,
          heading: "Collaborative Approach",
          symbol: "",
          description: "We work closely with your team, fostering knowledge exchange and a shared passion for AI advancement.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:1
          
        },
        {
          Icon: null,
          heading: "Education",
          symbol: "",
          description: "This solution can be tweaked for providing the help to students, by providing an efficient chatbot assistant which can effectively answer the students queries and make their study time more productive by providing a dependable solution that reduces their time spent on research for finding a factually correct answer. Also can help students find a helpful tutor to assist them with their confusion.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:1
        },
        {
          Icon: null,
          heading: "Banking and Finance",
          symbol: "",
          description: "The Banking and Finance sector can also be benefitted by deploying this automated solution for their business task. This AI assistant can deliver promising and prompt support to the customer queries related to bank statements, transactions, or any other query they might have; significantly reducing the need for visiting banks.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan:1
        },
      ],
      btnText: "",
    },
  ];
  
  return (
   
      <>
      <SubnavBar title='Case Studies' navItems={navItems}/> 
      <CaseStudyBanner
        heading={banner1Data.heading}
        para1Text={banner1Data.para1Text}
      />
      <CommonDisplayCardsGrid
        data={data}
        gridCols={4}
        headingClassName={text_h2_class}
        gradientBg
      />
      <WhatOurClientSay
        headingText="What Our Customer Has to Say"
        review="“Centrox AI Services has been an invaluable partner in our AI initiatives. Their expertise in [specific AI area, e.g., natural language processing] has helped us develop innovative solutions that have significantly improved our [business outcome]. The team's dedication and ability to deliver results on time and within budget have exceeded our expectations.”"
        name="Dannis Loyed"
        position="CEO DERQ"
      />
  <SimpleIconHeroSection bulletPoints={false} reverse={false} headingText={heroSection1Data.heading} paraText={heroSection1Data.description}/>
  <CommonDisplayCardsGrid  data={data2}/>
  <SimpleIconHeroSection heroClassName='' bgClassName='' bgImage1={imageBG2} bulletPoints={false} reverse={true} headingText={heroSection2Data.heading} paraText={heroSection2Data.description}/>
  <CommonDisplayCardsGrid data={data3} resizeableCardsLayout gridCols={3}/>
  <CommonDisplayCardsGrid data={data4}/>
  <StepperSection data={stepperdata}/>
  <LogosSection data={techStackData}/>
  <CommonDisplayCardsGrid data={data5} />
  <CommonDisplayCardsGrid data={data6} resizeableCardsLayout gridCols={3} />

      <CaseStudyBanner heading='Meta and Centrox Partner to Drive Enterprise Adoption' para1Text='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
      </>
      
  );
};

export default page;
