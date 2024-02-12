import BackgroundImage from "@/assets/Services BackGround.png";
import DataCurationImage from "@/assets/DataCuration.svg";
import DataLabelingImage from "@/assets/DataLabelling.svg";
import CustomDataImage from "@/assets/CustomDataWorkflow.svg";
import BuildingAi from "@/assets/BuildingAI.svg";
import DeployingAi from "@/assets/DeployingAI.svg";
import Arrow from "@/assets/RightArrow.svg";

import { ReactEventHandler, useState } from "react";
import { Button } from "@/Components/Button.js/button";
import classNames from "@/helpers/common";
import Image from "next/image";
interface GradientCardProps {
	title: string;
	description: string;
	onMouseEnter?: ReactEventHandler;
	onMouseLeave?: ReactEventHandler;
}

const GradientCard: React.FC<GradientCardProps> = ({
	title,
	description,
	onMouseEnter,
	onMouseLeave,
}) => (
	<div
		className="rounded-2xl border border-solid border-blue-500 bg-blue-gradient  flex flex-col gap-3 p-5 mt-10 box-shadow-initial cursor-pointer"
		style={{
			background:
				"radial-gradient(88.47% 182.54% at 0% 0%, rgba(6, 119, 230, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
		}}
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
	>
		<span className="text-3xl text-white font-bold">{title}</span>
		<span className="text-xl text-white-offWhite font-normal">
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
					className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base  focus:outline-none focus:ring-indigo-500 sm:text-sm"
					defaultValue={selectedTab}
				>
					{tabs.map((tab: any) => (
						<option key={tab.name}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className="hidden sm:flex w-full justify-center">
				<div className="border-b-4  border-gray-800">
					<nav
						className="-mb-px flex justify-center items-center space-x-8"
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
									"whitespace-nowrap border-b-2 py-4 px-1 text-2xl font-semibold cursor-pointer",
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
	const [tabs, setTabs] = useState([
		{ name: "Solving Data", href: "#", current: true },
		{ name: "ModelDev", href: "#", current: false },
		{ name: "AIOps", href: "#", current: false },
	]);
	const [hoveredCard, setHoveredCard] = useState<null | number>(null);

	return (
		<>
			<div className="flex flex-col gap-4 w-full sm:px-[7%] 3xl:px-[19%] mt-28">
				<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
					Accelerate AI Deployment with Lighting Fast Annotation
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
					Which stage of development you are at?
				</div>
				<Button
					content="Learn More"
					isLefticon={false}
					iconClassName="-mt-1"
					Icon={Arrow}
					className="bg-blue-azure border-0 w-44 !rounded-full"
				/>
			</div>
			<section className="relative py-12 overflow-hidden bg-gray-charcoal sm:py-16 lg:py-20 3xl:px-[15%]">
				<div className="absolute bottom-0 right-0 overflow-hidden">
					<Image className="w-full" src={BackgroundImage as never} alt="" />
				</div>

				<div className="sm:px-[7%] 3xl:px-[5%] mt-10">
					<div className="container mx-auto mt-10">
						<div
							className="border border-blue-azure text-white md:p-16 p-8 rounded-3xl flex flex-col gap-20 h-full"
							style={{
								backdropFilter: "blur(10px)",
								background: "rgba(5, 110, 225, 0.03)",
							}}
						>
							<Tabs tabs={tabs} setTabs={setTabs} />

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
								{tabs.map(
									(tab, index) =>
										tab?.current && (
											<div key={index} className="flex flex-col gap-4">
												<span className="text-5xl text-white font-bold">
													{index === 0
														? "Solving Data"
														: index === 1
														? "Building AI"
														: "Deploying AI"}
												</span>
												<span className="text-2xl font-semibold text-gray-light">
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
													onMouseEnter={() => setHoveredCard(1)}
													onMouseLeave={() => setHoveredCard(null)}
												/>
												<GradientCard
													title={
														index === 0
															? "Data Labeling"
															: index === 1
															? "Model Development"
															: "Model Development"
													}
													description={
														index === 0
															? "Our rich pool of experts will label your data with the best quality possible."
															: index === 1
															? "Build your model in an accustomed AI Environment ready to improve."
															: "Deploy your model On-premise or want us to set up your ML-Cloud?"
													}
													onMouseEnter={() => setHoveredCard(2)}
													onMouseLeave={() => setHoveredCard(null)}
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
													onMouseEnter={() => setHoveredCard(3)}
													onMouseLeave={() => setHoveredCard(null)}
												/>
											</div>
										),
								)}
								<div className="flex items-center h-full mt-10">
								{tabs[0]?.current && (
										<Image
											className="w-full h-auto"
											src={
												hoveredCard === 3
													? CustomDataImage
													: hoveredCard === 2
													? DataLabelingImage
													: DataCurationImage
											}
											alt=""
										/>
									)}
									{tabs[1]?.current && (
										<Image className="w-full h-auto" src={BuildingAi} alt="" />
									)}
									{tabs[2]?.current && (
										<Image className="w-full h-auto" src={DeployingAi} alt="" />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
