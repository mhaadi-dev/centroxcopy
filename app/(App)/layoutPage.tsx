"use client";

import WebsiteFooter from "@/Components/common/WebsiteFooter";
import { Footer } from "@/Components/Footer/footer";
import { Navbar } from "@/Components/Navbar/navbar";
import SubnavBar from "@/Components/Navbar/SubnavBar";

export default function LandingLayout({ subNav=false,title="",children }: { subNav?:boolean,title?:string,children: any }) {
	return (
		<>
			<Navbar />
			{subNav && <SubnavBar title={title}/>}
			<div className="bg-[#060606]">{children}</div>
			<WebsiteFooter />
		</>
	);
}
