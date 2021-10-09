import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";

export default function arches(): ReactElement {
  return (
    <>
      <Head>
        <title>Arches National Park</title>
        <meta property="og:title" content="Arches National Park" />
        <meta
          property="og:description"
          content="Thought that Arches would be a little archier..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wanderlump.com/posts/arches" />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/arches/arches-devils-garden-wide-view.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Arches National Park" />
      </Head>

      <article>
        <div className="mx-auto max-w-3xl p-4 md:p-0">
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Moab, UT - Arches National Park
          </h1>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Devil&apos;s Garden
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            What better way to spend our last day in Moab than hiking through
            Devils Garden? This hike is incredibly popular, but there are
            varying degrees of difficulty you can choose to do on this hike. You
            can do a quick two-mile hike, see three arches, and call it a day,
            you can go five-miles and see six arches, or you can do the
            primitive trail, which is eight-miles and allows you to see eight
            arches. We decided to do the primitive trail, because did you even
            go to Arches if you don’t see ALL the arches? We also wanted to do
            this one, because this trail is off the beaten path and requires
            scrambling up and over rocks.
          </p>
          <div className="border-4 border-gray-900 my-4">
            <Image
              src="/images/posts/arches/arches-devils-garden-trail-map.JPG"
              alt="Trail map of the Devils Garden in Arches National Park"
              width={1000}
              height={386}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            It was another early start that morning. It took us 30 minutes to
            get to the entrance of Arches and Devils Garden is all the way at
            the back of the park, which takes about 45 minutes to drive to. We
            arrived at 8 am and were welcomed with an almost completely full
            parking lot and there is a HUGE parking lot. As we walked up to the
            trailhead, we heard a ranger telling others that the park was
            already at full capacity and they weren’t letting anyone else in.
          </p>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            The beginning of the trail was a bit chaotic. Huge crowds filling up
            water bottles, applying sunscreen, waiting in line for the bathroom,
            taking group photos, and looking at the trail map. Once you get past
            that, you walk between towering fins, anticipation building until
            you finally round the corner and are treated to your first view of
            the landscape.
          </p>
          <div className="grid grid-cols-1 gap-4 my-8">
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-trailhead.JPG"
                alt="Devils Garden trail head in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-wide-view.JPG"
                alt="Arches National Park view from Devils Garden"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Quick geology lesson! Fins are narrow rock walls formed by erosion
            and fracturing of larger rocks. Rainwater and snowmelt get into
            cracks in the rock, eroding and widening the cracks. In the winter,
            water within those cracks freezes and expands, causing chunks of
            rock to break off. Weak areas of fins continue to dissolve and
            crumble off over time, resulting in arches.
          </p>
          <div className="grid grid-cols-1 gap-4 my-8">
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-rock-formations.JPG"
                alt="Devils Garden rock formations"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-fins.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We weaved our way in and out of the crowds for less than a mile and
            then reached the fork in the trail. We were the only two who veered
            to the right, happily trading the paved trail for the red dirt
            primitive trail. After just a few minutes, the noise of the crowds
            had faded away and we were left to ourselves to explore this crazy
            garden of juniper trees, pinyon pine trees, and cacti. Did I mention
            you get to climb up the giant fins?
          </p>
          <div className="border-4 border-gray-900 my-4">
            <Image
              src="/images/posts/arches/arches-devils-garden-bryan-on-rock.JPG"
              alt="Bryan on top of a fin in the Devils Garden trail at Arches National Park"
              width={600}
              height={800}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We came across a rock with a unique erosion pattern. I see a baby
            doll face. What do you see?
          </p>
          <div className="border-4 border-gray-900 my-4">
            <Image
              src="/images/posts/arches/arches-devils-garden-face-rock.JPG"
              alt="Rock formation that looks like a baby doll face"
              width={600}
              height={800}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            After over a mile of scrambling up, over, and along rocks, we
            finally came across our first arch - Private Arch. It was anything
            but private when we arrived, so we quickly took some pictures and
            continued on our way. At the furthest point of the trail, we caught
            a view of Dark Angel.Dark Angel is a tall, dark spire that looms
            over Devils Garden.
          </p>
          <div className="grid grid-cols-1 gap-4 my-8">
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-private-arch.JPG"
                alt="Private Arch in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-dark-angel.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Then we came across Double O Arch, which was incredible! There is
            one giant hole eroded through the top of the fin and a second
            smaller hole at the base of the same fin. Definitely worth the extra
            miles to see!
          </p>
          <div className="border-4 border-gray-900 my-4">
            <Image
              src="/images/posts/arches/arches-devils-garden-double-o-arch.JPG"
              alt="Double O Arch at the Devils Garden in Arches National Park"
              width={800}
              height={600}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            After viewing Double O Arch up close, we scrambled up and over
            another giant fin and viewed it from a distance. Further along the
            fin, we came across Black Arch overlook. Continuing on, we had to
            branch off the main trail to find Navajo Arch and Partition Arch.
            Luckily, we came across two women who had spent 15 minutes finding
            the perfect spot for that Instagram worthy pic and they offered to
            do a mini photo shoot for us. Thanks ladies! Both of these arches
            were also worth putting in those extra steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 my-8">
            <div className="border-4 md:border-t-4 md:border-r-4 md:border-b-2 md:border-l-4 border-gray-900 shadow-2xl md:col-span-2">
              <Image
                src="/images/posts/arches/arches-devils-garden-bryan-shelly-window-arch-wide.JPG"
                alt="Private Arch in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-t-2 md:border-r-2 md:border-b-4 md:border-l-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-bryan-shelly-window-arch.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-t-2 md:border-r-4 md:border-b-4 md:border-l-2 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-navajo-arch.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Back on the main trail, we navigated our way along another long row
            of fins. It was a bit nerve racking at times when you had to pass
            people on the fins and some people would get dangerously close to
            the edge to take pictures. It started raining as we descended
            another large fin, which we gladly welcomed as it cooled us off a
            bit.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl my-8">
            <Image
              src="/images/posts/arches/arches-devils-garden-bryan-rock-point.JPG"
              alt="Rock fins on the Devils Garden Trail in Arches National Park"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <div className="border-4 border-gray-900 shadow-2xl my-8">
            <Image
              src="/images/posts/arches/arches-devils-garden-shelly-arms-wide.JPG"
              alt="Rock fins on the Devils Garden Trail in Arches National Park"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We came to a particularly precarious edge, took some pictures where
            it looked like we were up in the clouds, and this is where we
            finally caught a view of Landscape Arch, the longest arch in North
            America. It is 306 feet long and so incredibly narrow, it looks like
            it is hanging on by a thread. Visitors have not been allowed to walk
            under the arch since 1991, when a 60-foot section of the arch broke
            off. There are some larger remnants still evident below the arch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 my-8">
            <div className="border-4 md:border-t-4 md:border-r-4 md:border-b-2 md:border-l-4 border-gray-900 shadow-2xl md:col-span-2">
              <Image
                src="/images/posts/arches/arches-devils-garden-bryan-shelly-window-arch-wide.JPG"
                alt="Private Arch in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-t-2 md:border-r-2 md:border-b-4 md:border-l-4 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-bryan-shelly-window-arch.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-t-2 md:border-r-4 md:border-b-4 md:border-l-2 border-gray-900 shadow-2xl">
              <Image
                src="/images/posts/arches/arches-devils-garden-navajo-arch.JPG"
                alt="Rock fins on the Devils Garden Trail in Arches National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            On the way back to the trailhead, we branched off one last time to
            see Tunnel Arch and Pine Tree Arch. We did it! We made it to all
            eight arches. As we slowly made our way back to the car, legs
            aching, we discussed what a remarkable hike it was.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl my-8">
            <Image
              src="/images/posts/arches/arches-devils-garden-bryan-rock-point.JPG"
              alt="Rock fins on the Devils Garden Trail in Arches National Park"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <div className="border-4 border-gray-900 shadow-2xl my-8">
            <Image
              src="/images/posts/arches/arches-devils-garden-shelly-arms-wide.JPG"
              alt="Rock fins on the Devils Garden Trail in Arches National Park"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
        </div>
      </article>
      <PrevNext previousPostHref="/posts/dead-horse" nextPostHref="" />
    </>
  );
}
