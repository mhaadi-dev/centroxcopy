import {
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import checkIcon from "@/public/images/datavalidation/CheckCircle.svg";
import { CalendlyWidget } from "@/Components/common/Calendly";

const data = [
  "Our validation processes detect and rectify inaccuracies, ensuring your data is reliable and effective.",
  "Seamlessly merge data from various sources into a unified, accurate dataset.",
  "Applying  consistency checks to ensure uniformity.",
  "Enhancing datasets with information that is relevant to improve its usability for more accurate model training.",
  "Conducting test to verify data on its quality making sure its meets the model performance criteria",
  "Implement ongoing updates to maintain data quality throughout the process.",
];
export const DataValidationSection2 = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="flex justify-between items-center w-4/5 mx-auto mt:24 lg:mt-40 ">
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
        <div className="w-1/2 ">
          <Image src={img} alt="section-img" />
        </div>
        <div className="w-1/2 flex flex-col gap-6 z-20">
          <h2 className={sectionsSectionHeadings}>
            Our Process of Improving Quality 
          </h2>
          <p className="text-lg font-medium text-white">
            Our strategic approach of improving the quality of the data demands
            a thorough understanding of your objectives which then helps us
            improve accuracy of your AI models.
          </p>
          <div className="flex flex-col gap-4">
            {data.map((x, index) => (
              <div className="flex gap-4 items-start" key={index}>
                <Image src={checkIcon} className="w-6 mt-2 " alt="check-icon" />
                <p className={sectionSectionDescription}>{x}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center lg:justify-start">
            <CalendlyWidget btnText="Let's Begin Validation" />
          </div>
        </div>
      </section>
    </div>
  );
};
