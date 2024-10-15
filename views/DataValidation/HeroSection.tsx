import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  sectionDiscriptions,
  sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";
import Image from "next/image";

export const DataValidationHeroSection = () => {
  return (
      <div className="relative pb-20">
    <section className="flex flex-col gap-12 lg:flex-row justify-between  w-4/5 mx-auto items-center mt-24 lg:mt-40">
        <Image
          src={bgImg}
          alt="bg-img"
          className="absolute h-full mx-auto left-0 rotate-180 object-fill bottom-0"
        />
        <div className="flex w-full lg:w-1/2 flex-col gap-12">
          <h1
            className={classNames(sectionheadings, "lg:!text-left lg:!w-full")}
          >
            Enhance Your AI with Unmatched Data Accuracy
          </h1>
          <p
            className={classNames(
              sectionsubheadings,
              "lg:!text-left lg:!w-full"
            )}
          >
            Ensure Your Models Perform at Their Best.
          </p>
          <div className="flex w-full justify-center lg:justify-start">
            <CalendlyWidget btnText="Talk to Us" />
          </div>
        </div>
        <figure className="w-full lg:w-1/2 z-10">
          <Image src={img} alt="hero-img" />
        </figure>
    </section>
      </div>
  );
};
