import BackgroundImage from "@/assets/ServicesLines.svg";
import DataCurationImage from "@/assets/DataCuration.png";
import DataLabelingImage from "../assets/DataLabelling.png";
import CustomDataImage from "@/assets/CustomDataWorkflow.png";
import BuildingAi from "@/assets/BuildingAI.png";
import ArrowIcon from "@/assets/POCArrow.svg";
import ModDev2 from "@/assets/ModDev2.webp";
import AIDev3 from "@/assets/ModDev3.webp";
import AIDev2 from "@/assets/AI2.webp";
import ModDev3 from "@/assets/AI3.webp";
import DeployingAi from "@/assets/DeployingAI.png";
import Arrow from "@/assets/RightArrow.svg";

import { ReactEventHandler, useCallback, useState } from "react";
import { Button } from "@/Components/Button.js/button";
import classNames, { generateBlurDataURL } from "@/helpers/common";
import Image from "next/image";
import { Toast } from "@/Components/Toast/toast";
interface GradientCardProps {
	title: string;
	description: string;
	showHoverState?: boolean;
	hoveredCard?: number;
	onMouseEnter?: ReactEventHandler;
	onMouseLeave?: ReactEventHandler;
	onClick?: () => void;
}

const GradientCard: React.FC<GradientCardProps> = ({
	title,
	description,
	onMouseEnter,
	onMouseLeave,
	onClick,
	showHoverState,
	hoveredCard,
}) => (
	<div
		className={classNames(
			"rounded-xl flex flex-col gap-3 p-5 mt-10 cursor-pointer",
		)}
		style={{
			background:
				"radial-gradient(88.47% 182.54% at 0% 0%, rgba(6, 119, 230, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
			boxShadow: showHoverState
				? "0px 0px 15px 6px rgba(6, 119, 230, 0.4)"
				: "",
			border: "2px solid rgba(6, 119, 230, 0.2)",
		}}
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
		onClick={() => onClick?.()}
	>
		<div className="flex justify-between items-center">
			<span className="text-xl md:text-3xl text-white font-bold">{title}</span>
			{hoveredCard !== 0 && showHoverState && (
				<Image src={ArrowIcon} alt="" className="w-9" />
			)}
		</div>
		<span className="text-md md:text-xl text-white-offWhite font-normal">
			{description}
		</span>
	</div>
);
const Tabs = ({ tabs, setTabs }: any) => {
	const selectedTab =
		tabs.find((tab: any) => tab.current)?.name || tabs[0].name;
	return (
		<div>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					name="tabs"
					className="block w-full rounded-md border-2 border-blue-azure py-2 pl-3 pr-10 text-base  focus:outline-none bg-transparent sm:text-sm"
					defaultValue={selectedTab}
					onChange={(e: any) => {
						const selectedTabName = e.target.value;
						setTabs((prevTabs: any) =>
							prevTabs.map((prevTab: any) => ({
								...prevTab,
								current: prevTab.name === selectedTabName,
							})),
						);
					}}
				>
					{tabs.map((tab: any) => (
						<option key={tab.name}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className="hidden sm:flex w-full justify-center">
				<div className="border-b-4  border-gray-800">
					<nav
						className=" flex justify-center px-4 items-center space-x-8"
						aria-label="Tabs"
					>
						{tabs.map((tab: any) => (
							<a
								key={tab.name}
								// href={tab.href}
								className={classNames(
									tab.current
										? "border-blue-azure text-blue-azure z-30"
										: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
									"whitespace-nowrap border-b-2 sm:py-4 px-1 text-2xl font-semibold cursor-pointer",
								)}
								aria-current={tab.current ? "page" : undefined}
								onClick={() =>
									setTabs((prevTabs: any) =>
										prevTabs.map((prevTab: any) => ({
											...prevTab,
											current: prevTab.name === tab.name,
										})),
									)
								}
							>
								{tab.name}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export const Section3 = () => {
	const [showToast, setShowToast] = useState(false);
	const [tabs, setTabs] = useState([
		{ name: "Solving Data", href: "#", current: true },
		{ name: "Model Dev", href: "#", current: false },
		{ name: "MLOps", href: "#", current: false },
	]);
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

	const handleImageLoad = async () => {
		if (!blurDataURLs[currentHoverCard]) {
			let imageUrl = "";
			switch (currentHoverCard) {
				case 3:
					imageUrl = CustomDataImage.src;
					break;
				case 3:
					imageUrl = DataLabelingImage.src;
					break;
				default:
					imageUrl = DataCurationImage.src;
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
		<>
			<div
				className="flex flex-col gap-4 sm:gap-9 items-center px-5 sm:px-0 sm:w-[50%] sm:ml-[25%] mt-60"
				id="services"
			>
				<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-center font-thin">
					Accelerate <span className="font-semibold">AI Deployment</span> with
					Lighting <span className="font-semibold">Fast</span> Annotation
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
					Which stage of development you are at?
				</div>
				<Button
					content="Learn More"
					isLefticon={false}
					iconClassName="-mt-1"
					Icon={Arrow}
					className="bg-blue-azure border-0 w-44 !rounded-full -mt-1 sm:-mt-5"
					onClick={() => {
						setShowToast(!showToast);
					}}
				/>
			</div>
			<section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 3xl:px-[15%]">
				<div className="hidden sm:block  absolute bottom-0 right-0 ml-4 overflow-hidden">
					<Image className="w-auto" src={BackgroundImage as never} alt="" />
				</div>

				<div className="px-5 sm:px-[7%] 3xl:px-[0%] 2xl:-ml-[5%] 3xl:-ml-[0%]">
					<div className="container mx-auto">
						<div
							className="text-white md:p-16 p-4 sm:p-8 rounded-3xl flex flex-col gap-20 h-full xlc:w-full max-w-[100%] 2xl:ml-[5%] border-opacity-40"
							style={{
								backdropFilter: "blur(10px)",
								background: "rgba(5, 110, 225, 0.03)",
								boxShadow: "0px 0px 14px 0px rgba(5, 110, 225, 0.3)",
							}}
						>
							<Tabs tabs={tabs} setTabs={setTabs} />
							<div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
								{tabs.map(
									(tab, index) =>
										tab?.current && (
											<div
												key={index}
												className="flex flex-col sm:gap-4 -mt-7 sm:-mt-0 3xl:justify-around 3xl:-mt-[13%]"
											>
												<span className="text-2xl md:text-5xl text-white font-bold flex justify-start">
													{index === 0
														? "Solving Data"
														: index === 1
														? "Building AI"
														: "Deploying AI"}
												</span>
												<span className="text-lg md:text-2xl font-semibold text-gray-light flex justify-start">
													{index === 0
														? "Need help with Data?"
														: index === 1
														? "Get your own custom model built with benchmarked results."
														: "Deploy your AI model securely anywhere, anytime to go live."}
												</span>
												<GradientCard
													title={
														index === 0
															? "Data Curation"
															: index === 1
															? "Algorithm Design"
															: "Model Serving"
													}
													description={
														index === 0
															? "Gather and build the right dataset for your project."
															: index === 1
															? "Design state of the art algorithm or enhance your existing architecture."
															: "Name the technology and we will serve your model the right way."
													}
													showHoverState={lastHoveredCard === 1}
													hoveredCard={currentHoverCard}
													onMouseEnter={() => handleMouseEnter(1)}
													onMouseLeave={() => handleMouseLeave(1)}
													onClick={() => {
														setShowToast(!showToast);
													}}
												/>
												<GradientCard
													title={
														index === 0
															? "Data Labeling"
															: index === 1
															? "Model Deployment"
															: "Model Deployment"
													}
													description={
														index === 0
															? "Our rich pool of experts will label your data with the best quality possible."
															: index === 1
															? "Build your model in an accustomed AI Environment ready to improve."
															: "Deploy your model On-premise or want us to set up your ML-Cloud?"
													}
													showHoverState={lastHoveredCard === 2}
													hoveredCard={currentHoverCard}
													onMouseEnter={() => handleMouseEnter(2)}
													onMouseLeave={() => handleMouseLeave(2)}
													onClick={() => {
														setShowToast(!showToast);
													}}
												/>
												<GradientCard
													title={
														index === 0
															? "Custom Data Workflow"
															: index === 1
															? "Model Training"
															: "Model Training"
													}
													description={
														index === 0
															? "Get served with a personalized workflow for your ongoing data needs."
															: index === 1
															? "Train your model for experiments and analysis."
															: "We can help optimize your model to perform in less time with better results."
													}
													showHoverState={lastHoveredCard === 3}
													hoveredCard={currentHoverCard}
													onMouseEnter={() => handleMouseEnter(3)}
													onMouseLeave={() => handleMouseLeave(3)}
													onClick={() => {
														setShowToast(!showToast);
													}}
												/>
											</div>
										),
								)}
								<div className="flex items-center justify-center 2xl:items-end">
									<div className="flex items-end lg:h-[80%] sm:mt-10 py-5">
										{tabs[0]?.current && (
											<Image
												className="w-full h-[100%]"
												loading="eager"
												src={
													lastHoveredCard === 3
														? CustomDataImage
														: lastHoveredCard === 2
														? DataLabelingImage
														: DataCurationImage
												}
												alt=""
												placeholder="blur"
												onLoad={handleImageLoad}
												blurDataURL={blurDataURLs[currentHoverCard]}
											/>
										)}
										{tabs[1]?.current && (
											<Image
												className="w-full h-[100%] lg:pt-3"
												src={
													lastHoveredCard === 3
														? ModDev3
														: lastHoveredCard === 2
														? ModDev2
														: BuildingAi
												}
												alt=""
												loading="eager"
												placeholder="blur"
												onLoad={handleImageLoad}
												blurDataURL={blurDataURLs[currentHoverCard]}
											/>
										)}
										{tabs[2]?.current && (
											<Image
												className="w-full h-[100%] lg:pt-2"
												src={
													lastHoveredCard === 3
														? AIDev3
														: lastHoveredCard === 2
														? AIDev2
														: DeployingAi
												}
												alt=""
												loading="eager"
												placeholder="blur"
												onLoad={handleImageLoad}
												blurDataURL={blurDataURLs[currentHoverCard]}
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{showToast && (
					<Toast showToast={showToast} setShowToast={setShowToast} />
				)}
			</section>
		</>
	);
};
