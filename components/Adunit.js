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
  /*export default function Adunit(/*{ slot, adformat, responsive } this is another way to integrate adsense) {
  /* useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);*/

  return (
    <adunit>
      <ad>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
          crossorigin="anonymous"
          /*/dangerouslySetInnerHTML={{
              __html:
                "(window.adsbygoogle = window.adsbygoogle || []).push({});",
            }}*/
        />
        <ins
          key={adId}
          ref={adsLoaded}
          id={adId}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2087636695455778"
          /*</ad>data-ad-slot={slot}
            data-ad-format={adformat}
            data-full-width-responsive={responsive}*/
          data-ad-slot="2549748890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </ad>
    </adunit>
  );
}
export default GoogleAdPcItem;

/* ignor this error (TagError: adsbygoogle.push() error: All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.)*/
