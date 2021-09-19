import React, { ReactElement } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";
import HorizontalCard from "../components/HorizontalCard";

export default function Index(): ReactElement {
  return (
    <Fragment>
      <Head>
        <title>wanderlump</title>
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="wanderlump - Lumpy's irresistible desire to wander the world"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wanderlump.com/" />
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
      </Head>
      <Hero />
      <div className="flex flex-col items-center py-12 xl:py-24 lg:mt-48">
        <div className="mx-4 md:mx-0 lg:w-1/2">
          <h3 className="text-xl md:text-3xl mb-4">Recent Posts:</h3>
          <div className="grid gap-2">
            <HorizontalCard
              title="Carhenge"
              date="May 3, 2021"
              location="Alliance, NE"
              href="/posts/carhenge"
              thumbImage="/images/posts/carhenge/carhenge-wide.JPG"
              preview="Not your typical family reunion..."
            />
            <HorizontalCard
              title="Papa Moon Vineyards, Winery, &amp; Cider House"
              date="May 3, 2021"
              location="Scottsbluff, NE"
              href="/posts/papamoon"
              thumbImage="/images/posts/papa-moon/wine-bottles.png"
              preview="Try the grapefruit juniper cider..."
            />
            <HorizontalCard
              title="Scotts Bluff National Monument"
              date="May 7, 2021"
              location="Scottsbluff, NE"
              href="/posts/scottsbluff"
              thumbImage="/images/posts/scotts-bluff/white-wagon.JPG"
              preview="Nebraska, Nebraska I love ya..."
            />
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
