import React, { ReactElement } from "react";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";
import Comments from "../../components/Comments";

export default function siouxFalls(): ReactElement {
  return (
    <>
      <Head>
        <title>Sioux Falls, South Dakots</title>
        <meta property="og:title" content="Round Lake, MN" />
        <meta
          property="og:description"
          content="Just a quick stop to view the falls"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/sioux-falls"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/sioux-falls/lower-falls.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="The lower falls" />
      </Head>
      <div className="mx-auto max-w-3xl p-4 md:p-0">
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Sioux Falls, South Dakota
          </h1>
          <img
            src="/images/posts/sioux-falls/lower-falls.JPG"
            alt="Bridge view of the lower Sioux Falls"
            className="border-4 border-gray-900"
          />
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Our next stop was to Black Hills, SD, but we had to make a quick
            trip to Falls Park in Sioux Falls, SD. It was raining and freezing,
            but we braved the weather long enough to take in all the beauty of
            these falls. The pink and red hues of the Sioux Quartzite with the
            falls cascading over them is a breathtaking sight.
          </p>
          <img
            src="/images/posts/sioux-falls/upper-falls.JPG"
            alt="Side view of the upper Sioux Falls"
            className="border-4 border-gray-900"
          />
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            This park lies along the Big Sioux River. There are multiple viewing
            points along the falls and there is a five-story observation tower
            that allows for a panoramic view of the falls and park. If you have
            more time and the weather permits it, you can explore remnants of
            the Queen Bee Mill, bike along the River Greenway, visit the
            Farmers’ Market, dine at the Falls Overlook Café, or visit the falls
            in the winter months to see them lit up into a Winter Wonderland.
          </p>
          <img
            src="/images/posts/sioux-falls/bryan-shelly.JPG"
            alt="Bryan and Shelly next to Sioux Falls."
            className="border-4 border-gray-900 mb-24 md:mb-12"
          />
        </article>
        <PrevNext
          previousPostHref="/posts/round-lake"
          nextPostHref="/posts/custer-state"
        />
        <Comments
          url="posts/sioux-falls"
          identifier="sioux-falls-comments"
          title="Sioux Falls, South Dakota"
        />
      </div>
    </>
  );
}
