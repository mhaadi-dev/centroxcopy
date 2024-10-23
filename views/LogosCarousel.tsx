"use client"
import Image from "next/image";
import React from "react";
import rankPage from "@/assets/Rank Page6.webp";
import instaCure from "@/assets/InstaCure4.webp";
import DERQ from "@/assets/DERQ2.webp";
import conjoin from "@/assets/Conjion1.webp";
import stockAppIcon from "@/assets/Stock App Icon7.webp";
import bluecore from "@/assets/Bluecore.webp";
import teksoul from "@/assets/TekSoul8.webp"
import nooblerly from "@/assets/Nooblerly5.webp"
import dreamlamp from "@/assets/Dream Lamp3.webp"
import {motion} from "framer-motion"





export async function LogosCarousel() {


  const logos:any = [bluecore,conjoin,stockAppIcon,dreamlamp,instaCure,DERQ,teksoul,rankPage,nooblerly];
  return (
    <div className="py-0 bg-black">
      {/* <section className="w-full overflow-hidden  flex  gap-10 lg:mt-0 relative">
        <div className="w-full bg-gradient-to-r from-black  via-transparent to-black absolute left-0 right-0 h-full top-0 z-[2]"  />
        
        <div className="flex justify-center items-center w-[100%]  animate-marquee animate-infinite-scroll gap-x-4 lg:gap-x-10 ">
          {logos.length > 0
            ? logos.map((logo: any, index: number) => (
                < >
                  <Image
                    src={logo}
                    alt={"logo"}
                    className="inline-block w-[80%] lg:w-[15%]"
                  />
                </>
              ))
            : ""}
        </div> 
      </section> */}

       <div className="w-full">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
           <motion.div className="flex items-center gap-x-4 lg:gap-x-10 flex-none pr-10" 
           animate={
            {
              translateX:"-50%",
            }
           }
           transition={{
            duration:25,
            repeat:Infinity,
            ease:"linear",
            repeatType:"loop"
           }}
           >
          {logos.length > 0
            ? logos.map((logo: any, index: number) => (
                < >
                  <Image
                    src={logo}
                    alt={"logo"}
                    className="h-auto  w-auto"
                    key={index}
                    loading="eager"
                  />
                </>
              ))
            : ""}
              {logos.length > 0
            ? logos.map((logo: any, index: number) => (
                < >
                  <Image
                    src={logo}
                    alt={"logo"}
                    className="h-auto  w-auto"
                    key={index+1}
                    loading="eager"
                  
                  />
                </>
              ))
            : ""}
        </motion.div> 
        </div>
      </div>

      
    </div>
  );
}
