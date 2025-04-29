//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftIcon from "@/public/images/template/carousalLeftArrow.svg";
import rightIcon from "@/public/images/template/carousalRightArrow.svg";
import classNames from "@/helpers/common";
import CommonCard from "./CommonCard";
import { calculateReadingTime, reSlugify, slugify } from "@/sanity/lib/helpers";

export const ProductsCarousal = ({ data }: any) => {
  const [isClient, setIsClient] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log("DATA IN SIMILAR BLOGS", data);

  const slider = React.useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="sm:max-w-[1681px] flex flex-col overflow-hidden mx-[0rem] my-5 sm:-mr-[15rem] 3xl:mx-auto min-h-[300px]">
          <Slider ref={slider} {...settings}>
            {data?.map((x, index) => {
              const newLink = `/blogs/${slugify(x?.category?.category_name)}/${slugify(x?.label?.current)}`;
              return (
                <div key={index} className="flex flex-col h-full px-2">
                  <CommonCard
                    label={reSlugify(x?.label?.current)}
                    linkText={x?.content_item?.linkText || "Learn more"}
                    linkWithIcon={x.content_item?.linkWithIcon}
                    link={newLink}
                    subdescription={x?.meta_description}
                    title={x?.content_item?.banner_data?.banner_heading}
                    category={x?.category?.category_name}
                    date={x.content_item?.date}
                    image={x.content_item?.image?.image}
                    tags={x.content_item?.tags}
                    duration={calculateReadingTime(x?.content_item?.blog_data)}
                  />
                </div>
              );
            })}
          </Slider>

          <div className="flex mt-2 md:mt-4 justify-center md:justify-start gap-6">
            <Image
              src={leftIcon}
              onClick={() => slider?.current?.slickPrev()}
              className="w-12 cursor-pointer"
              alt="left-icon"
              loading="lazy"
            />
            <Image
              src={rightIcon}
              onClick={() => slider?.current?.slickNext()}
              className="w-12 cursor-pointer"
              alt="right-ci"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};