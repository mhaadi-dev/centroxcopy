"use client";
import classNames, { section_wrapper_class, text_h1_main, text_para_2 } from "@/helpers/common";
import React, { useState, useEffect } from "react";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import Image from "next/image";
import TimelineBar from "./TimelineBar";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const timelineData = [
    { year: 2018, text: "1. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2019, text: "2. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2020, text: "3. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2021, text: "4. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2022, text: "5. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2023, text: "6. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
    { year: 2024, text: "7. Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic AI solutions often fall short when addressing the unique challenges of the real estate industry. You may be facing:Traditional methods and generic .", image: dummyDisplay },
  ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight/4;
//       const sectionHeight = window.innerHeight * 0.5; 
//       const index = Math.min(
//         Math.floor(scrollPosition / sectionHeight),
//         timelineData.length - 1
//       );
//       setActiveIndex(index);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [timelineData.length]);

  return (
    <section className={classNames(section_wrapper_class, "py-6 h-auto  flex flex-col gap-y-10")}>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <Image src={timelineData[activeIndex].image} alt="image" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
          <p className={classNames(text_para_2)}>{timelineData[activeIndex].text}</p>
          <p className={classNames("text-[8rem] lg:text-[10rem] tracking-wider font-bold text-blue-azure")}>
            {timelineData[activeIndex].year}
          </p>
        </div>
      </div>
      <TimelineBar activeIndex={activeIndex} setActiveTimeLineData={(index:number) => setActiveIndex(index)} timelineData={timelineData} />
    </section>
  );
};

export default Timeline;
