import IndustryBanner from "@/Components/common/IndustryBanner"
import SectionTag from "@/Components/common/SectionTag"
import { TabCarousel } from "@/Components/common/TabCarousel"

import classNames, { section_wrapper_class } from "@/helpers/common"

const LandingIndustriesSection = (props:any) => {
  
  return (
    <>
      <section id="industries" className={classNames(section_wrapper_class," mx-auto")}
      aria-label="centrox-industries">

    <SectionTag text="Industries"/>
    <section aria-label="Centrox Industries" className="text-white ">
       {props?.heading && <h2 className={classNames("font-semibold text-center text-[1.5rem] w-full lg:w-[60%] mx-auto  lg:text-5xl my-4",props?.h2class)}>
        {props?.heading}
        </h2>}
      {props?.description &&  <p className="text-center w-full text-[1rem] sm:w-[60%] mx-auto sm:text-[1.5rem]">
        {props?.description}
        </p>}
      </section>
     <TabCarousel caption={props?.caption} isGradientCardsLayoutwithImage={true} gradientCardData={props?.gradientCardData} headerTabs={props?.tabs}/>
     {/* <IndustryBanner/> */}
     
      </section>
    </>
  )
}

export default LandingIndustriesSection
