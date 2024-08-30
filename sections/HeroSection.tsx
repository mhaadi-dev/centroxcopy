import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  h1className,
  sectionDiscriptions,
  sectionheadings,
  sectionHeadings,
  sectionsubheadings,
} from "@/helpers/common";

import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";

interface PropsI {
  heading: string;
  description: string;
  btnText?: string;
  includeDots?: any;
  img: any;
  reverse?: any;
}

import Image from "next/image";
export const HeroSection = (props: PropsI) => {
    console.log("include dots in hero section is",props.includeDots)
  return (
    <section
      className={classNames(
        "flex mt-24 lg:mt-40 w-4/5 mx-auto  flex-col lg:flex-row gap-12 justify-between items-center relative",
        props.reverse ? "lg:!flex-row-reverse" : ""
      )}
    >
      {props?.includeDots && (
        <Image
          src={bgImg}
          loading="lazy"
          className="w-full h-full object-cover absolute top-[10%] left-0"
          alt="bg-img"
        />
      )}
      <div className="flex flex-col w-full lg:w-1/2 gap-8 ">
        <h1
          className={classNames(
            h1className,
            "lg:!text-left lg:!mx-0 lg:!w-full "
          )}
        >
          {props?.heading}
        </h1>
        <p
          className={classNames(
            sectionsubheadings,
            "lg:!text-left lg:!mx-0 lg:!w-4/5"
          )}
        >
          {props?.description}
        </p>
        {props?.btnText && (
          <div className="flex justify-center lg:justify-start">
            <CalendlyWidget btnText={props.btnText} />
          </div>
        )}
      </div>
      <figure className="w-full  lg:w-1/2 flex justify-center relative  pt-[100%] lg:pt-[50%]  rounded-2xl ">
        {props?.img && (
          <Image
            src={props?.img}
            alt="hero-img"
            objectFit="fill"
            className="w-full h-full top-0 left-0 roudned-2xl  "
            fill
          />
        )}
      </figure>
    </section>
  );
};
