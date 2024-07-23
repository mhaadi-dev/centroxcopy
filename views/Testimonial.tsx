import Conjion from "@/assets/Conjion.svg";
import Image from "next/image";

 const Testimonial = () => {
	return (
		<section className="px-5 lg:p-32 lg:px-0 w-full flex justify-center mt-20 md:mt-60">
			<div
				className="p-6 lg:p-20 w-full  lg:w-4/5 text-sm sm:text-md sm:text-3xl text-white text-center rounded-2xl tracking-wide"
				style={{
					background: "radial-gradient(96.8% 144.22% at 50.91% 1.68%, rgba(7, 157, 252, 0.30) 0%, rgba(114, 239, 221, 0.13) 100%), radial-gradient(67.13% 100% at 50.91% 100%, rgba(7, 157, 252, 0.70) 0%, rgba(114, 239, 221, 0.00) 100%), rgba(6, 6, 6, 0.20)"
					// backgroundImage:
					// 	"linear-gradient(213deg, rgba(18, 18, 18, 0.50) -21.9%, rgba(3, 34, 182, 0.50) 16%, rgba(7, 157, 252, 0.50) 45.92%, rgba(114, 239, 221, 0.50) 78.49%, rgba(128, 255, 219, 0.50) 91.12%, rgba(252, 252, 252, 0.50) 106.02%)",
				}}
			>
				“Centrox exceeded our expectations in developing our product Conjoin.
				Their team was highly skilled, professional, and dedicated to delivering
				a high-quality solution that met all of our needs.”
				<div className="flex w-full justify-center">
					<Image
						src={Conjion}
						alt="Logo"
						className={`w-24 sm:w-32 mt-2 sm:mt-4`}
					/>
				</div>
				<div className="text-sm sm:text-xl flex w-full justify-center mt-1.5">
					Tyler Osso
				</div>
				<div className="text-sm sm:text-md flex w-full justify-center mt-1.5">
					CEO - Cjoin
				</div>
			</div>
		</section>
	);
};
export default Testimonial;