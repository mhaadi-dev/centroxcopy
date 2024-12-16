import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Head from "next/head";
import { ServiceViewProvider } from "@/store/ServiceViewProivder";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { VisualEditing } from "next-sanity";
import { draftMode, headers } from "next/headers";

// Load both fonts
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-paragraph" });

let gtmId = process.env["NEXT_PUBLIC_REACT_APP_GTM_ID"];
let analyticsId = process.env["NEXT_PUBLIC_REACT_APP_ANALYTICS_ID"];
let clarityId = process.env["NEXT_PUBLIC_REACT_APP_CLARITY_ID"];

export const metadata: Metadata = {
  title: "Centrox AI | Full-Cycle Gen AI and Custom LLM Dev Services",
  description:
    "Unlock AI innovation with Centrox AI Full-Cycle Gen AI services. From custom LLMs to AI chatbots, we streamline your AI deployment. Book a consultation today!",
  alternates: {
    canonical: "https://centrox.ai/",
  },
  icons: {
    icon: "/favicon.ico", // No need for `/public` in the path
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${inter.variable}`}>
      <link rel="icon" href="/favicon.ico" />
      <Head>
        <title>{metadata.title as never}</title>
        <meta property="og:title" content={ogMetadata.title} />
        <meta property="og:description" content={ogMetadata.description} />
        <meta property="og:url" content={ogMetadata.url} />
        <meta property="og:image" content={ogMetadata.image} />
        <meta property="og:type" content={ogMetadata.type} />
        {/* Twitter metadata */}
        <meta name="twitter:card" content={twitterMetadata.card} />
        <meta name="twitter:title" content={twitterMetadata.title} />
        <meta name="twitter:description" content={twitterMetadata.description} />
        {/* Slick Carousel CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <GoogleTagManager gtmId={gtmId as string} />
      <GoogleAnalytics gaId={analyticsId as string} />
      <body className="font-paragraph">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF7GSRF2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ServiceViewProvider>
          {draftMode().isEnabled && (
            <a
              className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          )}
          {children}
          {draftMode().isEnabled && <VisualEditing />}
        </ServiceViewProvider>
      </body>
    </html>
  );
}
