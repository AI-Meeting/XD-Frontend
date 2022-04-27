import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryContextProvider } from "../contexts/ReactQueryContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryContextProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ReactQueryContextProvider>
  );
}

export default MyApp;
