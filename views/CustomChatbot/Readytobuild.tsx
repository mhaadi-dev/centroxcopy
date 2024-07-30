import { Button } from "@/Components/Button.js/button";
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
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <h2 className={sectionsSectionHeadings}>
           Ready To Build A Better Connection With Your Customers
        </h2>
        <p className={sectionSectionDescription}>
          Book an exclusive 1:1 call with us today and discuss how we can help
          you retain the current customers and win new ones by communicating
          better through a GPT you can call your own.
        </p>
        <Link href={"/aiExpert"}>
        <Button content="Book Your 1:1 Session" className="w-4/5 mx-auto lg:w-1/2 lg:mx-0 !rounded-full" />
        </Link>
      </div>
      <figure className="w-full lg:w-1/2 flex">
    <Image src={img} alt="chat-bot img"/>
      </figure>

    </section>
  );
};
