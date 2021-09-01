import React, { ReactElement } from "react";
import { Fragment } from "react";
import Hero from "../components/Hero";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Hero />
      <div className="flex flex-row py-24 md:mt-64 ">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <img
            src="/images/DH-bryan-shelly.jpg"
            className="w-auto md:w-1/3 md:rounded-2xl"
          />
          <p className="w-screen md:w-1/3 md:text-2xl px-6 pt-12 font-josefin-sans">
            Welcome to wanderlump! We are Bryan and Dr. Shelly Oyloe. In April
            of 2021 we decided to take our lives, our jobs, and our two cats on
            the road and become full-time travelers. Thanks for joining us on
            our adventure.
          </p>
        </div>
      </div>
    </Fragment>
    // eslint-disable-next-line prettier/prettier
  )
}
