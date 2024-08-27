import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { ServiceViewProvider } from "@/store/ServiceViewProivder";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

let gtmId = process.env["NEXT_PUBLIC_REACT_APP_GTM_ID"];
let analyticsId = process.env["NEXT_PUBLIC_REACT_APP_ANALYTICS_ID"]
let clarityId = process.env["NEXT_PUBLIC_REACT_APP_CLARITY_ID"]
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
      <link rel="icon" href="/favicon.ico" />
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

      <body className={inter.className}>
        <noscript>
        <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF7GSRF2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <Script id="clarity-script" strategy="afterInteractive">
				
				{`
				 (function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "${clarityId}");
				`}
				</Script>
         */}
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
