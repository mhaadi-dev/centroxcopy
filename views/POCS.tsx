import Image from "next/image";
import Poc1 from "@/assets/POCF.svg";
import Poc2 from "@/assets/RealEstate.svg";
import Poc3 from "@/assets/LabellingAI.svg";
import Poc4 from "@/assets/LLM.svg";
import { ReactEventHandler, useState } from "react";
import { generateLinearGradientBase64 } from "@/helpers/common";

interface GradientCardProps {
	tabName: string;
	isLeftGradient?: boolean;
	onMouseEnter?: ReactEventHandler;
	onMouseLeave?: ReactEventHandler;
	onClick?: () => void;
}
const GradientTab: React.FC<GradientCardProps> = ({
	tabName = "",
	isLeftGradient = false,
	onMouseEnter,
	onMouseLeave,
	onClick,
}) => {
	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick?.()}
			className="rounded-lg text-white font-bold text-xl md:text-3xl p-10 cursor-pointer"
			style={{
				border: "1px solid rgba(3, 34, 182, 0.20)",

				background: isLeftGradient
					? "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)"
					: "radial-gradient(112.77% 124.52% at 0% 0%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
				boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
				backdropFilter: "blur(18px)",
			}}
		>
			{tabName}
		</div>
	);
};

export const POCS = () => {
	const linearGradientBlurDataURL = generateLinearGradientBase64();
	const [showToast, setShowToast] = useState(false);
	const [hoveredCard, setHoveredCard] = useState<null | number>(null);

	return (
		<div className="flex flex-col gap-16 justify-center items-center mt-10 sm:mt-40 md:mt-80">
			<div className="flex flex-col gap-4 items-center sm:w-[89%]">
				<div className="text-2xl md:text-6xl text-white font-semibold">
					Our specialized AI products
				</div>
				<div className="text-gray-100 font-medium text-xl md:text-3xl flex justify-center text-center">
					<div className="w-[75%] sm:w-[55%]">
						Apply AI to your most demanding challenges with precision through
						our pre-built applications.
					</div>
				</div>
			</div>

			<div className=" w-[90%] flex flex-wrap justify-between mt-14 gap-10 sm:gap-0">
				<div className="flex flex-col gap-4 justify-between w-full lg:w-[35%] py-6">
					<GradientTab
						tabName="Snap and Measurement"
						onMouseEnter={() => setHoveredCard(1)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="Real-estate Chatbot"
						isLeftGradient
						onMouseEnter={() => setHoveredCard(2)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="Labeling Dresses with AI"
						onMouseEnter={() => setHoveredCard(3)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="LLM Based Health Chatbot"
						isLeftGradient
						onMouseEnter={() => setHoveredCard(4)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
				</div>
				<div className="flex justify-start lg:w-[62%]">
					<Image
						src={
							hoveredCard === 2
								? Poc2
								: hoveredCard === 3
								? Poc3
								: hoveredCard === 4
								? Poc4
								: Poc1
						}
						alt=""
						loading="eager"
						className="w-full"
						placeholder="blur"
						blurDataURL={linearGradientBlurDataURL}
					/>
				</div>
			</div>
		</div>
	);
};
