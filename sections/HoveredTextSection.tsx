"use client";
import classNames, { h2ClassName, p2ClassName, p3ClassName, sectionheadings } from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    img: img,
    title: "Fine Tech",
    hoveredPoints: ["This is bullet 1", "This is bullet 2", "This is bullet 3"],
  },
  {
    img: img,
    title: "Fine Tech",
    hoveredPoints: ["This is bullet 1", "This is bullet 2", "This is bullet 3"],
  },
  {
    img: img,
    title: "Fine Tech",
    hoveredPoints: ["This is bullet 1", "This is bullet 2", "This is bullet 3"],
  },
  {
    img: img,
    title: "Fine Tech",
    hoveredPoints: ["This is bullet 1", "This is bullet 2", "This is bullet 3"],
  },
];

export const HoveredTextSection = ({heading,data}:any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  console.log("data in hovereds eciotn is",data);
  console.log("hovered index is", hoveredIndex);
  return (
    <section className="mt-24 lg:mt-40 flex flex-col gap-12 w-4/5 mx-auto">
      <h2 className={h2ClassName}>{heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {data?.map((x:any, index:any) => {
          return (
            <div className="flex flex-col gap-2 w-full overflow-hidden">
              <figure
                className=" h-80 lg:h-60  2xl:h-96 w-full relative rounded-xl    "
                onMouseEnter={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(data.length);
                }}
              >
                {index === hoveredIndex && (
                  <div    className={`absolute flex flex-col gap-4 w-full h-full bg-black z-10 transition-all duration-00 ease-in-out justify-center items-center cursor-pointer text-xl
                  ${
                    index === hoveredIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}>
                    {x?.details?.map((points:any,idx:any)=>{
                        return (<div className="flex gap-12 items-center">
                            {/* <div className=" w-4 h-4 rounded-full text-red-200"/> */}
                            <p className="text-white font-bold">{points}</p>
                        </div>)
                    })}
                  </div>
                )}
              {x.img &&   <Image
                  src={x.img}
                  alt="img-alt"
                  className="object-fill "
                  fill
                />
              } 
              </figure>
              <p className={classNames(p3ClassName,"underline !text-center !w-full")}>{x.caption}</p>
            </div>
          );
        })}
      </div>
      {}
    </section>
  );
};
