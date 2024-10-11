"use client";
import TestimonialBG from "@/assets/testimonialBG.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Props{
    imagesArray:any
    dataArray:any
}
const TestimonialCarousel = ({imagesArray,dataArray}:Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
        setIsAnimating(false);
      }, 1200);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index:number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 700);
    }
  };

  return (
    <div className="w-full mt-10 relative pt-[1.5rem] lg:pt-[2.5rem] overflow-hidden flex flex-col gap-[0rem] lg:gap-[2rem] h-auto  lg:h-[672px] bg-gradient-to-b from-[#079DFC00] to-[#079DFC33] rounded-2xl bg-clip-padding border-[2px] border-[#079DFC4D] ">
    <Image src={TestimonialBG} alt="bg" className="absolute mx-auto bottom-0 left-0 right-0"></Image>
    <div className="flex flex-wrap gap-y-4 items-center  gap-x-4 justify-center space-x-4 my-[0rem] lg:my-[1.5rem] ">
      {imagesArray?.map((image:any, index:number) => (
        <div
          key={index}
          className={`transition-opacity duration-500 cursor-pointer ${
            index === activeIndex ? "opacity-100" : "opacity-50"
          } ${index !==activeIndex ? "hidden lg:block opacity-50 lg:w-auto":"block opacity-100"}`}
          onClick={() => handleImageClick(index)}
        >
          <Image src={image} alt={`image-${index}`} loading="lazy" className="h-[1.5rem] w-[] lg:h-auto" />
        </div>
      ))}
    </div>

    <div className="relative text-center my-6 ">
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          isAnimating
            ? "translate-y-[100%] opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <p className="w-[90%] lg:w-[60%] mx-auto text-center text-[1rem] lg:text-[1.5rem] text-[#E5E7EB]">
          {dataArray[activeIndex].description}
        </p>
        <div>
          <h3 className="mt-4 text-[1rem] lg:text-[1.5rem] text-[#E5E7EB]">{dataArray[activeIndex].name}</h3>
          <p className="uppercase text-[0.92rem] text-[#9CA3AF]">{dataArray[activeIndex].position}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TestimonialCarousel
