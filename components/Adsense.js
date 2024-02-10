"use client";

import { useEffect } from "react";
import Script from "next/script";
export default function Adsense() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <Script
        id="Adsense"
        strategy="lazyOnload"
        crossorigin="anonymous"
        dangerouslySetInnerHTML={{
          __html: `
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"        
          `,
        }}
      />
    </>
  );
}
