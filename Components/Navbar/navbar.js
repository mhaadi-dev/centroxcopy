import AppLogo from "@/assets/LogoWhite.svg";
import { Button } from "../Button.js/button";
import Image from "next/image";

export const Navbar = () => {
	return (
		<div className="flex fixed z-10 py-4 sm:h-24 items-center justify-between w-full px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 3xl:px-[13%]  backdrop-filter backdrop-blur-xl">
			<Image
				src={AppLogo}
				alt="Logo"
				className="w-2/6 md:w-[20%] lg:w-[15%] 2xl:w-[12%]"
			/>

			<div className="hidden md:flex justify-between w-full sm:px-10 lg:px-0 md:w-[30rem] lg:w-[40rem]">
				<NavLink text="Solutions" />
				<NavLink text="Services" />
				<NavLink text="APIs" />
				<NavLink text="Team" />
			</div>

			<Button content="Contact Us" className="w-32 !rounded-full" />
		</div>
	);
};

const NavLink = ({ text }) => (
	<span className="text-xl font-semibold text-white">{text}</span>
);
