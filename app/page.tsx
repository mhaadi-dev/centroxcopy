"use client";
import { Navbar } from "@/Components/Navbar/navbar";
import Image from "next/image";
import myGif from "@/assets/Video.gif";
import BlueCore from "@/assets/Bluecore.svg";
import Dreamlamp from "@/assets/Dream Lamp.svg";
import Derq from "@/assets/DERQ.svg";
import Instacured from "@/assets/InstaCure.svg";
import Nooberly from "@/assets/Nooblerly.svg";

import Conjion from "@/assets/Conjion.svg";

import { useEffect, useState } from "react";

export default function Home() {
	const [animationClass, setAnimationClass] = useState("animate-none");

	useEffect(() => {
		// Add animation class after component mounts
		setAnimationClass("animate-move");
	}, []);

	return (
		<div className="flex min-h-screen flex-col bg-gray-charcoal">
			<Navbar />
			<VideoComponent />
			<div
				className={`flex gap-10 sm:gap-20 lg:gap-40 items-center justify-center mt-10  ${animationClass}`}
			>
				<Image src={BlueCore} alt="Logo" className="w-auto sm:w-72" />
				<Image src={Conjion} alt="Logo" className="w-auto sm:w-72" />
				<Image src={Dreamlamp} alt="Logo" className="w-auto sm:w-[15rem]" />
				<Image src={Derq} alt="Logo" className="w-auto sm:w-72" />
				<Image src={Nooberly} alt="Logo" className="w-auto sm:w-96 mt-16" />
				<Image src={Instacured} alt="Logo" className="w-auto sm:w-96 mt-16" />
			</div>
			<Section1 />
			<Section3 />
			<Section2 />
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
			<div className="flex flex-col gap-4 absolute -mt-[30%] sm:-mt-[10%] 3xl:-mt-[1%] w-full pl-10">
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

const Section1 = () => {
	return (
		<section className="py-12 bg-gray-charcoal sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<p className="text-lg font-medium text-white font-pj">
						Build any pages with 3 simple steps
					</p>
					<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
						Meet Rareblocks, the most rare & beautiful UI Kit
					</h2>
				</div>
				<div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
					<div>
						<h3 className="text-2xl font-bold text-white font-pj">
							Track your customers <br className="hidden xl:block" />
							directly from website
						</h3>
						<p className="mt-4 text-base leading-7 text-white font-pj">
							Create landing pages with Rareblocks that converts more.
						</p>

						<img
							className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
							src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature.png"
							alt=""
						/>
						<p className="text-base leading-7 text-white mt-7 font-pj">
							Consectetur adipis cing elit. Mattis a, tincidunt pulvinar
							sodales. Quis tellus vel eget in nulla odio. Tellus pharetra sit
							convallis vel, fermentum dignissim cras in.
						</p>
					</div>

					<div>
						<h3 className="text-2xl font-bold text-white font-pj">
							Understand sales <br className="hidden xl:block" />
							performance better
						</h3>
						<p className="mt-4 text-base leading-7 text-white font-pj">
							Create landing pages with Rareblocks that converts more.
						</p>

						<img
							className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
							src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature2.png"
							alt=""
						/>
						<p className="text-base leading-7 text-white mt-7 font-pj">
							Lorem ipsum dolor sit amet, consectetur adipis cing elit. Mattis
							a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio.
						</p>
					</div>

					<div>
						<h3 className="text-2xl font-bold text-white font-pj">
							Get feedbacks live & <br className="hidden xl:block" />
							make improvements
						</h3>
						<p className="mt-4 text-base leading-7 text-white font-pj">
							Create landing pages with Rareblocks that converts more.
						</p>

						<img
							className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl"
							src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature3.png"
							alt=""
						/>
						<p className="text-base leading-7 text-white mt-7 font-pj">
							Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in
							nulla odio. Tellus pharetra sit convallis vel, fermentum dignissim
							cras in.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
const Section2 = () => {
	return (
		<div className="bg-gray-charcoal">
			<section className="relative py-12 sm:py-16 lg:pb-40">
				<div className="absolute bottom-0 right-0 overflow-hidden">
					<img
						className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
						src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
						alt=""
					/>
				</div>

				<div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
						<div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
							<h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
								An editor that helps you write clean codes.
							</h1>
							<p className="mt-2 text-lg text-white sm:mt-6 font-inter">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Vehicula massa in enim luctus. Rutrum arcu.
							</p>

							<a
								href="#"
								title=""
								className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
								role="button"
							>
								Try our free editor
							</a>

							<div className="mt-8 sm:mt-16">
								<div className="flex items-center justify-center lg:justify-start">
									<svg
										className="w-5 h-5 text-[#FDB241]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										className="w-5 h-5 text-[#FDB241]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										className="w-5 h-5 text-[#FDB241]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										className="w-5 h-5 text-[#FDB241]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										className="w-5 h-5 text-[#FDB241]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>

								<blockquote className="mt-6">
									<p className="text-lg font-bold text-white font-pj">
										Best code editor in market!
									</p>
									<p className="mt-3 text-base leading-7 text-gray-600 font-inter">
										Consectetur adipiscing elit. Vehicula massa in enim luctus.
										Rutrum arcu, aliquam nulla tincidunt gravida. Cursus
										convallis dolor semper pretium ornare.
									</p>
								</blockquote>

								<div className="flex items-center justify-center mt-3 lg:justify-start">
									<img
										className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
										src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
										alt=""
									/>
									<p className="ml-2 text-base font-bold text-white font-pj">
										Denny Jones
									</p>
								</div>
							</div>
						</div>

						<div className="xl:col-span-1">
							<img
								className="w-full mx-auto"
								src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
const Section3 = () => {
	return (
		<section className="relative py-12 overflow-hidden bg-gray-charcoal sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="text-center lg:w-1/2 xl:w-2/5 lg:text-left lg:pr-8">
					<p className="text-lg font-medium text-white font-pj">
						2,157 people are using
					</p>
					<h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
						Rareblocks helps you grow fast
					</h2>

					<ul className="mt-8 space-y-5 lg:mt-16">
						<li className="flex items-center justify-center text-white lg:justify-start">
							<svg
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="ml-3 text-lg font-bold font-pj">
								{" "}
								150+ Handcoded UI Blocks{" "}
							</span>
						</li>

						<li className="flex items-center justify-center text-white lg:justify-start">
							<svg
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="ml-3 text-lg font-bold font-pj">
								{" "}
								Fully Responsive on Any Device{" "}
							</span>
						</li>

						<li className="flex items-center justify-center text-white lg:justify-start">
							<svg
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="ml-3 text-lg font-bold font-pj text-white">
								{" "}
								Just Copy & Paste{" "}
							</span>
						</li>
					</ul>

					<div className="flex flex-col items-center mt-8 lg:justify-start sm:justify-center sm:flex-row lg:mt-16 sm:space-x-5">
						<a
							href="#"
							title=""
							className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-8
                        py-3
                        text-base
                        font-bold
                        text-white
                        transition-all
                        duration-200
                        bg-gray-800
                        border-2 border-transparent
                        sm:w-auto
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        font-pj
                        hover:bg-opacity-90
                        rounded-xl
                    "
							role="button"
						>
							Get Rareblocks
						</a>

						<a
							href="#"
							title=""
							className="
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-8
                        py-3
                        mt-5
                        text-base
                        font-bold
                        text-white
                        transition-all
                        duration-200
                        border-2 border-gray-400
                        sm:w-autojustify-center sm:mt-0
                        rounded-xl
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900
                        focus:bg-gray-900
                        hover:text-white
                        focus:text-white
                        hover:border-gray-900
                        focus:border-gray-900
                    "
							role="button"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>

			<div className="mt-16 translate-x-12 lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-96 lg:translate-y-8 xl:translate-x-56 2xl:translate-x-44 2xl:translate-y-24">
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

					<div className="relative">
						<div className="aspect-w-16 aspect-h-12 lg:aspect-none">
							<img
								className="object-cover object-left-top w-full h-full lg:max-w-4xl 2xl:max-w-5xl"
								src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/8/illustration-old.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
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
