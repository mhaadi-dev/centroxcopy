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
import classNames, { p3ClassName, p4ClassName } from "@/helpers/common";

const data = [
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    tabs: ["AI", "ML Ops", "AWS", "GANs", "CVS"],
    img: img,
  },
];
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
    <div className="slider-container h-auto  w-4/5 mx-auto lg:w-full ">
      <Slider ref={slider} {...settings} >
        {data.map((x, index) => {
          return (
            <div
              className="flex flex-col w-full h-full  border border-gray-300 p-4 rounded-2xl bg-gray-gray3 pb-12 hover:bg-gray-gray4   "
              key={index}

              // style={{
              //   boxShadow: "0px 0px 20px 0px #079DFC, 0px 0px 12px 0px #079DFC inset, 0px -8px 24px 0px rgba(128, 255, 219, 0.40) inset"
              // }}
            >
                <div className="h-60 w-full mx-auto relative">
              <Image
                src={img}
                fill
                className="   object-cover rounded-xl "
                alt="img-alt"
              />
              </div>
              <h4 className={classNames(p4ClassName,"mt-4 !w-full font-semibold ")}>
                How is AI going to change the industry standard for chatbot
                development
              </h4>
              <div className="flex gap-2 w-full flex-wrap mt-4">
                {x.tabs.map((y) => (
                  <div className="bg-gray-gray3 border border-gray-300 text-white px-2 py-1 rounded-lg">
                    {y}
                  </div>
                ))}
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

export default MultipleItems;
