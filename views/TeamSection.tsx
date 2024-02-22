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
// const team = [
// 	{
// 		name: "Abdullah Qureshi",
// 		designation: "Mobile Engineer",
// 		link: "https://www.linkedin.com/in/abdullah-qureshi5",
// 		img: abdImg,
// 	},
// 	{
// 		name: "Amna Baig",
// 		designation: "Project Manager",
// 		link: "https://www.linkedin.com/in/amna-baig-3723a211b",
// 		img: amnaImg,
// 	},
// 	{
// 		name: "Hamzah Ejaz",
// 		designation: "Web Engineer",
// 		link: "https://www.linkedin.com/in/hamzah-ejaz",
// 		img: hamzaEjImg,
// 	},
// 	{
// 		name: "Hibba Saleem",
// 		designation: "QA Executive",
// 		link: "https://www.linkedin.com/in/hibba-saleem-a38433130",
// 		img: hibbaImg,
// 	},
// 	{
// 		name: "Iqra Kiran",
// 		designation: "Associate, Data Scientist",
// 		link: "https://www.linkedin.com/in/iqra-kiran-b254211a4",
// 		img: iqraImg,
// 	},
// 	{
// 		name: "Khalid Khushal",
// 		designation: "Backend Engineer",
// 		link: "https://www.linkedin.com/in/khalid-khushal",
// 		img: khalidImg,
// 	},
// 	{
// 		name: "Adeel Irshad",
// 		designation: "Backend Engineer",
// 		link: "https://www.linkedin.com/in/adeelirshad808",
// 		img: adeelImg,
// 	},
// 	{
// 		name: "Qurat Ul Ain",
// 		designation: "QA Executive",
// 		link: "https://pk.linkedin.com/company/centroxai", //change
// 		img: quratulainImg,
// 	},
// 	{
// 		name: "Aisha Burki",
// 		designation: "Product Designer",
// 		link: "https://www.linkedin.com/in/aisha-burki-510667133",
// 		img: aishaImg,
// 	},
// 	{
// 		name: "Faseeh Abbas",
// 		designation: "Mobile Engineer",
// 		link: "https://www.linkedin.com/in/faseeh-abbas-khan-196544202",
// 		img: faseehImg,
// 	},
// 	{
// 		name: "Muhammad Hadi Akhtar",
// 		designation: "UX/UI Designer",
// 		link: "https://www.linkedin.com/in/muhammad-hadi-akhtar-933273194",
// 		img: hadiImg,
// 	},
// 	{
// 		name: "Jannat Ahsan",
// 		designation: "UX/UI Designer",
// 		link: "https://www.linkedin.com/in/jannat-ahsan-54b119115",
// 		img: jannatImg,
// 	},
// 	{
// 		name: "Abdul Wahab",
// 		designation: "Web Engineer",
// 		link: "https://www.linkedin.com/in/abdul-wahab-1a9494198/", //change
// 		img: wahabImg,
// 	},
// 	{
// 		name: "Hamza Imran",
// 		designation: "Mobile Engineer",
// 		link: "https://www.linkedin.com/in/hamza-imran-536392223",
// 		img: hamzaImranImg,
// 	},
// 	{
// 		name: "Asad Mehmood",
// 		designation: "Data Ops Manager",
// 		link: "https://www.linkedin.com/in/asad-mehmood-54364b175",
// 		img: asadImg,
// 	},
// 	{
// 		name: "Saad Javed",
// 		designation: "Solution Architect",
// 		link: "https://www.linkedin.com/in/saadjaved120",
// 		img: saadImg,
// 	},
// 	{
// 		name: "Haseeb Ahmed",
// 		designation: "Mobile Engineer",
// 		link: "https://www.linkedin.com/in/iamhaseebahmad",
// 		img: haseebImg,
// 	},
// 	{
// 		name: "Bilal Qureshi",
// 		designation: "Sales Executive",
// 		link: "https://www.linkedin.com/in/muhammad-bilal-qureshi",
// 		img: bilalImg,
// 	},
// ];
export const TeamUsSection = () => {
	const [showToast, setShowToast] = useState(false);
	const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);

	const singleImageLoad = async (imageSrc: string) => {
		if (!blurDataURL) {
			const blurredBase64 = await generateBlurDataURL(imageSrc);
			setBlurDataURL(blurredBase64);
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
