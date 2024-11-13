import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  h2ClassName,
  h3ClassName,
  h4ClassName,
  p2ClassName,
  p3ClassName,
  p4ClassName,
  section_wrapper_class,
  sectionheadings,
  sectionSectionDescription,
  text_h3_class,
  text_para_2,
  text_para_3,
 
} from "@/helpers/common";

import dataImg from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import advantages from "@/assets/advantages.webp"
import SectionHeader from "@/Components/common/SectionHeader";



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
  arrayData
}: any) => {
  return (
    <div
      className="relative overflow-hidden mt-8 pb-12 "
      style={{
        backgroundImage: gradient
          ? "radial-gradient(60.34% 71.45% at 60.94% 3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)"
          : "",
        backgroundRepeat: gradient ? "no-repeat" : "",
        backgroundColor: gradient ? "#000000" : "",
      }}
    >
      {bgShape && (
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
      <section className={classNames(section_wrapper_class)}>

       
            <SectionHeader headingText={arrayData?.headerData?.heading} tagText={arrayData?.headerData?.tagText} para1Text={arrayData?.headerData?.description}/>
         
        <div
          className={classNames(
            "flex flex-col lg:flex-row gap-6  lg:gap-12 items-center mt-6 lg:mt-12 ",
            true ? "lg:!flex-row-reverse" : ""
          )}
        >
          <div className="w-full  flex justify-center lg:w-1/2  z-10 ">
            {true && (
              <Image
                src={advantages||data?.img}
                alt="hero-img "
                className="object-fill w-full  lg:w-3/4 h-full"
                loading="lazy"
              />
            )}
          </div>
          <div className="w-ful lg:w-1/2 flex flex-col gap-6 lg:gap-12 z-10">
        
            <div className="flex flex-col gap-6">
              {arrayData?.data?.map((el: any, index: number) => {
                return (
                  <div className="flex gap-2 items-start " key={index}>
                    {el.icon && (
                      <Image
                        src={el.icon}
                        className="w-6 mt-[0.4rem]"
                        alt="icons"
                      />
                    )}
                    <div className="w-full flex flex-col  gap-2  ">
                      <h4
                        className={classNames(
                          text_h3_class,
                          "lg:!w-full lg:!text-left"
                        )}
                      >
                        {el.heading}
                      </h4>
                      <p className={text_para_2}>{el.description}</p>
                    </div>
                  </div>
                );
              })}
               {arrayData?.btnText && (
              <div className="flex justify-center lg:justify-start">
                <CalendlyWidget btnText={arrayData?.btnText} isArrow={true} />
               
              </div>
            )}
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};
