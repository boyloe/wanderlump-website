import React, { ReactElement } from "react";
import Card from "./Card";

// Only doing 3 Cards per container
export default function CardContainer(): ReactElement {
  return (
    <div className="pt-20 flex flex-col sm:flex-row items-center md:justify-evenly w-full">
      <Card
        imageUrl="/images/sold_front.jpeg"
        title="Our New Home"
        location="Westminster, CO"
        href="/posts/our-new-home"
        alt="travel trailer"
        date="April 20, 2021"
      />
      <Card
        imageUrl="/images/posts/griffs-campground/griffs-sign.JPG"
        title="Griff's RV Park"
        location="Altoona, IA"
        href="/posts/griffs-campground"
        alt="Bryan at the Griff's Campground entrance"
        date="April 24, 2021"
      />
    </div>
  );
}
