import Author from "@/components/Author";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchForm from "@/components/Search";
import "@/styles/globals.css";
import Head from "next/head";
import Consent from "@/components/Consent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <Component {...pageProps} />
      <Author />
      <Footer />
      <Consent />
    </>
  );
}
