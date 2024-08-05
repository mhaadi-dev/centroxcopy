import { LLmHeroSection } from "@/views/llmchatbot/HeroSection";
import LandingLayout from "../layoutPage";
import { LlmSection2 } from "@/views/llmchatbot/LlmSection2";
import { LLmSection4 } from "@/views/llmchatbot/LlmSection4";
import HubSpotForm from "@/Components/common/HubspotForm";
import { Llmsection3 } from "@/views/llmchatbot/LlmSection3";
import { OurWorkCustomChatbot } from "@/views/CustomChatbot/OurWork";
import Testimonial from "@/views/Testimonial";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";

export default function Page() {
  return (
    <main>
      <LandingLayout>
        <LLmHeroSection />
        <LlmSection2 />
        <Llmsection3 />
        <LLmSection4 />
        <div
          style={{
            backgroundImage: "radial-gradient(60.34% 71.45% at 60.94% -3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000000"
          }}
        className="h-full " >
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
