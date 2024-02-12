import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Centrox AI",
	description: "Heart of Artificial Intelligence",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
