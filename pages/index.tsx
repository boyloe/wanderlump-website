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
              title="Canyonlands National Park"
              date="May 18, 2021"
              location="Moab, UT"
              href="/posts/canyonlands"
              thumbImage="/images/posts/canyonlands/sunset.JPG"
              altText="Canyon Lands National Park at sunset"
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
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
