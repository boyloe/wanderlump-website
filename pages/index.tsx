import React, { ReactElement } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Head>
        <title>wanderlump</title>
      </Head>
      <Hero />
      <div className="flex flex-row py-24 md:mt-64 ">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <img
            src="/images/DH-Bryan-Shelly.jpg"
            className="w-auto md:w-1/3 md:rounded-2xl"
          />
          <p className="w-screen md:w-1/3 md:text-2xl px-6 pt-12 font-josefin-sans">
            Welcome to wanderlump! We are Bryan and Shelly and we are excited to
            share our adventure with you. We decided to take our lives, our
            jobs, and our two cats on the road and become full-time travelers.
          </p>
        </div>
      </div>
      <Subscribe />
    </Fragment>
    // eslint-disable-next-line prettier/prettier
  )
}
