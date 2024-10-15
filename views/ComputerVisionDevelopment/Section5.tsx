"use client"
import classNames, { sectionheadings, sectionsubheadings } from "@/helpers/common";
import Image from "next/image";

import checkicon from "@/public/images/datavalidation/CheckCircle.svg"


const data = [
  {
    title: "Deep Learning Frameworks",
    imgs: [checkicon,checkicon,checkicon,checkicon]
 
  },
  {
    title: "Computer Vision Libraries",
    imgs: [checkicon,checkicon,checkicon,checkicon]

  },
  {
    title: "Cloud Platforms",
    imgs: [checkicon,checkicon,checkicon,checkicon]

  },
  {
    title: "Data Version Control & Management",
    imgs: [checkicon,checkicon,checkicon,checkicon]

  },
];
export const ComputerVisionSection5 = () => {
  return (
    <section className="flex flex-col mt-24 lg:mt-40 w-4/5 mx-auto gap-8">
      <h2 className={sectionheadings}>Our Computer Vision Toolkit</h2>
      <h5 className={sectionsubheadings}>We leverage a powerful combination of the latest tools and frameworks to build, train, and deploy your CV models</h5>

      <div  className="grid grid-cols-2 gap-6">
        {data.map((el,index)=>{
            return (<div className="rounded-3xl py-8 w-full border-2 bg-gray-800 " >
                <div className="flex flex-col gap-12">
                    <div className="flex justify-around">
                        {el.imgs.map((img,index)=><div className={classNames("w-full  flex justify-center  py-4 " ,index !== el.imgs.length-1 ? "border-r-2 " : "")} ><Image src={img} alt="img " className="w-12"/></div>
                      )}
                    </div>
                    <h2 className={classNames(sectionsubheadings,"!font-semibold")}>{el.title}</h2>
                    </div>
            </div>)
        })}
      </div>
    </section>
  );
};
