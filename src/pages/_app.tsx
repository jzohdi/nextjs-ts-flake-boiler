import "../styles/reset.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Galleri app" />
        <title>Galleri</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
