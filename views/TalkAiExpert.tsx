"use client";
import { Button } from "@/Components/Button.js/button";
import { useState } from "react";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";

export const TalkAiExpert = () => {
	return (
		<div className="bg-gray-charcoal lg:h-screen">
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
				<Image src={Lines} alt="sorry" className="h-full w-full" />
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Speed up the Implementation
						<br /> of Your AI Applications
					</div>
					<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-1/2 3xl:w-[35%] mt-8">
						Schedule a one-on-one demonstration for a personalized platform
						walkthrough for your company.
					</div>
					<div className="mt-6">
						<CalendlyWidget />
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
			<Button onClick={openCalendlyPopup} content="Open Calendly" />
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
