import React, { ReactElement } from "react";
import Image from "next/image";

export default function carhenge(): ReactElement {
  return (
    <div className="mx-auto max-w-3xl p-4 md:p-0">
      <title>Carhenge</title>
      <article>
        <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
          Carhenge
        </h1>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/carhenge/carhenge-wide.JPG"
            alt="carhenge"
            height={500}
            width={800}
            layout="responsive"
          />
        </div>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          Alliance, Nebraska... Would we have ever gone out of our way to visit
          it? Probably not. Until I was researching things to do in Nebraska and
          came across Carhenge. It is exactly what it sounds like – a replica of
          Stonehenge, but made with vintage American cars spray painted grey.
        </p>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/carhenge/buried-car.JPG"
            alt="carhenge"
            height={500}
            width={600}
            layout="responsive"
          />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
          Why not?
        </h2>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          Jim Reinders, a local of Alliance, NE, is the creator of Carhenge. He
          spent seven years working in England and was inspired by Stonehenge to
          make a “Stonehenge West” in his hometown. Not having large slabs of
          stone readily available, he used what he could easily find – old cars.
          Once he had it planned out, it was quickly constructed in six days
          during his family reunion and finished on June 21, 1987. Reinders
          obviously has a sense of humor, because when asked why he built
          Carhenge, his reply was “Why not?”
        </p>
        <div className="border-4 border-gray-900 shadow-2xl">
          <Image
            src="/images/posts/carhenge/carhenge-close.JPG"
            alt="carhenge"
            height={500}
            width={800}
            layout="responsive"
          />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
          Car Art Reserve
        </h2>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          Carhenge has added additional sculptures made from car parts,
          including “Spawning Salmon,” “The Fourd Seasons,” a car you are
          allowed to sign, a dinosaur, a station wagon turned into a pioneer
          wagon, and a car with the inscription, “Here lie three bones of
          foreign cars. They served their purpose while Detroit slept. Now
          Detroit is awake and America’s great!”
        </p>
        <div className="grid grid-cols-2">
          <div className="border-t-4 border-l-4 border-r-2 border-b-2 border-gray-900">
            <Image
              src="/images/posts/carhenge/dinosaur.JPG"
              alt="Car dinosaur"
              height={600}
              width={500}
              layout="responsive"
            />
          </div>
          <div className="border-t-4 border-r-4 border-b-2 border-l-2 border-gray-900">
            <Image
              src="/images/posts/carhenge/salmon.JPG"
              alt="metal salmon sculpture"
              height={600}
              width={500}
              layout="responsive"
            />
          </div>
          <div className="border-t-2 border-l-4 border-r-4 border-b-4 border-gray-900 col-span-2">
            <Image
              src="/images/posts/carhenge/wagon-wheel.JPG"
              alt="rusted station wagon"
              height={500}
              width={700}
              layout="responsive"
            />
          </div>
        </div>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          We went on a particularly windy day, so a leisurely walk around the
          property wasn’t really an option. However, the weather didn’t make
          this any less impressive of a sight to see. Would we drive back to
          Alliance, NE to see it again? Why not?
        </p>
      </article>
    </div>
  );
}
