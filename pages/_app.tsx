import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactQueryContextProvider } from "../contexts/ReactQueryContext";
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryContextProvider>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ReactQueryContextProvider>
  );
}

export default MyApp;
