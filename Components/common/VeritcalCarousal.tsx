"use client";
import Slider from "react-slick";

interface PropsI{
  isReverse?:boolean
}
export const VerticalCarousal = ({isReverse = false}:PropsI) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: isReverse ? -1 : 1,
    vertical: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    verticalSwiping: true,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container w-full border-2">
      <Slider {...settings}>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>a</h3>
        </div>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>s</h3>
        </div>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>d</h3>
        </div>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>f</h3>
        </div>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>g</h3>
        </div>
        <div className=" bg-green-200 h-24 mt-8">
          <h3>h</h3>
        </div>
      </Slider>
    </div>
  );
};
