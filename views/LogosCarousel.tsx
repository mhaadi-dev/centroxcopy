"use client";
import Image from "next/image";
import React from "react";
import rankPage from "@/assets/Rank_Page6.webp";
import instaCure from "@/assets/InstaCure4.webp";
import DERQ from "@/assets/DERQ2.webp";
import conjoin from "@/assets/Conjion1.webp";
import stockAppIcon from "@/assets/Stock App Icon7.webp";
import bluecore from "@/assets/Bluecore.webp";
import teksoul from "@/assets/TekSoul8.webp";
import nooblerly from "@/assets/Nooblerly5.webp";
import dreamlamp from "@/assets/Dream Lamp3.webp";
import { motion } from "framer-motion";

export async function LogosCarousel() {
  const logos: { logo: any; alt: string }[] = [
    { logo: bluecore, alt: "Bluecore" },
    { logo: conjoin, alt: "Conjoin" },
    { logo: stockAppIcon, alt: "Stock App Icon" },
    { logo: dreamlamp, alt: "Dream Lamp" },
    { logo: instaCure, alt: "InstaCure" },
    { logo: DERQ, alt: "DERQ" },
    { logo: teksoul, alt: "TekSoul" },
    { logo: rankPage, alt: "Rank Page" },
    { logo: nooblerly, alt: "Nooblerly" },
  ];
//logos section
  return (
    <div className="py-4 bg-black">
      <div className="w-full">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex items-center gap-x-4 lg:gap-x-10 flex-none pr-10"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.length > 0
              ? logos.map((logo, index) => (
                  <Image
                    src={logo.logo}
                    alt={logo.alt}
                    className="h-auto w-auto"
                    key={`logo-${index}`}
                    loading="eager"
                  />
                ))
              : ""}
            {logos.length > 0
              ? logos.map((logo, index) => (
                  <Image
                    src={logo.logo}
                    alt={logo.alt}
                    className="h-auto w-auto"
                    key={`logo-duplicate-${index}`}
                    loading="eager"
                  />
                ))
              : ""}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
