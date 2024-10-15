import { LLmHeroSection } from "@/views/llmchatbot/HeroSection";
import LandingLayout from "../layoutPage";
import { BorderedTextImageSection } from "@/views/llmchatbot/LlmSection4";
import HubSpotForm from "@/Components/common/HubspotForm";
import { Llmsection3 } from "@/views/llmchatbot/LlmSection3";
import { OurWorkCustomChatbot } from "@/views/CustomChatbot/OurWork";
import Testimonial from "@/views/Testimonial";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";
import icon from "@/public/images/llmchatbot/sectionIcon.svg";

import FineTuningExpertiseImg from "@/public/images/llmchatbot/corefinetuning.webp";
import RetreivalImg from "@/public/images/llmchatbot/corerage.webp";
import aiAgentImg from "@/public/images/llmchatbot/coreAiagents.webp";
import { LlmSection2 } from "@/views/llmchatbot/LlmSection2";
const BorderedSectionData = [
  {
    title: "Fine-Tuning Expertise",
    description:
      "We choose open-source foundation models and tailor them precisely to your specific use-cases.",
    img: FineTuningExpertiseImg,
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    description:
      "We can augment existing LLMs with  your proprietary knowledge base enabling them to respond more intelligently to your business-specific queries.",
    img: RetreivalImg,
  },
  {
    title: "AI Agents",
    description:
      "We can build AI agents for you that fetch real time data from the internet and answer your user queries with the latest information.",
    img: aiAgentImg,
  },
];

const columendSectoinData = [
  {
    icon: icon,
    description:
      " Unsure which model best suits their use case?",
  },
  {
    icon: icon,
    description:
      " Struggle with data preprocessing",
  },
  {
    icon: icon,
    description:
      " Need help with fine-tuning, overfitting, or catastrophic forgetting etc.",
  },
  {
    icon: icon,
    description:
      " Need support in fine tuning",
  },
];
export default function Page() {
  return (
    <main>
      <LandingLayout>
        <LLmHeroSection />
        <LlmSection2/>
        {/* <ColumnedImageSection  data={columendSectoinData}
        description ="We facilitate them in every step of the development process to bring their optimal product to market faster."
        heading="We tag team with AI startups who have the vision but are:"
        
        /> */}
        <Llmsection3 />
        <BorderedTextImageSection
          heading="Our Core Offerings"
          data={BorderedSectionData}
          background={true}
        />
        <div
          style={{
            backgroundImage:
              "radial-gradient(60.34% 71.45% at 60.94% -3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000000",
          }}
          className="h-full "
        >
          <OurWorkCustomChatbot />
        </div>
        <Testimonial />

        <ReadytoBuildChatbot />
        {/* <div className="bg-white">

        <HubSpotForm/>

    </div> */}
      </LandingLayout>
    </main>
  );
}
