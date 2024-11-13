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
    heading:"Pocketmate.ai your reliable mental health support; ensuring emotional contentment whenever or wherever you need it.",
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
  const data = [
    {
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
  <CommonDisplayCardsGrid data={data2}/>
  <SimpleIconHeroSection bulletPoints={false} reverse={true} headingText={heroSection2Data.heading} paraText={heroSection2Data.description}/>
      <CaseStudyBanner heading='Meta and Centrox Partner to Drive Enterprise Adoption' para1Text='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
      </>
      
  );
};

export default page;
