import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  sectionheadings,
  sectionSectionDescription,
  sectionsubheadings,
} from "@/helpers/common";
import icon from "@/public/images/computervisiondevelopment/diamond.svg";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
export const ComputerVisionSection2 = () => {
  return (
    <div className="relative overflow-hidden">
        <div
        className="h-full w-3/4 absolute rotate-[130deg] -right-[20%] top-[40%]  bottom-0    bg-green-200 "
        style={{
            background: "rgba(7, 157, 252, 0.10)",
            fill: "rgba(7, 157, 252, 0.10)",
            strokeWidth: "4px",
            stroke: "rgba(7, 157, 252, 0.10)",
            backdropFilter: "blur(8px)",
          }}
        />{" "}
    <section className="flex mt-24 lg:mt-44 w-4/5 mx-auto justify-between">
      <div className="flex flex-col gap-8 w-1/2 items-start">
        <h2
          className={classNames(
            sectionheadings,
            "lg:!text-left lg:!mx-0 lg:!w-full"
          )}
        >
          Beyond the Generic
        </h2>
        <h5
          className={classNames(sectionsubheadings, "lg:!text-left lg:!mx-0")}
        >
         Are General-purpose AI models falling short of your expectations?
        </h5>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <Image src={icon} className="w-6 mt-2" alt="icon" />
            <p className={sectionSectionDescription}>
            Struggling to find solutions that truly understand your industry's unique language and visual data?
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Image src={icon} className="w-6 mt-2" alt="icon" />
            <p className={sectionSectionDescription}>
            Need to extract deeper insights and achieve state-of-the-art performance on complex tasks?
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <Image src={icon} className="w-6 mt-2" alt="icon" />
            <p className={sectionSectionDescription}>
            Seeking to build AI-powered products that stand out in a crowded market?
            </p>
          </div>
        </div>
        <h5 className={classNames(sectionsubheadings,"lg:!text-left lg:!mx-0 lg:!w-4/5")}>
        Seeking to build AI-powered products that stand out in a crowded market?
        </h5>
        <div className="flex justify-center lg:justify-start">
          <CalendlyWidget btnText="Set A Free Consultation" />
        </div>
      </div>
      <figure className="w-1/2 flex justify-center z-10">
        <Image src={img} alt="img" className="w-4/5" />
      </figure>
    </section>
    </div>
  );
};
