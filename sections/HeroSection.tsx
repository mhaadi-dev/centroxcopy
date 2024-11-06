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
    <div className={classNames(" w-full pb-8   min-h-[80vh]  relative ")}>
      <section
        className={classNames(
          "flex mt-10 pt-[2rem] lg:pt-[6rem] xl:pt-[7rem]  w-[100%] 2xl:w-5/5  lg:pl-0    flex-col  lg:flex-row gap-y-6 lg:gap-0 justify-between items-center",
          props.reverse ? "lg:!flex-row-reverse" : "",
          props?.heroClassName
        )}
      >
        <div className="absolute  inset-0">
          {props.bgimage1 && (
            <Image
              src={props?.bgimage1}
              className={classNames(
                "h-full  object-cover  absolute top-4 right-0",
                props?.bgimage2 ? "w-1/2" : "w-full lg:w-1/2",
                props?.bgClassName
              )}
              alt="bg-img"
            />
          )}
          {props?.bgimage2 && (
            <Image
              src={props?.bgimage2}
              className={classNames(
                "h-full  object-cover   absolute left-0 top-4",
                props?.bgimage1 ? "w-1/2" : "w-full lg:w-1/2",
                props?.bgClassName
              )}
              alt="bg-img"
            />
          )}
        </div>
<section className="sm:w-auto px-6 sm:px-0 mx-auto flex flex-col gap-y-6 lg:flex-row items-center   justify-between sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[3.5rem] xl:mx-[4.5rem] 2xl:mx-[15rem] mt-8 lg:mt-12 2xl:mt-24">
  <div className="flex flex-col w-full z-[1] lg:w-1/2 gap-8 gap-y-4 ">
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
        <div className={classNames("w-full  flex justify-end  lg:w-1/2 z-[1] ", )} >
          {props?.img && (
            <Image
              src={props?.img}
              alt="hero-img"
              objectFit="fill"
              className="w-full object-fill opacity-100 xl:w-[90%] mx-a roudned-2xl  "
            />
          )}
        </div>
</section>
        
      </section>
    </div>
  );
};
