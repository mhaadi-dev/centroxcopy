import Image from "next/image";
import Derq from "@/assets/DERQ.svg";
import Conjion from "@/assets/Conjion.svg";
import BlueCore from "@/assets/Bluecore.svg";
import Nooberly from "@/assets/Nooblerly.svg";
import Instacured from "@/assets/InstaCure.svg";
import StockApp from "@/assets/stockAppIcon.svg";
import Dreamlamp from "@/assets/Dream Lamp.svg";
import React, { useEffect, useState } from "react";
import { generateLinearGradientBase64 } from "@/helpers/common";

const logosSets = 
  [
    { src: Dreamlamp, alt: "no-image" },
    { src: Derq, alt: "no-image" },
    { src: Nooberly, alt: "no-image" },
    { src: Instacured, alt: "no-image" },
    { src: Conjion, alt: "no-image" },
    { src: BlueCore, alt: "no-image" },
    { src: StockApp, alt: "no-image" },
  ]



export const LogosCarousel = () => {
  const linearGradientBlurDataURL = generateLinearGradientBase64();



  return (
	<section className="w-full inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]  my-12">
	<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-12">
	  {logosSets.map((logo, index) => (
		<li key={index} >
			<figure>
		  <Image src={logo.src} alt={logo.alt} />
			</figure>
		</li>
	  ))}
	</ul>
	<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-12 ml-[3rem]" aria-hidden="true">
	  {logosSets.map((logo, index) => (
		<li key={index} >
		  <Image src={logo.src} alt={logo.alt} />
		</li>
	  ))}
	</ul>
  </section>
  );
};
