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
      </Head>
      <Hero />
      <div className="flex flex-col items-center py-12 xl:py-24 lg:mt-48">
        <div className="mx-4 md:mx-0 lg:w-1/2">
          <h3 className="text-xl md:text-3xl mb-4">Latest Post:</h3>
          <div className="shadow-xl">
            <HorizontalCard
              title="Custer State Park and the Black Hills"
              date="May 1, 2021"
              location="Black Hills, SD"
              href="/posts/custer-state"
              backgroundSrc="/images/posts/custer-state/black-elk-snow-rock.JPG"
              preview="Baby bison and wifi sheep who could ask for more..."
            />
          </div>
        </div>
      </div>
      <Subscribe />
    </Fragment>
  );
}
