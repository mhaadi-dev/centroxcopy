//@ts-nocheck
"use client";
import classNames, {
  h2ClassName,
  h3ClassName,
  sectionheadings,
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
        Math.max(0, (scrolledY / totalHeight) * 100)
      );
      setScrollPercentage(percentage);
    }
  };
// useEffect(() => {
//     const numSteps = data?.length;
//     const firstStepRange = 220 / numSteps; // Give the first step a larger percentage range
//     const otherStepRange = (100 - firstStepRange) / (numSteps - 1);
//     if (scrollPercentage > 0 && scrollPercentage <= 55){
//       setActiveIndex(0)
//     }
//     if (scrollPercentage > 60 && scrollPercentage <= 70){
//       setActiveIndex(1)
//     }
//     if (scrollPercentage > 70 && scrollPercentage <= 85){
//       setActiveIndex(2)
//     }
//     if (scrollPercentage > 85 && scrollPercentage <= 100){
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
    <div className="h-auto   relative "
    ref={topRef}
    >
      <div className="sticky top-[50px] ">
    <div
      style={{
        background: `${style ? "rgba(5, 110, 225, 0.03)" : ""}`,
        boxShadow: `${style ? "0px 0px 64px 8px rgba(5, 110, 225, 0.20)" : ""}`,
      }}
      className={classNames(
        "w-full mx-auto md:mx-auto xl:mx-[auto] mt-0 lg:mt-0 overflow-hidden rounded-xl",
        widthClassName
      )}
    >
      <section
        className={classNames(
          "w-full mx-auto flex flex-col gap-8 lg:gap-12 rounded-xl relative py-4 px-2 lg:p-12"
        )}
      >
        {heading && (
          <>
            <h2 className={h2ClassName}>{heading}</h2>
          </>
        )}
        <div className="flex flex-col gap-2 w-[90%] mx-auto ">
          {true && (
            <>
              <div
                className={classNames(
                  "grid !grid-cols-2 lg:!grid-cols-4 ",
                  colsClassName,
                  gridClass
                )}
              >
                {data?.map((carousal: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      background: `${
                        index === activeIndex
                          ? "radial-gradient(205.46% 176.53% at 50% 100%, #0071B9 0%, rgba(0, 8, 14, 0.00) 100%), rgba(0, 0, 0, 0.10)"
                          : index === hoverIndex
                            ? "radial-gradient(205.46% 176.53% at 50% 100%, rgba(0, 113, 185, 0.10) 0%, rgba(75, 75, 75, 0.00) 100%), rgba(0, 0, 0, 0.10)"
                            : ""
                      }`,
                    }}
                    className={classNames(
                      "text-white text-[0.6rem]  sm:text-[0.8rem] 2xl:text-xl font-semibold text-center p-3 rounded-t-xl cursor-pointer ",
                      tabsClassName
                    )}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(activeIndex)}
                    onClick={() => setActiveIndex(index)}
                  >
                    {carousal.heading}
                  </div>
                ))}
                <hr
                  className={classNames(
                    "bg-[#079DFC] z-20 h-[0.3rem] w-full cursor-pointer hrclass border-none"
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
        <div className=" max-h-auto min-h-[100dvh] overflow-hidden  xl:min-h-[640px] relative flex flex-col space-y-8">
          {data?.map((cars: any, index: number) => (
            <div
              className=" absolute top-0  left-0 right-0 transition-transform duration-500 ease-in-out my-8 h-auto lg:h-[80%]  bg-black   overflow-hidden  mx-auto border-4 border-gray-800 rounded-3xl "
              style={{
                transform:
                  activeIndex === index
                    ? `translateY(${index * 0.8}rem)`
                    : activeIndex > index
                      ? `translateY(${(index - 1) * 1}rem)`
                      : "translateY(110%)",
                zIndex: activeIndex === index ? 1 : 1,
                opacity: activeIndex === index ? 1 : 0.98,
              }}
            >
              <div
                key={index}
                className="flex flex-col-reverse xl:flex-row w-full h-full "
              >
                <div className="w-full  xl:w-1/2 flex flex-col gap-2 lg:gap-6 bg-gray-900 ">
                  <div className="flex w-full  flex-col space-y-4 justify-center  mx-auto h-full pt-4 md:pt-24">
                    <div className=" max-w-[24rem]  h-full flex flex-col gap-2 mx-[1.5rem] mb-4 xl:mx-[3rem]">
                      <p className="text-base uppercase text-blue-azure font-semibold">
                        Solution
                      </p>
                      <h3
                        className={classNames(
                          h3ClassName,
                          "!text-start text-[1.2rem] lg:text-[2rem] lg:!text-left lg:!w-full "
                        )}
                      >
                        {cars.heading}
                      </h3>
                      <div className="text-2xl">
                        {cars.description ? (
                          <PortableText
                            value={[
                              {
                                _type: "block",
                                children: [
                                  {
                                    _type: "span",
                                    text: cars.description,
                                  },
                                ],
                                style: "normal",
                              },
                            ]}
                            components={PortableComponent}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                     
                      <div className="flex justify-center md:justify-start ">
                      <Link href={"/"}>
                      <Button
                          content={"Try For Free"}
                          btnClassName="!px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem]"
                          Icon={Arrow}
                          isLefticon={false}
                          iconClassName="!-mt-1"
                        />
                      </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center  xl:w-1/2">
                  <figure className=" w-full 3xl:w-3/4">
                  {cars.img && (
                    <Image
                      src={cars.img}
                      alt={`carousel-img-${index}`}
                      loading="lazy"
                    
                      className="w-full rounded-xl  md:rounded-none md:rounded-tr-xl"
                    />
                  )}
                </figure>
                </div>
              
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-2 flex justify-between items-center lg:justify-center gap-2">
          {!autoplay && (
            <>
              <ArrowLeftIcon
                className="text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + data?.length) % data?.length)
                }
              />
              <ArrowRightIcon
                className="text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % data?.length)
                }
              />
            </>
          )}
        </div> */}
      </section>
    </div>
    </div>
    </div>
  );
};
