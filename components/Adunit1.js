import React, { useEffect } from "react";
import Script from "next/script";
export default function Adunit1() {
  const fixed = { width: "728px", height: "90px" };
  {
    /*useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);*/
  }

  return (
    <>
      <adunit>
        {/*<ad>
          <Script
            id="Adunit1"
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
            crossorigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2087636695455778"
            data-ad-slot="2549748890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
  </ad>*/}
        <ad>
          <div id="div-gpt-ad-1681864565615-0" style={fixed}>
            <Script
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1681864565615-0'); });
          `,
              }}
            />
          </div>
        </ad>
      </adunit>
    </>
  );
}
