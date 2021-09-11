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
        imageUrl="/images/posts/griffs-campground/griffs-cropped.JPG"
        title="Griff's RV Park"
        location="Altoona, IA"
        href="/posts/griffs-campground"
        alt="Bryan at the Griff's Campground entrance"
        date="April 24, 2021"
      />
      <Card
        imageUrl="/images/posts/round-lake/wine-glass.JPG"
        title="Round Lake Vineyards"
        location="Round Lake, MN"
        href="/posts/round-lake"
        alt="Glass of red wine in Round Lake glass"
        date="April 25, 2021"
      />
      <Card
        imageUrl="/images/posts/sioux-falls/lower-falls.JPG"
        title="Sioux Falls"
        location="Sioux Falls, SD"
        href="/posts/sioux-falls"
        alt="Lower Sioux Falls"
        date="April 26, 2021"
      />
      <Card
        imageUrl="/images/posts/custer-state/rushmore-walkway.JPG"
        title="Custer State Park"
        location="Black Hills, SD"
        href="/posts/custer-state"
        alt=""
        date="May 1, 2021"
      />
    </div>
  );
}
