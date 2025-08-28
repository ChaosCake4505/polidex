// pages/_app.tsx
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* mobile viewport so it’s responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Polidex — Live Election Forecasts</title>
        <meta name="description" content="Up-to-date forecasts, maps, and polling." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
