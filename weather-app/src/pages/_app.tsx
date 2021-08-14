import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
export default MyApp;
