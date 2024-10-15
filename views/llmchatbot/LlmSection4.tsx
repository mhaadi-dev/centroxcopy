import { CalendlyWidget } from "@/Components/common/Calendly";
import {
  sectionheadings,
  sectionHeadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
  sectionsubheadings,
} from "@/helpers/common";

import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";
import Image from "next/image";

interface DataI {
  title: string;
  description: string;
  img: any;
}
interface PropsI {
  data: DataI[];
  heading: string;
  subHeading?: string;
  background?: boolean;
  topButton?: string;
}
export const BorderedTextImageSection = ({
  data,
  heading,
  subHeading,
  background = false,
  topButton,

}: PropsI) => {
  return (
    <section className="w-4/5 mx-auto mt-20 lg:mt-44 flex flex-col gap-12 relative pb-20">
      {background && (
        <Image
          className="absolute w-full object-fill h-[70vh]  top-[20%]  left-[10%] "
          src={bgImg}
          alt="bg-img"
        />
      )}
      <div className="flex flex-col gap-4">
        <h2 className={sectionheadings}>{heading}</h2>
        <h5 className={sectionsubheadings}>{subHeading}</h5>
        {topButton && <div className="flex justify-center">
          <CalendlyWidget btnText={topButton}/>
          </div>}
      </div>
      <div className="w-full mx-auto flex flex-col gap-12 ">
        {data.map((x, index) => {
          return (
            <div
              key={index}
              className={`w-full rounded-xl p-6 border border-gray-500 z-10 flex flex-col lg:flex-row ${
                index === 1 ? "flex-col-reverse lg:flex-row-reverse " : ""
              }  gap-6 lg:gap-12`}
            >
              <div className="flex flex-col justify-center gap-2 lg:sgap-4 w-full lg:w-2/5 ">
                <h3 className={sectionsSectionHeadings}>{x.title}</h3>
                <p className={sectionSectionDescription}>{x.description}</p>
              </div>
              <div className="w-full lg:w-3/5">
                <Image src={x.img} alt="ai-img" className="w-full " />
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Data.map((x, index) => {
          return (
            <div className="w-full flex flex-col gap-4 border-2 border-gray-300 p-4 lg:p-8 bg-gray-500 rounded-2xl z-10" key={index}>
                <div className="h-30 lg:h-40 flex flex-col gap-4">
              <figure className="h-20 bg-white "></figure>
              <h3 className="text-white font-semibold tex-xl lg:text-2xl">{x.title}</h3>
              </div>
              <div className="mt-4">
              {x.descriptions.map((sub, index) => {
                return (
                  <div className="flex flex-col gap-2 ">
                    <h4 className="text-white font-semibold text-md lg:text-lg">{sub.heading}</h4>
                    <h5 className="text-white font-medium text-xs lg:text-sm">
                      {sub.subHeading}
                    </h5>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
