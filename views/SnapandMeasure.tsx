import { Button } from "@/Components/Button.js/button";
import SnapMeasureSVG from "@/assets/Snap.webp";
import Arrow from "@/assets/RightArrow.svg";
import Image from "next/image";
import { useState } from "react";
import { generateBlurDataURL } from "@/helpers/common";

export const SnapMeasure = () => {
	const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);

	const singleImageLoad = async (imageSrc: string) => {
		if (!blurDataURL) {
			const blurredBase64 = await generateBlurDataURL(imageSrc);
			setBlurDataURL(blurredBase64);
		}
	};

	return (
		<div className="flex flex-col gap-12 justify-center items-center mt-10 sm:mt-60">
			<div className="flex flex-col gap-4 items-center sm:w-[89%]">
				<div className="text-2xl md:text-6xl text-white font-semibold text-center">
					Snap <span className="!font-thin">and</span> Measure
					<span className="!font-thin ml-1 sm:ml-4">Anywhere</span>
				</div>
				<div className="text-gray-100 font-medium text-xl md:text-3xl flex justify-center text-center">
					<div className="w-[75%] sm:w-[55%]">
						AI model that accurately measures your physique in real time, all
						with a simple snap from your camera.
					</div>
				</div>
				<Button
					content="Measure Now"
					isLefticon={false}
					iconClassName="-mt-1"
					Icon={Arrow}
					className="bg-blue-azure border-0 w-44 !rounded-full mt-3 sm:mt-4"
					onClick={() => {
						window.open("https://bodymeasurements.centrox.ai/", "_blank");
					}}
				/>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 3xl:gap-10  sm:mt-14 sm:w-[89%] py-10 sm:px-20">
				<div className="flex flex-col gap-5 items-start h-full">
					<div className="text-2xl md:text-5xl text-white font-semibold mx-5 sm:mx-0">
						<span className="!font-thin">Exclusive</span> solution
						<span className="!font-thin ml-1 sm:ml-3">increasing</span>{" "}
						efficiency
					</div>

					<div className="mx-5 md:mx-0 sm:mt-10 3xl:mt-20 w-[80%] 2xl:w-[83%] 3xl:w-[85%]">
						<ul className="list-disc flex flex-col gap-8 3xl:gap-20 ml-8 sm:ml-12">
							{[
								"Simplify tailoring by providing quick and precise sizing solutions.",
								"AI ensures perfect retail fits, delighting customers with accurate body measurements.",
								"Smooth tailoring with ease, giving customers the perfect size hassle-free.",
							].map((text, index) => (
								<li
									key={index}
									className="text-gray-100 text-xl md:text-3xl font-medium"
								>
									{text}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex justify-center lg:justify-start">
					<Image
						alt=""
						src={SnapMeasureSVG}
						loading="eager"
						className="w-[90%] 2xl:w-full"
						placeholder="blur"
						onLoad={() => singleImageLoad(SnapMeasureSVG.src)}
						blurDataURL={blurDataURL}
					/>
				</div>
			</div>
		</div>
	);
};
