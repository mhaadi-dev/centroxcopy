import Image from "next/image";
import Derq from "@/assets/DERQ.svg";
import Conjion from "@/assets/Conjion.svg";
import BlueCore from "@/assets/Bluecore.svg";
import Nooberly from "@/assets/Nooblerly.svg";
import Instacured from "@/assets/InstaCure.svg";
import Dreamlamp from "@/assets/Dream Lamp.svg";
import React, { useEffect, useState } from "react";
import { generateLinearGradientBase64 } from "@/helpers/common";

const logosSets = [
	[
		{ src: Dreamlamp, marginTop: 0 },
		{ src: Derq, marginTop: 0 },
		{ src: Nooberly, marginTop: 0 },
		{ src: Instacured, marginTop: 0 },
		{ src: Conjion, marginTop: 0 },
		{ src: BlueCore, marginTop: 0 },
	],
	[
		{ src: Dreamlamp, marginTop: 0 },
		{ src: Derq, marginTop: 0 },
		{ src: Nooberly, marginTop: 0 },
		{ src: Instacured, marginTop: 0 },
		{ src: Conjion, marginTop: 0 },
		{ src: BlueCore, marginTop: 0 },
	],
	[
		{ src: Dreamlamp, marginTop: 0 },
		{ src: Derq, marginTop: 0 },
		{ src: Nooberly, marginTop: 0 },
		{ src: Instacured, marginTop: 0 },
		{ src: Conjion, marginTop: 0 },
		{ src: BlueCore, marginTop: 0 },
	],
	[
		{ src: Dreamlamp, marginTop: 0 },
		{ src: Derq, marginTop: 0 },
		{ src: Nooberly, marginTop: 0 },
		{ src: Instacured, marginTop: 0 },
		{ src: Conjion, marginTop: 0 },
		{ src: BlueCore, marginTop: 0 },
	],
	[
		{ src: Dreamlamp, marginTop: 0 },
		{ src: Derq, marginTop: 0 },
		{ src: Nooberly, marginTop: 0 },
		{ src: Instacured, marginTop: 0 },
		{ src: Conjion, marginTop: 0 },
		{ src: BlueCore, marginTop: 0 },
	],
];

export const LogosCarousel = () => {
	const [animationClass, setAnimationClass] = useState("animate-none");
	const linearGradientBlurDataURL = generateLinearGradientBase64();

	useEffect(() => {
		setAnimationClass("animate-move");
	}, []);
	const renderLogos = (logosSet: any) => {
		return logosSet.map((logo: any, index: any) => {
			return (
				<Image
					key={index}
					src={logo.src}
					alt="Logo"
					loading="eager"
					priority={true}
					className={`w-auto mt-${logo.marginTop}`}
					blurDataURL={linearGradientBlurDataURL}
				/>
			);
		});
	};
	return (
		<div
			className={`flex gap-10 sm:gap-20 lg:gap-40 items-end justify-center ${animationClass}`}
		>
			{logosSets.map((logosSet, index) => (
				<React.Fragment key={index}>{renderLogos(logosSet)}</React.Fragment>
			))}
		</div>
	);
};
