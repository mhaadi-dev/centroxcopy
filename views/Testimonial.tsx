import Conjion from "@/assets/Conjion.svg";
import Image from "next/image";

export const Testimonial = () => {
	return (
		<div className="px-5 sm:px-0 w-full flex justify-center mt-40 md:mt-80">
			<div
				className="p-10 sm:w-1/2 text-xl sm:text-3xl text-white text-center rounded-2xl tracking-wide"
				style={{
					backgroundImage:
						"linear-gradient(213deg, rgba(18, 18, 18, 0.50) -21.9%, rgba(3, 34, 182, 0.50) 16%, rgba(7, 157, 252, 0.50) 45.92%, rgba(114, 239, 221, 0.50) 78.49%, rgba(128, 255, 219, 0.50) 91.12%, rgba(252, 252, 252, 0.50) 106.02%)",
				}}
			>
				“Centrox exceeded our expectations in developing our product Conjoin.
				Their team was highly skilled, professional, and dedicated to delivering
				a high-quality solution that met all of our needs.”
				<div className="flex w-full justify-end">
					<Image src={Conjion} alt="Logo" className={`w-24 sm:w-32 mt-6 sm:mt-4`} />
				</div>
				<div className="text-sm sm:text-xl flex w-full justify-end mt-2">
					Tyler Osso CEO of Cjoin
				</div>
			</div>
		</div>
	);
};
