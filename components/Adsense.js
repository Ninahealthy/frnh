"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Script from "next/script";

function GoogleAdPcItem({ adId }) {
  const router = useRouter();
  const adsLoaded = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        adsLoaded.current = true;
      }
    };

    if (router.query && !adsLoaded.current) {
      setTimeout(loadAd, 0);
    }
  }, [router.query]);

  return (
    <Script
      key={adId}
      ref={adsLoaded}
      id={adId}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
      crossorigin="anonymous"
    />

    /*<div
      className="googleAd-container flex items-center justify-center border rounded-md"
      style={{ maxWidth: '282px', maxHeight: '282px' }}
    >
      <ins
        key={adId}
        ref={adsLoaded}
        id={adId}
        className="adsbygoogle h-full"
        style={{ display: 'inline-block', width: '282px', height: '282px' }}
        data-ad-client="ca-pub-1111111"
        data-full-width-responsive="true"
        data-ad-slot="11111111"
      />
    </div>*/
  );
}

export default GoogleAdPcItem;

/*import Script from "next/script";
export default function Adsense() {
  return (
    <>
      <Script
        id="Adsense"
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
        crossorigin="anonymous"
        dangerouslySetInnerHTML={{
          __html: "(window.adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </>
  );
}*/
