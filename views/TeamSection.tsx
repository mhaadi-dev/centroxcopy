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
export const TeamUsSection = () => {
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
		<div className="flex flex-col gap-40 bg-gray-charcoal">
			<div className="">
				<Image
					src={HeroImage}
					alt="sorry"
					loading="eager"
					placeholder="blur"
					onLoad={() => singleImageLoad(HeroImage.src)}
					blurDataURL={blurDataURL}
				/>
			</div>
			<div className="flex justify-around flex-wrap text-white">
				{owners.map((el, index) => {
					return (
						<div
							key={index}
							className="flex flex-col justify-center items-center p-4 rounded-xl"
							style={{
								border: "1px solid rgba(3, 34, 182, 0.20)",

								background:
									"radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
								boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
								backdropFilter: "blur(18px)",
							}}
						>
							<Image
								src={el.img}
								alt="image-data"
								placeholder="blur"
								blurDataURL={blurDataURLs[index]}
								onLoad={() => handleImageLoad(index, el.img.src)}
								className="rounded-xl md:w-32 md:h-32  lg:w-52 lg:h-52 2xl:w-80 2xl:h-80 object-cover"
							/>
							<p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
								{el.name}
							</p>
							<div className="flex justify-between items-left w-full mt-1">
								<p className=" font-medium text-xs md:text-sm  text-blue-secondary">
									{el.designation}
								</p>
								<a href={el.link} target="_blank" rel="noreferrer">
									<Image src={LinkedIn} className="w-5" alt="" />
								</a>
							</div>
						</div>
					);
				})}
			</div>
			<div className="text-xl lg:text-4xl text-white font-bold flex justify-center ">
				Meet Our Team
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 px-[5%] lg:px-[15%] text-white">
				{team.map((el, index) => {
					return (
						<div
							key={index}
							className="flex flex-col justify-center items-center p-4 rounded-xl"
							style={{
								border: "1px solid rgba(3, 34, 182, 0.20)",

								background:
									"radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
								boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
								backdropFilter: "blur(18px)",
							}}
						>
							<Image
								src={el.img}
								alt="image-data"
								placeholder="blur"
								blurDataURL={teamblurDataURLs[index]}
								onLoad={() => handleTeamImageLoad(index, el.img.src)}
								className="rounded-xl md:w-32 md:h-32  lg:w-52 lg:h-52 2xl:w-80 2xl:h-80 object-cover"
							/>
							<p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
								{el.name}
							</p>
							<div className="flex justify-between items-left w-full mt-1">
								<p className=" font-medium text-xs md:text-sm  text-blue-secondary">
									{el.designation}
								</p>
								<a href={el.link} target="_blank" rel="noreferrer">
									<Image src={LinkedIn} className="w-5" alt="" />
								</a>
							</div>
						</div>
					);
				})}
			</div>

			{showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
		</div>
	);
};
