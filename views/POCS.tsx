import NextImage from "next/image";
import { ReactEventHandler, useCallback, useState } from "react";
import { Toast } from "@/Components/Toast/toast";
import classNames, { generateBlurDataURL } from "@/helpers/common";
import POC1Image from "@/assets/FPOC.webp";
import POC1Image1 from "@/assets/FPOC.svg";
import POCImage2 from "@/assets/FPOC2.webp";
import POC2Image2 from "@/assets/FPOC2.svg";
import POCImage3 from "@/assets/FPOC3.webp";
import POC3Image3 from "@/assets/FPOC3.svg";
import POCImage4 from "@/assets/FPOC4.webp";
import ArrowIcon from "@/assets/POCArrow.svg";
import POC4Image4 from "@/assets/FPOC4.svg";
import { useRouter } from "next/navigation";

interface GradientCardProps {
	tabName: string;
	isLeftGradient?: boolean;
	showHoverState?: boolean;
	hoveredCard?: number;
	onMouseEnter?: ReactEventHandler;
	onMouseLeave?: ReactEventHandler;
	onClick?: () => void;
}
const GradientTab: React.FC<GradientCardProps> = ({
	onClick,
	tabName = "",
	onMouseEnter,
	onMouseLeave,
	isLeftGradient = false,
	showHoverState = false,
	hoveredCard,
}) => {
	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick?.()}
			className={classNames(
				"rounded-lg text-white font-bold text-xl md:text-3xl p-10 cursor-pointer flex justify-between items-center",
				// showHoverState &&
				// 	"order-opacity-50 border-opacity-80 shadow-md shadow-blue-azure border-2 border-blue-500",
			)}
			style={{
				background: isLeftGradient
					? "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)"
					: "radial-gradient(112.77% 124.52% at 0% 0%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
				backdropFilter: "blur(18px)",
				boxShadow: showHoverState
					? "0px 0px 15px 8px rgba(3, 34, 182, 0.4)"
					: "",
				border: "1px solid rgba(3, 34, 182, 0.2)",
			}}
		>
			{tabName}
			{showHoverState && hoveredCard !== 0 && (
				<NextImage src={ArrowIcon} alt="" className="w-9" />
			)}
		</div>
	);
};

