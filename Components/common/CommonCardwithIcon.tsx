"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from "@/assets/RightArrow.svg";
import classNames, { text_h4_class, text_para_2, text_para_3 } from "@/helpers/common";
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
  symbol=""
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className=" mx-auto flex w-full flex-col cursor-default h-full ">
      <div
        aria-label="centrox-services"
        className={classNames(
          "bg-gray-900 relative px-8 py-8 rounded-xl flex flex-1 flex-col gap-y-4 transition-all ease-in duration-200 h-full",
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
        {Icon && <Image loading="lazy" src={Icon} alt="Icon" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>}
        <div className="flex flex-col gap-y-4 flex-grow">
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
    </div>
  );
};

export default CommonCardwithIcon;
