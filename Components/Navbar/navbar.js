import AppLogo from "@/assets/LogoWhite.png";
import { Button } from "../Button.js/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SHOW_SERVICES, SHOW_SOLUTIONS } from "@/helpers/enums";

export const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<nav className="flex justify-center fixed z-10 top-0 left-0 py-4 sm:h-24 items-center w-full  backdrop-filter backdrop-blur-xl">
			<div className="flex items-center justify-between w-4/5 ">
				<Image
					src={AppLogo}
					alt="Logo"
					priority={true}
					loading="eager"
					className="w-[10rem] sm:w-[20%] lg:w-[15%] 2xl:w-[12%]  cursor-pointer"
					onClick={() => router.push(`/`)}
				/>

				<div className="hidden md:flex justify-between w-full sm:px-10 lg:px-0 md:w-[33rem] sm:-ml-[7%] ">
					<NavLink
						text="Solutions"
						onClick={() => {
							if (pathname === "/") {
								const solutionsComponent = document.getElementById("solutions");
								if (solutionsComponent) {
									solutionsComponent.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}
							} else {
								localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
								router.push(`/`);
							}
						}}
					/>
					<NavLink
						text="Services"
						onClick={() => {
							if (pathname === "/") {
								const solutionsComponent = document.getElementById("services");
								if (solutionsComponent) {
									solutionsComponent.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}
							} else {
								localStorage.setItem(SHOW_SERVICES, JSON.stringify(true));
								router.push(`/`);
							}
						}}
					/>
					{/* <NavLink text="APIs" /> */}
					<NavLink text="Team" onClick={() => router.push(`/team`)} />
				</div>

				<Button
					content="Contact Us"
					className="w-32 !rounded-2xl font-semibold bg-gray-charcoal  border-white-offWhite opacity-70 hover:!bg-gray-charcoal border-opacity-70"
					onClick={() => router.push(`/contact`)}
				/>
			</div>
		</nav>
	);
};

const NavLink = ({ text, onClick }) => (
	<span
		className="text-xl font-semibold text-white cursor-pointer"
		onClick={() => onClick?.()}
	>
		{text}
	</span>
);
