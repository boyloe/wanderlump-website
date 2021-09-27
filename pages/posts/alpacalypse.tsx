import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";

export default function alpacalypse(): ReactElement {
  return (
    <>
      <Head>
        <title>Alpacalypse Ranch</title>
        <meta property="og:title" content="Alpacalypse Ranch" />
        <meta
          property="og:description"
          content="Amazing alpaca farm located in Pagosa Springs, CO"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/alpacalypse"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/alpacalypse/3472-shelly-waylen.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Gang of alpacas saying hi" />
      </Head>

      <article>
        <div className="mx-auto max-w-3xl p-4 md:p-0">
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Alpacalypse Ranch
          </h1>
          <div className="border-4 border-gray-900 shadow-2xl">
            <Image
              src="/images/posts/alpacalypse/0328-shorn-alpacas.JPG"
              alt="Group of shorn alpacas"
              height={3024}
              width={4032}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            After the Great Sand Dunes, we headed towards southwestern Colorado
            and needed a stop to split up the drive. After a quick Harvest Host
            search, we knew we absolutely had to stay at Alpacalypse Ranch in
            Pagosa Springs, CO. We soon found out that we had to traverse the
            incredibly steep and winding Wolf Creek Pass to get there. This was
            our first time driving through the mountains with trailer in tow and
            Bryan did great navigating the many hairpin turns, 6.8% grade, and
            almost 4,000 feet change in elevation. No underwear were harmed
            during this drive!
          </p>
          <div className="md:border-4 border-gray-900 shadow-2xl mb-8 grid grid-cols-1 md:grid-cols-2">
            <div className="border-4 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-2 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/alpacalypse/0358-white-no-eyes.JPG"
                alt="White alpaca with shaggy hair"
                height={3024}
                width={4032}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-r-2 md:border-t-2 md:border-l-0 md:border-b-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/3468-waylen-close.JPG"
                alt="Alpaca close up on the camera"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-l-2 md:border-t-2 md:border-r-0 md:border-b-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0386-derpy-alpaca.jpg"
                alt="Alpaca with droopy eyes"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Alpacalypse Ranch is owned and operated by Kathy and Duwane and has
            the most breathtaking views of the San Juan Mountains. They have
            lived on their property for over 30 years and after retiring, Kathy
            was convinced by a fellow alpaca owner and breeder that they should
            add alpacas to their property. When we were there, they had 39
            alpacas and many of the females were pregnant and due in the summer.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl my-4">
            <Image
              src="/images/posts/alpacalypse/0394-pregnant-alpaca-gang.JPG"
              alt="Group of pregnant alpacas"
              height={3024}
              width={4032}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We were lucky to get a spot for the night! Shortly after we were
            settled in and another couple had arrived and parked, Kathy let us
            know that two other travelers had tried to reserve a spot for the
            night and she had to decline them due to lack of space. Our spot was
            overlooking the male alpaca enclosure and the mountains. Lumpy and
            Catalina weren’t quite sure what to make of those weird looking
            creatures and the new smells and sounds.
          </p>
          <div className="border-4 border-gray-900 md:shadow-2xl my-4">
            <Image
              src="/images/posts/alpacalypse/0406-lumpy-window.JPG"
              alt="Lumpy looking out the window at the alpacas"
              height={3024}
              width={4032}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Kathy was wonderful and gave us a lengthy tour, introducing us to
            all of the alpacas, teaching us about the two breeds, their fiber,
            and their behavior. They are separated into different enclosures
            based on sex, temperament, and the pregnant females were separated
            from the non-pregnant females. Most of their alpacas are the breed
            Huacaya, which have a shorter, more compact, crimpy fleece, similar
            to sheep. They also have a few Suri alpacas, which look like
            Rastafarians with long, silky dreadlocks.
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 md:border-4 border-gray-900 md:shadow-2xl my-4">
            <div className="  border-4 md:border-r-2 md:border-l-0 md:border-b-0 md:border-t-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/3472-shelly-waylen.JPG"
                alt="Shelly making friends with an alpaca"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-2 md:border-r-0 md:border-b-0 md:border-t-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/3749-bryan-glasses.jpg"
                alt="Bryan taking a selfie with alpacas"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Kathy had just taken several of their alpacas to a show in Denver,
            so they were recently shorn and had an uncanny resemblance to giant
            Q-Tips. The rest of the alpacas were scheduled for their shearing,
            vaccines, and hoof trimming in just 10 days. Surprisingly they are
            able to get it all done in one exhausting, stinky day full of
            spitting and screaming. Luckily, this shearing event only happens
            once a year.
          </p>
          <div className="grid grid-cols-2 border-4 border-gray-900 md:shadow-2xl my-4">
            <div className="border-r-2 border-b-2 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0334-qtip-alpaca.jpg"
                alt="Alpaca with a freshly shorn neck and poofy hair"
                height={2586}
                width={1272}
                layout="responsive"
              />
            </div>
            <div className="border-l-2 border-b-2 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0327-white-grass-face.jpg"
                alt="White alpaca with grass on his face"
                height={2586}
                width={1272}
                layout="responsive"
              />
            </div>
            <div className=" border-r-2 border-t-2 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0329-curious-white-alpaca.jpg"
                alt="White alpaca checking us out"
                height={2586}
                width={1272}
                layout="responsive"
              />
            </div>
            <div className="border-l-2 border-t-2 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/two-qtips.jpg"
                alt="Bryan taking a selfie with alpacas"
                height={2586}
                width={1272}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Alpacas have a unique dentition where they don’t have any upper
            incisors and only have a toothless dental pad, making it look like
            they have an underbite. It is quite comical to watch them nom down
            on vegetation, lips going every which way while they grind the food
            with their molars. Several of the alpacas at the ranch had pieces of
            grass stuck in their top knot, making them look even more
            ridiculous.
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 md:shadow-2xl my-4 md:border-4 border-gray-900">
            <div className="border-4 md:border-r-2 md:border-t-0 md:border-l-0 md:border-b-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0384-white-with-black-eyes.JPG"
                alt="White alpaca with black eyes"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-l-2 md:border-r-0 md:border-b-0 md:border-t-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0344-shaggy-underbite.JPG"
                alt="Shaggy Alpaca with an underbite"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-t-4 md:border-r-0 md:border-l-0 md:border-b-0 border-gray-900 md:col-span-3">
              <Image
                src="/images/posts/alpacalypse/0367-grass-face.JPG"
                alt="Bryan taking a selfie with alpacas"
                height={3024}
                width={4032}
                layout="responsive"
              />
            </div>
          </div>

          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Kathy described alpacas as large cats and I think that is a perfect
            depiction of them. They are very curious and wanted to be around us,
            but despite my repeated attempts to pet and cuddle them, they
            wouldn’t allow it. One of the alpacas had an uncanny resemblance to
            Freddie Mercury, with his chiseled cheekbone structure, dark fur,
            and prominent teeth. I love him and have no less than 50 photos of
            him. Until we meet again Freddie!
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 md:border-4 border-gray-900 md:shadow-2xl my-4">
            <div className="border-4 md:border-r-2 md:border-l-0 md:border-b-0 md:border-t-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0350-freddie2.JPG"
                alt="Black alpaca with underbite"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-l-2 md:border-r-0 md:border-b-0 md:border-t-0 border-gray-900">
              <Image
                src="/images/posts/alpacalypse/0336-freddie1.JPG"
                alt="Black alpaca with underbite"
                height={4032}
                width={3024}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            At the end of the tour, Kathy opened up her garage and showed us her
            incredible collection of alpaca fiber, all separated into clear bags
            and labeled by alpaca name and collection date. Although I highly
            enjoy crafting, I haven’t gotten into any crafts requiring fiber
            yet, so we did the only thing we could do to support her and the
            ranch - purchase an Alpacalypse coffee mug and cat toys made of
            alpaca wool! This stop is an absolute must!
          </p>
          <div className="border-4 border-gray-900 shadow-2xl my-4">
            <Image
              src="/images/posts/alpacalypse/4094-coffee-mug.JPG"
              alt="Alpacalypse Ranch coffee mug"
              height={3024}
              width={4032}
              layout="responsive"
            />
          </div>
        </div>
      </article>
      <PrevNext previousPostHref="/posts/sand-dunes" nextPostHref="" />
    </>
  );
}
