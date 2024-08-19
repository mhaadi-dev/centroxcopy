"use client";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { Stepper, StepperDataI } from "@/Components/common/Stepper";
import classNames, {
  basicLayoutclass,
  sectionDiscriptions,
  sectionheadings,
  sectionSectionDescription,
  sectionsubheadings,
} from "@/helpers/common";
import { useEffect, useRef, useState } from "react";

const data: StepperDataI[] = [
  {
    status: false,
    title: "Data Ingestion",
    description: `<h4 style="font-size:18px ; margin-top:2px">We begin by integratig seamlessly with your current data sources. This included</h4>  <ul style="margin-top:0.5rem;font-size:16px "><li><strong>Data Collection:</strong> Gathering data from multiple sources to ensure it’s comprehensive and accurate. </li>  <li><strong>Data Collection:</strong> Structuring and formatting the data to make it ready for thorough validation. </li></ul> `,
  },
  {
    status: false,

    title: "Validation and Cleaning",
    description: `<h4 style="font-size:18px ; margin-top:2px">Our validation process guarantees your data is precise.</h4>  <ul style="margin-top:0.5rem;font-size:16px"><li><strong>Error Detection:</strong>We use advanced algorithms to spot and fix errors and inaccuracies </li>  <li><strong>Bias Identification:</strong> We examine the data for biases that could impact model performance ensuring accuracy </li>
      <li><strong>Data Cleaning:</strong>We remove duplicates and irrelevant information to improve the overall quality and usability of your dataset. </li>
      </ul> `,
  },
  {
    status: false,
    title: "Real-Time Monitoring",
    description: `<h4 style="font-size:18px ; margin-top:2px">To keep data quality high: </h4>  <ul style="margin-top:0.5rem;font-size:16px "><li><strong>Real-Time Quality Checks:</strong> We use systems that monitor data quality catching and addressing issues as they occur. </li> </ul> `,
  },
  {
    status: false,
    title: "Reporting and Insights",
    description: `<h4 style="font-size:18px ; margin-top:2px">We’re committed to providing actionable insights: </h4>  <ul style="margin-top:0.5rem;font-size:16px "><li><strong>Detailed Reports:</strong> We highlight key data quality metrics and validation outcomes and our reports also include recommendations for data improvements to further enhance data quality. </li> </ul> `,
  },
];
export const DataValidationSection6 = () => {
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

  return (
    <div className="h-[300vh] mt-20 lg:mt-40 2xl:mt-44 relatives " ref={topRef}>
      <section
        className={classNames(
          "my-12 sticky top-[50px] flex  flex-col  gap-6 w-4/5 mx-auto"
        )}
      >
        <h1 className={sectionheadings}>Can a data validation</h1>
        <p className={sectionsubheadings}>
          The reliability of your data depends on the streamlined
        </p>
        <div className="flex flex-row gap-12 justify-between">
          <div className="flex flex-col gap-6 w-1/2">
            <h4 className={sectionSectionDescription}>
              Here’s how our approach ensures your data effectively supports
              your AI models:{" "}
            </h4>
            <div>
              <Stepper data={data} />
            </div>
            <h4 className={sectionSectionDescription}>
              It's time for you to drive performance with data excellence{" "}
            </h4>
            <div className="flex justify-center lg:justify-start">
              <CalendlyWidget btnText="Optimize your data" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
