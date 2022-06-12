import "regenerator-runtime/runtime";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryContextProvider } from "../contexts/ReactQueryContext";
import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryContextProvider>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      ></Script>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </ReactQueryContextProvider>
    </RecoilRoot>
  );
}

export default MyApp;
