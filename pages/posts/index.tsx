import React, { ReactElement } from "react";
import HorizontalCard from "../../components/HorizontalCard";

export default function posts(): ReactElement {
  return (
    <section className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
        <HorizontalCard
          title="Our New Home"
          date="April 21, 2021"
          location="Indianola, IA"
          href="/posts/our-new-home"
          thumbImage="/images/posts/our-new-home/sold_front_thumb.jpg"
          preview="We are excited to share our next adventure..."
        />
        <HorizontalCard
          title="Griff's Valley View RV Park"
          date="April 24, 2021"
          location="Altoona, IA"
          href="/posts/griffs-campground"
          thumbImage="/images/posts/griffs-campground/shelly-cowboy.JPG"
          preview="Our first stop after picking up our new house on wheels..."
        />
        <HorizontalCard
          title="Round Lake Winery and Vineyard"
          date="April 25, 2021"
          location="Round Lake, MN"
          href="/posts/round-lake"
          thumbImage="/images/posts/round-lake/wine-glass.JPG"
          preview="Enjoying our first experience with Harvest Hosts..."
        />
        <HorizontalCard
          title="Sioux Falls"
          date="April 26, 2021"
          location="Sioux Falls, SD"
          href="/posts/sioux-falls"
          thumbImage="/images/posts/sioux-falls/lower-falls.JPG"
          preview="We discovered why they named the city Sioux Falls..."
        />
        <HorizontalCard
          title="Custer State Park and the Black Hills"
          date="May 1, 2021"
          location="Black Hills, SD"
          href="/posts/custer-state"
          thumbImage="/images/posts/custer-state/black-elk-snow-rock.JPG"
          preview="Baby bison and wifi sheep, who could ask for more..."
        />
        <HorizontalCard
          title="Wall Drug"
          date="May 2, 2021"
          location="Wall, SD"
          href="/posts/wall-sd"
          thumbImage="/images/posts/wall-sd/shelly-rabbit.JPG"
          preview="Ride a jackalope and see a T-Rex in South Dakota..."
        />
        <HorizontalCard
          title="Carhenge"
          date="May 3, 2021"
          location="Alliance, NE"
          href="/posts/carhenge"
          thumbImage="/images/posts/carhenge/carhenge-wide.JPG"
          preview="Not your typical family reunion..."
        />
      </div>
    </section>
  );
}
