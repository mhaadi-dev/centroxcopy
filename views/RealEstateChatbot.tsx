import classNames from "@/helpers/common";
import { useState } from "react";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import { Input } from "./Contactus";
import { Button } from "@/Components/Button.js/button";
import XIcon from "@/assets/Xicon.svg";
import { CHATBOT_API_BASE } from "@/config/secret";

export const RealEstateChatbot = () => {
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
						Real-Estate Chatbot
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-[85%] lg:w-[55%] 3xl:w-[40%] mt-8">
						Our AI-powered chatbot helps you quickly identify promising
						properties and make informed decisions. Start your free demo today!
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
	const [pdfFile, setPdfFile] = useState<File | null>(null);
	const [error, setError] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
	const [msg, setMsg] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files && event.target.files[0];
		if (selectedFile && selectedFile.type === "application/pdf") {
			setPdfFile(selectedFile);
		} else {
			setError("Please select a PDF file.");
		}
	};

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
	const uploadFile = async () => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append("name", name);

			if (pdfFile !== null) {
				formData.append('files', pdfFile);
			} else {
				throw new Error("PDF file is missing.");
			}

			const response = await fetch(`${CHATBOT_API_BASE}/chatdoc/upload`, {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error("Failed to submit form data");
			}
			setIsLoading(false);
			setMsg("Your request has been submitted successfully");
		} catch (error) {
			console.error("Error submitting form data:", error);
			setError("There is a problem submitting your request");
			setIsLoading(false);
		}
	};

	return (
		<div className="border-2 border-blue-500 shadow-blue-azure shadow-lg border-opacity-50 rounded-xl py-4 flex flex-col  lg:w-[48rem] lg:h-[32rem]">
			<div className="w-full py-4 px-8">
				<div className="w-full  px-8 py-4">
					<div className="relative flex items-center justify-between w-full">
						<div className="absolute left-0 -mt-2 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
						<div
							className="absolute left-0 top-2/4 -mt-2 h-1 sm:h-2 w-full -translate-y-2/4 bg-blue-azure transition-all duration-500 rounded-md"
							style={{ width: `${(activeStep + 1) * 33.33}%` }}
						></div>
						<div className="flex flex-col justify-center items-start">
							<div
								className={`relative z-10 grid w-10 h-10 lg:w-20 lg:h-20 font-bold -ml-1 j text-white transition-all duration-300 ${
									activeStep >= 0 ? "bg-blue-azure" : "bg-gray-900"
								} rounded-full place-items-center step`}
								onClick={() => setActiveStep(0)}
							>
								1
							</div>
							<div className="text-xs text-white mt-2">Enter Your Name</div>{" "}
						</div>
						<div className="flex flex-col justify-center items-start">
							<div
								className={`relative z-10 grid ml-8 lg:ml-0 w-10 h-10 lg:w-20 lg:h-20 font-bold text-white transition-all duration-300 ${
									activeStep >= 1 ? "bg-blue-azure" : "bg-gray-900"
								} rounded-full place-items-center step`}
								onClick={() => setActiveStep(1)}
							>
								2
							</div>
							<div className="text-xs text-white mt-2">Upload your Files</div>{" "}
						</div>
						<div className="flex flex-col justify-center items-end">
							<div
								className={`relative z-10 grid w-10 h-10 lg:w-20 lg:h-20 -mr-1 font-bold text-white transition-all duration-300 ${
									activeStep === 2 ? "bg-blue-azure" : "bg-gray-900"
								} rounded-full place-items-center step`}
								onClick={() => setActiveStep(2)}
							>
								3
							</div>
							<div className="text-xs text-white mt-2">Input your Inquiry</div>{" "}
						</div>
					</div>
				</div>
			</div>

			{activeStep === 0 && (
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
			{activeStep === 1 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-14">
					<div>
						{!pdfFile && (
							<label htmlFor="file-uploader" className="cursor-pointer">
								Upload PDF File
							</label>
						)}
						{!pdfFile && (
							<input
								type="file"
								accept=".pdf"
								className={`block w-full mt-2 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none sm:text-sm sm:leading-6 ${
									error
										? "border-2 border-red-500"
										: "focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50"
								}`}
								onChange={handleFileChange}
								id="file-uploader"
							/>
						)}
						{pdfFile && (
							<div className="flex items-center  justify-between mt-2">
								<p className="text-lg font-semibold mr-2">
									Selected PDF: {pdfFile.name}
								</p>
								<button
									onClick={() => setPdfFile(null)}
									className="focus:outline-none"
								>
									<Image
										src={XIcon}
										alt="sorry"
										className="h-5 w-5 text-red-500 cursor-pointer"
									/>
								</button>
							</div>
						)}
					</div>
					<div className="flex w-full justify-between">
						<Button
							content="Prev"
							onClick={handlePrev}
							className="w-28 !rounded-full"
						/>

						<Button
							content="Next"
							onClick={uploadFile}
							isLoading={isLoading}
							className="w-28 !rounded-full"
						/>
					</div>
				</div>
			)}
			{activeStep === 2 && (
				<div className="text-white flex flex-col justify-center h-full gap-10 px-14">
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-lg font-semibold leading-6  text-white"
						>
							Ask me anything <br />
							<span className="text-gray-400 text-sm">
								Get any insight from the uploaded file{" "}
							</span>
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50 sm:text-sm sm:leading-6 ${"focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50"}`}
								// onChange={handleInputChange}
								// value={formData.message}
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
							onClick={handleNext}
							isDisabled={!name}
							className="w-28 !rounded-full"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
