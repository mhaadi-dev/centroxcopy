import {
  SimpleAccordion,
  SimpleAccordionProps,
} from "@/Components/common/SimpleAccordian";
import { sectionheadings, sectionSectionDescription, sectionsSectionHeadings, sectionsubheadings } from "@/helpers/common";

import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";
import { CalendlyWidget } from "@/Components/common/Calendly";


interface PropsI {
  heading?: string;
  description?: string;
  subHeading?: string;
  subDescription?: string;
  accordionData: any;
  img: any;
  button?:any,
}
export const AccordoinImageSection = ({
  heading,
  description,
  subHeading,
  subDescription,
  accordionData,
  img,
  button
}: PropsI) => {
  return (
    
    <section className="mt-24 relative lg:mt-44 flex flex-col w-4/5 mx-auto pb-20 gap-8">
        <Image
          src={bgImg}
          alt="bg-img"
          className="absolute h-[90%] mx-auto left-0   object-cover bottom-0"
        />
      {heading && <h2 className={sectionheadings}>{heading}</h2>}
      {description && <p className={sectionsubheadings}>{description}</p>}
     

      <div className="flex flex-col lg:flex-row  gap-12  justify-between items-center  ">
        <div className="w-ful lg:w-1/2 flex flex-col gap-12 ">
          <div className="flex gap-4 flex-col">
        {subHeading && <h3 className={sectionsSectionHeadings}>{subHeading}</h3>}
      {subDescription && <p className={sectionSectionDescription}>{subDescription}</p>}
      </div>
          <SimpleAccordion items={accordionData} />
          {button && <div className="flex justify-center lg:justify-start">
          <CalendlyWidget btnText={button}/>
          </div>}
        </div>
        <div className="w-full lg:w-1/2 flex  z-10">
          <Image src={img} alt="img" className="z-10" />
        </div>
        
      </div>
    </section>
  );
};
