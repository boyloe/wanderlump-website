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
          <div className="grid gap-10">
            <HorizontalCard
              title="Zion National Park"
              date="June 7, 2021"
              location="Springdale, UT"
              href="/posts/zion"
              thumbImage="/images/posts/zion-national-park-1488.JPG"
              altText="Zion National Park"
              preview="The promised land my ass..."
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
              title="Capitol Reef"
              date="May 27, 2021"
              location="Torrey, UT"
              href="/posts/capitol-reef"
              thumbImage="/images/posts/capitol-reef/capitol-reef-portrait.JPG"
              altText="Capitol Dome"
              preview="No capitol, no reef, no service..."
            />
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
