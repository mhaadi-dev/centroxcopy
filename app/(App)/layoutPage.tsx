"use client";

import WebsiteFooter from "@/Components/common/WebsiteFooter";
import { Footer } from "@/Components/Footer/footer";
import { Navbar } from "@/Components/Navbar/navbar";

export default function LandingLayout({ children }: { children: any }) {
	return (
		<>
			<Navbar />
			<div className="bg-black">{children}</div>
			<WebsiteFooter />
		</>
	);
}
