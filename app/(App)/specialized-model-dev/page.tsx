import { BaseHeroSection } from "@/views/CustomChatbot/HeroSection";
import LandingLayout from "../layout";
import img from "@/public/images/customchatbot/updatedHero.webp";
import { BorderedTextImageSection } from "@/views/llmchatbot/LlmSection4";
import FineTuningExpertiseImg from "@/public/images/llmchatbot/corefinetuning.webp";
import RetreivalImg from "@/public/images/llmchatbot/corerage.webp";
import aiAgentImg from "@/public/images/llmchatbot/coreAiagents.webp";
import { ComputerVisoinSection4 } from "@/views/ComputerVisionDevelopment/Section4";
import { ComputerVisionSection5 } from "@/views/ComputerVisionDevelopment/Section5";
import { ComputerVisionHeroSection } from "@/views/ComputerVisionDevelopment/herosection";
import { ComputerVisionSection2 } from "@/views/ComputerVisionDevelopment/Section2";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";
import checkIcon from "@/public/images/datavalidation/CheckCircle.svg";

const BorderedSectionData = [
  {
    title: "Image Recognition & Classification",
    description:
      "From classic CNNs to advanced transformer-based architectures, we fine-tune models for desired accuracy on your datasets.",
    img: FineTuningExpertiseImg,
  },
  {
    title: "Object Detection & Tracking",
    description:
      "We use object detection frameworks like YOLO, Faster R-CNN, or DETR for precise real-time tracking, even in complex environments.",
    img: aiAgentImg,
  },
  {
    title: "Image Generation & Enhancement:",
    description:
      "We've worked on GANs, VAEs, and diffusion models to generate realistic images from text prompts, enhance image quality, or perform style transfer.",
    img: RetreivalImg,
  },
];
const section6Data = [
  {
    title: "Proven Expertise",
    description:
      "Our team possesses deep knowledge of computer vision and its applications.",
  },
  {
    title: "Custom Solutions",
    description:
      "We build CV models tailored to your unique needs and challenges.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with your team, fostering knowledge exchange and a shared passion for AI.",
  },
  {
    title: "Results-Oriented",
    description:
      "We're committed to delivering solutions that solve real-world problems and drive business growth.",
  },
];

const PointsData = [
  {
    icon: checkIcon,
    title: "",
    description:
      "Automate complex tasks and processes to improve efficiency and productivity.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Extract valuable insights from your data to inform strategic decision-making.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Enhance customer experiences with personalized interactions and intelligent recommendations.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Drive innovation and gain a competitive edge in your industry.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Solve real-world problems with AI solutions that deliver measurable results.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Implement ongoing updates to maintain data quality throughout the process.",
  },
];

const PointsData2 = [
  {
    icon: "",
    title: "Proven Expertise",
    description:
      "Automate complex tasks and processes to improve efficiency and productivity.",
  },
  {
    title: "Custom Solutions",
    icon: "",

    description:
      "Extract valuable insights from your data to inform strategic decision-making.",
  },
  {
    title: "Collaborative Approach",
    icon: "",

    description:
      "Enhance customer experiences with personalized interactions and intelligent recommendations.",
  },
  {
    title: "Results-Oriented",
    icon: "",

    description:
      "Drive innovation and gain a competitive edge in your industry.",
  },
];

export default function Page() {
  return (
    <main>
      <LandingLayout>
        <BaseHeroSection
          heading="Drive Innovation With Specialized AI Models"
          description="We Engineer Specialized AI Models in Computer Vision (CV) and Natural Language Processing (NLP)"
          btnText="Book 1:1 Session"
          img={img}
        />
        <ComputerVisionSection2 />
        <BorderedTextImageSection
          heading="Deep Dive into CV Expertise"
          data={BorderedSectionData}
          subHeading="We have build across the entire spectrum of computer vision:"
        />
        <PointsandImagesSection
          data={PointsData}
          heading="What You’ll Get"
          description="Our specialized AI model enable your business to:"
          button="Set A Free Consultation"
          bgShape
        />
        <ComputerVisoinSection4 />
        <ComputerVisionSection5 />
        <PointsandImagesSection
          data={section6Data}
          heading=" Why Work With Us?"
          button="Book Free 1:1 Session"
          reverse

          // projectId:"",
          // dataset:"production",
          // apiVersion:"2022-03-07",
          // useCdn:true
        />

        <ReadytoBuildChatbot
          reverse
          heading=" Take the Next Steps"
          description="Schedule a technical deep-dive with our team to discuss your vision and explore how we can collaborate to achieve your goals."
          btnText="Lets Talk"
        />
      </LandingLayout>
    </main>
  );
}
