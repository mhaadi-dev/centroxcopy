import Image from "next/image";
import React from "react";
import rankPage from "@/assets/Rank Page.webp";
import instaCure from "@/assets/InstaCure.webp";
import DERQ from "@/assets/Derq.webp";
import conjoin from "@/assets/Conjion.webp";
import stockAppIcon from "@/assets/stockAppIcon.webp";






export async function LogosCarousel() {


  const logos:any = [rankPage,conjoin,stockAppIcon,instaCure,DERQ];
  return (
    <>
      <section className="w-full flex lg:mt-10 overflow-hidden relative">
        <div className="w-full bg-gradient-to-r from-black  via-transparent to-black absolute left-0 right-0 h-full top-0 z-[1]"  />
        
        <div className="flex items-center bg-transparent w-full animate-marquee animate-infinite-scroll gap-x-12 whitespace-nowrap">
          {logos.length > 0
            ? logos.map((logo: any, index: number) => (
                <div key={index} className="relative w-[100vw] md:w-[80%] lg:w-[100%]  h-auto">
                  <Image
                    src={logo}
                    alt={"logo"}
                    className=" top-0"
                  
                  />
                </div>
              ))
            : ""}
        </div>

        <div className="flex items-center w-full animate-marquee animate-infinite-scroll gap-x-12 ml-8 whitespace-nowrap">
          {logos.map((logo: any, index: number) => (
            <div key={index} className="relative w-[100vw] md:w-[80%] lg:w-[100%] h-auto">
              <Image
                src={logo}
                alt={"logo"}
                className=""

              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
