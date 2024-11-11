// "use client"
import { DataOpsHeroSection } from "@/views/DataOps/HeroSection";
import { DataOpsSection2 } from "@/views/DataOps/Section2";
import { DataOpsSection3 } from "@/views/DataOps/Section3";
import LandingLayout from "../layout";
import BannerSection from "@/Components/MainPageComponents/Banner";
import { DataOpsSection6 } from "@/views/DataOps/Section6";
import { DataOpsTestimonialSection } from "@/views/DataOps/Section7";
import { DataOpsAccordianSection } from "@/views/DataOps/Section8";
import { DataOpsSection4 } from "@/views/DataOps/Section4";
import { DataOpsCarousal1 } from "@/views/DataOps/DataOpsCarousal1";
import { DataOpsCarousal2 } from "@/views/DataOps/DataOpsCarousal2";
import MultipleItems from "@/sections/SlickCarousal";

export default function Page(){
    return <>
    <div className="max-w-[2500px] mx-auto">
    <LandingLayout>

    <DataOpsHeroSection/>
        <DataOpsSection2/>
        {/* <DataOpsSection3/> */}
        <DataOpsSection4/>  
        <DataOpsCarousal1/>
        <DataOpsCarousal2/>
        <DataOpsSection6/>
        <DataOpsTestimonialSection/>
        <BannerSection text="Offering unmatched rate of just 5 cents per annotation" btnText="Let's Begin"/>
        <DataOpsAccordianSection/>
        
    </LandingLayout>
    </div>
    </>
}