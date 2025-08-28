// pages/_app.js
import Head from "next/head";
import "../styles/globals.css"; // if you use Tailwind or global CSS

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Polidex — Live Election Forecasts</title>
        <meta name="description" content="Up-to-date forecasts, maps, and polling." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
