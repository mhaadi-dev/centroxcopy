"use client";
import classNames, {
  sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";
import { useState } from "react";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";

interface DataI {
  title: string;
  img: any;
  details: {
    heading: string;
    description: string;
  }[];
}
interface PropsI {
  data: DataI[];
}

export const HorizentalBar = ({ data }: PropsI) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="mt-24 lg:mt-40 flex flex-col w-4/5 mx-auto gap-12">
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="flex flex-col w-full gap-12 lg:gap-0 lg:w-2/5 justify-between border-l-4 border-white">
          {data.map((x, index) => {
            return (
              <div className="flex gap-2 items-center">
                <hr
                  className={classNames(
                    "w-6 overflow-hidden h-1 text-red-600 bg-blue-bright border-blue-bright",
                    activeIndex === index ? "visible" : "invisible"
                  )}
                />
                <h3
                  className={classNames(
                    " font-semibold  hover:underline cursor-pointer text-2xl",
                    activeIndex === index ? "text-blue-bright" : "text-white"
                  )}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  {x.title}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row gap-8 p-4 border rounded-2xl w-full lg:w-3/5">
          <figure className="w-full boreder-2 border-red-200 lg:w-1/2  rounded-xl overflow-hidden h-60 lg:h-auto relative">
            {data.map((x, index) => {
              return (
                <Image
                  src={x.img}
                  alt="img"
                  fill
                  className={classNames(
                    "object-fill overflow-hidden ",
                    activeIndex === index ? "block" : "hidden"
                  )}
                  loading="eager"
                />
              );
            })}
          </figure>
          <div className="flex flex-col gap-12 py-12">
            <h2
              className={classNames(
                sectionsubheadings,
                "!text-left !w-full font-bold "
              )}
            >
              {data[activeIndex].title}
            </h2>
            {data[activeIndex].details.map((y, index) => {
              return (
                <div className="flex flex-col gap-2">
                  <h4 className="text-white font-semibold text-lg">
                    {y.heading}
                  </h4>
                  <h6 className="text-white">{y.description}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
