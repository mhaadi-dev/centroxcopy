import { SolvingDataHeroSection } from "@/views/SolvingData/SolvingDataHeroSection";
import LandingLayout from "../layoutPage";
import { LogosCarousel } from "@/views/LogosCarousel";
import { HowWeWorkSection } from "@/views/SolvingData/HowWeWorkSection";
import { Carousal } from "@/views/SolvingData/SolvingDataCarousal";
import { ComprehensiveDataAnnotatoinsSection } from "@/views/SolvingData/ComprehensiveDataAnnotationSection";
import BannerSection from "@/Components/MainPageComponents/Banner";
import Testimonial from "@/views/Testimonial";

export default function SolvingData() {
  return (
    <>
      <LandingLayout>
        <SolvingDataHeroSection />
        <LogosCarousel />
        <Carousal />
        <section
        //   style={{
        //     background:
        //       "radial-gradient(49.4% 34.2% at 51.69% 53.16%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 80%), #060606",
        //       backgroundRepeat:'no-repeat'

        //   }}
         >
          <HowWeWorkSection />
          <ComprehensiveDataAnnotatoinsSection />
        </section>
        <Testimonial />
        <BannerSection />
      </LandingLayout>
    </>
  );
}
