import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";
import Link from "next/link";

export default function BryceCanyon(): ReactElement {
  return (
    <>
      <Head>
        <title>Bryce Canyon National Park</title>
        <meta property="og:title" content="Bryce Canyon National Park" />
        <meta property="og:description" content="Peekaboo, I see hoodoo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/bryce-canyon"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/bryce-canyon/bryce-canyon-panoramic-view.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Bryce Canyon National Park" />
      </Head>
      <div className="mx-auto max-w-3xl p-4 md:p-0">
        <title>Bryce Canyon National Park</title>
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Bryce Canyon National Park
          </h1>
          <div className="border-4 border-gray-900 shadow-xl">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-panoramic-view-1196.JPG"
              alt="Bryce Canyon National Park"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Do you even level bro?
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            When you hear the word reef, you probably think of the ocean, not
            the Utah desert. The park&apos;s name actually comes from the large
            white Navajo Sandstone domes which travelers thought resembled the
            Capitol building in Washington, DC. Travelers also associated the
            steep rocky cliffs with ocean reefs, which created obstacles to
            navigate. This region&apos;s geographical formations certainly made
            traveling a challenge. So there you have it - Capitol Reef.
          </p>
        </article>
      </div>
    </>
  );
}
