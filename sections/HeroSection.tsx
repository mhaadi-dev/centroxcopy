import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  h1className,
  sectionsubheadings,
  text_h1_main,
  text_h2_class,
  text_para_2,
  text_para_3,
} from "@/helpers/common";

import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";

interface PropsI {
  heading: string;
  description: string;
  btnText?: string;
  includeDots?: any;
  img?: any;
  reverse?: any;
  className?: string;
  bgimage1?: any;
  bgimage2?: any;
  bgClassName?: string;
  isGradientText?: boolean;
  divider?:boolean
  tags?:boolean,
  heroClassName?:string
}

import Image from "next/image";
export const HeroSection = ({isGradientText=true,divider=false,tags=false,...props}: PropsI) => {
  return (
    <div className={classNames("w-full pb-10 relative")}>
      <section
        className={classNames(
          "flex pt-32 lg:pt-40  w-[90%] 2xl:w-4/5 mx-auto lg:pl-0   flex-col lg:flex-row gap-y-6 lg:gap-12 justify-between items-center",
          props.reverse ? "lg:!flex-row-reverse" : "",
          props?.heroClassName
        )}
      >
        <div className="flex">
          {props.bgimage1 && (
            <Image
              src={props?.bgimage1}
              className={classNames(
                "w-1/2 h-full object-cover absolute top-4 right-0",
                props?.bgimage2 ? "w-1/2" : "w-full",
                props?.bgClassName
              )}
              alt="bg-img"
            />
          )}
          {props?.bgimage2 && (
            <Image
              src={props?.bgimage2}
              className={classNames(
                "w-1/2 h-full object-cover  absolute left-0 top-4",
                props?.bgimage1 ? "w-1/2" : "w-full",
                props?.bgClassName
              )}
              alt="bg-img"
            />
          )}
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-8 gap-y-4 ">
          <h1
            className={classNames(
              text_h1_main,
              "!text-left lg:!mx-0  lg:!w-full pr-2 "
            )}
          >
            {isGradientText &&( (
              <>
                <span className="bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text text-transparent">
                  {props?.heading?.split(" ")?.slice(0, 3)?.join(" ")}
                </span>
                <span> {props?.heading?.split(" ")?.slice(3)?.join(" ")}</span>
              </>
            )) ||
              props?.heading}
          </h1>
          <p
            className={classNames(
              text_para_2,
              "lg:!text-left px-1 lg:!mx-0 lg:!w-4/5"
            )}
          >
            {props?.description || ""}
          </p>
          {divider && <div className="h-[2px] w-full bg-gradient-to-r from-black via-white to-black"></div>}
        
          {tags && <section aria-label="centrox case studies tags" className=" w-full flex-wrap flex justify-between items-center gap-4 mt-0 2xl:mt-0">
            <div className="flex  gap-x-2">
                <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.5rem] text-white  text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AI</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> ML Ops</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AWS</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> GANs</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> CVS</div>
            </div>
            <div className="flex gap-x-2">
              <p className={classNames(text_para_3,"font-semibold")}>Product</p>
              <p className={classNames(text_para_3,"!text-[0.9rem]")}>20min read</p>
            </div>
           
          </section>}
          {props?.btnText && (
            <div className="flex justify-start z-[1]">
              <CalendlyWidget
                btnText={props?.btnText || "Book FREE Strategy call"}
                isArrow={true}
              />
            </div>
          )}
        </div>
        <div className={classNames("w-full lg:w-1/2 z-[1] ", props?.className)} >
          {props?.img && (
            <Image
              src={props?.img}
              alt="hero-img"
              objectFit="fill"
              className="w-full  opacity-100 xl:w-5/6 mx-auto roudned-2xl  "
            />
          )}
        </div>
      </section>
    </div>
  );
};
