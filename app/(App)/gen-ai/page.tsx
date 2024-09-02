import { GenAiHeroSectoin } from "@/views/genai/HeroSection";
import LandingLayout from "../layoutPage";
import { StepperSection } from "@/sections/StepperSection";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import FineTuningExpertiseImg from "@/public/images/llmchatbot/corefinetuning.webp";
import RetreivalImg from "@/public/images/llmchatbot/corerage.webp";
import aiAgentImg from "@/public/images/llmchatbot/coreAiagents.webp";
import { BorderedTextImageSection } from "@/views/llmchatbot/LlmSection4";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import Testimonial from "@/views/Testimonial";
import { ChatbotJourneySection } from "@/views/CustomChatbot/ChatbotJourney";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";
import { FaqsSection } from "@/sections/FaqsSection";
import { VerticalMultipleImagesSection } from "@/sections/VerticalMultipleImagesSection";
import fineTuningImg from "@/public/images/llmchatbot/finedTuning.webp"
import annotatedDataImg from "@/public/images/llmchatbot/annotatedData.webp"
import results from "@/public/images/llmchatbot/results.webp"


import pytorchIcon from "@/public/images/genAi/pytorchIcon.svg"
import tensorflow from "@/public/images/genAi/tensorflow.svg"
import hugginfaceIcon from "@/public/images/genAi/hugginfaceicon.svg"
import kerasIcon from "@/public/images/genAi/kerasIcon.svg"

import openCvIcon from "@/public/images/genAi/opencvicon.svg"

import awsIcon from "@/public/images/genAi/awsicon.svg"

import azureIcon from "@/public/images/genAi/azureIcon.svg"
import googleCLoudIcon from "@/public/images/genAi/googlecloudicon.svg"
import kubernetisIcon from "@/public/images/genAi/kubernetisIcon.svg"
import dockerIcon from "@/public/images/genAi/dockericon.svg"
import mlFlowICon from "@/public/images/genAi/mlFlowIcon.svg"
import weightIcon from "@/public/images/genAi/weightIcons.svg"
import { LogosSection } from "@/sections/LogosSection";







const BorderedSectionData = [
  {
    title: "Transformers",
    description:
      "We're not content with just fine-tuning pre-trained language models. We dig into the attention mechanisms, exploring novel architectures like sparse attention for efficiency. We experiment with different training objectives, from masked language modeling to reinforcement learning, to tailor the model's behavior to your specific task.  ",
    img: FineTuningExpertiseImg,
  },
  {
    title: "Generative Adversarial Networks (GANs)",
    description:
      "GANs are fascinating, but notoriously tricky to train. We have a deep understanding of their inner workings, using techniques like Wasserstein loss and spectral normalization to stabilize training and improve the quality of generated samples. We're constantly exploring new GAN architectures like StyleGAN and BigGAN to achieve even more impressive results.",
    img: RetreivalImg,
  },
  {
    title: "Diffusion Models",
    description:
      "These models are relatively new, but they've already shown incredible promise. We're actively researching ways to improve their sampling efficiency and controllability. We're excited about the potential of diffusion models for generating not just images, but also audio, video, and 3D content.",
    img: aiAgentImg,
  },
];

const PointsImageData = [
  {
    title: "Expertise",
    description:
      "Access to a team of world-class AI researchers and engineers with deep knowledge of Generative AI.",
  },
  {
    title: "Customization",
    description:
      "Tailored solutions that address your specific challenges and unlock the full potential of your data.",
  },
  {
    title: "Performance",
    description:
      "State-of-the-art models optimized for accuracy, efficiency, and scalability. ",
  },
  {
    title: "Collaboration",
    description:
      "A true research partnership focused on achieving tangible outcomes.",
  },
];

const faqsData = [
  {
    title: "What types of Generative AI models do you specialize in?",
    text: "We specialize in a variety of Generative AI models, including Transformers (like GPT), GANs, and diffusion models. Our expertise spans both text and image generation, as well as other modalities.",
    active: false,
  },
  {
    title:
      "Can you help us develop a custom Generative AI model for our specific use case?",
    text: "Absolutely! We have extensive experience in designing and building custom Generative AI models tailored to the unique needs of our clients.",
    active: false,
  },
  {
    title: "Do you offer ongoing support and maintenance for deployed models?",
    text: "Yes, we provide ongoing support and maintenance to ensure your model continues to perform optimally and adapt to changing requirements.",
    active: false,
  },
  {
    title: "What kind of data do you need to train a Generative AI model?",
    text: "The type and amount of data required depend on the specific use case and model architecture. We'll work with you to assess your data and determine the best approach for training.",
    active: false,
  },
  {
    title: "How long does it take to develop and deploy a Generative AI model?",
    text: "The timeline varies depending on the complexity of the project and the availability of data. We'll provide you with a detailed project plan and timeline during our initial consultation.",
    active: false,
  },
  {
    title:
      "Can you help us integrate a Generative AI model into our existing systems?",
    text: "Yes, we have experience integrating Generative AI models into various platforms and workflows. We'll work with you to ensure a seamless integration process.",
    active: false,
  },
];


// const stepperData =
export default function Page() {
  return (
    <>
    asd
      {/* <LandingLayout>
        <GenAiHeroSectoin />
        <VerticalMultipleImagesSection
        description="Making the most out of generative AI requires more than just deploying off-the-shelf models. Pre-trained models often fall short when applied to novel tasks or domain-specific data. The true power of Generative AI lies in customization and optimization"
        imgLeft={annotatedDataImg}    
        imgCenter={fineTuningImg}
        imgRight={results}

        />
        <StepperSection
          heading=" Our Outcome Focused Process"
          description="We understand the intricacies of Transformers, GANs, and diffusion models. We collaborate closely with your team to design, train, and deploy models that solve your unique challenges and explore new possibilities. "
          data={stepperData}
          img={img}
          button=" Book 1:1 Session"
        />

        <BorderedTextImageSection
          heading="Gen AI Architectures We Leverage"
          data={BorderedSectionData}
          background={true}
          topButton="Book FREE Technical Consultation"
        />
        <LogosSection/>

        <PointsandImagesSection
          reverse
          mainHeading="Why Work With Us?"
          data={PointsImageData}
          button="Book FREE Strategy Call"
        />
        {/* <StepperSection 
        /> */}

        {/* <ReadytoBuildChatbot
          heading="Let's Build the Future of Generative AI Together"
          description="If you're serious about pushing the boundaries of Generative AI, we're ready to collaborate. Schedule a FREE technical consultation with our team to discuss your project and explore the possibilities."
          btnText="Book Your 1:1 Session"
        />

        <Testimonial />

        <FaqsSection heading="We're often asked" faqsData={faqsData} /> */}
    </>
  );
}