export const POCS = () => {
	const router = useRouter();
	const [showToast, setShowToast] = useState<boolean>(false);
	const [lastHoveredCard, setLastHoveredCard] = useState<number>(1);
	const [currentHoverCard, setCurrentHoverCard] = useState<number>(0);
	const [blurDataURLs, setBlurDataURLs] = useState<Record<number, string>>({});

	const handleMouseEnter = useCallback((cardNumber: number) => {
		setLastHoveredCard(cardNumber);
		setCurrentHoverCard(cardNumber);
	}, []);

	const handleMouseLeave = useCallback((cardNumber: number) => {
		setLastHoveredCard(cardNumber);
		setCurrentHoverCard(0);
	}, []);

	const handleClick = useCallback(() => {
		setShowToast(!showToast);
	}, [showToast]);

	const handleImageLoad = async () => {
		if (!blurDataURLs[currentHoverCard]) {
			let imageUrl = "";
			switch (currentHoverCard) {
				case 2:
					imageUrl = POCImage2.src;
					break;
				case 3:
					imageUrl = POCImage3.src;
					break;
				case 4:
					imageUrl = POCImage4.src;
					break;
				default:
					imageUrl = POC1Image.src;
					break;
			}
			const blurredBase64 = await generateBlurDataURL(imageUrl);
			setBlurDataURLs((prevBlurDataURLs) => ({
				...prevBlurDataURLs,
				[currentHoverCard]: blurredBase64,
			}));
		}
	};

	return (
		<div
			className="flex flex-col gap-16 justify-center items-center mt-10 sm:mt-60"
			id="solutions"
		>
			<div className="flex flex-col gap-4 items-center sm:w-4/5 ">
				<div className="text-2xl md:text-6xl text-white font-semibold text-center">
					Our specialized AI products
				</div>
				<div className="text-gray-100 font-medium text-xl md:text-3xl flex justify-center text-center mt-5 lg:mt-0">
					<div className="w-[75%] lg:w-[55%]">
						Apply AI to your most demanding challenges with precision through
						our pre-built applications.
					</div>
				</div>
			</div>

			<div className=" w-4/5 grid grid-cols-1 lg:flex justify-between mt-14 gap-10 sm:gap-0">
				<div className="flex flex-col gap-4 justify-between w-full lg:w-[35%] py-6">
					<GradientTab
						tabName="Snap and Measurement"
						showHoverState={lastHoveredCard === 1}
						hoveredCard={currentHoverCard}
						onMouseEnter={() => handleMouseEnter(1)}
						onMouseLeave={() => handleMouseLeave(1)}
						onClick={() => router.push("/bodyMeasurements")}
					/>
					<GradientTab
						tabName="Smart Chatbot"
						isLeftGradient
						showHoverState={lastHoveredCard === 2}
						hoveredCard={currentHoverCard}
						onMouseEnter={() => handleMouseEnter(2)}
						onMouseLeave={() => handleMouseLeave(2)}
						onClick={() => router.push("/chatbotRealEstate")}
					/>
					<GradientTab
						tabName="Labeling Dresses with AI"
						showHoverState={lastHoveredCard === 3}
						onMouseEnter={() => handleMouseEnter(3)}
						hoveredCard={currentHoverCard}
						onMouseLeave={() => handleMouseLeave(3)}
						onClick={handleClick}
					/>
					<GradientTab
						tabName="LLM Based Health Chatbot"
						isLeftGradient
						showHoverState={lastHoveredCard === 4}
						hoveredCard={currentHoverCard}
						onMouseEnter={() => handleMouseEnter(4)}
						onMouseLeave={() => handleMouseLeave(4)}
						onClick={() => router.push("/healthChatbot")}
					/>
				</div>
				<div className="lg:w-[35%] flex justify-center">
					<NextImage
						src={
							lastHoveredCard === 4
								? POCImage4
								: lastHoveredCard === 3
								? POCImage3
								: lastHoveredCard === 2
								? POCImage2
								: POC1Image
						}
						alt="sorry"
						className="w-auto h-full py-4 px-12"
						placeholder="blur"
						onLoad={handleImageLoad}
						priority
						blurDataURL={blurDataURLs[lastHoveredCard]}
					/>
				</div>
				<div className="flex flex-col justify-between  lg:w-[30%]">
					<div className="flex flex-col gap-4 bg-gray-dark  h-1/2 p-4 rounded-xl text-white mt-10 lg:mt-5">
						<div className="text-4xl font-semibold">
							{lastHoveredCard === 4
								? "LLM Based Health Chatbot"
								: lastHoveredCard === 3
								? "Labeling Dresses with AI"
								: lastHoveredCard === 2
								? "Smart Chatbot"
								: "Full Body Measurements"}
						</div>
						<div className="text-xl font-medium">
							{lastHoveredCard === 4
								? "Using the RAG pipeline, This chatbot strives to offer personalized support for mental health by understanding user queries and delivering empathetic responses,"
								: lastHoveredCard === 3
								? "AI Dress Labeling Seamlessly deploys our AI solution by uploading an image.This has utilized the 'test' parameter with the base64-converted image to receive a dictionary featuring an property, showcasing a list of up to three dress characteristics."
								: lastHoveredCard === 2
								? "This demonstrates how users can effortlessly find their ideal property by querying the chatbot. The  property information is made  accurate and aligns with user preferences for a seamless property search experience."
								: "It's an advanced AI B2B product designed to tackle complex challenges in the fashion-retail and fitness domains."}
						</div>
					</div>
					<NextImage
						src={
							lastHoveredCard === 4
								? POC4Image4
								: lastHoveredCard === 3
								? POC3Image3
								: lastHoveredCard === 2
								? POC2Image2
								: POC1Image1
						}
						alt="sorry"
						priority
						className="w-full lg:w-auto h-1/2 mt-10 lg:mt-0"
					/>
				</div>
			</div>
			{showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
		</div>
	);
};
