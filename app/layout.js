import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SearchForm from "@/components/Search";
import Header from "@/components/Header";
import Script from "next/script";
import Author from "@/components/Author";
import Consent from "@/components/Consent";
import ReloadScript from "@/components/AdsLoad";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  charSet: "utf-8",
  //maximumScale: 1,
  //userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  title: "NH💚",
  description: "",
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

  published_time: "2024-07-01T11:35:00+07:00",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr">
        <head>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
            crossOrigin="anonymous"
          ></Script>
        </head>
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
          <ResponsiveNavbar />
          {children}
          <Author />
          <Footer />
        </body>
      </html>
    </>
  );
}
