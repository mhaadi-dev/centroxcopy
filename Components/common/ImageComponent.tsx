"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import LandingAboutUsBg from "@/assets/genai.webp";
const ImageComponent = () => {
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
   
          {windowWidth <= 1023 ? (
               <div className="w-full mx-[0.5rem]  lg:w-1/2  z-[2]">  
               <figure className=" w-4/4">
                 <Image
                   alt="Gen Ai Process, raw data into exceptional results"
                   src={LandingAboutUsBg}
                   className="w-full  2xl:w-full z-[2]"
                 />
               </figure>
               </div>
            ) : (
              ""
            )}
   </>
  )
}

export default ImageComponent