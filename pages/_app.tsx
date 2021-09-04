import "../styles/globals.css";
import React, { Fragment } from "react";
import { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
