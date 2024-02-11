"use client";
import { useRouter } from "next/navigation"; // Use   "next/navigation" instead of "next/router"
import { useEffect } from "react";
import Script from "next/script";

export default function LoadAd() {
  const router = useRouter();
  //const scrp =

  useEffect(() => {
    const loadAd = () => {
      // Use the "strategy" prop to load the script only once
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
        crossorigin="anonymous"
      />;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    if (router.query) {
      loadAd();
    }
  }, [router.query]);

  return <>{/* No need to repeat the script tag here */}</>;
}
