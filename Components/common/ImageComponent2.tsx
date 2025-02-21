"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import LandingAboutUsBg from "@/assets/genai.webp";
const ImageComponent2 = () => {
      const [windowWidth, setWindowWidth] = useState<number>(0);
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
   <>
   
          {windowWidth > 1023 ? (
               <div className="w-full mx-[0.5rem]  lg:w-1/2  z-[2]">  
               <figure className=" w-4/4">
                 <Image
                   alt="Gen Ai Process, raw data into exceptional results"
                   src={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/home/genai.webp"}
                   width={600}
                   height={724}
                   className="w-full  2xl:w-full z-[2]"
                //    onLoad={() => singleImageLoad(LandingAboutUsBg.src)}
                //    blurDataURL={blurDataURL}
                 />
               </figure>
               </div>
            ) : (
              ""
            )}
   </>
  )
}

export default ImageComponent2