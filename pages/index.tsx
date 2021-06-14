import React, { ReactElement } from "react";
import { Fragment } from "react";
import Hero from "../components/hero";
import HeroImage from "../public/images/Lumpy_Belly.jpg";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Hero image={HeroImage} />;
      <div>
        <h1>Here is the other stuff for the page</h1>
      </div>
    </Fragment>
  );
}
