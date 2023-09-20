"use client";

import { Navbar } from "@/Components/Navbar/navbar";
export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center -mt-20">
			<Navbar />
			<JoinCommunity />
		</div>
	);
}

const JoinCommunity = () => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20 mt-52">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-gray-900 font-pj">
						Centrox AI⚡️
					</h2>
					<p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
					Sorry for the inconvenience, we are updating our website and it will be live back again in a few hours.
					</p>
				</div>

				<div className="relative max-w-lg mx-auto mt-14">
					<div className="absolute -inset-x-2 -inset-y-5">
						<div
							className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
							style={{
								background:
									"linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
							}}
						></div>
					</div>

					<form action="#" method="POST" className="relative">
						<input
							type="email"
							name=""
							id=""
							placeholder="Enter your email address"
							className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
							required
						/>

						<div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
							<button
								type="submit"
								className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  w-full
                                  px-8
                                  py-4
                                  text-base
                                  font-bold
                                  text-white
                                  transition-all
                                  duration-200
                                  bg-gray-900
                                  border border-transparent
                                  sm:w-auto sm:py-3
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                  font-pj
                                  hover:bg-opacity-90
                                  rounded-xl
                              "
							>
								Get notified
							</button>
						</div>
					</form>
				</div>

				{/* <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">
					No ads. No trails. No commitments
				</p> */}
			</div>
		</section>
	);
};
