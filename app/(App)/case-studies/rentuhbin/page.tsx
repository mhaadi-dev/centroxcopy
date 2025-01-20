import React from "react";

import CaseStudyBanner from "@/Components/common/CaseStudyBanner";

import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";

import classNames, { text_h2_class } from "@/helpers/common";
import WhatOurClientSay from "@/Components/common/WhatOurClientSay";

import SimpleIconHeroSection from "@/Components/common/SimpleIconHeroSection";
import { StepperSection } from "@/sections/StepperSection";
import { LogosSection } from "@/sections/LogosSection";
import aws from "@/assets/awslogo.webp";
import rightsidebg from "@/assets/rightsidebg.svg";
import Icon10 from "@/assets/Icon-13.svg";
import reactnative from "@/assets/casestudies/ReactNative.svg";
import ic1 from "@/assets/casestudies/ArrowsInSimple.svg";
import ic2 from "@/assets/casestudies/ArrowsClockwise.svg";
import js from "@/assets/casestudies/JS.svg";
import nextjs from "@/assets/casestudies/next-js 2.svg";
import fast from "@/assets/casestudies/FAst.svg";
import fireauth from "@/assets/casestudies/FireAuth.svg";
import fire from "@/assets/casestudies/Fire.svg";
import nestjs from "@/assets/casestudies/nestjs 1.svg";
import dumpster from "@/assets/casestudies/Trash.svg";
import damage from "@/assets/casestudies/ImageBroken.svg";
import currency from "@/assets/casestudies/CurrencyCircleDollar.svg";
import discount from "@/assets/casestudies/SealPercent.svg";
import star from "@/assets/casestudies/Star.svg";
import headcircuit from "@/assets/casestudies/HeadCircuit.svg";
import icon11 from "@/assets/Icon-11.svg";
import detective from "@/assets/casestudies/Detective.svg";
import yolo from "@/assets/casestudies/Yolo.svg";
import tailwind from "@/assets/casestudies/Tailwibdcss.svg";
import express from "@/assets/casestudies/Express.svg";
import mongo from "@/assets/casestudies/Mongo.svg";
import gitlab from "@/assets/casestudies/GitLabCLI.svg";
import stripe from "@/assets/casestudies/Stripe.svg";
import sentry from "@/assets/casestudies/Sentry.svg";

import bento1 from "@/assets/casestudies/Dumpster booking.svg";
import bento2 from "@/assets/casestudies/Chat.svg";
import bento3 from "@/assets/casestudies/Complaint.svg";
import multilang from "@/assets/casestudies/Mult-Language.svg";
import enhancedassit from "@/assets/casestudies/Assistance.svg";

