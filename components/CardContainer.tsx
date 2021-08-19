import React, { ReactElement } from "react";
import SunsetPic from "../public/images/sunset.png";
import Card from "../components/Card";

export default function CardContainer(): ReactElement {
  return (
    <div className="pt-20 flex flex-col sm:flex-row items-center md:justify-evenly w-full">
      <Card cardImageUrl={SunsetPic} />
      <Card cardImageUrl={SunsetPic} />
      <Card cardImageUrl={SunsetPic} />
    </div>
  );
}
