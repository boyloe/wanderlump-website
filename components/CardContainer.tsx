import React, { ReactElement } from "react";
import Card from "./Card";

// Only doing 3 Cards per container
export default function CardContainer(): ReactElement {
  return (
    <div className="pt-20 flex flex-col sm:flex-row items-center md:justify-evenly w-full">
      <Card
        cardImageUrl="/images/sold_front.jpeg"
        cardTitle="Our New Home"
        href="/posts/our-new-home"
        date="April 20, 2021"
      />
      <Card
        cardImageUrl="/images/posts/griffs-campground/griffs-sign.JPG"
        cardTitle="Griff's RV Park"
        href="/posts/griffs-campground"
        date="April 24, 2021"
      />
    </div>
  );
}