const page = ({ params }: { params: { slug: string } }) => {
  const banner1Data = {
    heading: "Optimizing dumpster placement using image recognition.",
    para1Text:
      "Our solution ensures convenient, efficient, and eco-friendly waste disposal while prioritizing user satisfaction and reliability. Some of the major benefits this tool delivers are explained below."
  };
  const heroSection1Data = {
    heading: "The Problem",
    icon: "",
    description:
      "For today's changing time and fast paced world, we need a solution that can offer instant assistance without extra hassle. The large waste collected after moving your place,construction , or maintenance can be difficult to dispose of, and finding a dumpster during the process can be a real struggle as your other priority task might get affected. So this creates a need of having an online application based platform that joins clients needing the dumpster service with a relevant dumpster- enabling easy booking, tracking, and chat with a variety of dumpsters options. By providing reliable eco-friendly waste disposal, it allows users to focus on performing other tasks efficiently."
  };
  const heroSection2Data = {
    heading: "Research and Analysis",
    icon: "",
    description:
      "After understanding and narrowing down the key requirements for the dumpster service, our experts did rigorous research to find the best possible and the most optimized approach for the given task. Our experts suggested having a separate app for both the consumers and service providers which will be administered by the admin panel. Where the customers end app will have the access to scheduling the delivery or pickup, tracking, and managing payment, the service providers app will be able to confirm the service along with being able to  market them for attracting the wide range of customer, while the admin panel will exercise its authority to monitor the order; its detail, status, and payments, offer support, along with managing taxes, and has the capability to block/unblock based on received feedback."
  };

  const data = [
    {
      headerData: {
        tagText: "",
        headingText: "Results ",
        para1Text:
          "The impact that our solution delivers is far reaching an extremely benefiting.",
        para2Text: "",
        heading2Text: ""
      },
      data: [
        {
          Icon: null,
          heading: "30.4",
          symbol: "%",
          description: "Reduced placement errors.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          Icon: null,
          heading: "50.55",
          symbol: "%",
          description: "reducing communication latency.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        }
      ]
    }
  ];
  const data2 = [
    {
      headerData: {
        tagText: "Requirements",
        headingText: "",
        para1Text:
          "The Rentuhbin aims to ensure reliable and eco-friendly waste disposal, reducing the need for extra hassle and efficiently saving time and efforts. The key features expected from this solution are as follows.",
        para2Text: "",
        heading2Text: ""
      },
      data: [
        {
          icon: dumpster,
          heading: "Reliable Dumpster Booking App",
          alt: "Reliable Dumpster Booking App",
          symbol: "",
          description:
            "The app provides convenience to users by offering a reliable alternative for booking a dumpster. Users can book or rent a dumpster at their desired location without the hassle of searching manually. Additionally, it enables communication between consumers and service providers within the app.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: damage,
          heading: "Damage Claim Center",
          alt: "Damage Claim Center",
          symbol: "",
          description:
            "To ensure a satisfying experience for both consumers and service providers, the app includes a complaint and damage claim center. This feature provides a sense of security and support for all parties involved.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: currency,
          heading: "2$ Tool",
          alt: "2$ Tool",
          symbol: "",
          description:
            "This AI-enabled tool offers prompt suggestions for booking a relevant dumpster suitable for the type of dump identified in a picture captured within the app. This ensures users book the right dumpster for their needs.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: ic1,
          heading: "Placement Tool",
          alt: "Placement Tool",
          symbol: "",
          description:
            "This AI-powered tool allows users to take a picture of the intended dumpster placement location. It analyzes the dimensions of the space and cross-checks it with placement rules and regulations, providing a response on whether the location is appropriate for placing a dumpster.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        }
      ]
    }
  ];

  const data3 = [
    {
      headerData: {
        tagText: "",
        headingText: "Benefits of Our Approach",
        para1Text:
          "Our solution ensures convenient, efficient, and eco-friendly waste disposal while prioritizing user satisfaction and reliability. Some of the major benefits this tool delivers are:",
        para2Text: "",
        heading2Text: ""
      },
      data: [
        {
          icon: null,
          heading: "Convenient and Reliable Booking",
          alt: "Convenient and Reliable Booking",
          symbol: "",
          description:
            "This app provides a highly convenient way to book the size-appropriate dumpster of your choice. All service providers are verified, making it a reliable solution for potential users.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 2,
          bentoImage: bento1
        },
        {
          icon: discount,
          heading: "Discounts and Referrals",
          alt: "Discounts and Referrals",
          symbol: "",
          description:
            "The app helps manage expenses by offering discounts to users who meet certain criteria. This allows users to book or rent dumpsters at reasonable rates, making waste management more affordable.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 1
        },
        {
          icon: star,
          heading: "Rating and Reviews",
          alt: "Rating and Reviews",
          symbol: "",
          description:
            "Consumers and service providers can rate and review each other based on their experiences. This feedback helps service providers improve their quality and guides users in selecting the best dumpster options.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 1
        },
        {
          icon: null,
          heading: "Chat with Service Providers",
          alt: "Chat with Service Providers",
          symbol: "",
          description:
            "The app enables consumers and service providers to communicate safely within the app. This feature promotes active collaboration and keeps both parties updated throughout the process.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 2,
          bentoImage: bento2
        },
        {
          icon: null,
          heading: "Complaint Center and Damage Claims",
          alt: "Complaint Center and Damage Claims",
          symbol: "",
          description:
            "A dedicated complaint center and damage claim feature ensure safety and accountability. This allows users and service providers to address mishaps or potential fraud effectively.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 2,
          bentoImage: bento3
        },
        {
          icon: headcircuit,
          heading: "AI-Enabled Tool",
          alt: "AI-Enabled Tool",
          symbol: "",
          description:
            "The app integrates AI to efficiently suggest the most suitable dumpster size based on the collected waste. It also ensures that dumpsters fit appropriately in desired locations without violating placement regulations.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 1
        }
      ]
    }
  ];

  const data4 = [
    {
      headerData: {
        tagText: "",
        headingText: "Challenges Encountered",
        para1Text:
          "Rentuhbin’s clients faced several pressing challenges that needed innovative solutions for efficient waste management.",
        para2Text: "",
        heading2Text: ""
      },
      data: [
        {
          icon: ic1,
          heading: "Accurate Sizing and Placement",
          alt: "Accurate Sizing and Placement",
          symbol: "",
          description:
            "Consumers struggled to select the correct dumpster size due to inaccurate system data, leading to inefficient placements. This resulted in consuming extra time and effort for users.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: icon11,
          heading: "Ineffective Spatial Data Utilization",
          alt: "Ineffective Spatial Data Utilization",
          symbol: "",
          description:
            "Traditional dumpster placements in urban settings were rigid and not data-driven. Misaligned placements caused garbage trucks to take longer routes, increasing fuel consumption and operational costs.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: ic2,
          heading: "Synchronization Gaps",
          alt: "Synchronization Gaps",
          symbol: "",
          description:
            "A lack of real-time communication between consumers and providers led to miscommunication and delays. This ultimately resulted in additional waiting time for dumpster arrivals.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        },
        {
          icon: detective,
          heading: "Complex Object Detection",
          alt: "Complex Object Detection",
          symbol: "",
          description:
            "Variations in dumpster scale and orientation created challenges in accurately detecting placements within dynamic urban environments. This raised the need to repeatedly book appropriate dumpsters.",
          className: "h-full !rounded-3xl w-full",
          linkText: ""
        }
      ]
    }
  ];

  const data5 = [
    {
      headerData: {
        tagText: "",
        headingText: "Future prospects",
        para1Text: "Centrox’s AI solution is engineered for future growth:",
        para2Text: "",
        heading2Text: ""
      },
      data: [
        {
          Icon: null,
          heading: "Multi-Language and Cultural Support",
          alt: "Multi-Language and Cultural Support",
          symbol: "",
          description:
            "Our ongoing developments aim to enable support for multiple languages and cultural contexts, broadening Rentuhbin’s market reach, ultimately bridging the communication gap alongside delivering the dumpster service; making it more inclusive for people all around the globe.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 2,
          bentoImage: multilang,
          reverse: false
        },
        {
          Icon: null,
          heading: "Enhanced Assistance",
          alt: "Enhanced Assistance",
          symbol: "",
          description:
            "Future iterations of our AI will incorporate reinforcement learning techniques, enabling real-time feedback loops to improve model performance during actual deployments. This evolution will allow the system to assist service providers by offering predictive analytics based on client interactions and behavioral trends.",
          className: "h-full !rounded-3xl w-full",
          linkText: "",
          colSpan: 2,
          bentoImage: enhancedassit,
          reverse: false
        }
      ],
      centerAlign: true
    }
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
    description:
      "Our structured approach ensures a quality solution, developed through a series of focused steps designed to meet your unique needs.",
    data: [
      {
        title: "Identify the Problem",
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
                text: "As soon as you choose to collaborate with us, we instantly hold sessions with you to understand your vision, expectations, and goals. This helps us align our efforts to deliver the best possible results."
              }
            ]
          }
        ],
        status: false
      },
      {
        title: "Gather Information",
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
                text: "After closely collaborating with you, our team begins gathering the relevant information and datasets. This step ensures the integrated AI tool can deliver the desired outcomes."
              }
            ]
          }
        ],
        status: false
      },
      {
        title: "Research",
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
                text: "We conduct detailed research and explore various approaches and techniques to develop a solution that is both convenient and optimized for the user."
              }
            ]
          }
        ],
        status: false
      },
      {
        title: "Brainstorm Solutions",
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
                text: "Our experts actively collaborate to analyze the research and gathered data, brainstorming to architect the most optimized and appropriate approach to bring your solution to life."
              }
            ]
          }
        ],
        status: false
      },
      {
        title: "Prototype",
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
                text: "We bring your vision to reality by implementing the idea and developing a prototype. This prototype demonstrates the expected functionality and convenience of the final solution."
              }
            ]
          }
        ],
        status: false
      },
      {
        title: "Test",
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
                text: "In the final phase, we test the prototype thoroughly to ensure it meets the given requirements. This assures both developers and stakeholders of its performance in real-world scenarios."
              }
            ]
          }
        ],
        status: false
      }
    ],
    btnText: ""
  };

  const techStackData = [
    {
      title: "Frontend Development (Mobile)",
      content: [
        {
          alt: "React Native",
          caption: "React Native",
          img: reactnative
        },
        {
          alt: "Javascript",
          caption: "Javascript",
          img: js
        },
        {
          alt: "SAM/FAST SAM",
          caption: "SAM/FAST SAM",
          img: fast
        },
        {
          alt: "YOLO",
          caption: "YOLO",
          img: yolo
        }
      ]
    },
    {
      title: "Frontend Development (Web)",
      content: [
        {
          alt: "Next.js",
          caption: "Next.js",
          img: nextjs
        },
        {
          alt: "Tailwind CSS",
          caption: "Tailwind CSS",
          img: tailwind
        },
        {
          alt: "React Data Tables",
          caption: "React Data Tables",
          img: reactnative
        },
        {
          alt: "Firebase Auth",
          caption: "Firebase Auth",
          img: fireauth
        }
      ]
    },
    {
      title: "Backend Development",
      content: [
        {
          alt: "NestJS",
          caption: "NestJS",
          img: nestjs
        },
        {
          alt: "Javascript",
          caption: "Javascript",
          img: js
        },
        {
          alt: "Express",
          caption: "Express",
          img: express
        },
        {
          alt: "MongoDB",
          caption: "MongoDB",
          img: mongo
        }
      ]
    },
    {
      title: "DevOps",
      content: [
        {
          alt: "AWS (S3, EC2)",
          caption: "AWS (S3, EC2)",
          img: aws
        },
        {
          alt: "GitLab CI",
          caption: "GitLab CI",
          img: gitlab
        }
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        {
          alt: "Stripe",
          caption: "Stripe",
          img: stripe
        },
        {
          alt: "Sentry",
          caption: "Sentry",
          img: sentry
        },
        {
          alt: "Firebase",
          caption: "Firebase",
          img: fire
        }
      ]
    }
  ];

  return (
    <>
      {/* <SubnavBar imageLink="/case-studies" title='Case Studies' navItems={navItems}/>  */}
      <CaseStudyBanner
        heading={banner1Data.heading}
        para1Text={banner1Data.para1Text}
      />
      <CommonDisplayCardsGrid
        data={data}
        gridCols={2}
        headingClassName={text_h2_class}
        gradientBg
      />
      <WhatOurClientSay
        headingText="What Our Customer Has to Say"
        review="The platform has revolutionized how we manage waste disposal operations. A key highlight was the successful deployment of the SAM (Segment Anything Model), which brought a whole new level of precision and efficiency to the system. this platform ensures that tasks like identifying, categorizing, and managing dumpster services are handled seamlessly.
The combination of AI-powered capabilities with dedicated apps for customers and service providers, alongside a centralized admin panel, made scheduling pickups, tracking, and payment management effortless. The SAM model has significantly enhanced the platform's ability to adapt to user needs, making the entire process smoother and more reliable."
        name="Donny Cooper"
        position="CEO Rentuhbin"
      />
      <SimpleIconHeroSection
        bulletPoints={false}
        reverse={false}
        headingText={heroSection1Data.heading}
        paraText={heroSection1Data.description}
      />
      <CommonDisplayCardsGrid data={data2} />
      <SimpleIconHeroSection
        heroClassName=""
        bgClassName="z-0 absolute pr-4 lg:pr-0 lg:w-1/3 object-contain  lg:object-cover"
        bgImage1={rightsidebg}
        bulletPoints={false}
        reverse={true}
        headingText={heroSection2Data.heading}
        paraText={heroSection2Data.description}
      />
      <CommonDisplayCardsGrid data={data3} resizeableCardsLayout gridCols={3} />
      <CommonDisplayCardsGrid data={data4} />
      <StepperSection data={stepperdata} />
      <LogosSection data={techStackData} />
      <CommonDisplayCardsGrid data={data5} resizeableCardsLayout />
    </>
  );
};

export default page;
