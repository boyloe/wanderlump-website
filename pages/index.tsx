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
            className="w-auto md:w-1/3 md:rounded-2xl md:border-4 md:border-black shadow-2xl"
          />
          <div className="w-screen md:w-1/3 md:text-2xl px-6 pt-12 font-josefin-sans">
            <p>
              Welcome to wanderlump! We are Bryan and Shelly and we are excited
              to share our adventure with you. We decided to take our lives, our
              jobs, and our two cats on the road and become full-time travelers.
            </p>
            <br />
            <p>
              Shelly was already working remotely and Bryan got a fully remote
              position in February 2021. Just before Bryan got his job, our
              apartment complex gave us renewal papers and the rent went up
              significantly. We were already spending a small fortune on our one
              bed/one bath apartment outside of Denver. We took a step back and
              looked at our lives. Being apartment poor was not what we wanted
              anymore. After many calls with family and friends to make sure we
              weren&apos;t just acting COVID crazy, endless research and Excel
              spreadsheets, and getting permission from both cats, we officially
              moved out of our apartment in April and became full-time
              travelers.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
