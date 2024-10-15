import { CalendlyWidget } from "@/Components/common/Calendly"
import classNames, { sectionDiscriptions, sectionheadings, sectionHeadings, sectionsubheadings } from "@/helpers/common"

import heroImg from "@/public/images/genAi/genAIheroSection.webp"
import Image from "next/image"
export const GenAiHeroSectoin = ()=>{
    return (
        <section className="flex mt-24 lg:mt-40 w-4/5 mx-auto  flex-col lg:flex-row gap-12 justify-between items-center">
            <div className="flex flex-col w-1/2 gap-8 ">
                <h1 className={classNames(sectionheadings,"lg:!text-left lg:!mx-0 lg:!w-4/5")}>Generative AI, Engineers for Your Reality</h1>
                <p className={classNames(sectionsubheadings,"lg:!text-left lg:!mx-0 lg:!w-4/5")}>Partner with Centrox AI to design, build, and deploy custom Generative AI solutions that push the boundaries of what's possible.</p>
                <div className="flex justify-center lg:justify-start">
                    <CalendlyWidget btnText="Book A Free Strategy Call"/>
                </div>
            </div>
            <figure className="w-1/2 flex justify-center">
                <Image src={heroImg} alt="hero-img"/>
            </figure>
        </section>          
    )
}