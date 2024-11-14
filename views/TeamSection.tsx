"use client";

import { Toast } from "@/Components/Toast/toast";
import Image from "next/image";
import { useState } from "react";
import HeroImage from "@/assets/teamHero.jpg";
import { generateBlurDataURL } from "@/helpers/common";
import mhbImg from "@/assets/mhbnimg.webp";
import harrisImg from "@/assets/harrisimg.webp";
import zainRazaImg from "@/assets/zainRaza.webp";
import LinkedIn from "@/assets/linkedin.svg";

import { MainAboutUs } from "@/Components/aboutUs/MainAboutUs";

export const TeamUsSection = (props:any) => {
	const [showToast, setShowToast] = useState(false);
	const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);
	const [blurDataURLs, setBlurDataURLs] = useState<Record<number, string>>({});
	const [teamblurDataURLs, setTeamBlurDataURLs] = useState<
		Record<number, string>
	>({});

	const singleImageLoad = async (imageSrc: string) => {
		if (!blurDataURL) {
			const blurredBase64 = await generateBlurDataURL(imageSrc);
			setBlurDataURL(blurredBase64);
		}
	};
	const handleImageLoad = async (index: number, imageUrl: string) => {
		if (!blurDataURLs[index]) {
			const blurredBase64 = await generateBlurDataURL(imageUrl);
			setBlurDataURLs((prevBlurDataURLs) => ({
				...prevBlurDataURLs,
				[index]: blurredBase64,
			}));
		}
	};
	const handleTeamImageLoad = async (index: number, imageUrl: string) => {
		if (!blurDataURLs[index]) {
			const blurredBase64 = await generateBlurDataURL(imageUrl);
			setTeamBlurDataURLs((prevBlurDataURLs) => ({
				...prevBlurDataURLs,
				[index]: blurredBase64,
			}));
		}
	};
	return (
		<MainAboutUs props={{...props}}/>
	);
};
