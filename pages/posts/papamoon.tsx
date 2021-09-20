import React, { ReactElement } from "react";
import Image from "next/image";
import PrevNext from "../../components/PrevNext";

export default function papamoon(): ReactElement {
  return (
    <div className="mx-auto max-w-3xl p-4 md:p-0">
      <title>Papa Moon Vineyards, Winery, &amp; Cider House</title>
      <article>
        <h1 className="text-3xl mb-2 font-lato font-black tracking-wide text-center">
          Papa Moon Vineyards, Winery, &amp; Cider House
        </h1>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/papa-moon/papamoon-winery.jpeg"
            alt="Exterior of the Papa Moon Winery"
            height={500}
            width={800}
            layout="responsive"
          />
        </div>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          We were parched after exploring Carhenge, so we set up shop at another
          Harvest Host in Scottsbluff, NE, Papa Moon Vineyards, Winery, and
          Ciderhouse. Based on their stellar reviews, we knew we could easily
          quench our thirst there. Papa Moon is a charming family-owned winery,
          complete with their own vineyards and tasting room. Their property
          also has a pond and streams trickling through the landscape. There was
          another traveler parked in the spot down by the pond, but we weren’t
          too disappointed about not being able to park there, because we were
          warned of an angry mama goose! Instead, we settled into a grass field,
          which offered privacy from everyone except their dog and two goats who
          came to say hi.
        </p>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/papa-moon/wine-bottles.png"
            alt="4 bottles of Papa Moon wine"
            height={500}
            width={600}
            layout="responsive"
          />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
          Supporting local. So hot right now.
        </h2>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          Once we were situated, we made our way to the tasting room, which is a
          cozy space with stools at the bar and multiple tables. They have a
          variety of games on the shelves for customers to use and there was a
          couple playing a very intense game of Cribbage. We decided on a flight
          of wine and cider, including the Edelweiss, Dechaunac, and Brianna
          wines and the grapefruit juniper cider. Bryan’s favorite was the
          Edelweiss and mine was the cider. The flavor combination of grapefruit
          and juniper was beyond refreshing. We bought a bottle and a 4 pack of
          cider to take back to the trailer. We thoroughly enjoyed sipping cider
          and wine by the warmth of our fireplace. I can’t wait to go back and
          try the mango habanero cider!
        </p>
        <div className="border-4 border-gray-900 shadow-2xl mb-8">
          <Image
            src="/images/posts/papa-moon/papa-moon-cider.jpeg"
            alt="Can of grapefruit juniper cider"
            height={400}
            width={500}
            layout="responsive"
          />
        </div>
      </article>
      <PrevNext
        previousPostHref="/posts/carhenge"
        nextPostHref="/posts/scottsbluff"
      />
    </div>
  );
}
