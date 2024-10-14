import Image from "next/image";
import React from "react";
import rankPage from "@/assets/Rank Page.webp";
import instaCure from "@/assets/InstaCure.webp";
import DERQ from "@/assets/derqlogo.webp";
import conjoin from "@/assets/Conjion.webp";
import stockAppIcon from "@/assets/stockAppIcon.webp";






export async function LogosCarousel() {


  const logos:any = [rankPage,conjoin,stockAppIcon,instaCure,DERQ,];
  return (
    <>
      <section className="w-full  flex  gap-10 lg:mt-0 relative">
        <div className="w-full bg-gradient-to-r from-black  via-transparent to-black absolute left-0 right-0 h-full top-0 z-[2]"  />
        
        <div className="flex  z-[1]  items-center w-full animate-marquee animate-infinite-scroll gap-x-4 lg:gap-x-0 ">
          {logos.length > 0
            ? logos.map((logo: any, index: number) => (
                <div className="w-full lg:w-[50%]">
                  <Image
                    src={logo}
                    alt={"logo"}
                    className="inline-block w-full lg:w-[70%] "
                  />
                </div>
              ))
            : ""}
        </div>

       
      </section>
    </>
  );
}
