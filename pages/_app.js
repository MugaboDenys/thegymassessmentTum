import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
