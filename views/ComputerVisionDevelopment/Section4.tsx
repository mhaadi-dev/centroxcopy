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

export const ComputerVisoinSection4 = () => {
  const data = [
    {
      status: false,
      title: "In-depth Requirements Analysis",
      description:
        "We define clear project goals, technical constraints, and data requirements.",
    },
    {
      status: false,
      
      title: "Custom Model Architecture Design",
      description:
        "We architect CV models tailored to your specific use case, optimizing for performance and efficiency.",
    },
    {
      status: false,
      title: "Data Preparation & Augmentation",
      description:
        "We prepare and augment your image and video data, addressing challenges like class imbalance.",
    },
    {
      status: false,
      title: "Model Training & Optimization:",
      description:
        "We follow standardized training techniques, including transfer learning and hyperparameter optimization.",
    },
    {
        status: false,
        title: "Deployment & Scaling",
        description:
          "We deploy your CV model seamlessly, ensuring scalability and real-time performance, whether on the cloud or at the edge.",
      },
      {
        status: false,
        title: "Ongoing Monitoring & Improvement",
        description:
          "Ongoing Monitoring & Improvement",
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
    if (scrollPercentage >= 0 && scrollPercentage < 35) {
      if (stepperData[0].status === false){
     let updatedData = [...stepperData];
        let newData = updatedData.map((x, index) => {
          if (index == 0) {
            x.status = true;
            return x;
          }
          else{
            x.status = false 
            return x
          }
        });
        setStepperData(newData);
      }

    } else if (scrollPercentage >= 35 && scrollPercentage < 50) {
      if (stepperData[1].status === false){

      let updatedData = [...stepperData];
      let newData = updatedData.map((x, index) => {
        if (index == 1) {
          x.status = true;
          return x;
        }
        else{
          x.status = false 
          return x
        }
      });
      setStepperData(newData);
    }
    } else if (scrollPercentage >= 50 && scrollPercentage < 60) {
      if (stepperData[2].status === false){

      let updatedData = [...stepperData];
      let newData = updatedData.map((x, index) => {
        if (index == 2) {
          x.status = true;
          return x;
        }
        else{
          x.status = false 
          return x
        }
      });
      setStepperData(newData);
    }
    } else if (scrollPercentage >= 60 && scrollPercentage < 80) {
      if (stepperData[3].status === false){

      let updatedData = [...stepperData];
      let newData = updatedData.map((x, index) => {
        if (index == 3) {
          x.status = true;
          return x;
        }
        else{
          x.status = false 
          return x
        }
      });
      setStepperData(newData);
    }
    } else if (scrollPercentage >= 80 && scrollPercentage < 90) {
      if (stepperData[4].status === false){

      let updatedData = [...stepperData];
      let newData = updatedData.map((x, index) => {
        if (index == 4) {
          x.status = true;
          return x;
        }
        else{
          x.status = false 
          return x
        }
      });
      setStepperData(newData);
    }
     
    } else if (scrollPercentage >= 90) {
      if (stepperData[5].status === false){

      let updatedData = [...stepperData];
      let newData = updatedData.map((x, index) => {
        if (index == 5) {
          x.status = true;
          return x;
        }
        else{
          x.status = false 
          return x
        }
      });
      setStepperData(newData);
    }
     
    }

    
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
          <h2 className={sectionheadings}> Our Development Process</h2>
          <p className={sectionsubheadings}>
          We collaborate closely with you throughout the model development process 
          </p>
          <CalendlyWidget btnText="Let's Build One For You"/>

          {/* <Button content="Let's Build One For You" className="!rounded-full " /> */}
          </div>
          <div className="flex flex-col lg:flex-row w-4/5 mx-auto justify-between mt-12 gap-4 items-center">
            <div className="w-[90%] ml-[12%] lg:ml-0 mx-auto lg:mx-0 lg:w-1/2  ">
              <Stepper data={stepperData} />

              <div className="flex justify-start mt-6">
              <CalendlyWidget btnText="Book A Free Call"/>
            </div>
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
