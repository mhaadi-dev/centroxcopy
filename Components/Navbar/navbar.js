import AppLogo from "@/assets/LogoWhite.svg";
import { Button } from "../Button.js/button";
import Image from "next/image";

export const Navbar = () => {
	return (
	  <div className="flex fixed z-10 h-24 items-center justify-between w-full px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 backdrop-filter backdrop-blur-xl">
		<Image src={AppLogo} alt="Logo" width={250} height={250} />
  
		<div className="hidden md:flex justify-between w-full sm:px-10 lg:px-0 lg:w-[40rem]">
		  <NavLink text="About" />
		  <NavLink text="Products" />
		  <NavLink text="Blogs" />
		  <NavLink text="Careers" />
		</div>
  
		<Button content="Sign Up" className="w-32" />
	  </div>
	);
  };
  
  const NavLink = ({ text }) => (
	<span className="text-xl font-semibold text-white">{text}</span>
  );