"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SearchForm from "@/components/Search";
import Header from "@/components/Header";
import Script from "next/script";
import Author from "@/components/Author";
import Consent from "@/components/Consent";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ReloadScript(scriptSrc) {
  const router = useRouter();

  useEffect(() => {
    // Remove any existing script with the same source
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script element and append it to the head
    const newScript = document.createElement("script");
    newScript.async = true; // Ensure async loading
    newScript.src = scriptSrc;
    newScript.crossOrigin = "anonymous";
    document.head.appendChild(newScript);

    // Cleanup function to remove the script when unmounting
    return () => {
      newScript.remove();
    };
  }, [router.asPath]); // Re-run the effect when the route changes
}

const inter = Inter({ subsets: ["latin"] });

/*export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  modified: "02/09/2024",
};*/

export default function RootLayout({ children }) {
  const scriptSrc =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"; // Replace with your actual script URL

  ReloadScript(scriptSrc);

  return (
    <>
      <html lang="fr">
        <head></head>
        <Script
          id="Gtag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-C8757P0MH2"
        />
        <Script
          id="Analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-C8757P0MH2');
          `,
          }}
        />

        <body className={inter.className}>
          <Header />
          {children}
          <Author />
          <Footer />
          <Consent />
        </body>
      </html>
    </>
  );
}
