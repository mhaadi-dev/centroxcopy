import Image from "next/image";
import React from "react";
import rankPage from "@/assets/Rank Page.webp";
import instaCure from "@/assets/InstaCure.webp";
import DERQ from "@/assets/derqlogo.webp";
import conjoin from "@/assets/Conjion.webp";
import stockAppIcon from "@/assets/stockAppIcon.webp";
import bluecore from "@/assets/Bluecore.webp";






export async function LogosCarousel() {


  const logos:any = [bluecore,rankPage,conjoin,stockAppIcon,instaCure,DERQ,bluecore];
  return (
    <>
      <section className="w-full overflow-hidden  flex  gap-10 lg:mt-0 relative">
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
      </section>
    </>
  );
}
