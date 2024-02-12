"use client";
import { Navbar } from "@/Components/Navbar/navbar";
import Image from "next/image";
import myGif from "@/assets/Video.gif";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";
import AppLogo from "@/assets/LogoWhite.svg";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import MsgIcon from "@/assets/msg.svg";
import { SnapMeasure } from "@/views/SnapandMeasure";
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
		<div>
			<Image
				src={myGif}
				priority
				alt="Description of the GIF"
				objectFit="cover"
				loading="eager"
				className="h-screen sm:h-[50rem] 3xl:h-[70rem] w-full object-cover"
			/>
			<div className="flex flex-col gap-10 absolute -mt-[100%]  mx-5 sm:mx-0 sm:-mt-[28%] sm:ml-[25%] items-center w-[90%] sm:w-[50%] rounded-2xl p-2 sm:p-10 backdrop-filter backdrop-blur-xl text-center">
				<div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-thin tracking-normal">
					Leading <span className="font-extrabold">Innovation</span> with
					<span className="font-extrabold ml-1 sm:ml-3">
						Artificial Intelligence
					</span>
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold w-[75%] tracking-wide">
					Unleashing Potential: ML Community's Hub for Models and Applications.
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
