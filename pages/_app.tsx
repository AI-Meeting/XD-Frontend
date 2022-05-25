import "regenerator-runtime/runtime";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryContextProvider } from "../contexts/ReactQueryContext";
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ReactQueryContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ReactQueryContextProvider>
    </RecoilRoot>
  );
}

export default MyApp;
