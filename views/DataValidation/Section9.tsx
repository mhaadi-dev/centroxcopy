import { CalendlyWidget } from "@/Components/common/Calendly"
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp"
import { sectionHeadings, sectionsubheadings } from "@/helpers/common"
import Image from "next/image"

export const DataValidationSection9 = ()=>{
    return (<section className="mt-24 lg:mt-40 flex flex-col gap-12 w-4/5 mx-auto items-center">
        <h2 className={sectionHeadings}>Do you have any queries around your data validation process</h2>
        <p className={sectionsubheadings}>Let's discuss over a 30-min call</p>
        <div className="flex justify-center">
            <CalendlyWidget btnText="Book A Call "/>
        </div>
        <Image src={img} alt="img" />
    </section>)
}