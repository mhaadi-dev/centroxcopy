"use client";
import { Button } from "@/Components/Button.js/button";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./Contactus";
import classNames from "@/helpers/common";
import { HEALTH_CHATBOT_API_BASE } from "@/config/secret";
import { AlertOverlay } from "@/Components/AlertOverlays/Alert";
import CentroxWhiteLogo from "@/assets/centroxLogo.svg";
import MsgSend from "@/assets/msgSendGray.svg";
import MsgSendActivate from "@/assets/msgSendWhite.svg";

export const HealthChatbotView = () => {
	return (
		<div className="bg-black overflow-y-auto">
			<div
				className="relative overflow-x-hidden "
				style={{
					background:
						"radial-gradient(62.17% 53.99% at 0% 0%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), radial-gradient(61.14% 51.41% at 100% 77%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), #060606",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Image src={Lines} alt="sorry" className="h-screen w-full" />
				<div className="absolute inset-0 flex flex-col items-center justify-center mt-32 lg:mt-36">
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Mental Health Chat-bot
						<br /> Companion
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-[85%] lg:w-[55%] 3xl:w-[40%] mt-8">
						Mental health support, anytime, anywhere. Chat with our AI mental
						health assistant and gain resources to manage your well-being.
					</div>
					<div className="mt-8 px-5 lg:px-0 pb-10">
						<StepperCom />
					</div>
				</div>
			</div>
		</div>
	);
};
function StepperCom() {
	const [name, setName] = useState("");
	const [activeStep, setActiveStep] = useState(0);
	const [error, setError] = useState("");
	const [msg, setMsg] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState("");
	const [userChat, setUserChat] = useState<any[]>([]);
	const [selectedCard, setSelectedCard] = useState<number>(0);

	const handlePrev = () => {
		if (activeStep > 0) {
			setActiveStep(activeStep - 1);
		}
	};

	const handleNext = () => {
		if (activeStep < 2) {
			setActiveStep(activeStep + 1);
		}
	};

	const chatBotPrompts = async (chatmsg = "") => {
		setIsLoading(true);
		try {
			if (!message && !chatmsg) {
				throw new Error("Message is missing.");
			}
			const queryParams = new URLSearchParams({
				user_id: name,
			});
			const response = await fetch(
				`${HEALTH_CHATBOT_API_BASE}chatbot?${queryParams}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						user_id: name,
						input_text: message || chatmsg,
					}),
				},
			);

			if (!response.ok) {
				throw new Error("Failed to submit prompt");
			}

			const responseData = await response.json();
			setIsLoading(false);
			console.log("Response of prompt is", responseData);
			setUserChat([
				...userChat,
				{ name: "user", message: message || chatmsg },
				{ name: "chatbot", message: responseData.response },
			]);
			setMessage("");
		} catch (error) {
			console.error("Error submitting form data:", error);
			setError("There is a problem submitting your request");
			setIsLoading(false);
			setMessage("");
		}
	};

	return (
		<div
			className="py-10 gap-10 flex flex-col items-center h-full sm:w-[35rem] lg:w-[50rem]"
			style={{
				borderRadius: "48px",
				background: "rgba(6, 6, 6, 0.10)",
				boxShadow: "0px 0px 17px 0px rgba(7, 157, 252, 0.40)",
				backdropFilter: "blur(6px)",
			}}
		>
			{userChat?.length <= 0 && (
				<div className="w-[80%]  px-2 lg:px-12">
					<div className="w-full px-8">
						<div className="relative flex items-center justify-between w-full">
							<div className="absolute left-0 -mt-2 top-2/4 h-0.5 w-full -translate-y-full bg-gray-300"></div>
							<div
								className="absolute left-0 top-2/4 -mt-1.5 h-1 sm:h-2 w-full -translate-y-full bg-blue-azure transition-all duration-500 rounded-md"
								style={{ width: `${(activeStep + 1) * (100 / 2)}%` }}
							></div>
							<div className="flex flex-col justify-center items-start">
								<div
									className={`relative z-10 grid w-12 h-12 lg:w-20 lg:h-20 font-bold -ml-1 j text-white transition-all duration-300 ${
										activeStep >= 0 ? "bg-blue-azure" : "bg-gray-900"
									} rounded-full place-items-center step`}
									onClick={() => {
										if (name) {
											setActiveStep(0);
										}
									}}
								>
									1
								</div>
								<div className="text-xs text-white mt-2 -ml-6 lg:-ml-2">
									Enter Your Name
								</div>{" "}
							</div>
							<div className="flex flex-col justify-center items-end">
								<div
									className={`relative z-10 grid w-12 h-12 lg:w-20 lg:h-20 -mr-1 font-bold text-white transition-all duration-300 ${
										activeStep === 2 ? "bg-blue-azure" : "bg-gray-900"
									} rounded-full place-items-center step`}
								>
									2
								</div>
								<div className="text-xs text-white mt-2 -mr-7 lg:-mr-4">
									Input your Inquiry
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			)}
			{userChat?.length <= 0 && (
				<div className="px-8 lg:px-0">
					<div
						className="flex flex-col gap-4 justify-center items-center py-5 w-full text-white"
						style={{
							borderRadius: "24px",
							background:
								"radial-gradient(63.05% 132.04% at 50.07% -40.41%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(0, 0, 0, 0.10)",
							boxShadow: "0px 0px 5px 10px rgba(7, 157, 252, 0.10)",
						}}
					>
						<Image src={CentroxWhiteLogo} alt="" className="w-12" />
						<div className="flex flex-col gap-1 items-center justify-center text-center">
							<div className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0">
								Welcome! How can I assist you today?
							</div>
							<div className="text-gray-300 text-xs sm:text-sm lg:text-md px-[10%] text-center">
								If you have questions, need help, or just want to chat, I'm here
								to help. Feel free to ask me anything!
							</div>
						</div>
					</div>
				</div>
			)}
			{activeStep === 1 && userChat?.length <= 0 && (
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full px-12">
					<Card
						title="Understanding mental health:"
						description="Learn about mental health and why it's important."
						selected={selectedCard === 1}
						onCardClick={() => {
							setSelectedCard(1);
							chatBotPrompts("Tell me about mental health");
						}}
					/>
					<Card
						title="Self-Care Tips:"
						description="Discover simple ways to improve your mental health."
						selected={selectedCard === 2}
						onCardClick={() => {
							setSelectedCard(2);
							chatBotPrompts("Simple ways to improve your mental health");
						}}
					/>
					<Card
						title="Finding Support:"
						description="Find professional help and support resources..."
						selected={selectedCard === 3}
						onCardClick={() => {
							setSelectedCard(3);
							chatBotPrompts(
								"Find professional help and support resources for mental health",
							);
						}}
					/>
					<Card
						title="Building Resilience:"
						description="Learn how to cope with challenges and build..."
						selected={selectedCard === 4}
						onCardClick={() => {
							setSelectedCard(4);
							chatBotPrompts(
								"Tell me how to cope with challenges and build my mental health",
							);
						}}
					/>
				</div>
			)}
			{activeStep === 0 && userChat?.length <= 0 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-5 lg:px-14 w-full lg:w-[47rem]">
					<Input
						placeholder="Enter your name here"
						name="firstName"
						id="first-name"
						type="text"
						onChange={({ target }) => setName(target.value)}
						value={name}
					>
						<Button
							Icon={!name ? MsgSend : MsgSendActivate}
							onClick={handleNext}
							isDisabled={!name}
							iconClassName="ml-4"
							className="flex items-center justify-center !px-1 !py-1"
						/>
					</Input>
				</div>
			)}

			{activeStep === 1 && userChat?.length <= 0 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-5 lg:px-14 w-full lg:w-[51rem]">
					<Input
						name="message"
						id="message"
						placeholder="Type your message here"
						type="text"
						autoComplete="given-name"
						onChange={({ target }) => setMessage(target.value)}
						value={message}
					>
						<Button
							Icon={
								!isLoading && !message ? MsgSend : !isLoading && MsgSendActivate
							}
							onClick={chatBotPrompts}
							isLoading={isLoading}
							isDisabled={!message}
							iconClassName="ml-4"
							className={classNames(
								"flex items-center justify-center",
								isLoading ? "!px-2 !py-2" : "!px-1 !py-1",
							)}
						/>
					</Input>
				</div>
			)}
			{userChat?.length > 0 && (
				<div className="relative w-full h-96">
					<div className="absolute inset-0 overflow-auto pb-16 w-full h-full px-4">
						{userChat?.map((chat, index) => (
							<div
								key={index}
								className={classNames(
									"flex flex-col",
									chat?.name === "user" ? "items-end" : "items-start",
								)}
							>
								<span
									className={classNames(
										"text-lg font-semibold mr-2 text-white flex",
										chat?.name === "user" ? "justify-end mt-2" : "mt-2",
									)}
								>
									{chat.name === "user" ? (
										<div className="flex gap-1 rounded-full bg-[#079DFC33] bg-opacity-20 px-4 py-1">
											{name.charAt(0).toUpperCase() + name.slice(1)}
										</div>
									) : (
										<div className="flex gap-1 rounded-full bg-[#72EFDD] bg-opacity-20 px-4 py-1">
											<Image
												src={CentroxWhiteLogo}
												alt="sorry"
												className="w-3"
											/>
											Bot
										</div>
									)}
								</span>{" "}
								<div
									key={index}
									className={classNames(
										"flex items-center min-w-44 max-w-fit p-4 text-white justify-start rounded-2xl mt-1.5 mr-2",
										chat?.name === "user"
											? "bg-[#079DFC33] bg-opacity-20 rounded-tr-none"
											: "bg-[#72EFDD] bg-opacity-20 rounded-tl-none",
									)}
								>
									{chat.message}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{userChat?.length > 0 && (
				<div className=" w-full px-4 lg:[45rem]">
					<Input
						name="message"
						id="message-2"
						placeholder="Type your message here"
						type="text"
						autoComplete="given-name"
						onChange={({ target }) => setMessage(target.value)}
						value={message}
					>
						<Button
							Icon={
								!isLoading && !message ? MsgSend : !isLoading && MsgSendActivate
							}
							onClick={chatBotPrompts}
							isDisabled={!message}
							isLoading={isLoading}
							iconClassName="ml-4"
							className={classNames(
								"flex items-center justify-center",
								isLoading ? "!px-2 !py-2" : "!px-1 !py-1",
							)}
						/>
					</Input>
				</div>
			)}
			<AlertOverlay
				heading={error || msg}
				setShow={() => {
					setMsg("");
					setError("");
				}}
				isError={!(msg?.length > 0)}
				show={!!(error?.length > 0 || msg?.length > 0)}
				headingCustomClass={classNames(
					error?.length > 0 ? "!text-red-400" : "!text-gray-500",
				)}
			/>
		</div>
	);
}

const Card = ({ title, description, onCardClick, selected = false }: any) => (
	<div
		className={classNames(
			"flex flex-col rounded-lg h-fit p-2 gap-2 border border-gray-cool hover:cursor-pointer hover:bg-gray-800",
			selected && "bg-gray-800",
		)}
		onClick={() => onCardClick?.()}
	>
		<div className="text-white text-sm font-semibold">{title}</div>
		<div className="text-gray-400 text-xs">{description}</div>
	</div>
);
