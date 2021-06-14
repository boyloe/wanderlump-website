import React, { ReactElement } from "react";
import { Fragment } from "react";
import Hero from "../components/hero";
import BryanShelly from "../public/images/DH-Bryan-Shelly.jpg";
import Image from "next/image";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Hero />
      <div>
        <p>
          Here is the synopis about who we are a what we are doing. Also include
          some stuff about the cats
        </p>
        <div>
          <img src={BryanShelly} />
        </div>
      </div>
    </Fragment>
  );
}
