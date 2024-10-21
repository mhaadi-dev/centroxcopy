"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from "@/assets/RightArrow.svg";
import classNames, { text_h4_class, text_para_3 } from "@/helpers/common";

interface CardProps {
  Icon?: any;
  heading?: string;
  description?: string;
  linkText?: string;
  linkWithIcon?: boolean;
  link?:string
  className?:string
  isGradientBg?:boolean
}

const CommonCardwithIcon = ({
  Icon,
  heading,
  description,
  linkText,
  linkWithIcon,
  className="",
  isGradientBg = false,
  link=""
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className=" mx-auto flex flex-col cursor-default ">
      <div
        aria-label="centrox-services"
        className={classNames("bg-gray-900 relative px-8 py-8 rounded-xl flex flex-col gap-y-4 transition-all ease-in duration-200 h-[auto] 2xl:h-[26rem]",className)}
        style={{
          background: isHovering || isGradientBg
            ? "radial-gradient(39.43% 34.74% at -0.94% 0%, rgba(7, 157, 252, 0.18) 0%, rgba(4, 93, 150, 0.06) 100%), #060606"
            : "",
          border: isHovering ||isGradientBg
            ? "1px solid rgba(6, 119, 230, 0.8)"
            : "1px solid transparent",
          boxSizing: "border-box",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {Icon && <Image loading="lazy" src={Icon} alt="Icon" />}
        <div className="flex flex-col gap-y-4">
          <p className={classNames(text_h4_class)}>{heading}</p>
          <p className={classNames(text_para_3)}>{description}</p>
        </div>
       {linkText &&  <div className="flex items-center gap-2 text-gray-light hover:text-blue-azure ">
          <Link href={link || ""}>{linkText}</Link>
          {linkWithIcon && <Image src={Arrow} alt="arrow" />}
        </div>}
      </div>
    </div>
  );
};

export default CommonCardwithIcon;
