"use client";
import { Stepper } from "@/Components/common/Stepper";
import classNames, {
  sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";
import Image from "next/image";
import img from "@/public/images/llmchatbot/llmjournyImg.webp";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/Components/Button.js/button";
import { CalendlyWidget } from "@/Components/common/Calendly";

export const Llmsection3 = () => {
  const data = [
    {
      status: false,
      title: "Scoping & Strategy",
      description:
        "We define clear goals, thoroughly assess your tech stack and infrastructure (cloud providers, ML frameworks) and develop a tailored roadmap.",
    },
    {
      status: false,
      
      title: "Open-Source Model Selection",
      description:
        "We evaluate performance, size and licensing of open-source/proprietary models to choose the best option for your use case.",
    },
    {
      status: false,
      title: "Training, Evaluation & Refinement",
      description:
        "We employ techniques like Prompt engineering, fine-tuning, and RLHF to enhance inference  your model.",
    },
    {
      status: false,
      title: "Deployment & Integration",
      description:
        "We seamlessly integrate the LLM into your existing systems and offer ongoing maintenance for continuous improvement.",
    },
  ];
  const [stepperData, setStepperData] = useState(data);

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
    if (scrollPercentage >= 0 && scrollPercentage < 45) {
      if (stepperData[0].status === false) {
        let updatedData = [...stepperData];
        let newData = updatedData.map((x, index) => {
          if (index == 0) {
            x.status = true;
            return x;
          } else {
            x.status = false;
            return x;
          }
        });
        setStepperData(newData);
      }

      console.log("0% - 20% of the element is visible");
    } else if (scrollPercentage >= 45 && scrollPercentage < 60) {
      if (stepperData[1].status === false) {
        let updatedData = [...stepperData];
        let newData = updatedData.map((x, index) => {
          if (index == 1) {
            x.status = true;
            return x;
          } else {
            x.status = false;
            return x;
          }
        });
        setStepperData(newData);
      }
      console.log("20% - 40% of the element is visible");
    } else if (scrollPercentage >= 60 && scrollPercentage < 80) {
      if (stepperData[2].status === false) {
        let updatedData = [...stepperData];
        let newData = updatedData.map((x, index) => {
          if (index == 2) {
            x.status = true;
            return x;
          } else {
            x.status = false;
            return x;
          }
        });
        setStepperData(newData);
      }
    } else if (scrollPercentage >= 80 && scrollPercentage < 100) {
      if (stepperData[3].status === false) {
        let updatedData = [...stepperData];
        let newData = updatedData.map((x, index) => {
          if (index == 3) {
            x.status = true;
            return x;
          } else {
            x.status = false;
            return x;
          }
        });
        setStepperData(newData);
      }
      console.log("40% - 80% of the element is visible");
    } 
     
  }, [scrollPercentage]);

  console.log("stepper data now is", stepperData);
  return (
    <section>
      <div className="h-[300vh] mt-20 lg:mt-40 2xl:mt-44 relatives " ref={topRef}>
        <div
          className={classNames(
            "my-12 sticky top-[50px] flex  flex-col  gap-6"
          )}
        >
            <div className="flex flex-col gap-4 items-center w-4/5 mx-auto  ">
          <h2 className={sectionheadings}> Our Full-Cycle Process</h2>
          <p className={sectionsubheadings}>
            We offer a comprehensive, end-to-end approach to tackle the
            complexities of bringing generative AI solutions to life. 
          </p>
          <CalendlyWidget btnText="Let's Build One For You"/>

          {/* <Button content="Let's Build One For You" className="!rounded-full " /> */}
          </div>
          <div className="flex flex-col lg:flex-row w-4/5 mx-auto justify-between mt-12 gap-4 items-center">
            <div className="w-[90%] ml-[12%] lg:ml-0 mx-auto lg:mx-0 lg:w-1/2  ">
              <Stepper data={stepperData} />
            </div>
            <figure
              className="w-full lg:w-2/5 flex  p-4  justify-center items-center border border-gray-600 rounded-lg shadow-sm"
              style={{
                background: "#0A0A0A",
                backdropFilter: "blur(2.213500738143921px)",
              }}
            >
              <Image src={img} alt="journey-img" className="w-full " />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
