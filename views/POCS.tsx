import Image from "next/image";
import Poc1 from "@/assets/POCF.svg";

const GradientTab = ({ tabName = "", isLeftGradient = false }) => {
	return (
		<div
			className="rounded-lg text-white font-bold text-xl md:text-3xl p-10"
			style={{
				border: "1px solid rgba(3, 34, 182, 0.20)",

				background: isLeftGradient
					? "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)"
					: "radial-gradient(112.77% 124.52% at 0% 0%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
				boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
				backdropFilter: "blur(18px)",
			}}
		>
			{tabName}
		</div>
	);
};
export const POCS = () => {
	return (
		<div className="flex flex-col gap-16 justify-center items-center mt-10 sm:mt-40 md:mt-80">
			<div className="flex flex-col gap-4 items-center sm:w-[89%]">
				<div className="text-2xl md:text-6xl text-white font-semibold">
					Our specialized AI products
				</div>
				<div className="text-gray-100 font-medium text-xl md:text-3xl flex justify-center text-center">
					<div className="w-[75%] sm:w-[55%]">
						Apply AI to your most demanding challenges with precision through
						our pre-built applications.
					</div>
				</div>
			</div>

			<div className=" w-[90%] flex flex-wrap justify-between mt-14 gap-10 sm:gap-0">
				<div className="flex flex-col gap-4 w-full lg:w-[35%]">
					<GradientTab tabName="Snap and Measurement" />
				</div>
				<div className="flex justify-start lg:w-[62%]">
					<Image src={Poc1} alt="" loading="eager" className="w-full" />
				</div>
			</div>
		</div>
	);
};
