import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import AppLogo from "@/assets/LogoWhite.png";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import MsgIcon from "@/assets/msg.svg";
import { Toast } from "@/Components/Toast/toast";

export const Footer = () => {
	const [showToast, setShowToast] = useState(false);
	const router = useRouter();

	return (
		<footer className="py-12 bg-black">
			<div className="grid gap-10 sm:gap-0 sm:flex justify-between mx-5 sm:mx-[7%] mt-20 sm:mt-60">
				<div className="h-full">
					<Image src={AppLogo} alt="Logo" className="w-[10rem] sm:w-60" />
				</div>
				<div className="flex flex-col gap-5">
					<div
						className="grid sm:flex  items-center gap-4 sm:gap-28 cursor-pointer ml-10 sm:ml-0"
						onClick={() => {
							setShowToast(!showToast);
						}}
					>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							Services
						</span>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							Solutions
						</span>
						<span
							className="text-white font-semibold sm:text-2xl"
							onClick={() => {
								setShowToast(!showToast);
							}}
						>
							APIs
						</span>
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
						<Image
							src={TwitterIcon}
							alt="Logo"
							className="w-4 sm:w-8"
							onClick={() => {
								setShowToast(!showToast);
							}}
						/>
						<Image
							src={LinkedinIcon}
							alt="Logo"
							className="w-4 sm:w-8"
							onClick={() => {
								setShowToast(!showToast);
							}}
						/>
						<Image
							src={MsgIcon}
							alt="Logo"
							className="w-6 sm:w-10"
							onClick={() => {
								setShowToast(!showToast);
							}}
						/>
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
