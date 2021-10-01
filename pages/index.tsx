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
              title="Alpacalypse Ranch"
              date="May 13, 2021"
              location="Pagosa Springs, CO"
              href="/posts/alpacalypse"
              thumbImage="/images/posts/alpacalypse/0386-derpy-alpaca.jpg"
              altText="Alpace looking towards camera"
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
              thumbImage="/images/posts/canyonland/sunset.JPG"
              altText="Canyon Lands National Park at sunset"
              preview="Red sand in every nook and cranny..."
            />
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
