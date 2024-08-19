import { Button } from "@/Components/Button.js/button";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { sectionsSectionHeadings } from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";


export const DataValidationSection5 = () => {
  return <section className=" w-4/5 mx-auto mt-24 lg:mt-40 flex flex-col lg:flex-row justify-between place-items-center">
    <div className="w-1/2 flex flex-col gap-8">
        <h2 className={sectionsSectionHeadings}>
        Do you want to experience our Human-in-the-Loop process for validation
        </h2>
        <div className="flex justify-start gap-8">
            <CalendlyWidget btnText="Let's Begin Validation"/>
            <Button content="Hear from Client" className = "!bg-white !text-blue-bright !border  !border-blue-bright !rounded-full !px-10 !font-bold" />
        </div>
    </div>
    <figure className="w-1/2">
        <Image src={img} className="" alt=""/>
    </figure>
  </section>;
};
