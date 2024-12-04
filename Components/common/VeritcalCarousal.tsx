"use client";
import Slider from "react-slick";

import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import classNames, { p3ClassName } from "@/helpers/common";




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
    pauseOnHover: false, 
    autoplaySpeed: 2000, 
    speed: 8000,
    cssEase: "linear",
    fade: false, 
    verticalSwiping: true,
    centerMode: true, 
    beforeChange: function (currentSlide:any, nextSlide:any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide:any) {
      console.log("after change", currentSlide);
    },
  };
  
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:-1,
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
    <div className="slider-container w-full overflow-hidden h-[30rem] flex  gap-x-6 ">
      <div className="w-full lg:w-1/2">
         <Slider {...settings}>
        {data?.map((x:any, index:number) => {
          return (
            <div key={index} className="bg-white rounded-2xl p-2 overflow-hidden h-80 w-80 mt-2 relative flex flex-col gap-12 items-center justify-center">
              
                {x.img && 
                <Image alt={x.alt} src={x.img} className="object-cover rounded-2xl" fill  
                loading="lazy" />
                }
          
              <p className={classNames(p3ClassName,"mt-2 !w-full !text-black !font-semibold !text-center")}>{x.caption}</p>

            </div>
          );
        })}
      </Slider>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Slider {...settings2}>
        {data?.map((x:any, index:number) => {
          return (
            <div key={index} className="bg-white rounded-2xl p-2 overflow-hidden h-80 mt-2 relative flex flex-col gap-12 items-center justify-center">
             
                {x.img && 
                <Image alt={x.alt} src={x.img} className="object-cover rounded-2xl" fill 
                loading="lazy" />
                }
             
              <p className={classNames(p3ClassName,"mt-2 !w-full !text-black !font-semibold !text-center")}>{x.caption}</p>

            </div>
          );
        })}
      </Slider>
      </div>
     
      
    </div>
  );
};
