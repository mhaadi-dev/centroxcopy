import IndustryBanner from "@/Components/common/IndustryBanner"
import SectionTag from "@/Components/common/SectionTag"
import { TabCarousel } from "@/Components/common/TabCarousel"

const LandingIndustriesSection = () => {
  return (
    <>
      <section className="w-[90%] sm:w-auto mx-[1.5rem] lg:mx-[15rem] mt-12 "
      aria-label="centrox-industries">

    <SectionTag text="Industries"/>
    <section aria-label="Centrox Industries" className="text-white ">
        <h2 className="font-semibold text-center text-[1.5rem] lg:text-5xl my-4">
        Empowering AI Innovators Across Industries
        </h2>
        <p className="text-center w-full text-[1rem] sm:w-[60%] mx-auto sm:text-[1.5rem]">
        Generative AI and LLMs are transforming industries across the board. 
        Centrox has partnered with companies to deliver impactful LLM solutions in diverse domains.
        </p>
      </section>
     <TabCarousel isGradientCardsLayoutwithImage={true}/>
     <IndustryBanner/>
     
      </section>
    </>
  )
}

export default LandingIndustriesSection
