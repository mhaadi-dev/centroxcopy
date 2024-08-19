import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  sectionheadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
  sectionsubheadings,
  subsectiondescriptions,
  subsectionheadings,
} from "@/helpers/common";

import dataImg from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";

interface DataI {
  title: string;
  icon?:string,
  description: string;
}
interface PropsI {
  data: DataI[];
  heading?: string;
  description?: string;
  mainHeading?: string;
  mainDescription?: string;
  subDescription?: string;
  img?: any;
  reverse?:boolean,
  bgImge?: boolean,
  button?: any;
  gradient?:boolean,
  bgShape?:boolean,
}
export const PointsandImagesSection = ({
  data,
  heading,
  description,
  mainHeading,
  mainDescription,
  subDescription,
  bgImge,
  button = "Book Free 1:1 Session",
  img,
  gradient,
  reverse,
  bgShape,

}: PropsI) => {
  return (
    <div className="relative overflow-hidden mt-8 pb-12 "
     style={{
      backgroundImage: gradient ?  "radial-gradient(60.34% 71.45% at 60.94% 3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)" : "" ,
      backgroundRepeat: gradient ? "no-repeat" : "",
      backgroundColor:  gradient ? "#000000" : ""
    }}
    >
        {bgShape && <div
          className="h-full w-3/4 absolute rotate-[130deg] -right-[20%] top-[40%]  bottom-0    bg-green-200 "
          style={{
            background: "rgba(7, 157, 252, 0.10)",
            fill: "rgba(7, 157, 252, 0.10)",
            strokeWidth: "4px",
            stroke: "rgba(7, 157, 252, 0.10)",
            backdropFilter: "blur(8px)",
          }}
        /> }{" "}
      
      {bgImge && (
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
      )}{" "}
      <section className="w-4/5 mx-auto mt-24 lg:mt-40  ">
        <div className="flex flex-col gap-8">
          {mainHeading && <h2 className={sectionheadings}>{mainHeading}</h2>}
          {mainDescription && (
            <h4 className={sectionsubheadings}>{mainDescription}</h4>
          )}
        </div>
        <div className={classNames("flex flex-col lg:flex-row gap-12 items-center  mt-12 ",reverse ? "lg:!flex-row-reverse" : "")}>
          <figure className="w-full lg:w-1/2 z-10 ">
            <Image src={dataImg} alt="hero-img " />
          </figure>
          <div className="w-ful lg:w-1/2 flex flex-col gap-8 z-10">
            <h2
              className={classNames(
                sectionheadings,
                "lg:!mx-0 lg:!w-full lg:!text-left"
              )}
            >
              {heading}
            </h2>
            <p
              className={classNames(
                sectionSectionDescription,
                "lg:!mx-0 lg:!w-full lg:!text-left"
              )}
            >
              {description}
            </p>
            {subDescription && (
              <p className={classNames(sectionSectionDescription,"!text-[#D1D5DB]")}>{subDescription}</p>
            )}
            <div className="flex flex-col gap-6">
              {data.map((el, index) => {
                return (
                  <div className="flex gap-2 items-start " key={index}>
                    {el.icon && <Image src={el.icon} className="w-6 mt-[0.4rem]" alt="icons"/>}
                  <div className="w-full flex-col gap-4" >
                    <h4
                      className={classNames(
                        subsectionheadings,
                        "2xl:!text-3xl"
                      )}
                    >
                      {el.title}
                    </h4>
                    <p className={subsectiondescriptions}>{el.description}</p>
                  </div>
                  </div>
                );
              })}
            </div>
            {button && (
              <div className="flex justify-center lg:justify-start">
                <CalendlyWidget btnText={button} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
