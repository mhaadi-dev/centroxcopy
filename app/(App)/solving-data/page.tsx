import { SolvingDataHeroSection } from "@/views/SolvingData/SolvingDataHeroSection";
import LandingLayout from "../layout";
import { LogosCarousel } from "@/views/LogosCarousel";
import { HowWeWorkSection } from "@/views/SolvingData/HowWeWorkSection";
import { Carousal } from "@/views/SolvingData/SolvingDataCarousal";
import { ComprehensiveDataAnnotatoinsSection } from "@/views/SolvingData/ComprehensiveDataAnnotationSection";
import BannerSection from "@/Components/MainPageComponents/Banner";
import Testimonial from "@/views/Testimonial";
import textExtractionImg from "@/public/images/solvingdata/newtextExtaractionImg.webp";
import twodBoudingImg from "@/public/images/solvingdata/new2dBouncingBoxesimg.webp";
import ImageSegmentation from "@/public/images/solvingdata/newimagesegmentionimg.webp";
import RareEventImg from "@/public/images/solvingdata/newrareeventimg.webp";

const CarousalData = [
  {
    title: "Text Extraction",
    description:
      "Our advanced NLP algorithms handles entity recognition, sentiment analysis, and context extraction, utilizing human-in-the-loop approaches to handle diverse datasets.",
    img: textExtractionImg,
  },
  {
    title: "2D Bounding Boxes",
    description:
      "We provide crucial identification and classification of object boundaries, even in complex and cluttered scenes for your AI application.",
    img: twodBoudingImg,
  },
  {
    title: "Image Segmentation",
    description:
      "By application of CNNs and FCNs we ensure that we handle your intricate AI project via segmentation process such as object detection and instance segmentation.",
    img: ImageSegmentation,
  },
  {
    title: "Rare Event Detection",
    description:
      "By focusing on anomalies we enhance the predictive capabilities of your models, enabling early detection of critical events.",
    img: RareEventImg,
  },
];

export default function SolvingData() {
  return (
    <>
      <LandingLayout>
        <SolvingDataHeroSection />
        <LogosCarousel />
        <Carousal data={CarousalData}  style  />
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
