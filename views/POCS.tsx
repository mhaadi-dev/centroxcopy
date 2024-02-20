import NextImage from "next/image";
import Poc1 from "@/assets/POCF.png";
import Poc2 from "@/assets/RealEstate.png";
import Poc3 from "@/assets/Labelling.png";
import Poc4 from "@/assets/LLM.png";
import { ReactEventHandler, useState } from "react";
import { Toast } from "@/Components/Toast/toast";

interface GradientCardProps {
	tabName: string;
	isLeftGradient?: boolean;
	onMouseEnter?: ReactEventHandler;
	onMouseLeave?: ReactEventHandler;
	onClick?: () => void;
}
const GradientTab: React.FC<GradientCardProps> = ({
	tabName = "",
	isLeftGradient = false,
	onMouseEnter,
	onMouseLeave,
	onClick,
}) => {
	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick?.()}
			className="rounded-lg text-white font-bold text-xl md:text-3xl p-10 cursor-pointer"
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
	const [showToast, setShowToast] = useState<boolean>(false);
	const [hoveredCard, setHoveredCard] = useState<number>(1);
	const [blurDataURLs, setBlurDataURLs] = useState<Record<number, string>>({});
  
	const generateBlurDataURL = async (imageUrl: string) => {
	  const img = new Image();
	  img.src = imageUrl;
	  await img.decode();
	  const canvas = document.createElement('canvas');
	  const ctx = canvas.getContext('2d');
	  if (ctx) {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.filter = 'blur(10px)';
		ctx.drawImage(img, 0, 0);
		const blurredBase64 = canvas.toDataURL('image/png');
		return blurredBase64;
	  }
	  return '';
	};
  
	const handleImageLoad = async () => {
        if (!blurDataURLs[hoveredCard]) {
            let imageUrl = '';
            switch (hoveredCard) {
                case 2:
                    imageUrl = Poc2.src;
                    break;
                case 3:
                    imageUrl = Poc3.src;
                    break;
                case 4:
                    imageUrl = Poc4.src;
                    break;
                default:
                    imageUrl = Poc1.src;
                    break;
            }
            const blurredBase64 = await generateBlurDataURL(imageUrl);
            setBlurDataURLs(prevBlurDataURLs => ({
                ...prevBlurDataURLs,
                [hoveredCard]: blurredBase64,
            }));
        }
    };
	console.log("Blur data URL: " + blurDataURLs[hoveredCard]);
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
				<div className="flex flex-col gap-4 justify-between w-full lg:w-[35%] py-6">
					<GradientTab
						tabName="Snap and Measurement"
						onMouseEnter={() => setHoveredCard(1)}
						onMouseLeave={() => setHoveredCard(0)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="Real-estate Chatbot"
						isLeftGradient
						onMouseEnter={() => setHoveredCard(2)}
						onMouseLeave={() => setHoveredCard(0)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="Labeling Dresses with AI"
						onMouseEnter={() => setHoveredCard(3)}
						onMouseLeave={() => setHoveredCard(0)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
					<GradientTab
						tabName="LLM Based Health Chatbot"
						isLeftGradient
						onMouseEnter={() => setHoveredCard(4)}
						onMouseLeave={() => setHoveredCard(0)}
						onClick={() => {
							setShowToast(!showToast);
						}}
					/>
				</div>
				<div className="flex justify-start lg:w-[62%]">
					<NextImage
						src={
							hoveredCard === 2
								? Poc2
								: hoveredCard === 3
								? Poc3
								: hoveredCard === 4
								? Poc4
								: Poc1
						}
						alt=""
						loading="eager"
						className="w-full"
						placeholder="blur"
						onLoad={handleImageLoad}
						blurDataURL={blurDataURLs[hoveredCard]}
				  
					/>
				</div>
			</div>
			{showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
		</div>
	);
};
