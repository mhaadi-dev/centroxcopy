import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import bannerBg from "@/assets/bannerBG.webp";
import Image from "next/image";
import { CalendlyWidget } from "./Calendly";
const IndustryBanner = (props?: any) => {
  return (
    <div
      className="text-white w-[90%]  lg:w-[75%] mx-auto px-8 py-8 rounded-2xl relative mt-4 flex flex-col justify-center"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gray-600/20 backdrop-blur-[5px] w-full md:w-[50%] flex flex-col gap-3 p-6 rounded-2xl">
        {props?.heading && (
          <h3 className="text-[1.5rem] font-semibold">
            {props?.heading} 
          </h3>
        )}
        {props?.description && (
          <p className="text-md">
            {" "}
            {props?.description} 
          </p>
        )}

        {props?.btnText && props?.isBooking ? (
          <div className="inline-block">
            {" "}
            <CalendlyWidget
              btnText={props?.btnText}
              isArrow
            />
          </div>
        ):props?.btnText && !props?.isBooking && <Button  content={props?.btnText}
        Icon={Arrow}
        className="mt-2 !py-[0.5rem] !px-[1rem] 2xl:!py-[1rem] 2xl:!px-[2rem]"
        iconClassName="!-mt-1"
        isLefticon={false}/>}
      </div>
    </div>
  );
};

export default IndustryBanner;
