//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import leftIcon from "@/public/images/template/carousalLeftArrow.svg";
import rightIcon from "@/public/images/template/carousalRightArrow.svg";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import caseStudyBG from "@/assets/caseStudyBG.webp";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";

export const CaseStudyCarousal = ({ data }: any) => {
  const [gradientAngle, setGradientAngle] = useState(96);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    setBackgroundStyle({
      background: `linear-gradient(${gradientAngle}deg, rgba(3, 60, 123, 0.40) -6.7%, rgba(6, 6, 6, 0.32) 48.47%, rgba(30, 55, 130, 0.24) 77.44%, rgba(5, 110, 225, 0.08) 93.92%), #060606`,
      transition: 'background 0.9s ease-in-out',
    });
  }, [gradientAngle, currentIndex]);

  const handleNext = () => {
    setGradientAngle((prevAngle) => prevAngle + 70);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setGradientAngle((prevAngle) => prevAngle - 30);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="sm:max-w-[1681px] overflow-hidden mx-[1.5rem] my-5 3xl:mx-auto mt-8">
        <div
          className="w-full relative h-auto lg:h-[550px] rounded-3xl"
          key={currentIndex}
        
        >
          <Image
            src={caseStudyBG}
            alt="case study background"
            className="absolute right-0 bottom-0 z-[0]" 
          />
          
          <div
            className="p-[1rem] lg:py-[3rem] lg:px-[4rem] transition-all duration-500 flex-col-reverse flex xl:flex-row items-center justify-between gap-4 rounded-3xl w-full h-full text-3xl text-black"
            style={backgroundStyle}
          >
            <section aria-label="case studies" className="w-full bg-transparent bg-none z-[10] relative">
              <header>
                <h5 className="text-blue-azure text-[0.9rem] uppercase">
                  Case Study
                </h5>
                <h2 className="text-[1.5rem] lg:text-5xl leading-[2rem] lg:leading-[3.8rem] font-semibold text-white">
                  {data[currentIndex].title}
                </h2>
                <p className="text-[0.8rem] lg:text-[1.5rem] leading-[1rem] lg:leading-[2.1rem] text-gray-100 ">
                  {data[currentIndex].description}
                </p>
              </header>
              <Button
                content="Check Out Our Work"
                Icon={Arrow}
                isLefticon={false}
                className="py-3 lg:!py-4 mt-[2rem]"
                iconClassName="!-mt-1"
              />
              <section aria-label="centrox case studies tags" className=" w-full flex-wrap flex items-center gap-4 mt-4 ">
                <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.5rem] text-white  text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AI</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> ML Ops</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AWS</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> GANs</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> CVS</div>
              </section>
            </section>

            <section aria-label="centrox case studies" className="w-full bg-transparent z-[5] relative flex items-center justify-center overflow-hidden">
              <Image
                src={dummyDisplay}
                alt="case study"
                className="z-[10] relative object-contain h-full" 
              />
            </section>
          </div>
        </div>

        <div className="flex mt-4 justify-center md:justify-start gap-6">
          <Image
            src={leftIcon}
            onClick={handlePrev}
            className="w-12 cursor-pointer"
            alt="left-icon"
          />
          <Image
            src={rightIcon}
            onClick={handleNext}
            className="w-12 cursor-pointer"
            alt="right-icon"
          />
        </div>
      </div>
    </>
  );
};
