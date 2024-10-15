//@ts-nocheck
"use client";
import React from "react";
import Slider from "react-slick";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftIcon from "@/public/images/template/carousalLeftArrow.svg";
import rightIcon from "@/public/images/template/carousalRightArrow.svg";
import classNames, { h3ClassName, p3ClassName, p4ClassName } from "@/helpers/common";

const data = [
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
  {
    title:
      "Machine Learning",
    description:"Centrox excels in human expertise to maintain the highets quality standard. We enhance the accuracy."
  },
];
export const ServiceCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const slider = React.useRef(null);

  return (
    <div className="slider-container h-auto  w-4/5 mx-auto lg:w-full  ">
      <Slider ref={slider} {...settings} >
        {data.map((x, index) => {
          return (
            <div
              className="flex flex-col w-full h-full   border   rounded-2xl bg-gray-gray3 p-6 hover:bg-gray-gray4   "
              key={index}
            >

             
              <div className="flex gap-2 w-full mt-4 flex-col ">
                <h3 className={classNames(h3ClassName,"lg:!w-full , lg:!text-left") }>
                  {x.title}
                </h3>
                <h3 className={p4ClassName}>
                  {x.description}
                </h3>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex w-4/5 mx-auto  justify-between lg:justify-start lg:gap-4 absolute lg:left-0  bottom-0 ">
        <Image
          src={leftIcon}
          onClick={() => slider?.current?.slickPrev()}
          className="w-12 cursor-pointer"
          alt="left-icon"
        />
        <Image
          src={rightIcon}
          onClick={() => slider?.current?.slickNext()}
          className=" w-12 cursor-pointer"
          alt="right-ci"
        />
      </div>
    </div>
  );
}

