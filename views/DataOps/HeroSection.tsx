import { Button } from "@/Components/Button.js/button";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import bgImage from "@/public/images/customchatbot/customchatbotbg.webp";
import classNames, {
  sectionheadings,
  sectionsSectionHeadings,
  sectionsubheadings,
} from "@/helpers/common";
import Image from "next/image";
import { CalendlyWidget } from "@/Components/common/Calendly";

export const DataOpsHeroSection = () => {
  return (
    <>
      <div className="relative pb-20 ">
        <section className="flex flex-col lg:flex-row items-center   mt-20 lg:mt-44 justify-center w-4/5 mx-auto gap-12 lg:gap-2">
          <Image
            src={bgImage}
            className="absolute  h-full   bottom-0 rotate-180 object-fill "
            alt="bg-img"
          />
          <div className="h-screen w-full absolute   bottom-0 rotate-[135deg] -left-[60%] bg-green-200"
          style={{
            background:"rgba(7, 157, 252, 0.10)",
            fill: "rgba(7, 157, 252, 0.10)",
            strokeWidth: "4px",
            stroke: "rgba(7, 157, 252, 0.10)",
            backdropFilter: "blur(8px)"
          }}
          />
          <div className="flex flex-col gap-8 items-start w-full  lg:w-1/2 z-10">
            <h1 className={classNames(sectionheadings, "lg:!text-left !mx-0 lg:!w-3/4")}>
              Advanced Annotation for Superior Data Quality
            </h1>
            <p
              className={classNames(sectionsubheadings, "lg:!text-left !mx-0 lg:!w-4/5")}
            >
              Utilize advanced object detection and segmentation to fulfil your
              most complex ML model requirements.{" "}
            </p>
            <div className="flex justify-center lg:justify-start w-full" >
            <CalendlyWidget btnText="Book a Call" />
            </div>
            <p
              className={classNames(
                sectionsSectionHeadings,
                "!text-center lg:!text-left !mx-0 !font-medium w-full lg:!w-4/5"
              )}
            >
              {" "}
              We handle diverse datasets by saving your time and resources improving your data annotation process
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center z-20 ">
            <Image src={img} className=" w-4/5" alt="hero-img" />
          </div>
        </section>
      </div>
    </>
  );
};
