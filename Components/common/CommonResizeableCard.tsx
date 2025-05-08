"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classNames, { text_h4_class, text_para_2, text_para_3 } from "@/helpers/common";

interface CardProps {
  Icon?: any;
  heading?: string;
  description?: string;
  linkText?: string;
  linkWithIcon?: boolean;
  link?: string;
  className?: string;
  isGradientBg?: boolean;
  headingClassName?: string;
  symbol?: string;
  colSpan?: number;
  reverse?: boolean;
  bentoImage?: any; // Can be string, static import, or { src: string, alt: string }
  altText?: string;
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
  headingClassName = "",
  symbol = "",
  colSpan,
  reverse = false,
  bentoImage = null,
  altText = "",
}: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  // Normalize bentoImage to extract src if it's an object
  const bentoImageSrc = typeof bentoImage === "object" && bentoImage?.src ? bentoImage.src : bentoImage;

  return (
    <div
      className={classNames(
        "mx-auto flex w-full flex-col cursor-default h-full",
        colSpan == 2 ? `col-span-1 lg:col-span-${colSpan}` : ""
      )}
    >
      <div
        aria-label="centrox-services"
        className={classNames(
          "bg-gray-900 relative px-8 py-8 rounded-xl flex flex-col gap-y-2 transition-all ease-in duration-200 h-full",
          className,
          colSpan ? "lg:flex-1" : ""
        )}
        style={{
          background:
            isHovering || isGradientBg
              ? "linear-gradient(90deg, rgba(5, 110, 225, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%)"
              : "",
          border: "3px solid #404040",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {colSpan == 2 ? (
          <div
            className={classNames(
              "flex items-center justify-start flex-col lg:flex-row gap-4 lg:gap-6",
              reverse ? "lg:flex-row-reverse justify-evenly" : ""
            )}
          >
            <div className="min-h-[150px] flex lg:min-w-[360px] lg:h-auto">
              <div className="w-full">
                {bentoImageSrc && (
                  <Image
                    loading="lazy"
                    src={bentoImageSrc}
                    width={360}
                    height={250}
                    className=""
                    alt={altText}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2 lg:w-1/2">
              {Icon && (
                <Image
                  loading="lazy"
                  src={typeof Icon === "object" && Icon.src ? Icon.src : Icon}
                  alt={altText}
                  className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"
                  width={64}
                  height={64}
                />
              )}
              <div className="flex flex-col gap-y-1 flex-grow">
                <h3
                  className={classNames(
                    "text-[#E5E7EB] text-[1rem] 2xl:text-[1.5rem] font-heading font-semibold leading-[1.26rem] 2xl:leading-[1.89rem]",
                    headingClassName
                  )}
                >
                  {heading}
                  {symbol && <span className={classNames(text_para_2)}>{symbol}</span>}
                </h3>
                <p className={classNames(text_para_3)}>{description}</p>
              </div>
              {linkText && (
                <Link
                  href={link || ""}
                  className="flex gap-x-2 text-gray-light hover:text-blue-azure mt-auto"
                >
                  {linkText}{" "}
                  {linkWithIcon && <span className="text-4xl -mt-3">→</span>}
                </Link>
              )}
            </div>
          </div>
        ) : (
          <>
            {Icon && (
              <Image
                loading="lazy"
                src={typeof Icon === "object" && Icon.src ? Icon.src : Icon}
                alt={altText}
                className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"
                width={64}
                height={64}
              />
            )}
            <div className="flex flex-col gap-y-1 flex-grow">
              <p className={classNames(text_h4_class, headingClassName)}>
                {heading}
                {symbol && <span className={classNames(text_para_2)}>{symbol}</span>}
              </p>
              <p className={classNames(text_para_3)}>{description}</p>
            </div>
            {linkText && (
              <Link
                href={link || ""}
                className="flex gap-x-2 text-gray-light hover:text-blue-azure mt-auto"
              >
                {linkText}{" "}
                {linkWithIcon && <span className="text-4xl -mt-3">→</span>}
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CommonResizeableCard;