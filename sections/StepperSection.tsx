"use client";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { Stepper } from "@/Components/common/Stepper";
import classNames, {
  h2ClassName,
  p2ClassName,
  text_para_2,

} from "@/helpers/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import workProcess from "@/assets/workprocess.webp"
import SectionHeader from "@/Components/common/SectionHeader";

export const StepperSection = ({
  heading,
  description,
  data,
  img,
  reverse,
  button,
}: any) => {
  const stepperdata=[
    {
        "title": "Deep Dive & Discovery",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69ae",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We begin by thoroughly understanding your project goals, data types, and specific annotation needs."
                    }
                ]
            }
        ],
        "status": false
    },
    {
        "title": "Custom Model Blueprinting",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69af",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We collaborate with you to design a model architecture that leverages the strengths of foundation models while addressing your unique requirements. We consider factors like model size, computational constraints, and desired capabilities."
                    }
                ]
            }
        ],
        "status": false
    },
    {
        "title": "Data Curation & Enhancement",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69b0",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We work with your datasets, applying cleaning, augmentation, and labeling techniques as needed to create a high-quality training corpus that accurately reflects your domain knowledge. We also help you identify and acquire additional data sources if necessary."
                    }
                ]
            }
        ],
        "status": false
    },
    {
        "title": "Iterative Training & Optimization",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69b1",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We utilize a combination of fine-tuning, RLHF, and prompt engineering to train your LLM iteratively. We continuously evaluate performance, share insights, and refine the model to achieve optimal results. We employ advanced techniques like hyperparameter tuning, early stopping, and learning rate scheduling to ensure efficient training and prevent overfitting."
                    }
                ]
            }
        ],
        "status": false
    },
    {
        "title": "Seamless Deployment & Integration",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69b2",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We deploy your custom LLM into your production environment, ensuring a smooth transition and minimal disruption to your existing workflows. We provide support for integrating the model with your applications and systems, leveraging APIs or SDKs as needed."
                    }
                ]
            }
        ],
        "status": false
    },
    {
        "title": "Ongoing Monitoring & Support",
        "content": [
            {
                "_type": "block",
                "style": "normal",
                "_key": "6fc8ac5c69b3",
                "markDefs": [],
                "children": [
                    {
                        "_type": "span",
                        "marks": [],
                        "text": "We provide continuous monitoring, retraining, and optimization to ensure your AI model continues to deliver value as your data and needs evolve. We offer expert guidance and support to address any challenges or questions that arise, helping you maintain peak performance and adapt to changing requirements."
                    }
                ]
            }
        ],
        "status": false
    }
]
  const [stepperData, setStepperData] = useState(stepperdata);

  useEffect(() => {
    if (stepperdata?.length >=1){
      let updatedData = [...data];
      let newData = updatedData?.map((x) => ({ ...x, status: false }));
      setStepperData(newData);
    }
 
  }, [stepperdata?.length]);
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
    const firstStepRange = 220 / numSteps; // Give the first step a larger percentage range
    const otherStepRange = (100 - firstStepRange) / (numSteps - 1);

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
    <section>
      <div
        className="min-h-[300vh]  p-2 mt-20 lg:mt-40 2xl:mt-44 relative "
        ref={topRef}
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
          <SectionHeader headingText="How We Work" tagText="Process" para1Text="Our collaborative, iterative process ensures a tailored and effective LLM solution:"/>
          <div className=" flex flex-col lg:flex-row w-full">
             <div className={classNames("  flex flex-col lg:flex-row w-full lg:w-2/5 mx-auto justify-between mt-12 gap-4 items-center ",reverse ? "lg:!flex-row-reverse" : "")}>
            <div className="w-[90%] ml-[12%] lg:ml-0 mx-auto lg:mx-0 lg:w-full  ">
              <p className={classNames(text_para_2)}>Our Process includes:</p>
              <Stepper data={stepperData} />
              {button && (
                <div className=" mt-12 flex justify-center lg:justify-start ">
                  <CalendlyWidget btnText={"Let's Discuss Your Project"||button} />
                </div>
              )}
            </div>
          </div>
           <div className=" flex mx-auto  w-full lg:w-2/5">
              <figure
              className="w-full lg:w-5/5    shadow-sm rounded-lg "
              style={{
                background: "#0A0A0A",
                backdropFilter: "blur(2.213500738143921px)",
              }}
            >
              {true && (
                <Image
                  src={ workProcess|| img.asset.url}
                  alt="journey-img"
                  className="w-full lg:w-4/5  "
                  loading="lazy"
                
                  
                />
              )}
            </figure>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};
