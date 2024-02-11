"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleAdPcItem() {
  const router = useRouter();

  useEffect(() => {
    const loadAd = () => {
      // Execute the script with the beforeInteractive strategy and the onLoad callback
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
        crossorigin="anonymous"
        onLoad={() => {
          // Execute the loadAd function after the script is loaded
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }}
      />;
    };

    // Execute the loadAd function if router.query is truthy
    if (router.query) {
      loadAd();
    }
  }, [router.query]);

  return <>{/* No need to repeat the script tag here */}</>;
}
