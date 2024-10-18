import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  h1className,
 
  sectionsubheadings,
  text_h1_main,
  text_h2_class,
  text_para_2,
} from "@/helpers/common";

import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";
import serviceHeroImg from "@/assets/serviceHeroImg.webp"

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
  return (
    <div className="w-full pb-10 relative">
    <section
      className={classNames(
        "flex mt-24 lg:mt-40 w-4/5 mx-auto  flex-col lg:flex-row gap-12 justify-between items-center ",
        props.reverse ? "lg:!flex-row-reverse" : ""
      )}
    >
      {props?.includeDots && (
        <Image
          src={bgImg}
          className="w-full h-full object-cover absolute top-4 left-0"
          alt="bg-img"
        />
      )}
      <div className="flex flex-col w-full lg:w-1/2 gap-8 gap-y-4 ">
        <h1
          className={classNames(
            text_h1_main,
            "!text-left lg:!mx-0  lg:!w-full "
          )}
        >
          {<><span className="bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text text-transparent">Engineering Custom LLMs</span> <span>from Ideation to Implementation</span> </> ||props?.heading}
        </h1>
        <p
          className={classNames(
            text_para_2,
            "lg:!text-left lg:!mx-0 lg:!w-4/5"
          )}
        >
          {"Overcome the limitations of generic LLMs. Centrox AI builds custom language models, fine-tuned on your data, to achieve superior performance and address your unique business challenges. Gain deeper insights, unlock new capabilities, and accelerate your AI initiatives." ||props?.description}
        </p>
        {props?.btnText && (
          <div className="flex  justify-start">
            <CalendlyWidget btnText={"Book FREE strategy call"||props.btnText} isArrow={true} />
          </div>
        )}
      </div>
      <figure className="w-full -mt-[1.5rem]  lg:w-1/2 flex justify-center relative  pt-[100%] lg:pt-[50%]  rounded-2xl ">
        {true && (
          <Image
            src={serviceHeroImg || props?.img}
            alt="hero-img"
            objectFit="fill"
            className="w-full h-full top-0 left-0 roudned-2xl  "
            fill
          />
        )}
      </figure>
    </section>
    </div>
  );
};
