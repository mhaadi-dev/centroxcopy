"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from "@/assets/RightArrow.svg";
import classNames, { text_h4_class, text_para_2, text_para_3 } from "@/helpers/common";
import dummyDisplay from "@/assets/dummyDisplay.webp"
import industryPic1 from "@/assets/industry3.webp";


interface CardProps {
  Icon?: any;
  heading?: string;
  description?: string;
  linkText?: string;
  linkWithIcon?: boolean;
  link?: string;
  className?: string;
  isGradientBg?: boolean;
  headingClassName?:string
  symbol?:string
  colSpan?:number
}

const CommonResizeableCard = ({
  Icon,
  heading,
  description,
  linkText,
  linkWithIcon,
  className = "",
  isGradientBg = false,
  link = "",
  headingClassName="",
  symbol="",
  colSpan
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={classNames("mx-auto flex w-full flex-col cursor-default h-full",colSpan == 2 ? ` col-span-1 lg:col-span-${colSpan}` : "") }>
      <div
        aria-label="centrox-services"
        className={classNames(
          "bg-gray-900 relative px-8 py-8 rounded-xl  flex  flex-col gap-y-4 transition-all ease-in duration-200 h-full",
          className,colSpan ? "lg:flex-1":""
        )}
        style={{
          background:
            isHovering || isGradientBg
              ? "linear-gradient(90deg, rgba(5, 110, 225, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%)"
              : "",
          border:
            isHovering || isGradientBg
              ? " 1px solid  #111F28"
              : " 1px solid  #111F28",
          boxSizing: "border-box",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {colSpan == 2 ? <div className="flex items-center  justify-center flex-col  lg:flex-row gap-8">
        <div className=" min-h-[200px]  lg:min-w-[360px] lg:h-auto">
        <div className="">
        <Image src={industryPic1} className="w-[360px] h-[250px]" alt="photo"></Image>
        </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 lg:w-1/2">
        {Icon && <Image loading="lazy" src={Icon} alt="Icon" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>}
        <div className="flex flex-col gap-y-2 lg:gap-y-4 flex-grow">
          <p className={classNames(text_h4_class,headingClassName)}>{heading}{symbol && <span className={classNames(text_para_2)}>{symbol}</span> }</p>
          <p className={classNames(text_para_3)}>{description}</p>
        </div>
        {linkText && (
          <Link
            href={link || ""}
            className="flex gap-x-2 text-gray-light hover:text-blue-azure mt-auto"
          >
            {linkText}{" "}
            {linkWithIcon && (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width={24}
                height={24}
              >
                <path
                  fill="currentColor"
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            )}
          </Link>
        )}
        </div>
        
        </div> : <>{Icon && <Image loading="lazy" src={Icon} alt="Icon" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>}
        <div className="flex flex-col gap-y-2 lg:gap-y-4 flex-grow">
          <p className={classNames(text_h4_class,headingClassName)}>{heading}{symbol && <span className={classNames(text_para_2)}>{symbol}</span> }</p>
          <p className={classNames(text_para_3)}>{description}</p>
        </div>
        {linkText && (
          <Link
            href={link || ""}
            className="flex gap-x-2 text-gray-light hover:text-blue-azure mt-auto"
          >
            {linkText}{" "}
            {linkWithIcon && (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width={24}
                height={24}
              >
                <path
                  fill="currentColor"
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            )}
          </Link>
        )} </>}
     
      </div>
    </div>
  );
};

export default CommonResizeableCard;
