import WebsiteFooter from "@/Components/common/WebsiteFooter";
import { Navbar } from "@/Components/Navbar/navbar";

export default function LandingLayout({children}:any) {
	return (
		<>
			<Navbar />
			{/* <FileUploader/> */}
			<div className="bg-[#060606]">{children}</div>
			<WebsiteFooter />
		</>
	);
}
