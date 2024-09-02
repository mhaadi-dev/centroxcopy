import Image from "next/image";

import React, { useEffect, useState } from "react";
import { generateLinearGradientBase64 } from "@/helpers/common";







export const LogosCarousel = ({data}:any) => {



  return (
	<section className="w-full  pt-24 lg:pt-0  lg:mt-24 inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]  ">
	<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-12">
	  {data?.map((logo:any, index:number) => (
		<li key={index} >
			<figure className="h-20 w-20 relative">
		  <Image src={logo.icon} alt={logo.alt} className="w-full object-cover" fill />
		</figure>
		</li>
	  ))}
	</ul>
	<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-12 ml-[3rem]" aria-hidden="true">
	  {data?.map((logo:any, index:number) => (
		<li key={index} >
			<figure className="h-20 w-20 relative">
		  <Image src={logo.icon} alt={logo.alt} fill/>
			</figure>
		</li>
	  ))}
	</ul>
  </section>
  );
};
