"use client";
import { Button } from "@/Components/Button.js/button";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./Contactus";
import classNames from "@/helpers/common";
import { HEALTH_CHATBOT_API_BASE } from "@/config/secret";
import { AlertOverlay } from "@/Components/AlertOverlays/Alert";
export const HealthChatbotView = () => {
	return (
		<div className="bg-black">
			<div
				className="relative overflow-hidden"
				style={{
					background:
						"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%, rgba(7, 157, 252, 0) 100%), rgba(6, 6, 6, 1)",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Image src={Lines} alt="sorry" className="h-screen w-full" />
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Smart Chat bot Agent
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-[85%] lg:w-[55%] 3xl:w-[40%] mt-8">
						Mental health support, anytime, anywhere. Chat with our AI mental
						health assistant and gain resources to manage your well-being.
					</div>
					<div className="mt-8">
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
	const [fileSuccess, setFileSuccess] = useState(false);
	const [message, setMessage] = useState("");
	const [userChat, setUserChat] = useState<any[]>([]);

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

	const chatBotPrompts = async () => {
		setIsLoading(true);
		try {
			if (!message) {
				throw new Error("Message is missing.");
			}

			const response = await fetch(
				`${HEALTH_CHATBOT_API_BASE}chatbot`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ input_text: message }),
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
				{ name: "user", message: message },
				{ name: "chatbot", message: responseData.Response },
			]);
			setMessage("");
		} catch (error) {
			console.error("Error submitting form data:", error);
			setError("There is a problem submitting your request");
			setIsLoading(false);
		}
	};

	return (
		<div className="border-2 border-blue-500 shadow-blue-azure shadow-lg border-opacity-50 rounded-xl py-4 flex flex-col h-full  lg:w-[48rem] lg:h-[32rem] lg:overflow-y-auto">
			{userChat?.length <= 0 && (
				<div className="w-full py-4 px-8">
					<div className="w-full  px-8 py-4">
						<div className="relative flex items-center justify-between w-full">
							<div className="absolute left-0 -mt-2 top-2/4 h-0.5 w-full -translate-y-full bg-gray-300"></div>
							<div
								className="absolute left-0 top-2/4 -mt-2 h-1 sm:h-2 w-full -translate-y-full bg-blue-azure transition-all duration-500 rounded-md"
								style={{ width: `${(activeStep + 1) * (100 / 2)}%` }}
							></div>
							<div className="flex flex-col justify-center items-start">
								<div
									className={`relative z-10 grid w-10 h-10 lg:w-20 lg:h-20 font-bold -ml-1 j text-white transition-all duration-300 ${
										activeStep >= 0 ? "bg-blue-azure" : "bg-gray-900"
									} rounded-full place-items-center step`}
									// onClick={() => setActiveStep(0)}
								>
									1
								</div>
								<div className="text-xs text-white mt-2">Enter Your Name</div>{" "}
							</div>
							<div className="flex flex-col justify-center items-end">
								<div
									className={`relative z-10 grid w-10 h-10 lg:w-20 lg:h-20 -mr-1 font-bold text-white transition-all duration-300 ${
										activeStep === 2 ? "bg-blue-azure" : "bg-gray-900"
									} rounded-full place-items-center step`}
								>
									2
								</div>
								<div className="text-xs text-white mt-2">
									Input your Inquiry
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			)}
			{activeStep === 0 && userChat?.length <= 0 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-14">
					<Input
						label="First name"
						name="firstName"
						id="first-name"
						type="text"
						autoComplete="given-name"
						onChange={({ target }) => setName(target.value)}
						value={name}
					/>
					<div className="flex w-full justify-end">
						<Button
							content="Next"
							onClick={handleNext}
							isDisabled={!name}
							className="w-28 !rounded-full"
						/>
					</div>
				</div>
			)}

			{activeStep === 1 && userChat?.length <= 0 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-14">
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-lg font-semibold leading-6  text-white"
						>
							Ask me anything <br />
							<span className="text-gray-400 text-sm">
							Tell us mental health questions and inquires here.
							</span>
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50 sm:text-sm sm:leading-6 ${"focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50"}`}
								onChange={({ target }) => setMessage(target.value)}
								value={message}
							/>
						</div>
					</div>
					<div className="flex w-full justify-between">
						<Button
							content="Prev"
							onClick={handlePrev}
							className="w-28 !rounded-full"
						/>

						<Button
							content="Next"
							isLoading={isLoading}
							onClick={chatBotPrompts}
							isDisabled={!message}
							className="w-28 !rounded-full"
						/>
					</div>
				</div>
			)}
			{userChat?.length > 0 && (
				<div className="relative h-96">
					<div className="absolute inset-0 overflow-auto pb-16 w-full h-full px-4">
						{userChat?.map((chat, index) => (
							<div
								key={index}
								className={classNames(
									"flex items-center w-full p-4 text-white justify-start mt-2 rounded-3xl ",
									chat?.name === "user"
										? "bg-[#079DFC33] bg-opacity-20"
										: "bg-[#72EFDD] bg-opacity-20",
								)}
							>
								<span
									className={classNames(
										"text-md sm:text-xl font-semibold mr-3",
										chat?.name === "user"
											? "text-blue-azure"
											: "text-[#72EFDD] ",
									)}
								>
									{chat.name === "user"
										? name.charAt(0).toUpperCase() + name.slice(1)
										: "Bot"}
									:
								</span>{" "}
								{chat.message}
							</div>
						))}
					</div>
				</div>
			)}
			{userChat?.length > 0 && (
				<div className=" w-full px-4">
					<Input
						label="Type Another Inquire/Response"
						name="prompt"
						id="prompt"
						type="text"
						autoComplete="given-name"
						onChange={({ target }) => setMessage(target.value)}
						value={message}
					/>
					<div className="flex w-full justify-end mt-2">
						<Button
							content="Submit"
							isDisabled={!message}
							isLoading={isLoading}
							onClick={chatBotPrompts}
							className="!rounded-full w-28"
						/>
					</div>
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
