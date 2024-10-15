import { Button } from "@/Components/Button.js/button";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { sectionheadings } from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
export const SolvingDataHeroSection = () => {
  return (
    <>
      <section className="w-4/5 flex-col  lg:flex lg:flex-row lg:gap-20 items-center mx-auto  mt-20 lg:mt-44">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 ">
          <h2 className="w-full  lg:w-full 2xl:w-3/4 text-2xl lg:text-4xl text-center lg:text-left 2xl:text-6xl text-white  font-bold">
            Providing Data Operations for Innovation{" "}
          </h2>
          <p className="text-white font-medium text-center   lg:text-left text-md lg:text-lg 2xl:text-xl">
            Centrox leads the data labeling sector by integrating AI-driven
            methodologies with human-in-the-loop processes, resulting in labeled
            data of unmatched quality, scalability, and efficiency.
          </p>
          <div className="flex flex-col lg:flex-row w-3/4 mx-auto lg:w-full gap-4">
            <div className="flex justify-center lg:justify-start w-full">
              
            <CalendlyWidget btnText="Label My Data" btnClassName=" px-16 lg:!py-4 lg:!px-6"/>

            </div>
            {/* <Button content="Label my data" className="!rounded-3xl !px-8" /> */}
            <Button
              content="Our Process"
              className="!bg-black !text-white !border-2 !rounded-3xl !px-8"
          />
          </div>
        </div>
        <figure className="w-full lg:w-1/2 flex justify-end">
          <Image
            src={img}
            alt="solving-data img "
            loading = "eager"
            className="rounded-xl mt-4 lg:mt-0  w-full lg:w-4/5"
          />
        </figure>
      </section>
    </>
  );
};
