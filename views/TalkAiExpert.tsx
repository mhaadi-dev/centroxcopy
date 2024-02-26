"use client";
import { Button } from "@/Components/Button.js/button";
import { useState } from "react";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import harrisImg from "@/assets/harrisimg.png";
import { LogosCarousel } from "./LogosCarousel";
import PlusColor from "@/assets/PlusColor.svg";
import Background from "@/assets/Background.svg";

export const TalkAiExpert = () => {
	return (
		<div className="bg-black ">
			{/* Section 1 */}
			<div
				className="flex justify-center items-center relative"
				style={{
					background:
						"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%, rgba(7, 157, 252, 0) 100%), rgba(6, 6, 6, 1)",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Image
					src={Lines}
					alt="sorry"
					className="h-screen lg:h-full lg:w-full"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Speed up the Implementation
						<br /> of Your AI Applications
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-1/2 3xl:w-[35%] mt-8">
						Schedule a one-on-one demonstration for a personalized platform
						walkthrough for your company.
					</div>
					<div className="mt-6">
						<CalendlyWidget />
					</div>
				</div>
			</div>
			{/* Section 2 */}
			<div className="w-full flex justify-center pt-32 lg:pt-60">
				<div className="w-[90%] grid grid-cols-1 gap-10 lg:gap-0 lg:flex justify-between">
					<div className="flex flex-col gap-8">
						<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold">
							Meet Our AI Expert
						</div>
						<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-medium lg:w-[60%]">
							Introducing Muhammad Harris, With a wealth of expertise, bringing
							you a professional edge to AI services, Just for you. He's your
							trusted guide to navigating the complex world of artificial
							intelligence with ease.
						</div>
					</div>
					<div>
						<Image
							src={harrisImg}
							alt="sorry"
							className="w-full lg:w-[75rem] 3xl:w-[50rem] object-cover"
						/>
					</div>
				</div>
			</div>
			{/* Section 3 */}
			<div className="w-full flex flex-col justify-center gap-20 pt-32 lg:py-60 overflow-x-hidden">
				<div className="flex justify-center">
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center tracking-wide w-1/2">
						Counted On by The World's Most Ambitious AI Teams
					</div>
				</div>
				<LogosCarousel />
			</div>
			{/* Section 4 */}

			<div className="w-full flex justify-center pt-32 lg:pt-60">
				<div className="w-[90%] grid grid-cols-1 gap-10 lg:gap-0 lg:flex justify-between">
					<div className="flex flex-col gap-8">
						<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
							Why Centrox
						</div>
						<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold lg:w-[70%]">
							We've partnered with premier AI squads worldwide for extensive
							durations regarding unparalleled data volume surpassing all
							others.
						</div>
					</div>
					<div>
						<div className="flex flex-col gap-8">
							<GradientBox heading="100" text="Data Points <br/>Processed" />
							<GradientBox
								heading="130"
								text="Successful <br/>
Projects Deployed"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const CalendlyWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openCalendlyPopup = () => {
		setIsOpen(true);
	};

	const closeCalendlyPopup = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<Button
				onClick={openCalendlyPopup}
				content="Schedule a Session"
				className="!rounded-full"
			/>
			{isOpen && (
				<div
					className="calendly-popup"
					style={{
						backgroundColor: "#121212",
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 9999,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						className="calendly-popup-content"
						style={{
							width: "100%",
							maxWidth: "800px",
							height: "800px",
							border: "none",
							overflow: "hidden",
						}}
					>
						<span
							className="calendly-popup-close text-3xl"
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								cursor: "pointer",
								color: "#ffffff",
							}}
							onClick={closeCalendlyPopup}
						>
							&times;
						</span>
						<iframe
							src="https://calendly.com/hamzahejaz88"
							style={{ width: "100%", height: "100%", border: "none" }}
							scrolling="auto"
							title="Calendly Scheduling"
						></iframe>
					</div>
				</div>
			)}
		</div>
	);
};

const GradientBox = ({ heading, text }: any) => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex justify-center items-center relative">
				<div
					className="w-96 lg:w-[30rem] h-32 text-white rounded-xl flex justify-center items-center"
					style={{
						background:
							"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.4) 0%, rgba(7, 157, 252, 0) 100%), rgba(1, 184, 252, 0.06)",
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Image src={Background} alt="sorry" className="w-full h-full" />
					<div className="absolute flex gap-10 lg:gap-20 items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="text-5xl  inline-block">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-500">
									{heading}
								</span>
							</div>
							<Image src={PlusColor} alt="sorry" className="w-8" />
						</div>
						<div
							className="text-2xl font-semibold"
							dangerouslySetInnerHTML={{ __html: text }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
