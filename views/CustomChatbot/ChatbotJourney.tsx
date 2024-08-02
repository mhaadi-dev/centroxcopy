"use client";
import { Stepper, StepperDataI } from "@/Components/common/Stepper";
import classNames, {
  sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";
import Image from "next/image";
import img from "@/public/images/customchatbot/chatbotjourneyImg.webp"
import { useEffect, useMemo, useRef, useState } from "react";

export const ChatbotJourneySection = () => {
  const data : StepperDataI[] = [
    {
      status: false,
      title: "Discuss Your Vision",
      description: "We define your chatbot's goals, target audience, and desired capabilities.",
    },
    {
      status: false,
      title: "Conversational Design",
      description: "We craft engaging dialogues that align with your brand voice and user expectations.",
    },
    {
      status: false,
      title: "Development & Integration",
      description: "We build and seamlessly integrate the chatbot into your platforms.",
    },
    {
      status: false,
      title: "Fine-Tuning",
      description: "We enhance the chatbot's understanding about your business and its jargon through a training process.",
    },
    {
      status: false,
      title: "Testing & Refinement",
      description: "We rigorously test and optimize for accuracy that ensures your satisfaction.",
    },
    {
      status: false,
      title: "Deployment & Monitoring",
      description: "We launch and continuously monitor your chatbot for peak performance.",
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

      console.log("0% - 20% of the element is visible");
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
      console.log("20% - 40% of the element is visible");
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
      console.log("40% - 80% of the element is visible");
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
      console.log("80% - 99% of the element is visible");
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
      console.log("99% of the element is visible");
    }
  }, [scrollPercentage]);
  
  console.log("stepper data now is",stepperData)
  return (
    <section>
      <div className="h-[300vh] mt-20 lg:mt-40 2xl:mt-44 " ref={topRef}>
        <div
          className={classNames(
            "my-12 sticky top-[50px] flex  flex-col  gap-6"
          )}
        >
          <h2 className={sectionheadings}> How Do We Build It</h2>
          <p className={sectionsubheadings}>
            We are meticulous in our process because we’re building a chatbot to
            serve as your brand ambassador and engage with your customers.
            Compromising on the quality is not an option. 
          </p>
          <div className="flex flex-col lg:flex-row w-4/5 mx-auto justify-between mt-12 gap-4 items-center">
            <div className="w-4/5 mx-auto lg:mx-0 lg:w-1/2  ">
              <Stepper data={stepperData} />
            </div>
            <figure className="w-full lg:w-1/2 flex  p-4  justify-center items-center border border-gray-600 rounded-lg shadow-sm"
            style={{
              background:"#0A0A0A",
              backdropFilter: "blur(2.213500738143921px)"
            }}
            >
              <Image src={img} alt="journey-img" className="w-4/5"/>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
