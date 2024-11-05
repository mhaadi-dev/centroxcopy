import React from "react";
import LandingLayout from "../../layoutPage";
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
const page = () => {
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
  return (
    <LandingLayout subNav>
      <CaseStudyBanner
        heading="Meta and Centrox Partner to Drive Enterprise Adoption"
        para1Text="Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source."
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
  <SimpleIconHeroSection bulletPoints={true} reverse={false} headingText="Meta and Centrox Partner to Drive Enterprise Adoption" paraText="Centrox AI Services has been an invaluable partner in our AI initiatives. Their expertise in [specific AI area, e.g., natural language processing] has helped us develop innovative solutions that have significantly improved our [business outcome]. The team's dedication and ability to deliver results on time and within budget have exceeded our expectations."/>
  <SimpleIconHeroSection bulletPoints={false} reverse={true} headingText="Meta and Centrox Partner to Drive Enterprise Adoption" paraText="Centrox AI Services has been an invaluable partner in our AI initiatives. Their expertise in [specific AI area, e.g., natural language processing] has helped us develop innovative solutions that have significantly improved our [business outcome]. The team's dedication and ability to deliver results on time and within budget have exceeded our expectations."/>
      <CaseStudyBanner heading='Meta and Centrox Partner to Drive Enterprise Adoption' para1Text='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.'/>
    </LandingLayout>
  );
};

export default page;
