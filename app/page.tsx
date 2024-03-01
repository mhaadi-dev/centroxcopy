"use client";
import { Navbar } from "@/Components/Navbar/navbar";
import Image from "next/image";
import myGif from "@/assets/Video.gif";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import AppLogo from "@/assets/LogoWhite.png";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import MsgIcon from "@/assets/msg.svg";
import { SnapMeasure } from "@/views/SnapandMeasure";
import { Testimonial } from "@/views/Testimonial";
import { useEffect, useState } from "react";
import { Toast } from "@/Components/Toast/toast";
import { useRouter } from "next/navigation";
import { POCS } from "@/views/POCS";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { SHOW_SERVICES, SHOW_SOLUTIONS } from "@/helpers/enums";

export default function Home() {
	useEffect(() => {
		const storedServices = localStorage.getItem(SHOW_SERVICES);
		const storedSolutions = localStorage.getItem(SHOW_SOLUTIONS);

		const scrollToServices = storedServices
			? JSON.parse(storedServices)
			: false;
		const scrollToSolutions = storedSolutions
			? JSON.parse(storedSolutions)
			: false;

		const scrollToElement = (elementId: string) => {
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		};

		const resetLocalStorage = () => {
			localStorage.setItem(SHOW_SERVICES, JSON.stringify(false));
			localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(false));
		};

		if (scrollToServices) {
			setTimeout(() => {
				scrollToElement("services");
				resetLocalStorage();
			}, 15);
		}

		if (scrollToSolutions) {
			setTimeout(() => {
				scrollToElement("solutions");
				resetLocalStorage();
			}, 15);
		}
	}, []);

	return (
		<div className="flex min-h-screen flex-col bg-gray-charcoal overflow-x-hidden gap-10">
			<Navbar />
			<VideoComponent />
			<LogosCarousel />
			<SnapMeasure />
			<Section3 />
			<POCS />
			<Testimonial />
			<PageFooter />
		</div>
	);
}

const VideoComponent = () => {
	return (
		<div>
			<Image
				src={myGif}
				priority
				alt="Description of the GIF"
				objectFit="cover"
				loading="eager"
				className="h-screen sm:h-[50rem] 3xl:h-[70rem] w-full object-cover"
			/>
			{/* backdrop-filter backdrop-blur-xl */}
			<div className="flex flex-col gap-10 absolute -mt-[100%]  mx-5 sm:mx-0 lg:-mt-[32%] 2xl:-mt-[28%] sm:ml-[25%] items-center w-[90%] sm:w-[50%] rounded-2xl p-2 sm:p-10  text-center">
				<div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-thin tracking-normal">
					Leading <span className="font-extrabold">Innovation</span> with
					<span className="font-extrabold ml-1 sm:ml-3">
						Artificial Intelligence
					</span>
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold w-[75%] tracking-wide">
					Unleashing Potential: ML Community's Hub for Models and Applications.
				</div>
			</div>
		</div>
	);
};

const PageFooter = () => {
	const [showToast, setShowToast] = useState(false);
	const router = useRouter();

	return (
		<footer className="py-12 bg-gray-charcoal sm:py-16 lg:py-20 mt-40 md:mt-80">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative">
					<div className="absolute -inset-2">
						<div
							className="w-full h-full mx-auto opacity-30 blur-lg filter"
							style={{
								background:
									"linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
							}}
						></div>
					</div>

					<div className="relative overflow-hidden text-center bg-gray-900 rounded-3xl lg:text-left">
						<div className="p-6 lg:py-8 lg:px-14">
							<div className="grid lg:flex  w-full items-center justify-center">
								<h5 className="text-xl sm:text-3xl font-bold text-white">
									Get an expert help in constructing your own models or
									utilizing foundational models for your business
								</h5>

								<div className="flex-1 mt-7 lg:mt-0 ml-[15%] sm:ml-[30%] lg:ml-8 justify-center ">
									<Button
										content="Talk to our AI expert"
										className="bg-blue-azure border-0 w-64 !rounded-full font-semibold"
										Icon={Arrow}
										isLefticon={false}
										onClick={() => {
											router.push("/aiExpert");
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-10 sm:gap-0 sm:flex justify-between mx-5 sm:mx-[7%] mt-20 sm:mt-60">
				<div className="h-full">
					<Image src={AppLogo} alt="Logo" className="w-[10rem] sm:w-60" />
				</div>
				<div className="flex flex-col gap-5">
					<div className="grid sm:flex  items-center gap-4 sm:gap-28 cursor-pointer ml-10 sm:ml-0">
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								const solutionsComponent = document.getElementById("services");
								if (solutionsComponent) {
									solutionsComponent.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}
							}}
						>
							Services
						</span>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								const solutionsComponent = document.getElementById("solutions");
								if (solutionsComponent) {
									solutionsComponent.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}
							}}
						>
							Solutions
						</span>
						{/* <span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							APIs
						</span> */}
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							Team
						</span>
					</div>
					<div className="grid sm:flex  items-center gap-4 sm:gap-20 cursor-pointer ml-10 sm:ml-0">
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => router.push(`/contact`)}
						>
							Contact Us
						</span>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => router.push(`/team`)}
						>
							About Us{" "}
						</span>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							Talk to an Expert
						</span>
					</div>
					<div className="flex  items-center sm:justify-end gap-4 sm:mt-14 sm:gap-10 cursor-pointer ml-10 sm:ml-0">
						{/* <div className="flex items-center justify-end gap-10 mt-14 cursor-pointer"> */}
						<a
							href="https://twitter.com/CentroxAI"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={TwitterIcon} alt="Logo" className="w-4 sm:w-8" />
						</a>
						<a
							href=" https://www.linkedin.com/company/centroxai"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={LinkedinIcon} alt="Logo" className="w-4 sm:w-8" />
						</a>
						{/* <Image
							src={MsgIcon}
							alt="Logo"
							className="w-6 sm:w-10"
							onClick={() => {
								setShowToast(!showToast);
							}}
						/> */}
					</div>
					<div className="flex  items-center mt-2 justify-end">
						<span className="text-white font-bold sm:text-xl ml-10 sm:ml-0">
							© 2024 Centrox Technologies, Inc.All rights reserved.
						</span>
					</div>
				</div>
			</div>
			{showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
		</footer>
	);
};
