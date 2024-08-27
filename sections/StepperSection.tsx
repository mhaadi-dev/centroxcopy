"use client"
import { CalendlyWidget } from "@/Components/common/Calendly";
import { Stepper, StepperDataI } from "@/Components/common/Stepper";
import classNames, { h2ClassName, p2ClassName, sectionheadings, sectionsubheadings } from "@/helpers/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PropsI{
    heading:string,
    description:string,
    img:any,
    data:StepperDataI[],
    button?:string,
}
export const StepperSection = (props:PropsI) => {
   
    const [stepperData, setStepperData] = useState(props.data);
    const topRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    const handleScroll = () => {
      if (topRef.current) {
        const rect = topRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        const scrolledY = windowHeight - rect.top;
        const percentage = Math.min(
          100,
          Math.max(0, (scrolledY / totalHeight) * 100)
        );
        setScrollPercentage(percentage);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const numSteps = stepperData.length;
      const firstStepRange = 220 / numSteps; // Give the first step a larger percentage range
      const otherStepRange = (100 - firstStepRange) / (numSteps - 1);
  
      const updatedData = stepperData.map((step, index) => {
        let isActive = false;
  
        if (index === 0) {
          isActive = scrollPercentage < firstStepRange;
        } else if (scrollPercentage >= firstStepRange + (index - 1) * otherStepRange &&
                   scrollPercentage < firstStepRange + index * otherStepRange) {
          isActive = true;
        }
  
        return { ...step, status: isActive };
      });
  
      setStepperData(updatedData);
    }, [scrollPercentage]);
  
    return (
      <section>
        <div className="h-[300vh] mt-20 lg:mt-40 2xl:mt-44 relatives " ref={topRef}>
          <div
            className={classNames(
              "my-12 sticky top-[50px] flex  flex-col  gap-6"
            )}
          >
            <div className="flex flex-col gap-4 items-center w-4/5 mx-auto  ">
              <h2 className={h2ClassName}>{props.heading}</h2>
              <p className={classNames(p2ClassName,"!text-center")}>
             {props.description}
              </p>
              {/* <CalendlyWidget btnText="Let's Build One For You" /> */}
            </div>
            <div className="flex flex-col lg:flex-row w-4/5 mx-auto justify-between mt-12 gap-4 items-center ">
              <div className="w-[90%] ml-[12%] lg:ml-0 mx-auto lg:mx-0 lg:w-1/2  ">
                <Stepper data={stepperData} />
                {props.button && <div className=" mt-12 flex justify-center lg:justify-start ">
                    <CalendlyWidget btnText={props.button}/>
                    </div>}
              </div>
              <figure
                className="w-full lg:w-2/5 pt-[100%]  lg:pt-[50%] relative flex shadow-sm rounded-lg overflow-hidden"
                style={{
                  background: "#0A0A0A",
                  backdropFilter: "blur(2.213500738143921px)",
                }}
              >
                <Image src={props.img} alt="journey-img" className="w-full h-full  "
                objectFit="fill"
                fill
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  };
  