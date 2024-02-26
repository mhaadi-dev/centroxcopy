"use client";

import { Footer } from "@/Components/Footer/footer";
import { Navbar } from "@/Components/Navbar/navbar";

export default function LandingLayout({ children }: { children: any }) {
	return (
		<>
			<Navbar />
		<div className="bg-gray-charcoal">
		{children}
		</div>
			<Footer />
		</>
	);
}
