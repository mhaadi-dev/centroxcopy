import { CustomChatbotHeroSection } from "@/views/CustomChatbot/HeroSection";
import LandingLayout from "../layoutPage";
import { GenericChatbotCustomChatbox } from "@/views/CustomChatbot/GenericChatbot";
import { OurWorkCustomChatbot } from "@/views/CustomChatbot/OurWork";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";
import { ChatbotJourneySection } from "@/views/CustomChatbot/ChatbotJourney";
import Testimonial from "@/views/Testimonial";

export default function Page (){
  return <>
  <LandingLayout>
    <div className="max-w-[2500px] mx-auto"> 
    <CustomChatbotHeroSection/>
    <GenericChatbotCustomChatbox/>
    <OurWorkCustomChatbot/>
    <ChatbotJourneySection/>
    <Testimonial/>
    <ReadytoBuildChatbot/>
  </div>

  </LandingLayout>
  </>
}