import "regenerator-runtime/runtime";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryContextProvider } from "../contexts/ReactQueryContext";
import GlobalStyle from "../styles/globalStyle";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryContextProvider>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      ></Script>
      <RecoilRoot>
        <ToastContainer position="top-right" />
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ReactQueryContextProvider>
  );
}

export default MyApp;
