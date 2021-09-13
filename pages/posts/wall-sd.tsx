import React, { ReactElement } from "react";
import Image from "next/image";

export default function wallSD(): ReactElement {
  return (
    <div className="mx-auto max-w-3xl p-4 md:p-0">
      <title>Wall, South Dakota</title>
      <article>
        <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
          Wall Drug Store
        </h1>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/wall-sd/akbar.jpeg"
            alt="Bridge view of the lower Sioux Falls"
            height={500}
            width={800}
            layout="responsive"
          />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
          It&apos;s A Trap...A Tourist Trap!
        </h2>
        <p className="my-8 font-lato text-xl tracking-wide text-justify">
          If you’ve ever driven west across South Dakota on Interstate 90,
          you’ve seen a billboard (or 100) advertising for Wall Drug Store. It
          is absolutely a tourist trap, but if you are in the area checking out
          the Badlands, you should check it out. Advertisements telling us of
          the giant Jackalope, five cent cup of coffee, Western themed
          souvenirs, and a giant dinosaur piqued our interest. We learned that
          it became as popular as it is today by simply offering a free glass of
          iced water to tourists.
        </p>
        <p className="my-8 font-lato text-xl tracking-wide text-justify">
          Our GPS led us to a one-lane street with incredibly tight parking
          spots lined with shops and restaurants. It didn’t look like anything
          more than a rundown strip mall. However, walking into Wall Drug
          transported us straight into the Wild West. There were stores full of
          trinkets, homemade fudge, Christmas ornaments, beautiful Western
          artwork, and the walk way was lined with Western mannequins to pose
          with. The only thing keeping up us from stocking up was our rule of
          “Nothing breakable in the trailer!” Oh, and the fact that we literally
          live in a tiny travel trailer now.
        </p>
        <div className="border-4 border-gray-900">
          <Image
            src="/images/posts/wall-sd/bryan-cowboy.JPG"
            alt="Bridge view of the lower Sioux Falls"
            height={500}
            width={400}
            layout="responsive"
          />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
          Jack-a-what?
        </h2>
        <p className="my-8 font-lato text-xl tracking-wide text-justify">
          It is fun to browse the stores and try some fudge, but the magic is in
          the Backyard. I rode a Jackalope, a majestic creature that is a
          jackrabbit with antelope horns. I also made friends with a 6-foot
          rabbit and Bryan tamed a wild stallion. There is a Western art
          gallery, gold mining area, and a giant T-rex. Stop in for some
          refreshing water and hilarious photos.
        </p>
        <div className="grid grid-cols-2 mb-16">
          <img
            src="/images/posts/wall-sd/shelly-jackalope.JPG"
            alt="Bryan riding a bucking bronco"
            className="border-l-4 border-t-4 border-r-4 border-b-2 border-gray-900 shadow-2xl col-span-2"
          />
          <img
            src="/images/posts/wall-sd/bryan-bronco.JPG"
            alt="Shelly riding the Jackalope"
            className="border-l-4 border-t-2 border-r-2 border-b-4 border-gray-900 shadow-2xl"
          />
          <img
            src="/images/posts/wall-sd/shelly-rabbit.JPG"
            alt="Shelly making friends with a six foot tall rabbit statue"
            className="border-l-2 border-t-2 border-r-4 border-b-4 border-gray-900 shadow-2xl"
          />
        </div>
      </article>
    </div>
  );
}
