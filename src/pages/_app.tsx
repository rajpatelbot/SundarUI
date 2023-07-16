import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import MultiLayout from "@/components/Layouts/MultiLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (page: JSX.Element) => <MultiLayout>{page}</MultiLayout>;

  return (
    <>
      <NextNProgress color="#00C4CC" />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
