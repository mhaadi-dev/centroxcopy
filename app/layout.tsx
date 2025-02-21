import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ServiceViewProvider } from "@/store/ServiceViewProivder";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { BlogsWrapper } from "./context";

// Import Slick Carousel CSS correctly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Load fonts
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading",display:"swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-paragraph",display:"swap" });

export const metadata: Metadata = {
  title: "Centrox AI | Full-Cycle Gen AI and Custom LLM Dev Services",
  description:
    "Unlock AI innovation with Centrox AI Full-Cycle Gen AI services...",
  openGraph: {
    title: "Centrox AI - AI & Machine Learning Services",
    description:
      "Centrox provides cutting-edge AI services tailored to meet diverse business needs...",
    url: "https://centrox.io/",
    images: [
      {
        url: "https://centrox.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoWhite.2fd83e7a.png&w=828&q=75",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centrox AI - AI & Machine Learning Services",
    description:
      "Centrox provides cutting-edge AI services tailored to meet diverse business needs...",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${inter.variable}`}>
        <GoogleTagManager gtmId={process.env["NEXT_PUBLIC_REACT_APP_GTM_ID"] as string} />
        <GoogleAnalytics gaId={process.env["NEXT_PUBLIC_REACT_APP_ANALYTICS_ID"] as string} />

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
          <BlogsWrapper>
            {children}
          </BlogsWrapper>

          {draftMode().isEnabled && <VisualEditing />}
        </ServiceViewProvider>
      </body>
    </html>
  );
}
