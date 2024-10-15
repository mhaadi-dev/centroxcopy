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
  return (
    <div>
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          {data.length>0? data.map((val, index) => {
            
            switch (val[0]) {
              case "logoCarousal":
                return val[1]?.includeSection && (<LogosCarousel data={val[1]?.content} />);
              case "heroSection":
                return  val[1]?.includeSection && (
                  <HeroSection
                    heading={val[1]?.heading}
                    includeDots={val[1]?.includeDots}
                    description={val[1]?.description}
                    btnText={val[1]?.btnText}
                    reverse={val[1]?.reverse}
                    img={val[1]?.img}
                  />) 
                
              case "benefitsSection":
                return val[1]?.includeSection && (
                  <BenefitsSection
                    mainDescription={val[1]?.description}
                    mainHeading={val[1]?.heading}
                    data={val[1]?.data}
                  />
                );
              case "customCarousal":
                return val[1]?.includeSection &&  (
                  <CustomCarousalSection
                    data={val[1]?.data}
                    heading={val[1]?.heading}
                  />
                );
              case "whyUsSection":
                return val[1]?.includeSection && ( <PointsandImagesSection data={val[1]} />);

              case "verticalCarouselSection":
                return val[1]?.includeSection && (<OppositeCarousal data={val[1]} />);
              case "hoverAnimationSection":
                return val[1]?.includeSection && (
                  <HoveredTextSection
                    heading={val[1]?.heading}
                    data={val[1]?.data}
                  />
                );
              case "stepperSection":
                return val[1]?.includeSection && (
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
                return val[1]?.includeSection && (
                  <CaseStudiesCarousalSection
                    heading={val[1]?.heading}
                    description={val[1]?.description}
                    data={val[1]?.data}
                  />
                );
              case "customerTestimonialSection":
                return val[1]?.includeSection && (<CustomerTestimonials data={val[1]?.testimonials} />);
              case "productsSection":
                return val[1].includeSection && (
                  <ProductsCarousalSection
                    heading={val[1]?.heading}
                    data={val[1]?.products}
                  />
                );

              case "techStackSection":
                return  val[1]?.includeSection && (
                  <LogosSection
                    heading={val[1]?.heading}
                    description={val[1]?.description}
                    data={val[1]?.data}
                  />
                );
              case "faqsSection":
                return val[1]?.includeSection && (
                  <FaqsSection heading={val[1]?.heading} data={val[1]?.data} />
                );
              case "bannerSection":
                return  val[1]?.includeSection &&(
                  <BannerSection
                    heading={val[1]?.heading}
                    btnText={val[1]?.btnText}
                    bgImage={val[1]?.bgImage}
                  />
                );
              case "contactUsSection":
                return  val[1]?.includeSection &&(
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
