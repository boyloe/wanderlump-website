import React, { ReactElement } from "react";
import { Fragment } from "react";
import Hero from "../components/hero";
import BryanShelly from "../public/images/DH-Bryan-Shelly.jpg";
import Catalina from "../public/images/catalina-cat-tower-legs.png";
import Lumpy from "../public/images/lumpy-kitten-screaming.png";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Hero />
      <div className="bg-sunset-background">
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-center">
            <img
              src={BryanShelly}
              className="w-1/3 rounded-full flex items-center justify-center mr-12"
            />
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              Welcome to wanderlump! We are Bryan and Shelly and in April of
              2021 we decided to take our lives, our jobs, and our two cats on
              the road and become full-time travelers. Thanks for joining us on
              our adventure.
            </p>
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-center">
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              This is our Tortoiseshell, Catalina Wine Mixer.
            </p>
            <img
              src={Catalina}
              className="w-1/3 rounded-full flex items-center justify-center mr-12"
            />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-center">
            <img
              src={Lumpy}
              className="w-1/3 rounded-full flex items-center justify-center mr-12"
            />
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              This is our angel cat Lumpy Space Princess. She can do no wrong.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
