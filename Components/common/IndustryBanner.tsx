import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import bannerBg from "@/assets/bannerBG.webp";
import Image from "next/image";
import { CalendlyWidget } from "./Calendly";
import classNames, { section_wrapper_class, text_h3_class, text_para_3 } from "@/helpers/common";
const IndustryBanner = (props?: any) => {
  return (
    <div
      className={classNames(section_wrapper_class,"text-white  3xl:bg-cover px-3 py-3 lg:p-6 rounded-2xl relative mt-4 flex flex-col justify-center")}
      style={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gray-600/20 backdrop-blur-[5px] w-full md:w-[50%] flex flex-col gap-3 p-6 rounded-2xl">
        {props?.heading && (
          <h3 className={classNames(text_h3_class)}>
            {props?.heading} 
          </h3>
        )}
        {props?.description && (
          <p className={classNames(text_para_3)}>
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
