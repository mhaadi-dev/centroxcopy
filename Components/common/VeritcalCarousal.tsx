"use client";
import Slider from "react-slick";

import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import classNames, { p3ClassName } from "@/helpers/common";

const Data = [
  {
    img: img,
    title: "Data Annotations",
  },
  {
    img: img,
    title: "Data Annotations",
  },{
    img: img,
    title: "Data Annotations",
  },{
    img: img,
    title: "Data Annotations",
  },{
    img: img,
    title: "Data Annotations",
  },{
    img: img,
    title: "Data Annotations",
  },{
    img: img,
    title: "Data Annotations",
  },
];

interface PropsI {
  isReverse?: boolean;
}
export const VerticalCarousal = ({ data, isReverse = false }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: isReverse ? -1 : 1,
    vertical: true,
    autoplay: true,
    arrows: false,
    pauseOnHover:false,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    verticalSwiping: true,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        {data?.map((x:any, index:number) => {
          return (
            <div className="bg-white rounded-2xl p-2 overflow-hidden h-80 mt-2 relative flex flex-col gap-12 items-center justify-center">
              <figure className="w-full h-[85%] relative">
                {x.img && 
                <Image alt={x.alt} src={x.img} className="object-fill rounded-2xl" fill 
                loading="lazy" />
                }
              </figure>
              <p className={classNames(p3ClassName,"mt-2 !w-full !text-black !font-semibold !text-center")}>{x.caption}</p>

            </div>
          );
        })}
      </Slider>
    </div>
  );
};
