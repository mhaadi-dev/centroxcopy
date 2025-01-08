"use client";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { Stepper } from "@/Components/common/Stepper";
import classNames, {
  h2ClassName,
  p2ClassName,
  section_wrapper_class,
  text_para_2,

} from "@/helpers/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import workProcess from "@/assets/workprocess.webp"
import SectionHeader from "@/Components/common/SectionHeader";
import useSize from "@/helpers/windowWidth";

export const StepperSection = ({
  data,
  img,
  reverse,
  button,
  alt
}: any) => {
  
  const [stepperData, setStepperData] = useState(data?.data);
  const {width}=useSize()
  useEffect(() => {
    if (data?.data?.length >=1){
      let updatedData = [...data?.data];
      let newData = updatedData?.map((x) => ({ ...x, status: false }));
      setStepperData(newData);
    }
 
  }, [data?.data?.length]);
  const topRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    if (topRef.current) {
      const rect = topRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight ;
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
    const numSteps = stepperData?.length;
    const firstStepRange = width!=null && width>768? 380 / numSteps : 270/numSteps; 
    const otherStepRange = width!=null && width>768 ? (108 - firstStepRange) / (numSteps - 1):(90 - firstStepRange) / (numSteps - 1);
// console.log("SCROLL PERCENTAGE",scrollPercentage, "     : FIRST STEP",firstStepRange, "          : OTHER STEP",otherStepRange)
    const updatedData = stepperData?.map((step: any, index: number) => {
      let isActive = false;
      if (index === 0) {
        isActive = scrollPercentage < firstStepRange;
      } else if (
        scrollPercentage >= firstStepRange + (index - 1) * otherStepRange &&
        scrollPercentage < firstStepRange + index * otherStepRange
      ) {
        isActive = true;
      }

      return { ...step, status: isActive };
    });
   

    setStepperData(updatedData);
  }, [scrollPercentage]);
 
  return (
    <section className={classNames(section_wrapper_class,"")}  ref={topRef}>
      <div
        className="min-h-[270vh] mt-20 lg:mt-16 2xl:mt-24 relative "
       
      >
        <div
          className={classNames(
            "  sticky top-[50px] h-full flex  flex-col  gap-6"
          )}
        >
          {/* <div className="flex flex-col gap-4 items-center w-4/5 mx-auto  ">
            <h2 className={h2ClassName}>{heading}</h2>
            <p className={classNames(p2ClassName, "!text-center")}>
              {description}
            </p>
            <CalendlyWidget btnText="Let's Build One For You" />
          </div> */}
          <SectionHeader headingText={data?.heading} tagText="Process" para1Text={data?.description}/>
          <div className=" ml-[0.3rem] items-start flex flex-col gap-y-2 lg:flex-row w-full">
            <div className="w-[90%] ml-[12%]   lg:ml-0 mx-auto lg:mx-0 lg:w-full  ">
              <p className={classNames(text_para_2)}>Our Process includes:</p>
              <Stepper data={stepperData} />
              { data?.btnText && (
                <div className=" my-8 flex justify-start lg:justify-start ">
                  <CalendlyWidget btnText={data?.btnText||"Let's Discuss Your Project"} isArrow />
                </div>
              )}
            </div>
             
             <div className=" flex mx-auto    h-full   w-full lg:w-3/5">
          
                 {true && (
                <Image
                  src={ workProcess|| img.asset.url}
                  alt={data?.alt || "Our Work Process"}
                  className="w-full lg:w-5/5  "
                  loading="lazy"
                />
              )}
            
           
      
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};
