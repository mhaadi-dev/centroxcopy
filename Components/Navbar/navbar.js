import AppLogo from "@/assets/AppLogo.svg";
import Image from "next/image";

export const Navbar = () => {
	return (
    
		<div className="!bg-green-900 px-4">
			<div className="flex flex-shrink-0 items-center justify-start">
				<Image src={AppLogo} alt="Logo" width={250} height={250} />
			</div>
		</div>
	);
};
