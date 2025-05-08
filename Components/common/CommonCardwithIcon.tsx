"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from "@/assets/RightArrow.svg";
import classNames, { text_h2_class, text_h3_class, text_h4_class, text_para_2, text_para_3, text_para_main } from "@/helpers/common";
import { Span } from "next/dist/trace";

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
  alt?:string
}

const CommonCardwithIcon = ({
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
  alt=""
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
      <div
        aria-label="centrox-services"
        className={classNames(
          "bg-gray-900 mx-auto  relative py-6 px-6 lg:px-8 lg:py-8 rounded-xl flex flex-1 flex-col gap-y-4 transition-all ease-in duration-200 h-full",
          className
        )}
        style={{
          background:
            isHovering || isGradientBg
              ? "radial-gradient(39.43% 34.74% at -0.94% 0%, rgba(7, 157, 252, 0.18) 0%, rgba(4, 93, 150, 0.06) 100%), #060606"
              : "",
          border:
            isHovering || isGradientBg
              ? "1px solid rgba(6, 119, 230, 0.8)"
              : "1px solid transparent",
          boxSizing: "border-box",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {Icon && <Image loading="lazy" src={Icon} width={64} height={64} alt={alt} className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>}
        <div className="flex  flex-col gap-y-1 flex-grow">
          <h4 className={classNames("text-[#E5E7EB] text-[1rem] 2xl:text-[1.5rem] font-heading font-semibold leading-[1.26rem] 2xl:leading-[1.89rem]",headingClassName)}>{heading}{symbol && <span className={classNames(text_h2_class)}>{symbol}</span> }</h4>
          <p className={classNames(text_para_3)}>{description}</p>
        </div>
        {linkText && (
          <Link
            href={link || ""}
            className="flex gap-x- items-center text-gray-light hover:text-blue-azure mt-auto "
          >
            {linkText}{" "}
            {linkWithIcon && (
          <span className="text-4xl -mt-3">&#8594;</span>
            )}
          </Link>
        )}
      </div>
    
  );
};

export default CommonCardwithIcon;
