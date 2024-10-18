import { CalendlyWidget } from "@/Components/common/Calendly";
import classNames, {
  h2ClassName,
  h3ClassName,
  h4ClassName,
  p2ClassName,
  p3ClassName,
  p4ClassName,
  section_wrapper_class,
  sectionheadings,
  sectionSectionDescription,
  text_h3_class,
  text_para_2,
  text_para_3,
 
} from "@/helpers/common";

import dataImg from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import advantages from "@/assets/advantages.webp"
import SectionHeader from "@/Components/common/SectionHeader";



export const PointsandImagesSection = ({
  data,
  heading,
  description,
  mainHeading,
  mainDescription,
  subDescription,
  bgImge,
  button = "Book Free 1:1 Session",
  img,
  gradient,
  reverse,
  bgShape,
}: any) => {
      const arrayData =[
        {
          heading:"Focus on Core Innovation​​​​‌‍​‍​‍‌‍‌​‍‌‍‍‌‌‍‌‌‍‍‌‌‍‍​‍​‍​‍‍​‍​‍‌​‌‍​‌‌‍‍‌‍‍‌‌‌​‌‍‌​‍‍‌‍‍‌‌‍​‍​‍​‍​​‍​‍‌‍‍​‌​‍‌‍‌‌‌‍‌‍​‍​‍​‍‍​‍​‍​‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‍‌‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‍‌‌‌‍‌​‌‍‍‌‌‌​​‍‌‍‌‌‍‌‍‌​‌‍‌‌​‌‌​​‌​‍‌‍‌‌‌​‌‍‌‌‌‍‍‌‌​‌‍​‌‌‌​‌‍‍‌‌‍‌‍‍​‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​​​‌‍​​‌‌​​‍​‌‌​‍‌‌‍​‍​​‌​​​‍‌‌‍‌‍​‍‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‌‍​‍‌‍​‌‌​‌‍‌‌‌‌‌‌‌​‍‌‍​​‌​‍‌‌​​‍‌​‌‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​​​‌‍​​‌‌​​‍​‌‌​‍‌‌‍​‍​​‌​​​‍‌‌‍‌‍​‍‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‍​‍‌‌",
          description:"Free up your internal resources to focus on your core product and research, while we handle the complexities of LLM engineering. This allows you to accelerate your development cycles and bring your AI innovations to market faster."
        },
        {
         heading:"Achieve Superior Performance",
         description:"Leverage fine-tuned models that outperform generic solutions, delivering higher accuracy, relevance, and efficiency. This translates to better user experiences, improved decision-making, and increased business value.​​"
        },
        {
           heading:"Unlock New Capabilities",
           description:"Build intelligent automation, generative AI tools, research assistants, and more, expanding your AI toolkit and opening up new possibilities for your product or service.​​"
        },
      {
       heading:"Mitigate Risks",
       description:"Address challenges like bias, data security, and scalability with our expertise and proven processes. We ensure your AI solutions are robust, reliable, and compliant with industry standards."
      },
      {
        heading:"Gain a Competitive Edge​​​​‌‍​‍​‍‌‍‌​‍‌‍‍‌‌‍‌‌‍‍‌‌‍‍​‍​‍​‍‍​‍​‍‌​‌‍​‌‌‍‍‌‍‍‌‌‌​‌‍‌​‍‍‌‍‍‌‌‍​‍​‍​‍​​‍​‍‌‍‍​‌​‍‌‍‌‌‌‍‌‍​‍​‍​‍‍​‍​‍​‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‍‌‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‍‌‌‌‍‌​‌‍‍‌‌‌​​‍‌‍‌‌‍‌‍‌​‌‍‌‌​‌‌​​‌​‍‌‍‌‌‌​‌‍‌‌‌‍‍‌‌​‌‍​‌‌‌​‌‍‍‌‌‍‌‍‍​‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​‌‌​‌​​​‌​​‍​​‌‍​‌‍​​‍​​​‍​​​​​‌​‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‌‍​‍‌‍​‌‌​‌‍‌‌‌‌‌‌‌​‍‌‍​​‌​‍‌‌​​‍‌​‌‍‌​‌‌​‌‌‌‌‍‌​‌‍‍‌‌‍​‍‌‍‌‍‍‌‌‍‌​​‌​​‌‍​‌​​‌​​‌​​‍‌‍​‌​‌​‌‍‌‍​‍‌‌‍‌‌‌‍‌​​​​​​​​‍‌​‌​​​​​‌​‌‍​‍‌‌‍​‌‌‍​‌‍‌‍‌‍​‍​‍‌​​​‌‌‌‍‌​​‌​‌‍‌‍‌‍​‌‌‍‌‍​​‌​​‍​‌‍​‌​​​‌​‍‌‍‌‌​‌‍‌‌​​‌‍‌‌​‌‌​‌‍‌‌‌​‍‌‌‍‌‍‍‌‌‍​‌‍‌‌‌​‌‌​​‌‍​‌‌‍‌‌‍‌‌‌​​‍‌‍‌​​‌‍​‌‌‌​‌‍‍​​‌‌‌‌‍‍​‌‍‌‌‌‌‌‌​‌‌​‌‍‌‌‌‍​‌‌​‌‍‍‌‌‍‌‍‍​‍‍‌‍​‌‍‌‍‍‌‌​‌‍‌‌‌‍‍‌‌​​‍‌‌​‌‌‌​​‍‌‌‌‍‍‌‍‌‌‌‍‌​‍‌‌​​‌​‌​​‍‌‌​​‌​‌​​‍‌‌​​‍​​‍​‌‌​‌​​​‌​​‍​​‌‍​‌‍​​‍​​​‍​​​​​‌​‌​‍‌‌​​‍​​‍​‍‌‌​‌‌‌​‌​​‍‍‌‍‍​‌‍‌‌‌‍​‌‌‍‌​‌‍‍‌‌‍‍‌‍‌​‍​‍‌‌",
        description:"Leverage the power of custom LLMs to differentiate your product, provide unique value to your customers, and stay ahead of the competition in the rapidly evolving AI landscape."
      }
      ]
  return (
    <div
      className="relative overflow-hidden mt-8 pb-12 "
      style={{
        backgroundImage: gradient
          ? "radial-gradient(60.34% 71.45% at 60.94% 3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)"
          : "",
        backgroundRepeat: gradient ? "no-repeat" : "",
        backgroundColor: gradient ? "#000000" : "",
      }}
    >
      {bgShape && (
        <div
          className="h-full w-3/4 absolute rotate-[130deg] -right-[20%] top-[40%]  bottom-0    bg-green-200 "
          style={{
            background: "rgba(7, 157, 252, 0.10)",
            fill: "rgba(7, 157, 252, 0.10)",
            strokeWidth: "4px",
            stroke: "rgba(7, 157, 252, 0.10)",
            backdropFilter: "blur(8px)",
          }}
        />
      )}{" "}
      {bgImge && (
        <div
          className="h-full w-3/4 absolute rotate-[130deg] -right-[20%] top-[40%]  bottom-0    bg-green-200 "
          style={{
            background: "rgba(7, 157, 252, 0.10)",
            fill: "rgba(7, 157, 252, 0.10)",
            strokeWidth: "4px",
            stroke: "rgba(7, 157, 252, 0.10)",
            backdropFilter: "blur(8px)",
          }}
        />
      )}{" "}
      <section className={classNames(section_wrapper_class)}>
        {/* <div className="flex flex-col gap-2 lg:gap-8">
          <h2 className={h2ClassName}>{data?.heading}</h2>

          <h4 className={classNames(p2ClassName, "lg:!text-center  ")}>
            {data?.description}
          </h4>
        </div> */}
            <SectionHeader headingText="What You Gain" tagText="advantages" para1Text="Partnering with Centrox AI for custom LLM development empowers your team to:"/>

        <div
          className={classNames(
            "flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mt-6 lg:mt-12 ",
            true ? "lg:!flex-row-reverse" : ""
          )}
        >
          <figure className="w-full lg:w-1/2 relative pt-[100%] lg:pt-[50%] z-10 ">
            {true && (
              <Image
                src={advantages||data?.img}
                alt="hero-img "
                className="object-fill w-full h-full"
                objectFit="fill"
                fill
                loading="lazy"
              />
            )}
          </figure>
          <div className="w-ful lg:w-1/2 flex flex-col gap-6 lg:gap-12 z-10">
            {/* <h2
              className={classNames(
                sectionheadings,
                "lg:!mx-0 lg:!w-full lg:!text-left"
              )}
            >
              {heading}
            </h2>
            <p
              className={classNames(
                sectionSectionDescription,
                "lg:!mx-0 lg:!w-full lg:!text-left"
              )}
            >
              {description}
            </p>
            {subDescription && (
              <p
                className={classNames(
                  text_para_3,
                  "!text-[#D1D5DB]"
                )}
              >
                {subDescription}
              </p>
            )} */}
            <div className="flex flex-col gap-6">
              {arrayData?.map((el: any, index: number) => {
                return (
                  <div className="flex gap-2 items-start " key={index}>
                    {el.icon && (
                      <Image
                        src={el.icon}
                        className="w-6 mt-[0.4rem]"
                        alt="icons"
                      />
                    )}
                    <div className="w-full flex flex-col  gap-2  ">
                      <h4
                        className={classNames(
                          text_h3_class,
                          "lg:!w-full lg:!text-left"
                        )}
                      >
                        {el.heading}
                      </h4>
                      <p className={text_para_2}>{el.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {button && (
              <div className="flex justify-center lg:justify-start">
                <CalendlyWidget btnText={data?.btntext} isArrow={true} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
