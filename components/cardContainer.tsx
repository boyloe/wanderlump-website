import React, { ReactElement } from "react";
import SunsetPic from "../public/images/sunset.png";
import Card from "../components/card";

interface Props {}

export default function CardContainer({}: Props): ReactElement {
  return (
    <div className="pt-20 flex flex-col sm:flex-row items-center md:justify-evenly">
      <Card cardImageUrl={SunsetPic} />
      <Card cardImageUrl={SunsetPic} />
      <Card cardImageUrl={SunsetPic} />
    </div>
  );
}
