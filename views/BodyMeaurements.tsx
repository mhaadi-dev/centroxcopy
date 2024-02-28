import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import SnapMeasure from "@/assets/SnapMeasure.webp";
import BodyPoints from "@/assets/BodyPoints.svg";
import Section2Continue from "@/assets/Section2Continue.svg";
import Section2Measurments from "@/assets/Section2Measurments.svg";
import Section2Realtime from "@/assets/Section2Realtime.svg";
import Section2upload from "@/assets/Section2upload.svg";

const sectionData = [
	{
		logo: Section2Measurments,
		heading: "Body Measurments",
		subHeading: "More than 10 body parts can be measured",
	},
	{
		logo: Section2upload,
		heading: "Snap or Upload photos",
		subHeading:
			"Upload or capture 2 photos in different poses, ensuring you full body exposure in the camera.",
	},
	{
		logo: Section2Realtime,
		heading: "Real time Measurments",
		subHeading: "Get your measurements right after you submit your pictures",
	},
	{
		logo: Section2Continue,
		heading: "Accessible from Everywhere",
		subHeading:
			"As it is a web based platform you can use it anytime and anywhere.",
	},
];

export const BodyMeaurementsView = () => {
	return (
		<div className="bg-black flex flex-col gap-96">
			{/* Section 1 */}
			<div
				className="flex justify-center items-center relative lg:h-[60rem]"
				style={{
					background:
						"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%, rgba(0, 0, 0, 1),rgba(7, 157, 252, 0.1) 100%)",

					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Image
					src={Lines}
					alt="sorry"
					className="h-screen lg:h-full lg:w-full lg:mt-32"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<Image src={SnapMeasure} alt="sorry" className="lg:mt-8" />
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Snap and Measure
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-1/2 3xl:w-[35%] mt-8">
						Effortlessly Get Your Body Measurements
					</div>
				</div>
			</div>
			{/* Section 2 */}
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col items-center justify-center">
					<div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
						Fast and Accurate Measurements
					</div>
					<div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-1/2 3xl:w-[35%] mt-8">
						Custom Clothing Made Easy
					</div>
				</div>
				<div
					className="grid lg:grid-cols-2 mt-16 w-full  border-transparent"
					style={{
						background:
							"radial-gradient(70.34% 71.45% at 80.94% 114.76%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), #060606;",
					}}
				>
					<div className="flex flex-col gap-16 py-4 justify-center items-start lg:ml-[11%] px-4 lg:px-0">
						{sectionData?.map((data, index) => (
							<div
								className="bg-gray-charcoal text-white flex items-center gap-10 shadow-sm shadow-white p-4 w-[100%] lg:w-[80%] rounded-lg"
								key={index}
							>
								<Image src={data?.logo} alt="Logo" width={50} height={50} />
								<div className="flex flex-col gap-2">
									<div className="text-xl font-semibold">{data?.heading}</div>
									<div className="text-base">{data?.subHeading}</div>
								</div>
							</div>
						))}
					</div>
					<div className="flex justify-end">
						<Image src={BodyPoints} alt="Logo" width={700} height={650} />
					</div>
				</div>
			</div>
		</div>
	);
};
