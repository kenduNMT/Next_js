import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
      <Head>
        <title>Rikkei Academy</title>
        <link rel="icon" href="https://learn.rikkeiacademy.com/favicon.ico.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
