"use client";
import { Navbar } from "@/Components/Navbar/navbar";
import Image from "next/image";
import myGif from "@/assets/Video.gif";

import {LogosCarousel} from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";

export default function Home() {


	return (
		<div className="flex min-h-screen flex-col bg-gray-charcoal overflow-x-hidden">
			<Navbar />
			<VideoComponent />
			<LogosCarousel/>
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
				width={500}
				height={500}
				layout="responsive"
				objectFit="cover"
				loading="eager"
				className="h-full w-full"
			/>
			<div className="flex flex-col gap-4 absolute -mt-[30%] sm:-mt-[10%] 3xl:-mt-[5%] w-full sm:px-[7%] 3xl:pl-[18%]">
				<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
					Leading Innovation with Artificial Intelligence
				</div>
				<div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
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
									Grow your business fast with Rareblocks UI Kit.
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

				<div className="grid grid-cols-2 gap-16 mt-16 md:mt-24 md:grid-cols-4">
					<div>
						<h6 className="text-base font-bold text-white font-pj">Company</h6>

						<ul className="mt-8 space-y-5">
							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									About{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Features{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Works{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Career{" "}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className="text-base font-bold text-white font-pj">Help</h6>

						<ul className="mt-8 space-y-5">
							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Customer Support{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Delivery Details{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Terms & Conditions{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Privacy Policy{" "}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className="text-base font-bold text-white font-pj">
							Resources
						</h6>

						<ul className="mt-8 space-y-5">
							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Free eBooks{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Development Tutorial{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									How to - Blog{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Youtube Playlist{" "}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className="text-base font-bold text-white font-pj">Links</h6>

						<ul className="mt-8 space-y-5">
							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Free eBooks{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Development Tutorial{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									How to - Blog{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									title=""
									className="inline-flex text-sm font-normal text-white transition-all duration-300 transform font-pj hover:text-gray-300 hover:translate-x-1"
								>
									{" "}
									Youtube Playlist{" "}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

