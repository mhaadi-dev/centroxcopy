"use client";
import classNames, {
  sectionheadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
  sectionsubheadings,
} from "@/helpers/common";
import { useEffect, useState } from "react";
import textExtractionImg from "@/public/images/solvingdata/newtextExtaractionImg.webp";
import twodBoudingImg from "@/public/images/solvingdata/new2dBouncingBoxesimg.webp";
import ImageSegmentation from "@/public/images/solvingdata/newimagesegmentionimg.webp";
import RareEventImg from "@/public/images/solvingdata/newrareeventimg.webp";
import { Button } from "@/Components/Button.js/button";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import useSize from "@/helpers/windowWidth";
import { useRouter } from "next/navigation";

const CarousalData = [
  {
    title: "Text Extraction",
    description:
      "Our advanced NLP algorithms handles entity recognition, sentiment analysis, and context extraction, utilizing human-in-the-loop approaches to handle diverse datasets.",
    img: textExtractionImg,
  },
  {
    title: "2D Bounding Boxes",
    description:
      "We provide crucial identification and classification of object boundaries, even in complex and cluttered scenes for your AI application.",
    img: twodBoudingImg,
  },
  {
    title: "Image Segmentation",
    description:
      "By application of CNNs and FCNs we ensure that we handle your intricate AI project via segmentation process such as object detection and instance segmentation.",
    img: ImageSegmentation,
  },
  {
    title: "Rare Event Detection",
    description:
      "By focusing on anomalies we enhance the predictive capabilities of your models, enabling early detection of critical events.",
    img: RareEventImg,
  },
];

export const Carousal = () => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { width } = useSize();
  useEffect(() => {
    setHoverIndex(activeIndex);
  }, [activeIndex]);

  return (
    <>
      <div
        style={{
          background: "rgba(5, 110, 225, 0.03)",
          boxShadow: "0px 0px 64px 8px rgba(5, 110, 225, 0.20)",
        }}
        className=" w-[85%] mx-auto rounded-xl mt-24  lg:mt-60 overflow-hidden  "
      >
        <section
          className="w-full  mx-auto flex flex-col gap-8 rounded-xl relative py-4 px-2 lg:p-12 "
          style={{
            background: "rgba(5, 110, 225, 0.03)",
          }}
        >
          <h2 className={sectionheadings}>Solving Data for your needs</h2>
          <p className={sectionsubheadings}>
            Our data labeling services are tailored to accommodate a multitude
            of training datasets.
          </p>
          <div className="flex flex-col gap-2 w-[90%] mx-auto">
            {width && width > 900 && (
              <>
                <div className="grid grid-cols-4  ">
                  {CarousalData?.map((carousal, index) => {
                    return (
                      <div
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
                          "text-white text-sm lg:text-md 2xl:text-xl font-semibold text-center p-3 rounded-t-xl cursor-pointer"
                          // activeIndex === index ? "bg-gray-600" : "",
                          // hoverIndex === index ? "bg-[#0071B91A]" : ""
                        )}
                        onMouseEnter={() => {
                          setHoverIndex(index);
                        }}
                        onMouseLeave={()=>{
                          setHoverIndex(activeIndex)
                        }}
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                      >
                        {carousal.title}
                      </div>
                    );
                  })}
                  <hr
                    className={classNames(
                      "bg-[#079DFC] z-20 h-[0.3rem] w-full cursor-pointer hrclass border-none",
                      hoverIndex == 3
                        ? "ml-[300%]"
                        : hoverIndex == 2
                        ? "ml-[200%]"
                        : hoverIndex === 1
                        ? "ml-[100%]"
                        : ""
                    )}
                  />
                </div>
                <hr className="bg-white h-1 -mt-3" />
              </>
            )}
          </div>

          <div
                  className="flex flex-col-reverse lg:flex-row w-[90%] gap-2 py-2 items-center mx-auto"
                >
          {CarousalData?.map((cars, index) => {
            if (index === activeIndex) {
              return (
               
                  <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-6  " key={index}>
                    <h3 className="text-xl lg:text-4xl font-bold mt-4 lg:mt-0 text-white ">
                      {cars.title}
                    </h3>
                    <p
                      className={classNames(
                        sectionSectionDescription,
                        "  min-h-[7rem]"
                      )}
                    >
                      {cars.description}
                    </p>
                    <Button
                      content="Request a demo "
                      onClick={()=>{
                        router.push('/aiExpert')
                      }}
                      className="w-4/5 lg:w-2/5 mx-auto !rounded-full lg:mx-0 "
                    />
                  </div>
                 
              );
            }
          })}
            <div className="w-full  lg:w-1/2  flex justify-end overflow-hidden bg-black rounded-3xl">
                  <Image
                       src={CarousalData?.[0]?.img}
                       alt="carousal-img"
                       loading="eager"
                       className={classNames("w-full  object-cover h-full ", activeIndex === 0 ? "block" :"hidden")}
                     />
                       <Image
                       src={CarousalData?.[1]?.img}
                       alt="carousal-img"
                       loading="eager"
                       className={classNames("w-full  object-cover h-full", activeIndex === 1 ? "block" :"hidden")}
                     />
                       <Image
                       src={CarousalData?.[2]?.img}
                       alt="carousal-img"
                       loading="eager"
                       className={classNames("w-full  object-cover h-full", activeIndex === 2 ? "block" :"hidden")}
                     />
                       <Image
                       src={CarousalData?.[3]?.img}
                       alt="carousal-img"
                       loading="eager"
                       className={classNames("w-full  object-cover h-full", activeIndex === 3 ? "block" :"hidden")}
                     />
                   </div>
          
                </div>

          {width && width > 900 && (
            <ArrowRightIcon
              className="absolute top-1/2 right-10 text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in active:border-2 active:border-blue-500"
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % CarousalData?.length);
              }}
            />
          )}
          {width && width > 900 && (
            <ArrowLeftIcon
              className="absolute top-1/2 left-10 text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in active:border-2 active:border-blue-500"
              onClick={() => {
                setActiveIndex(
                  (prev) =>
                    (prev - 1 + CarousalData.length) % CarousalData.length
                );
              }}
            />
          )}
          <div className="mt-2 flex justify-between items-center  lg:justify-center gap-2 ">
            <ArrowLeftIcon
              className=" text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
              onClick={() => {
                setActiveIndex(
                  (prev) =>
                    (prev - 1 + CarousalData.length) % CarousalData.length
                );
              }}
            />
            <div className="flex gap-2">
            {CarousalData.map((x, index) => {
              return (
                <div
                  className={classNames(
                    "",
                    index === activeIndex
                      ? "bg-[#079DFC] w-12 h-2 rounded-2xl"
                      : "bg-gray-200 w-2 h-2 rounded-full"
                  )}
                />
              );
            })}
            </div>
            <ArrowRightIcon
              className=" text-white w-12 cursor-pointer p-2 rounded-full bg-[#3C3C3C] hover:scale-125 ease-in lg:hidden"
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % CarousalData?.length);
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};
