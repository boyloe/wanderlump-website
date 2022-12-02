import "../styles/globals.css";
import React, { Fragment, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  const canonicalUrl = (
    `https://www.wanderlump.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <Fragment>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
