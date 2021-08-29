import React, { ReactElement } from "react";
import NewTrailer from "../public/images/sold_front.jpeg";
import Card from "./Card";

export default function CardContainer(): ReactElement {
  return (
    <div className="pt-20 flex flex-col sm:flex-row items-center md:justify-evenly w-full">
      <Card cardImageUrl={NewTrailer} />
    </div>
  );
}
