"use client";
import classNames, { section_wrapper_class, text_h1_main, text_para_2 } from "@/helpers/common";
import React, { useState, useEffect } from "react";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import Image from "next/image";
import TimelineBar from "./TimelineBar";
import history from "@/assets/about/history.webp";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
let history ="https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/about/history.webp"
  const timelineData = [
    { year: 2018, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2019, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2020, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2021, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2022, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2023, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
    { year: 2024, text: "We initiated our journey as a software development company driven to furnish AI solutions, during the process we contributed to develop AI solutions for fashion and retail space, which helped us explore the realm of neural networks. With our fueling passion and efforts we built our focus and specialization in AI, today we stand as a team of dedicated AI engineers and researchers pushing the boundaries of Generative AI and LLMs; fostering businesses to accelerate their AI developments.", image: history },
  ];

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
    }, 4000);

    return () => {
      clearInterval(intervalId); 
    };
  }, [timelineData.length]);
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
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full rounded-xl lg:w-1/2">
          <Image src={timelineData[activeIndex].image} width={640} height={427} alt="Centrox History" className="w-full rounded-xl h-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
          <p className={classNames(text_para_2)}>{timelineData[activeIndex].text}</p>
          <p className={classNames("text-[7rem] text-center lg:text-start lg:text-[10rem] tracking-wider font-bold text-blue-azure")}>
            {timelineData[activeIndex].year}
          </p>
        </div>
      </div>
      <TimelineBar activeIndex={activeIndex} setActiveTimeLineData={(index: number) => setActiveIndex(index)} timelineData={timelineData} />
    </section>
  );
};

export default Timeline;
