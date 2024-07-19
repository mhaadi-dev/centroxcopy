import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { ServiceViewProvider } from "@/store/ServiceViewProivder";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Centrox AI - AI & Machine Learning Services",
	description:
		"Centrox provides cutting-edge AI services tailored to meet diverse business needs. Our expertise includes machine learning, natural language processing, computer vision, and more. Contact us to explore how our AI solutions.",
	icons: {
		icon: `/public/favicon.ico`,
	},
};

const ogMetadata = {
	title: "Centrox AI - AI & Machine Learning Services",
	description:
		"Centrox provides cutting-edge AI services tailored to meet diverse business needs. Our expertise includes machine learning, natural language processing, computer vision, and more. Contact us to explore how our AI solutions can benefit your business.",
	url: "https://centrox.io/",
	image: "https://centrox.io/images/homepage.jpg",
	type: "website",
};
const twitterMetadata = {
	card: "summary_large_image",
	title: "Centrox AI - AI & Machine Learning Services",
	description:
		"Centrox provides cutting-edge AI services tailored to meet diverse business needs. Our expertise includes machine learning, natural language processing, computer vision, and more. Contact us to explore how our AI solutions can benefit your business.",
	// site: '@your_twitter_handle',
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico"/>
			<Head>
				<title>{metadata.title as never}</title>

				<meta property="og:title" content={ogMetadata.title} />
				<meta property="og:description" content={ogMetadata.description} />
				<meta property="og:url" content={ogMetadata.url} />
				<meta property="og:image" content={ogMetadata.image} />
				<meta property="og:type" content={ogMetadata.type} />
				{/* Twitter site meta data */}
				<meta name="twitter:card" content={twitterMetadata.card} />
				<meta name="twitter:title" content={twitterMetadata.title} />
				<meta
					name="twitter:description"
					content={twitterMetadata.description}
				/>
				{/* {twitterMetadata.site && <meta name="twitter:site" content={twitterMetadata.site} />} */}
			</Head>
			<body className={inter.className}>
				<ServiceViewProvider>
				{children}
				</ServiceViewProvider>
				</body>
		</html>
	);
}
