import { Button } from "@/Components/Button.js/button";
import classNames, { sectionheadings, sectionsubheadings } from "@/helpers/common";
import bgImage from "@/public/images/customchatbot/customchatbotbg.webp"
import heroImg from "@/public/images/llmchatbot/latestllmheroimg.png"
import Image from "next/image";

export const LLmHeroSection = () => {
  return (
    <div className="relative">
    <section className="flex flex-col lg:flex-row justify-between items-center w-4/5 mx-auto mt-20   ">
      <Image src={bgImage} alt="bg-img" className="absolute h-[70vh] bottom-0 object-fill -ml-[10%]"/>
      <div className="flex flex-col gap-8 w-full lg:w-2/5">
        <h1 className="w-full  lg:w-full 2xl:w-4/5 text-2xl lg:text-4xl text-center lg:text-left 2xl:text-5xl text-white  font-semibold ">
          Engineering Custom LLMs from Ideation to Implementation
        </h1>
        <p className="text-white font-medium text-center   lg:text-left text-md lg:text-lg 2xl:text-xl">
          Partner with us for full-cycle LLM development, from concept to
          production-ready deployment.
        </p>
        <Button className="!rounded-full w-1/2 mx-auto lg:mx-0 lg:w-1/4 z-10" content="Book 1:1 Session" />
      </div>
      <figure className="w-full lg:w-3/5 flex justify-center lg:justify-end items-end  z-10 lg:-mr-[10%]">
        <Image src={heroImg} className="w-full z-10" alt="hero-img"/>
      </figure>
    </section>
    </div>
  );
};
