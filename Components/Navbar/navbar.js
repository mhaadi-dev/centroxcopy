import AppLogo from "@/assets/LogoWhite.svg";
import { Button } from "../Button.js/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Navbar = () => {
	const router = useRouter();

	return (
		<div className="flex justify-center fixed z-10 py-4 sm:h-24 items-center w-full  backdrop-filter backdrop-blur-xl">
			<div className="flex items-center justify-between w-[90%]">
				<Image
					src={AppLogo}
					alt="Logo"
					className="w-[10rem] sm:w-[20%] lg:w-[15%] 2xl:w-[12%]"
				/>

				<div className="hidden md:flex justify-between w-full sm:px-10 lg:px-0 md:w-[33rem] sm:-ml-[7%]">
					<NavLink text="Solutions" />
					<NavLink text="Services" />
					<NavLink text="APIs" />
					<NavLink text="Team" />
				</div>

				<Button
					content="Contact Us"
					className="w-32 !rounded-2xl font-semibold bg-gray-charcoal border-2 border-white-offWhite opacity-70 border-opacity-70"
					onClick={() => router.push(`/contact`)}
				/>
			</div>
		</div>
	);
};

const NavLink = ({ text }) => (
	<span className="text-xl font-semibold text-white cursor-pointer">
		{text}
	</span>
);
