//@ts-nocheck
"use client";
import classNames, {
  h2ClassName,
  h3ClassName,
  sectionheadings,
  text_h2_class,
  text_h3_class,
  text_para_2,
  text_para_3,
} from "@/helpers/common";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useSize from "@/helpers/windowWidth";
import { useRouter } from "next/navigation";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { PortableText } from "@portabletext/react";
import { PortableComponent } from "@/Components/common/PortableText";
import Link from "next/link";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg"

interface PropsI {
  data: any;
  autoplay?: boolean;
  style?: boolean;
  colsClassName?: string;
  tabsClassName?: string;
  widthClassName?: string;
  heading?: string;
  tagHeading?:string
}

interface dataI {
  title: string;
  description: string;
  img: StaticImageData;
}

export const CarouselwithStackAnimation = ({
  data,
  autoplay = false,
  style = false,
  widthClassName,
  colsClassName,
  tabsClassName,
  heading = "",
  tagHeading=""
}: PropsI) => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { width } = useSize();
  const topRef = useRef<HTMLDivElement>(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);
useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (topRef.current) {
      const rect = topRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const scrolledY = windowHeight - rect.top;
      const percentage = Math.min(
        100,
        Math.max(0, (scrolledY / totalHeight) * 75)
      );
      setScrollPercentage(percentage);
    }
  };
// useEffect(() => {
//     const numSteps = data?.length;
//     const firstStepRange = 220 / numSteps; // Give the first step a larger percentage range
//     const otherStepRange = (100 - firstStepRange) / (numSteps - 1);
//     if (scrollPercentage > 80 && scrollPercentage <= 85){
//       setActiveIndex(0)
//     }
//     if (scrollPercentage > 85 && scrollPercentage <= 90){
//       setActiveIndex(1)
//     }
//     if (scrollPercentage > 90 && scrollPercentage <= 95){
//       setActiveIndex(2)
//     }
//     if (scrollPercentage > 95 && scrollPercentage <= 100){
//       setActiveIndex(3)
//     }
//   }, [scrollPercentage]);

  // console.log(data, "dttttt");
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setHoverIndex(activeIndex);
  }, [activeIndex]);

  let gridClass = `grid-cols-${data?.length}`;
  useEffect(() => {
    let timer: any;

    if (autoplay) {
      timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data?.length);
      }, 2000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [autoplay, data?.length]);

  if (!isClient) {
    return null;
  }

  return (
      <section
        className={classNames("w-full   flex flex-col gap-8 lg:gap-12 rounded-xl relative ")} ref={topRef}>
        {heading && (
          <>
            <h2 className={h2ClassName}>{heading}</h2>
          </>
        )}
        <div className="flex  flex-col gap-2 w-full lg:w-[98%] mx-auto ">
          {true && (
            <>
              <div className={classNames("grid !grid-cols-2 lg:!grid-cols-4  ",colsClassName,gridClass)}>
                {data?.map((carousal: any, index: number) => (
                  <div key={index} style={{background: `${index === activeIndex ? "radial-gradient(205.46% 176.53% at 50% 100%, #0071B9 0%, rgba(0, 8, 14, 0.00) 100%), rgba(0, 0, 0, 0.10)": index === hoverIndex
                            ? "radial-gradient(205.46% 176.53% at 50% 100%, rgba(0, 113, 185, 0.10) 0%, rgba(75, 75, 75, 0.00) 100%), rgba(0, 0, 0, 0.10)"
                            : ""}`,}}
                    className={classNames(
                      "text-white text-[0.59rem] w-full   sm:text-[0.8rem] 2xl:text-[1.2rem] font-semibold text-center p-[0.7rem] rounded-xl lg:rounded-t-xl lg:rounded-b-none cursor-pointer whitespace-nowrap ",
                      tabsClassName
                    )}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(activeIndex)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {carousal.tabheading}
                  </div>
                ))}
                <hr
                  className={classNames(
                    "bg-[#079DFC] hidden lg:block z-20 h-[0.3rem] w-full cursor-pointer hrclass border-none"
                  )}
                  style={{
                    marginLeft: hoverIndex > 0 ? `${hoverIndex * 100}%` : "",
                  }}
                />
              </div>
              <hr className="bg-white h-1 -mt-3" />
            </>
          )}
        </div>
        <div className=" min-h-[650px] lg:min-h-[715px]  overflow-hidden  xl:min-h-[640px] relative flex flex-col space-y-8" >
          {data?.map((cars: any, index: number) => (
            <div className=" absolute flex-1  flex  flex-col-reverse md:flex-row w-full translate-y-[125%] lg:translate-y-[110%]  left-0 right-0 transition-transform duration-500 ease-in-out mt-8 mb-10 h-auto lg:h-[80%]  bg-black   overflow-hidden  mx-auto border-4 border-gray-800 rounded-3xl "
              style={{
                transform:
                  activeIndex === index ? `translateY(${index * 0.8}rem)`: activeIndex > index? `translateY(${(index - 1) * 1}rem)`: "",
                zIndex: activeIndex === index ? 1 : 1,
                opacity: activeIndex === index ? 1 : 0.98,
              }}
              key={index}
            >
                
                  <div className="flex w-full  bg-gray-900 xl:w-1/2 flex-col space-y-4 justify-center  mx-auto h-full pt-4 md:pt-20">
                    <div className="   h-full flex flex-col gap-y-4 py-2 mx-[1.5rem] mb-4 xl:mx-[3rem]">
                      {tagHeading&&<p className="text-base uppercase text-blue-azure font-semibold">
                        {tagHeading}
                      </p>}
                     {cars.heading && <h3
                        className={classNames(
                          "text-[#E5E7EB] text-[1.25rem] lg:text-[1.7rem] 2xl:text-[2.25rem] font-heading font-semibold leading-[2rem] 2xl:leading-[2.5rem]",
                          )}>
                        {cars.heading}
                      </h3>}
                     {cars?.description &&  <p className={classNames("text-[#E5E7EB] font-paragraph text-[0.8rem] lg:text-[1.2rem] 2xl:text-[1.4rem] leading-[1.4rem] 2xl:leading-[2rem]")}>
                      {cars?.description}
                      </p>}
                     
                      <div className="flex justify-center md:justify-start ">
                    {cars?.btnText &&  <Link href={cars?.link}>
                      <Button
                          content={"Try For Free"}
                          btnClassName="!px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem]"
                          Icon={Arrow}
                          isLefticon={false}
                          iconClassName="!-mt-1"
                        />
                      </Link>}
                        
                      </div>
                    </div>
                  </div>
               
                <div className="w-full h-full my-auto   flex items-center justify-center  xl:w-1/2">
                  {cars.img && (
                    <Image
                      src={cars.img}
                      alt={cars?.alt}
                      loading="lazy"
                    
                      className="w-full rounded-xl  md:rounded-none md:rounded-tr-xl"
                    />
                  )} 
                </div>
              
             
            </div>
          ))}
        </div>
      </section>
    
   
   
  );
};
