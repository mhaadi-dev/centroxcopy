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
import classNames, { h3ClassName, p4ClassName } from "@/helpers/common";

const mewdata = [
  {
    title:
      "How is AI going to change the industry standard for chatbot development",
    product:"Product",
    date:"18-August-2024",
    img: img,
  },
  
  
  
 
];
export const ProductsCarousal = ({data}:any) => {
  console.log("data in products sectoin is",data)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
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
    <div className="slider-container h-auto w-4/5 mx-auto lg:w-full  ">
      <Slider ref={slider} {...settings} >
        {data?.map((x, index) => {
          return (
            <div
              className="flex flex-col w-full h-full    p-4 rounded-2xl bg-gray-gray4   hover:bg-[#079DFC1A] "
              key={index}
            >
                <div className="h-80  w-full mx-auto relative ">
             {x.img  && <Image
                src={x.img}
                fill
                className="   object-fill rounded-xl "
                alt="img-alt"
              />} 
              </div>
              <h4 className={classNames(p4ClassName,"h-16 mt-4")}>
               {x.title}
              </h4>
              <div className="flex gap-2 w-full justify-between mt-4">
                <h3 className={classNames(p4ClassName,"!font-semibold !text-left !text-blue-bright")}>
                  {x.category}
                </h3>
                <h3 className={classNames(p4ClassName,"font-semibold text-white")}>
                  {x.date}
                </h3>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex w-4/5 mx-auto  justify-between lg:justify-start lg:gap-4 absolute lg:left-0  bottom-0">
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

