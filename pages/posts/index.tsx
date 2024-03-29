import React, { ReactElement } from "react";
import HorizontalCard from "../../components/HorizontalCard";
import Head from "next/head";

export default function posts(): ReactElement {
  return (
    <>
      <Head>
        <title>Index page for all posts</title>
        <meta property="og:title" content="Posts" />
        <meta property="og:description" content="wanderlump posts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wanderlump.com/posts" />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/lumpy_thoughtful_landscape.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="Lumpy staring off into the sunset"
        />
        <meta
          name="description"
          content="This page contains links to all published posts."
        />
        .
      </Head>
      <section className="container px-6 py-4 mx-auto">
        <div className="flex justify-center w-full">
          <h1 className="text-dark-brown text-3xl md:text-5xl justify-center pb-4">
            Blog Posts
          </h1>
        </div>
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
            altText="Alpaca looking towards camera"
            preview="Q-Tips, cat toys, and the best mug ever..."
          />
          <HorizontalCard
            title="Durango, CO"
            date="May 17, 2021"
            location="Durango, CO"
            href="/posts/durango"
            thumbImage="/images/posts/durango/forest-river-salem-22rbs-in-woods.jpeg"
            altText="Forest River Salem 22rbs in Durango, CO"
            preview="Forests, firewood, and Fed Ex..."
          />
          <HorizontalCard
            title="Canyonlands National Park"
            date="May 18, 2021"
            location="Moab, UT"
            href="/posts/canyonlands"
            thumbImage="/images/posts/canyonlands/sunset.JPG"
            altText="Canyon Lands National Park"
            preview="Red sand in every nook and cranny..."
          />
          <HorizontalCard
            title="Dead Horse Point State Park"
            date="May 18, 2021"
            location="Moab, UT"
            href="/posts/dead-horse"
            thumbImage="/images/posts/dead-horse/dead-horse-point.JPG"
            altText="Dead Horse Point"
            preview="Definitely not PETA approved..."
          />
          <HorizontalCard
            title="Arches National Park"
            date="May 22, 2021"
            location="Moab, UT"
            href="/posts/arches"
            thumbImage="/images/posts/arches/arches-delicate-arch1.JPG"
            altText="Delicate Arch in Arches National Park"
            preview="I thought that Arches would be a little archier..."
          />
          <HorizontalCard
            title="Capitol Reef National Park"
            date="May 27, 2021"
            location="Torrey, UT"
            href="/posts/capitol-reef"
            thumbImage="/images/posts/capitol-reef/capitol-reef-portrait.JPG"
            altText="Capitol Dome"
            preview="No capitol, no reef, no service..."
          />
          <HorizontalCard
            title="Bryce Canyon National Park"
            date="June 1, 2021"
            location="Bryce Canyon City, UT"
            href="/posts/bryce-canyon"
            thumbImage="/images/posts/bryce-canyon/bryce-canyon-hoodoo-wall-1261.JPG"
            altText="Bryce Canyon National Park"
            preview="Peekaboo, I see hoodoo..."
          />
          <HorizontalCard
            title="Zion National Park"
            date="June 7, 2021"
            location="Springdale, UT"
            href="/posts/zion-national-park"
            thumbImage="/images/posts/zion/zion-national-park-1488.JPG"
            altText="Zion National Park"
            preview="The promised land my ass..."
          />
          <HorizontalCard
            title="Black Canyon of the Gunnison National Park"
            date="June 12, 2021"
            location="Mack, CO"
            href="/posts/black-canyon"
            thumbImage="/images/posts/black-canyon/black-canyon-of-the-gunnison-cedar-point-1648.JPG"
            altText="Cedar point at Black Canyon of the Gunnison National Park"
            preview="Sunsets and Cicadas..."
          />
        </div>
      </section>
    </>
  );
}
