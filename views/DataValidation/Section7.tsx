import classNames, {
  sectionDiscriptions,
  sectionheadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";

import checkIcon from "@/public/images/datavalidation/CheckCircle.svg";
import Image from "next/image";
import { CalendlyWidget } from "@/Components/common/Calendly";
const data = [
  {
    title: "Data Collection",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation",
    img: checkIcon,
  },
  {
    title: "Data Collection",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation",
    img: checkIcon,
  },
  {
    title: "Data Collection",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation",
    img: checkIcon,
  },
  {
    title: "Data Collection",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation",
    img: checkIcon,
  },
  {
    title: "Data Collection",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation",
    img: checkIcon,
  },
];
export const DataValidationSection7 = () => {
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
      />

      <section className="flex flex-row mt-24 lg:mt-40 w-4/5 mx-auto">
        <div className="flex flex-col gap-6 w-1/2 ">
          <h2
            className={classNames(
              sectionheadings,
              "lg:!text-left lg:!w-4/5 lg:!mx-0"
            )}
          >
            Precisions in Collision Prediction
          </h2>
          <p className={classNames(sectionDiscriptions, "!font-medium")}>
            DERQ uses CCTV footage to predicy
          </p>
          <h3 className={sectionDiscriptions}>Here's how we do it</h3>
          {data.map((x, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-start gap-2 justify-start"
              >
                <Image src={x.img} alt="check-icon img" className="w-8 mt-1" />
                <div className="flex flex-col gap-2">
                  <h3 className={sectionsSectionHeadings}>{x.title}</h3>
                  <p className={sectionSectionDescription}>{x.description}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center lg:justify-start">
            <CalendlyWidget btnText="Let's Begin Validation" />
          </div>
        </div>
        <figure className="w-1/2 flex borer-2 justify-center z-10">
          <Image src={img} className="w-4/5 object-contain" alt="section-img" />
        </figure>
      </section>
    </div>
  );
};
