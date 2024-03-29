import React, { ReactElement } from "react";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";
import Comments from "../../components/Comments";

export default function roundLake(): ReactElement {
  return (
    <>
      <Head>
        <title>Round Lake Vineyards and Winery</title>
        <meta property="og:title" content="Round Lake, MN" />
        <meta property="og:description" content="Our First Harvest Host stop" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/round-lake"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/round-lake/wine-glass-cropped.jpg"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="Wine glass from Round Lake Vineyards"
        />
      </Head>
      <div className="mx-auto max-w-3xl p-4 md:p-0">
        <title>Round Lake Vineyards and Winery</title>
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Round Lake Vineyards and Winery
          </h1>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We were making our way to South Dakota, so we needed a place to stay
            between Iowa and Sioux Falls, SD. Why not stay at a winery on a
            lake?{" "}
            <a
              className="underline hover:text-gray-500"
              href="https://www.roundlakevineyards.com/"
            >
              Round Lake Vineyards and Winery
            </a>{" "}
            was in a perfect location and is a{" "}
            <a
              className="underline hover:text-gray-500"
              href="https://harvesthosts.com/"
            >
              Harvest Hosts
            </a>{" "}
            affiliate. Harvest Hosts are all over the country and allow you to
            park your RV for free for the night and support local at the same
            time!
          </p>
          <img
            src="/images/posts/round-lake/truck-trailer.JPG"
            alt="Our truck and trailer parked next to Round Lake."
            className="border-4 border-gray-900"
          />
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Support Local!
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            And support we did! We sampled all of the red wines - Sangiovese,
            Gander, Heron, and Drake, with the Gander being our favorite. We
            also indulged in a jumbo Bavarian pretzel with beer cheese dip, the
            Round Lake burger, and the chicken bacon ranch flatbread. After our
            delicious meal, the owner came out and chatted with us and told us
            we could wander around the vineyards with our wine. We walked along
            the lake and vineyards as the sun was setting, while sipping on
            wine.
          </p>
          <div className="grid grid-cols-3">
            <img
              src="/images/posts/round-lake/big-pretzel.JPG"
              alt="Bryan holding up a giant pretzel"
              className="border-4 border-black"
            />
            <img
              src="/images/posts/round-lake/wine-glass.JPG"
              alt="Glass of red wine"
              className="border-4 border-black"
            />
            <img
              src="/images/posts/round-lake/forest-sunset.JPG"
              alt="Sunset through the trees"
              className="border-4 border-black"
            />
            <img
              src="/images/posts/round-lake/lake-sunset.JPG"
              alt="Sunset over the lake"
              className="col-span-3 border-4 border-black"
            />
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            History of the Vineyards
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Round Lake Vineyard and Winery is owned by Scott and Jenny
            Ellenbecker. The land has only been used as a vineyard since 2007,
            but has been in Jenny’s family for years. It used to be a wildlife
            bird preserve where many ornithologists came to study. You can still
            see beautiful birds like egrets wandering the property. I don’t
            remember the specifics, but Scott told us it took three years for
            the vines to start producing viable grapes that they could harvest
            for wine.
          </p>
          <img
            src="/images/posts/round-lake/bryan-vineyard.JPG"
            alt="Bryan standing in the vineyards"
            className="border-4 border-gray-900"
          />
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            This place is truly magical. We highly recommend coming to try the
            food, obviously try all the wines, and explore the grounds. They
            even have a separate building to host wedding receptions. Scott had
            to step away from chatting with us to go drive a bride and groom
            around the vineyards.
          </p>
          <img
            src="/images/posts/round-lake/bryan-shelly.JPG"
            alt="Bryan and Shelly standing by Round Lake"
            className="border-4 border-gray-900 mb-32 md:mb-14"
          />
        </article>
        <PrevNext
          previousPostHref="/posts/griffs-campground"
          nextPostHref="/posts/sioux-falls"
        />
        <Comments
          url="posts/round-lake"
          identifier="round-lake-comments"
          title="Round Lake Vineyards and Winery"
        />
      </div>
    </>
  );
}
