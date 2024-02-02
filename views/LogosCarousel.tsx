import Image from "next/image";
import Derq from "@/assets/DERQ.svg";
import Conjion from "@/assets/Conjion.svg";
import BlueCore from "@/assets/Bluecore.svg";
import Nooberly from "@/assets/Nooblerly.svg";
import Instacured from "@/assets/InstaCure.svg";
import Dreamlamp from "@/assets/Dream Lamp.svg";
import { useEffect, useState } from "react";

export const LogosCarousel = () => {
	const [animationClass, setAnimationClass] = useState("animate-none");

	useEffect(() => {
		setAnimationClass("animate-move");
	}, []);
	return (
		<div
			className={`flex gap-10 sm:gap-20 lg:gap-40 items-center justify-center mt-10  ${animationClass}`}
		>
			<Image src={BlueCore} alt="Logo" className="w-auto sm:w-72" />
			<Image src={Conjion} alt="Logo" className="w-auto sm:w-72" />
			<Image src={Dreamlamp} alt="Logo" className="w-auto sm:w-[15rem]" />
			<Image src={Derq} alt="Logo" className="w-auto sm:w-72" />
			<Image src={Nooberly} alt="Logo" className="w-auto sm:w-96 mt-16" />
			<Image src={Instacured} alt="Logo" className="w-auto sm:w-96 mt-16" />
		</div>
	);
};

