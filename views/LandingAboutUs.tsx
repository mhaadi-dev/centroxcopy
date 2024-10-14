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
    <section id="services" className=" w-[90%] sm:w-auto flex flex-col gap-4 justify-center items-center mt-0  relative  mx-[1.5rem] 2xl:mx-[15rem]  "  
    > 
    <Image src={LandingAboutUsPattern} alt="bg" className="absolute z-[1] bottom-[40%] top-[45%] "></Image>
      <summary
        className={classNames(
          "flex sm:mt-0  py-0 sm:px-0",
          " sm:mx-0"
        )}
     
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start h-full py-6 mx-[1.5rem] sm:mx-0">
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
               <div className="w-full mx-[0.5rem]  lg:w-1/2  z-[2]">  
               <figure className=" w-4/4">
                 <Image
                   alt=""
                   src={LandingAboutUsBg}
                   className="w-full  2xl:w-full z-[2]"
                   onLoad={() => singleImageLoad(LandingAboutUsBg.src)}
                   blurDataURL={blurDataURL}
                 />
               </figure>
               </div>
            ) : (
              ""
            )}
            <p className="w-full mt-4 lg:mt-0">
              We want to enable you to focus on your core product and achieve
              your business goals faster while we take over your Gen AI
              development life cycle. We want to put our AI technical depth,
              collaborative approach, and commitment to delivering to good use
              by helping you out.
            </p>
          </div>
          <Link href="/contact" className="z-[1]">
             <Button
            content="Contact Us Now"
            Icon={Arrow}
            iconClassName="-mt-1"
            isLefticon={false}
            className="mt-2 !px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem] sm:mt-10 mx-0"
          />
          </Link>
         
        </div>

        {windowWidth > 1023 ? (
          <div className=" w-1/2  z-[2]">  
          <figure className=" w-4/4">
            <Image
              alt=""
              src={LandingAboutUsBg}
              className="w-full  2xl:w-full z-[2]"
              onLoad={() => singleImageLoad(LandingAboutUsBg.src)}
              blurDataURL={blurDataURL}
            />
          </figure>
          </div>
        
        ) : (
          ""
        )}
      </summary>
    </section>
  );
};
