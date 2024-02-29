import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import SnapMeasure from "@/assets/SnapMeasure.webp";
import BodyPoints from "@/assets/BodyPoints.svg";
import Section2Continue from "@/assets/Section2Continue.svg";
import Section2Measurments from "@/assets/Section2Measurments.svg";
import Section2Realtime from "@/assets/Section2Realtime.svg";
import Section2upload from "@/assets/Section2upload.svg";
import Section4Shopping from "@/assets/Retail.png";
import Sec4Measurments from "@/assets/Fashion.png";
import Sec5 from "@/assets/VIsual.webp";
import Sec7Server from "@/assets/server.png";
import DerqLogo from "@/assets/DERQ.svg";
import IBMLogo from "@/assets/IBM.svg";
import NICLogo from "@/assets/NIC.svg";
import StartUpLogo from "@/assets/Start up School.svg";
import AmazonLogo from "@/assets/Amazon Web Services.svg";
import CjoinLogo from "@/assets/Cjoin.svg";
import InstacureLogo from "@/assets/Insta Cure.svg";
import { Button } from "@/Components/Button.js/button";
import classNames from "@/helpers/common";

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
const sectionTools = [
	{ title: "Python" },
	{ title: "Tesnorflow" },
	{ title: "C++" },
	{ title: "Keras" },
	{ title: "Pytorch" },
	{ title: "TensorRT" },
];
const section7Data = [
	{
		heading: "Accurate, Convenient, and Reliable",
		subHeading:
			"Obtain precise body measurements quickly and easily, making custom clothing or online shopping a breeze.",
	},
	{
		heading: "Revolutionizing the Way We Measure",
		subHeading:
			"Fast and accurate measurements, streamlining processes for fashion designers and retailers.",
	},
	{
		heading: "Experience the Future of Tailoring",
		subHeading:
			"Increase customer satisfaction, and improve efficiency with our state-of-the-art body measurement service.",
	},
];
const sectionLogos = [
	{ logo: DerqLogo },
	{ logo: IBMLogo },
	{ logo: InstacureLogo },
	{ logo: NICLogo },
	{ logo: StartUpLogo },
	{ logo: AmazonLogo },
	{ logo: CjoinLogo },
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
			{/* Section 3 */}
			<div
				className="flex flex-col items-center justify-center"
				style={{
					background:
						"radial-gradient(70.34% 71.45% at 50.94% 114.76%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), #060606",
				}}
			>
				<div className="flex flex-col items-center justify-center lg:px-[8%]">
					<Heading
						mainHeading="Industry Applications"
						subHeading={
							"Streamline Your Sizing Process with AI-Powered Body Measurements"
						}
					/>
					<div className="md:inline-flex justify-between items-center  lg:gap-24 mt-16 sm:mt-20">
						<div
							className="flex flex-col gap-3 items-center rounded-lg  shadow-gray-500 shadow-lg py-5 mx-10 md:mx-0 md:w-[50%] text-white"
							style={{
								background:
									"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%,rgba(7, 157, 252, 0.1) 100%)",
							}}
						>
							<Image
								src={Section4Shopping}
								alt="Logo"
								width={450}
								height={450}
							/>
							<div className="text-xl font-bold">Retail</div>
							<div className="text-lg font-normal md:w-[22rem] text-center">
								Perfect sizing every time, AI technology for online retailers.
							</div>
							<div className="text-xs text-blue-base cursor-pointer">Demo</div>
						</div>
						<div
							className="flex flex-col gap-3 items-center rounded-lg  shadow-gray-500 shadow-lg py-5 mx-10 md:mx-0 md:w-[50%] text-white"
							style={{
								background:
									"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%,rgba(7, 157, 252, 0.1) 100%)",
							}}
						>
							<Image
								src={Sec4Measurments}
								alt="Logo"
								width={300}
								height={330}
							/>
							<div className="text-xl font-bold">Fashion</div>
							<div className="text-lg font-normal md:w-[22rem] text-center">
								Streamline your tailoring process, AI technology for fashion
								design houses.
							</div>
							<div className="text-xs text-blue-base cursor-pointer">Demo</div>
						</div>
					</div>
				</div>
			</div>
			{/* Section 5 */}
			<div className="flex flex-col items-center justify-center w-full gap-10">
				<Heading
					mainHeading="Our Efficient and Accurate Model"
					subHeading="Our AI model combines sophisticated algorithms and deep learning <br/> techniques to provide unparalleled accuracy and reliability."
				/>
				<Image
					src={Sec5}
					alt="Logo"
					className="mt-10 sm:mt-20 w-[80%] h-full"
				/>
			</div>
			{/* Section 6 */}
			<div className="flex flex-col items-center justify-center">
				<Heading
					mainHeading="Tools we are experiecned with"
					subHeading="We are accustomed to a wide range of AI tools"
				/>
				<div className="grid grid-cols-3 gap-8 mt-20 md:px-[20%] md:ml-28">
					{sectionTools?.map((data, index) => {
						return (
							<Button
								content={data?.title}
								key={index}
								className="bg-gray-900  border-2 w-44 border-blue-azure border-opacity-80"
								//   customClass="bg-white-offWhite !text-gray-neutral rounded-md "
							/>
						);
					})}
				</div>
			</div>
			{/* Section 7 */}
			<div className="flex flex-col items-center justify-center">
				<Heading
					mainHeading="Why Centrox ?"
					subHeading="With our expertise in embedded engineering, we focus on sensors, IoT &
        automation."
				/>
				<div className="grid md:grid-cols-2 mt-16">
					<div className="flex flex-col gap-16 py-4 justify-center items-end">
						{section7Data?.map((data, index) => (
							<div
								className="bg-gray-charcoal text-white flex items-center gap-10 shadow-md p-4  md:w-[80%] rounded-md"
								key={index}
							>
								<div className="text-gray-dim text-6xl font-medium">
									{index + 1}
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-xl font-medium">{data?.heading}</div>
									<div className="text-base">{data?.subHeading}</div>
								</div>
							</div>
						))}
					</div>
					<div className="sm:ml-40">
						<Image src={Sec7Server} alt="Logo" width={600} height={600} />
					</div>
				</div>
			</div>
			{/* Section 8 */}
			<div className="flex flex-col items-center justify-center w-full">
				<Heading
					mainHeading="Our Collaborations"
					subHeading="Customers that trust us and organizations that support us"
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-20">
					{sectionLogos?.map(({ logo }, index) => {
						return (
							<div
								className={classNames(
									"flex items-center justify-center w-[21rem] h-[11.438rem] bg-black rounded-xl",
									index === 6 && "sm:ml-[50%] lg:ml-[110%]",
								)}
								style={{ boxShadow: "0px 0px 13px 3px rgba(7, 157, 252, 0.3)" }}
								key={index}
							>
								<Image src={logo} alt="Logo" width={200} height={200} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

const Heading = ({ mainHeading = "", subHeading = "" }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 text-white">
			<div className="flex items-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
				{mainHeading}
			</div>
			<div
				className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center"
				dangerouslySetInnerHTML={{ __html: subHeading }}
			/>
		</div>
	);
};
