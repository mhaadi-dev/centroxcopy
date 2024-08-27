"use client";

import { Toast } from "@/Components/Toast/toast";
import Image from "next/image";
import { useState } from "react";
import HeroImage from "@/assets/teamHero.jpg";
import { generateBlurDataURL } from "@/helpers/common";
import mhbImg from "@/assets/mhbnimg.png";
import harrisImg from "@/assets/harrisimg.png";
import zainRazaImg from "@/assets/zainRaza.png";
import LinkedIn from "@/assets/linkedin.svg";
import abdImg from "@/assets/abdimg.png";
import hamzaEjImg from "@/assets/hamzahEjaz.png";
import hibbaImg from "@/assets/hibbaimg.png";
import khalidImg from "@/assets/khalidimg.png";
import adeelImg from "@/assets/adeelImg.png";
import quratulainImg from "@/assets/quratulainImg.png";
import faseehImg from "@/assets/faseehImg.png";
import hadiImg from "@/assets/hadiImg.png";
import wahabImg from "@/assets/wahabImg.png";
import hamzaImranImg from "@/assets/hamzaImranimg.png";
import asadImg from "@/assets/asadImg.png";
import saadImg from "@/assets/saadImg.png";
import { MainAboutUs } from "@/Components/aboutUs/MainAboutUs";
const owners = [
	{
		name: "Muhammad Harris Bin Naeem",
		designation: "Co-Founder & CEO",
		link: "https://www.linkedin.com/in/mhbn",
		img: mhbImg,
	},

	{
		name: "Muhammad Harris",
		designation: "Co-Founder & CTO",
		link: "https://www.linkedin.com/in/harris-perceptron",
		img: harrisImg,
	},
	{
		name: "Syed Zain Raza",
		designation: "Co-Founder & Director Growth",
		link: "https://www.linkedin.com/in/syed-zain-raza-ba96899b",
		img: zainRazaImg,
	},
];
const team = [
	{
		name: "Abdullah Qureshi",
		designation: "Mobile Engineer",
		link: "https://www.linkedin.com/in/abdullah-qureshi5",
		img: abdImg,
	},

	{
		name: "Hamzah Ejaz",
		designation: "Web Engineer",
		link: "https://www.linkedin.com/in/hamzah-ejaz",
		img: hamzaEjImg,
	},
	{
		name: "Hibba Saleem",
		designation: "QA Executive",
		link: "https://www.linkedin.com/in/hibba-saleem-a38433130",
		img: hibbaImg,
	},

	{
		name: "Khalid Khushal",
		designation: "Backend Engineer",
		link: "https://www.linkedin.com/in/khalid-khushal",
		img: khalidImg,
	},
	{
		name: "Adeel Irshad",
		designation: "Backend Engineer",
		link: "https://www.linkedin.com/in/adeelirshad808",
		img: adeelImg,
	},
	{
		name: "Qurat Ul Ain",
		designation: "QA Executive",
		link: "https://pk.linkedin.com/company/centroxai", //change
		img: quratulainImg,
	},

	{
		name: "Faseeh Abbas",
		designation: "Mobile Engineer",
		link: "https://www.linkedin.com/in/faseeh-abbas-khan-196544202",
		img: faseehImg,
	},
	{
		name: "Muhammad Hadi Akhtar",
		designation: "UX/UI Designer",
		link: "https://www.linkedin.com/in/muhammad-hadi-akhtar-933273194",
		img: hadiImg,
	},

	{
		name: "Abdul Wahab",
		designation: "Web Engineer",
		link: "https://www.linkedin.com/in/abdul-wahab-1a9494198/", //change
		img: wahabImg,
	},
	{
		name: "Hamza Imran",
		designation: "Mobile Engineer",
		link: "https://www.linkedin.com/in/hamza-imran-536392223",
		img: hamzaImranImg,
	},
	{
		name: "Asad Mehmood",
		designation: "Data Ops Manager",
		link: "https://www.linkedin.com/in/asad-mehmood-54364b175",
		img: asadImg,
	},
	{
		name: "Saad Javed",
		designation: "Solution Architect",
		link: "https://www.linkedin.com/in/saadjaved120",
		img: saadImg,
	},
];
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
