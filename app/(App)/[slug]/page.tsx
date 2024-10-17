//@ts-nocheck
import { sanityFetch } from "@/sanity/lib/client";
import dynamic from 'next/dynamic';

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

import LandingLayout from "../layoutPage";
import ChallengesSection from "@/views/ServicePageViews/ChallengesSection";
import BenefitSection from "@/views/ServicePageViews/BenefitSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import Icon from "@/assets/Icon.webp";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";

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
  const { slug } = params;
  console.log("slug is", slug);
  let landingPageData;
  let data;
  try {
    landingPageData = await sanityFetch({
      query: SERVICES_PAGE_QUERY,
      params: { slug },
    });

    if (
      landingPageData &&
      Array.isArray(landingPageData) &&
      landingPageData.length > 0
    ) {
      let obj = landingPageData[0];

      if (obj) {
        const entries = Object.entries(obj);

        const sortedEntries = entries.sort((a, b) => {
          const orderA = a[1]?.order ?? Number.MAX_VALUE;
          const orderB = b[1]?.order ?? Number.MAX_VALUE;
          return orderA - orderB;
        });

        data = sortedEntries;
        console.log("new data is", data[0][1]);
      } else {
        console.log("No valid data found in landingPageData");
      }
    } else {
      console.log("No data received or data is not an array");
    }
  } catch (error) {
    console.error("Error fetching or processing landing page data:", error);
  }
  console.log("data is",data,)


  const benefitsData = [
    {
      icon: Icon,
      heading: "Deeply Integrated",
      description:
        "We meticulously analyze your codebase, data pipelines, and research objectives to create LLMs that seamlessly fit into your existing workflows and infrastructure. This ensures smooth integration and minimizes disruptions.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Optimized for Performance",
      description:
        "We employ advanced techniques like quantization, distillation, and parallelization to ensure maximum efficiency on your hardware, even with large-scale models. This results in faster inference times, reduced costs, and improved user experience.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Adaptable & Scalable",
      description:
        "Your AI needs evolve, and so should your models. We build LLMs that can learn and grow alongside your projects, effortlessly integrating with your existing systems and scaling to handle increasing demands",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Cutting-Edge",
      description:
        "We're on the top of latest advancements in LLM which has made us adept in incorporating the latest research in transformer architectures, RLHF, chain-of-thought prompting, and retrieval-augmented generation (RAG). This ensures your solutions are always at the cutting edge of AI innovation.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];
  const benefitHeaderData={
    tagText:"Benefits",
    headingText:"Tailor-Made LLMs",
    para1Text:"For startups like you, the best foot forward is to customise existing LLMs according to your unique business needs. We collaborate deeply with your team throughout the entire development lifecycle, ensuring your LLM is deeply integrated, optimised, adaptable, and cutting-edge.",
    heading2Text:"Key Features & Benefits"
  }
  const challengesHeaderData={
    tagText:"Challenges",
    headingText:"The Challenge of Generic LLMs",
    para1Text:"Are you pushing the boundaries of what's possible with AI, but pre-trained models are holding you back?",
    para2Text:"You're not alone. Many startups are facing the limitations of generic LLMs:",
  }

  const challengeData = [
    {
      icon: Icon,
      heading: "Domain-Specific Challenges",
      description:
        "Generic models often struggle with industry-specific jargon, terminology, and nuanced context, leading to inaccurate or irrelevant outputs. This can severely impact the user experience and hinder the effectiveness of your AI applications.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Performance Bottlenecks",
      description:
        "Large pre-trained models can be computationally expensive and slow, making them impractical for real-time applications or deployment on resource-constrained environments. This can lead to delays, increased costs, and frustrated users.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Data Scarcity",
      description:
        "Training effective LLMs typically requires vast amounts of high-quality, labeled data, which can be costly and time-consuming to acquire. This can significantly slow down your development process and limit the potential of your AI solutions.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Bias & Fairness",
      description:
        "Pre-trained models can inherit biases from their training data, leading to unfair or discriminatory outputs. This can have serious ethical and legal implications for your business.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          <HeroSection/>
          <LogosCarousel/>
          <CommonDisplayCardsGrid cardsData={challengeData} headerData={challengesHeaderData} includeButton={true} buttonText="Schedule A Discussion" cardsCaption="Centrox AI understands these pain points. We have the expertise to build custom LLMs that overcome these limitations and deliver exceptional results for your specific needs."/>
          <CommonDisplayCardsGrid cardsData={benefitsData} headerData={benefitHeaderData} includeButton={true} buttonText="Book Free Technical Consultation"/>
          <LandingCaseStudySection/>
     
          {data.length>0? data.map((val, index) => {
            
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
                return true && ( <PointsandImagesSection data={val[1]} />);

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
                return true && (
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
                return  false && (
                  <LogosSection
                    heading={val[1]?.heading}
                    description={val[1]?.description}
                    data={val[1]?.data}
                  />
                );
              case "faqsSection":
                return true && (
                  <FaqsSection heading={val[1]?.heading} data={val[1]?.data} />
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
          }):""}
        </main>
      </LandingLayout>
    </div>
  );
}
