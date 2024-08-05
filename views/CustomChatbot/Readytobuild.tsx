import { Button } from "@/Components/Button.js/button";
import { CalendlyWidget } from "@/Components/common/Calendly";
import {
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import img from "@/public/images/customchatbot/readytobuiidimg.webp"
import Image from "next/image";
import Link from "next/link";

export const ReadytoBuildChatbot = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-12 mt-20 lg:mt-40 2xl:mt-44 ">
      <div className="flex flex-col gap-2 lg:gap-6 w-full lg:w-1/2">
        <h2 className={sectionsSectionHeadings}>
        Need assistance?
        </h2>
        <p className={sectionSectionDescription}>
        Let’s book a 30-min quick consultation right away!
        </p>
        <div className="flex justify-center lg:justify-start">
          
        <CalendlyWidget btnText="Book You 1:1 Session"/>
        </div>
        {/* <Button content="Book Your 1:1 Session" className="w-4/5 mx-auto lg:w-1/2 lg:mx-0 !rounded-full" /> */}
      </div>
      <figure className="w-full lg:w-1/2 flex">
    <Image src={img} alt="chat-bot img"/>
      </figure>

    </section>
  );
};
