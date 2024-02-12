"use client";
import { Navbar } from "@/Components/Navbar/navbar";
import Image from "next/image";
import myGif from "@/assets/Video.gif";
import Arrow from "@/assets/RightArrow.svg";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import { Button } from "@/Components/Button.js/button";
import SnapMeasureSVG from "@/assets/Snap.svg";
import AppLogo from "@/assets/LogoWhite.svg";
import TwitterIcon from "@/assets/twitter.svg"
import LinkedinIcon from "@/assets/linkedin.svg"
import MsgIcon from "@/assets/msg.svg"
export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-gray-charcoal overflow-x-hidden gap-10">
			<Navbar />
			<VideoComponent />
			<LogosCarousel />
			<SnapMeasure />
			<Section3 />
			<Footer />
		</div>
	);
}

const VideoComponent = () => {
	return (
		<div >
			<Image
				src={myGif}
				priority
				alt="Description of the GIF"
				// width={500}
				// height={500}
				// layout="responsive"
				objectFit="cover"
				loading="eager"
				className="h-screen sm:h-[50rem] w-full object-cover"
			/>
			<div className="flex flex-col gap-10 absolute -mt-[100%] sm:-mt-[25%] mx-8 sm:ml-[28%] items-center w-[90%] sm:w-[50%] rounded-2xl p-2 sm:p-10 backdrop-filter backdrop-blur-xl text-center">
				<div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-normal">
					Leading <span className="font-extrabold">Innovation</span> with
					Artificial Intelligence
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold w-[75%] tracking-wide">
					Unleashing Potential: ML Community's Hub for Models and Applications.
				</div>
			</div>
		</div>
	);
};

const SnapMeasure = () => {
	return (
		<div className="flex flex-col gap-16 justify-center items-center mt-5">
			<div className="flex flex-col gap-4 items-center">
				<div className="text-2xl md:text-6xl text-white font-semibold">
					Snap and Measure Anywhere
				</div>
				<div className="text-gray-100 font-medium text-xl md:text-3xl flex justify-center text-center">
					<div className="w-[80%]">
						AI model that accurately measures your physique in real time, all
						with a simple snap from your camera.
					</div>
				</div>
				<Button
					content="Measure Now"
					isLefticon={false}
					iconClassName="-mt-1"
					Icon={Arrow}
					className="bg-blue-azure border-0 w-44 !rounded-full"
					onClick={() => {
						window.open("https://bodymeasurements.centrox.ai/", "_blank");
					}}
				/>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 3xl:gap-10 mt-24">
				<div className="flex flex-col gap-5 items-center h-full">
					<div className="text-2xl md:text-5xl text-white font-semibold mx-5 lg:mx-20 2xl:mx-[15%] 3xl:mx-[24.5%]">
						Exclusive solution increasing efficiency.
					</div>
					<div className="flex flex-col gap-8 mx-5 md:mx-20 2xl:mx-[15%] 3xl:mx-[24.5%] mt-10">
						{[
							"Simplify tailoring by providing quick and precise sizing solutions.",
							"AI ensures perfect retail fits, delighting customers with accurate body measurements.",
							"Smooth tailoring with ease, giving customers the perfect size hassle-free.",
						].map((text, index) => (
							<div key={index} className="flex gap-3">
								{/* <ListBullet className="w-auto h-auto" /> */}
								<div className="text-gray-100 text-xl md:text-3xl font-medium">{text}</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center lg:justify-start">
					<Image src={SnapMeasureSVG} alt="" className="w-[90%] 3xl:w-full" />
				</div>
			</div>
		</div>
	);
};
const Footer = () => {
	return (
		<footer className="py-12 bg-gray-charcoal sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative">
					<div className="absolute -inset-2">
						<div
							className="w-full h-full mx-auto opacity-30 blur-lg filter"
							style={{
								background:
									"linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
							}}
						></div>
					</div>

					<div className="relative overflow-hidden text-center bg-gray-900 rounded-3xl lg:text-left">
						<div className="p-6 lg:py-8 lg:px-14">
							<div className="lg:flex lg:items-center lg:justify-between">
								<h5 className="max-w-md mx-auto text-3xl font-bold text-white xl:max-w-xl lg:mx-0 font-pj">
									Explore our innovative solutions for your business growth
								</h5>

								<div className="flex-1 mt-7 lg:mt-0 lg:ml-8">
									<form action="#" method="POST">
										<div className="md:flex">
											<div className="flex-1">
												<input
													type="email"
													name=""
													id=""
													placeholder="Enter email address"
													className="block w-full px-4 py-4 text-base text-center text-gray-900 placeholder-gray-600 bg-white border-gray-300 md:text-left focus:ring-white focus:border-white rounded-t-xl md:rounded-t-none md:rounded-l-xl font-pj caret-gray-900"
													required
												/>
											</div>

											<button
												type="submit"
												className="
                                            w-full
                                            px-6
                                            py-4
                                            text-base
                                            font-bold
                                            text-gray-900
                                            transition-all
                                            duration-200
                                            bg-white
                                            border border-transparent
                                            xl:px-16
                                            md:w-auto
                                            focus:ring-2 focus:ring-offset-2 focus:ring-white
                                            rounded-b-xl
                                            md:rounded-b-none md:rounded-r-xl
                                            font-pj
                                            focus:outline-none
                                        "
											>
												Subscribe
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between mx-[7%] mt-60">
				<div className="h-full">
					<Image src={AppLogo} alt="Logo" className="w-60" />
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex  items-center gap-28 cursor-pointer">
						<span className="text-white font-semibold text-2xl">Services</span>
						<span className="text-white font-semibold text-2xl">Solutions</span>
						<span className="text-white font-semibold text-2xl">API's</span>
						<span className="text-white font-semibold text-2xl">Team</span>
					</div>
					<div className="flex  items-center gap-20 cursor-pointer">
						<span className="text-white font-semibold text-2xl">
							Contact Us
						</span>
						<span className="text-white font-semibold text-2xl">About Us </span>
						<span className="text-white font-semibold text-2xl">
							Talk to an Expert
						</span>
					</div>
					<div className="flex items-center justify-end gap-10 mt-14 cursor-pointer">
					<Image src={TwitterIcon} alt="Logo" className="" />
					<Image src={LinkedinIcon} alt="Logo" className="" />
					<Image src={MsgIcon} alt="Logo" className="" />

					</div>
					<div className="flex  items-center mt-2 justify-end">
						<span className="text-white font-bold text-xl">
							© 2024 Centrox Technologies, Inc.All rights reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
