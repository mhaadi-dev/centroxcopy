//@ts-nocheck
"use client";
import classNames, {
  h2ClassName,
  h3ClassName,
  p2ClassName,
  p3ClassName,
  sectionheadings,
  sectionSectionDescription,
  sectionsubheadings,
} from "@/helpers/common";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import useSize from "@/helpers/windowWidth";
import { useRouter } from "next/navigation";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { PortableText } from "@portabletext/react";
import { PortableComponent } from "@/Components/common/PortableText";

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

export const CustomCarousalSection = ({
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
  const router = useRouter();
  const { width } = useSize();

  useEffect(() => {
    setHoverIndex(activeIndex);
  }, [activeIndex]);

  let gridClass = `grid-cols-${data.length}`
  console.log("grid class is",gridClass)
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
  }, [autoplay, data.length]);
  console.log("data in cusotm carousal is ", data);
  return (
    <div
      style={{
        background: `${style ? "rgba(5, 110, 225, 0.03)" : ""}`,
        boxShadow: `${style ? "0px 0px 64px 8px rgba(5, 110, 225, 0.20)" : ""}`,
      }}
      className={classNames(
        "w-[85%] mx-auto mt-24 lg:mt-40 overflow-hidden rounded-xl",
        widthClassName
      )}
    >
      <section
        className={classNames(
          "w-full mx-auto flex flex-col  gap-8 lg:gap-12 rounded-xl relative py-4 px-2 lg:p-12"
        )}
        // style={{
        //   background: "rgba(5, 110, 225, 0.03)",
        // }}
      >
        {heading && (
          <>
            <h2 className={h2ClassName}>{heading}</h2>

            {/* <p className={sectionsubheadings}>
              Our data labeling services are tailored to accommodate a multitude
              of training datasets.
            </p> */}
          </>
        )}
        <div className="flex flex-col gap-2 w-[90%] mx-auto">
          {width && width > 900 && (
            <>
              <div className={classNames("grid ", colsClassName ,gridClass)}>
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
                      "text-white text-sm lg:text-md 2xl:text-xl font-semibold text-center p-3 rounded-t-xl cursor-pointer whitespace-nowrap",
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

        <div className="flex flex-col-reverse lg:flex-row w-[90%] gap-4 py-2 items-center mx-auto">
          {data?.map((cars: any, index: number) => {
            if (index === activeIndex) {
              return (
                <div
                  key={index}
                  className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-6"
                >
                  <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      h3ClassName,
                      "lg:!text-left lg:!w-full"
                    )}
                  >
                    {cars.heading}
                  </h3>
                  {/* <p
                    className={classNames(
                      p3ClassName,
                      "min-h-[7rem] "
                    )}
                  >
                    {cars.heading}
                  </p> */}
                  <div>
                  {cars.description ? (
                    <PortableText
                      value={cars.description}
                      components={PortableComponent}
                    />
                  ) : null}
                  </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <CalendlyWidget
                      btnText={cars.btnText}
                      btnClassName="!px-4"
                    />
                  </div>
                </div>
              );
            }
          })}
          <figure className="w-full lg:w-1/2 h-3/4 relative pt-[100%] lg:pt-[40%]   overflow-hidden  ">
            {data?.map((cars: any, index: number) => {
              return (
                cars.img && (
                  <Image
                    key={index}
                    src={cars.img}
                    alt={`carousel-img-${index}`}
                    loading="lazy"
                    fill
                    objectFit="fill"
                    className={classNames(
                      "w-full h-full top-0 left-0",
                      activeIndex === index ? "block" : "hidden"
                    )}
                  />
                )
              );
            })}
          </figure>
        </div>

        {!autoplay && (
          <>
            <ArrowRightIcon
              className="absolute top-1/2 right-10 text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in active:border-2 active:border-blue-500 hidden lg:block"
              onClick={() => setActiveIndex((prev) => (prev + 1) % data.length)}
            />
            <ArrowLeftIcon
              className="absolute top-1/2 left-10 text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in active:border-2 active:border-blue-500 hidden lg:block"
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
              }
            />
          </>
        )}

        <div className="mt-2 flex justify-between items-center lg:justify-center gap-2">
          {!autoplay && (
            <ArrowLeftIcon
              className="text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
              }
            />
          )}
          <div className="flex gap-2">
            {data?.map((_: any, index: number) => (
              <div
                key={index}
                className={classNames(
                  index === activeIndex
                    ? "bg-[#079DFC] w-12 h-2 rounded-2xl"
                    : "bg-gray-200 w-2 h-2 rounded-full"
                )}
              />
            ))}
          </div>
          {!autoplay && (
            <ArrowRightIcon
              className="text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
              onClick={() => setActiveIndex((prev) => (prev + 1) % data.length)}
            />
          )}
        </div>
      </section>
    </div>
  );
};
