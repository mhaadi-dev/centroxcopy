import LandingLayout from "../layout";
import { GenericChatbotCustomChatbox } from "@/views/CustomChatbot/GenericChatbot";
import { OurWorkCustomChatbot } from "@/views/CustomChatbot/OurWork";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";
import img from "@/public/images/customchatbot/updatedHero.webp";

import { ChatbotJourneySection } from "@/views/CustomChatbot/ChatbotJourney";
import Testimonial from "@/views/Testimonial";
import { BaseHeroSection } from "@/views/CustomChatbot/HeroSection";

export default function Page() {
  return (
    <>
      <LandingLayout>
        <div className="max-w-[2500px] mx-auto">
          <BaseHeroSection
            heading="Be Available For Your Customers 24/7, 365"
            description=" Reduce churn and maximize retention with a chatbot that knows your
            business as well as you do, ready to assist your customers whenever
            they need it."
            btnText="Book A Call Now"
            img={img}

          />
          <GenericChatbotCustomChatbox />
          <OurWorkCustomChatbot />
          <ChatbotJourneySection />
          <Testimonial />
          <ReadytoBuildChatbot />
        </div>
      </LandingLayout>
    </>
  );
}
