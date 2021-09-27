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
          altText="Forest River Salem travel trailer with sold sticker"
          preview="We are excited to share our next adventure..."
        />
        <HorizontalCard
          title="Griff's Valley View RV Park"
          date="April 24, 2021"
          location="Altoona, IA"
          href="/posts/griffs-campground"
          thumbImage="/images/posts/griffs-campground/shelly-cowboy.JPG"
          altText="Shelly posing with a silhouette cowboy"
          preview="Our first stop after picking up our new house on wheels..."
        />
        <HorizontalCard
          title="Round Lake Winery and Vineyard"
          date="April 25, 2021"
          location="Round Lake, MN"
          href="/posts/round-lake"
          thumbImage="/images/posts/round-lake/wine-glass.JPG"
          altText="Wine glass from Round Lake Vineyard"
          preview="Enjoying our first experience with Harvest Hosts..."
        />
        <HorizontalCard
          title="Sioux Falls"
          date="April 26, 2021"
          location="Sioux Falls, SD"
          href="/posts/sioux-falls"
          thumbImage="/images/posts/sioux-falls/lower-falls.JPG"
          altText="Waterfall at Sioux Falls"
          preview="We discovered why they named the city Sioux Falls..."
        />
        <HorizontalCard
          title="Custer State Park and the Black Hills"
          date="May 1, 2021"
          location="Black Hills, SD"
          href="/posts/custer-state"
          thumbImage="/images/posts/custer-state/black-elk-snow-rock.JPG"
          altText="Black Elk peak covered in snow"
          preview="Baby bison and wifi sheep, who could ask for more..."
        />
        <HorizontalCard
          title="Wall Drug"
          date="May 2, 2021"
          location="Wall, SD"
          href="/posts/wall-sd"
          thumbImage="/images/posts/wall-sd/shelly-rabbit.JPG"
          altText="Shelly holding hands with a six foot rabbit statue"
          preview="Ride a jackalope and see a T-Rex in South Dakota..."
        />
        <HorizontalCard
          title="Carhenge"
          date="May 3, 2021"
          location="Alliance, NE"
          href="/posts/carhenge"
          thumbImage="/images/posts/carhenge/carhenge-wide.JPG"
          altText="Carhenge"
          preview="Not your typical family reunion..."
        />
        <HorizontalCard
          title="Papa Moon Vineyards, Winery, &amp; Cider House"
          date="May 3, 2021"
          location="Scottsbluff, NE"
          href="/posts/papamoon"
          thumbImage="/images/posts/papa-moon/wine-bottles.png"
          altText="Wine bottles"
          preview="Try the grapefruit juniper cider..."
        />
        <HorizontalCard
          title="Scotts Bluff National Monument"
          date="May 7, 2021"
          location="Scottsbluff, NE"
          href="/posts/scottsbluff"
          thumbImage="/images/posts/scotts-bluff/white-wagon.JPG"
          altText="Covered wagon"
          preview="Nebraska, Nebraska I love ya.."
        />
        <HorizontalCard
          title="Great Sand Dunes National Park"
          date="May 12, 2021"
          location="Mosca, CO"
          href="/posts/sand-dunes"
          thumbImage="/images/posts/sand-dunes/0257-far-dunes.JPG"
          altText="Wide view of Great Sand Dunes Park"
          preview="I made it extra waxy for you..."
        />
        <HorizontalCard
          title="Alpacalypse Ranch"
          date="May 13, 2021"
          location="Pagosa Springs, CO"
          href="/posts/alpacalypse"
          thumbImage="/images/posts/alpacalypse/0386-derpy-alpaca.jpg"
          altText="Alpace looking towards camera"
          preview="Q-Tips, cat toys, and the best mug ever..."
        />
      </div>
    </section>
  );
}
