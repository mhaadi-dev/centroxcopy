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
    <div className="w-full pb-10 relative">
    <section
      className={classNames(
        "flex pt-32 lg:pt-40 w-full 2xl:w-4/5 mx-auto pl-4 lg:pl-0   flex-col lg:flex-row gap-2 lg:gap-12 justify-between items-center",
        props.reverse ? "lg:!flex-row-reverse" : ""
      )}
    >
      <div className="flex">
         {props.bgimage1 && (
        <Image
          src={props?.bgimage1}
          className={classNames("w-1/2 h-full object-cover absolute top-4 right-0", props?.bgimage2? "w-1/2":"w-full",  props?.bgClassName)}
          alt="bg-img"
        />
      )}
         {props?.bgimage2 && (
        <Image
          src={props?.bgimage2}
          className={classNames("w-1/2 h-full object-cover  absolute left-0 top-4",props?.bgimage1? "w-1/2":"w-full",props?.bgClassName)}
          alt="bg-img"
        />
      )}
      </div>
     
      <div className="flex flex-col w-full lg:w-1/2 gap-8 gap-y-4 z-[1] ">
        <h1
          className={classNames(
            text_h1_main,
            "!text-left lg:!mx-0  lg:!w-full pr-2 "
          )}
        >
          {<><span className="bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text text-transparent">{props?.heading?.split(" ")?.slice(0,3)?.join(" ")}</span> <span>{props?.heading?.split(" ")?.slice(3)?.join(" ")}</span> </> ||props?.heading}
        </h1>
        <p
          className={classNames(
            text_para_2,
            "lg:!text-left px-2 lg:!mx-0 lg:!w-4/5"
          )}
        >
          {props?.description||"" }
        </p>
        {props?.btnText && (
          <div className="flex justify-start z-[1]">
            <CalendlyWidget btnText={props?.btnText || "Book FREE Strategy call"}  isArrow={true} />
          </div>
        )}
      </div>
      <div className={classNames("w-full lg:w-1/2 z-[1]",props?.className)}>
        {props?.img && (
          <Image
            src={props?.img}
            alt="hero-img"
            objectFit="fill"
            className="w-full xl:w-5/6 mx-auto rounded-2xl  "
          
          />
        )}
    
      </div>
     
    </section>
    </div>
  );
};
