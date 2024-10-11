"use client";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import classNames, { generateBlurDataURL } from "@/helpers/common";
import LandingAboutUsBg from "@/assets/genai.webp";
import LandingAboutUsPattern from "@/assets/LandingAboutUsPattern.webp";
import Link from "next/link";

export const LandingAboutUs = () => {
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const singleImageLoad = async (imageSrc: string) => {
    if (!blurDataURL) {
      const blurredBase64 = await generateBlurDataURL(imageSrc);
      setBlurDataURL(blurredBase64);
    }
  };
console.log("imgg",LandingAboutUsPattern)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="services" className="w-[100%] lg:w-auto flex flex-col gap-4 justify-center items-center mt-10  relative  mx-[0rem] 2xl:mx-[15rem]  "  
    > <Image src={LandingAboutUsPattern} alt="bg" className="absolute z-[1] bottom-[40%] top-[45%] "></Image>
      <summary
        className={classNames(
          "grid grid-cols-1 lg:grid-cols-2 gap-y-20  lg:gap-0 3xl:gap-10 sm:mt-0 sm:w-[90%] py-0 sm:px-0",
          "mx-[1.5rem] sm:mx-0"
        )}
     
      >
        <div className="flex flex-col gap-5 items-start h-full py-6 w-[90%] mx-[1.5rem] sm:mx-0">
          <h1 className="text-2xl sm:text-5xl text-white font-semibold capitalize 3xl:text-6xl">
            Bridging the Gap between research and real-world applications
          </h1>

          <div className="sm:mt-10 3xl:mt-10 w-[95%] 2xl:w-[83%] 3xl:w-[85%] text-lg sm:text-2xl 3xl:text-4xl text-white leading-6">
            <p className="w-full">
              We at Centrox AI understand the challenges companies face when
              navigating the complexities of Gen AI development and deployment.
              Centrox AI is a full-cycle AI development company on a mission to
              augment business that are moving the innovation needle in Gen AI.
            </p>
            <br />
            {windowWidth <= 1023 ? (
              <figure className="flex justify-start 2xl:justify-start my-6 mx-auto">
                <Image
                  alt=""
                  src={LandingAboutUsBg}
                  className="w-full 2xl:w-full z-[2]"
                  onLoad={() => singleImageLoad(LandingAboutUsBg.src)}
                  blurDataURL={blurDataURL}
                />
              </figure>
            ) : (
              ""
            )}
            <p className="w-full">
              We want to enable you to focus on your core product and achieve
              your business goals faster while we take over your Gen AI
              development life cycle. We want to put our AI technical depth,
              collaborative approach, and commitment to delivering to good use
              by helping you out.
            </p>
          </div>
          <Link href="/contact" className="z-[1]">
             <Button
            content="Contact Us"
            Icon={Arrow}
            iconClassName="-mt-1"
            isLefticon={false}
            className="mt-2 sm:mt-10 mx-0"
          />
          </Link>
         
        </div>

        {windowWidth > 1023 ? (
          <figure className="flex justify-center 2xl:justify-start">
            <Image
              alt=""
              src={LandingAboutUsBg}
              className="w-[80%] object-contain  2xl:w-full z-[2]"
              onLoad={() => singleImageLoad(LandingAboutUsBg.src)}
              blurDataURL={blurDataURL}
            />
          </figure>
        ) : (
          ""
        )}
      </summary>
    </section>
  );
};
