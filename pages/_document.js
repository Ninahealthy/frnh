import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <Script
          id="Ad"
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
          crossorigin="anonymous"
        />
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

        <meta name="googlebot" content="index, follow" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 "
        />
        <meta name="modified" content="2023-04-15" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
