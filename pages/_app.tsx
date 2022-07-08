import "../styles/globals.css";
import React, { Fragment, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/NavBar";
import * as ga from "../lib/ga/index";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
