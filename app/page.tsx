import { Navbar } from "@/Components/Navbar/navbar";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import { LandingAboutUs } from "@/views/LandingAboutUs";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import { sanityFetch } from "@/sanity/lib/client";
import { LANDING_PAGE_QUERY } from "@/sanity/query";
// import { Testimonial } from "@/views/Testimonial";

import { POCS } from "@/views/POCS";

// import WebsiteFooter from "@/Components/common/WebsiteFooter";
// import  BannerSection  from "@/Components/MainPageComponents/Banner";
import dynamic from "next/dynamic";
import useScrollToElement from "@/deploy/hooks/useScrollToElement";
import Image from "next/image";
import { Button } from "@/Components/Button.js/button";
import LandingBlogSection from "@/views/LandingPageViews/LandingBlogSection";
import LandingSolutionsSection from "@/views/LandingPageViews/LandingSolutionsSection";
import LandingHeroSection from "@/views/LandingPageViews/LandingHeroSection";
import LandingIndustriesSection from "@/views/LandingPageViews/LandingIndustriesSection";
import LandingServicesSection from "@/views/LandingPageViews/LandingServicesSection";
import LandingFAQSection from "@/views/LandingPageViews/LandingFAQSection";
import LandingContactSection from "@/views/LandingPageViews/LandingContactSection";
import LandingCaseStudySection from "@/views/LandingPageViews/LandingCaseStudySection";
import LandingTestimonialSection from "@/views/LandingPageViews/LandingTestimonialSection";

const WebsiteFooter = dynamic(
  () => import("@/Components/common/WebsiteFooter"),
  { ssr: false }
);

const BannerSection = dynamic(
  () => import("@/Components/MainPageComponents/Banner"),
  { ssr: false }
);

const Testimonial = dynamic(() => import("@/views/Testimonial"), {
  ssr: false,
});

// import useScrollToElement from "@/hooks/useScrollToElement";
const data = [
  {
    img: dummyDisplay,
    description:"Meta4 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 1",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:"Meta2 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 2",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    description:"Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    heading: "Product 3",
    date: "July 17, 2024",
  },
];
export default async function Home() {


  const data: any = await sanityFetch({
    query: LANDING_PAGE_QUERY,
  });

  //  useScrollToElement();

  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden gap-10 max-w-[2500px] mx-auto">
      <Navbar />
      <LandingHeroSection />
      <LogosCarousel />
      <LandingAboutUs />
      <LandingServicesSection/>
      <LandingSolutionsSection/>
      <LandingIndustriesSection/>
      {/* <LandingCaseStudySection/> */}
      <LandingTestimonialSection/>
      {/* <LandingBlogSection/> */}
      <LandingContactSection/>
      <LandingFAQSection/>
      
      {/* <Section3 /> */}
      {/* <POCS />
      <Testimonial />
      <BannerSection /> */}
      <WebsiteFooter />
    </main>
  );
}





