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
          content="https://www.wanderlump.com/images/posts/bryce-canyon/bryce-canyon-panoramic-view-1196.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Bryce Canyon National Park" />
      </Head>
      <div className="mx-auto max-w-3xl p-4 md:p-0 my-4">
        <title>Bryce Canyon National Park</title>
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Bryce Canyon National Park
          </h1>
          <div className="border-4 border-gray-900 shadow-xl">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-panoramic-view-1196.JPG"
              alt="Bryce Canyon National Park"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Do you even level bro?
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After Capitol Reef, we continued southwest to spend a week in Bryce
            Canyon National Park. We found dispersed camping in Dixie National
            Forest and took the first spot we came across. We scouted out the
            site, figured out how we wanted to be situated, and started the
            leveling process. We have Anderson leveling blocks and had never had
            an issue getting level side to side, but we failed miserably here
            over and over again. To make things even more embarrassing, the
            people at the site next to us came out to watch the free
            entertainment. After taking entirely too much time when it clearly
            wasn&apos;t going to work, trying to save face with our nosey
            neighbors saying, “I swear this has never happened before,” we
            called it quits. It felt like hours had passed and the sun had
            started to set, but we were worried that we wouldn&apos;t be able to
            find an available site further down on this busy Memorial Day
            weekend. In an effort not to lose this site, I stayed with the truck
            and trailer and Bryan took one for the team and jogged down the main
            road to scout it out. A very hot and sweaty Bryan came back out of
            breath, but victorious. There was a better spot a little further
            down tucked in between the Ponderosa pine trees and it appeared to
            be much more level. Within 30 minutes we were unhooked, unpacked,
            and most importantly, level.
          </p>
          <div className="grid grid-col-1 gap-y-4">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce canyon-trailer at campsite-1413.JPG"
                alt="Our Trailer at Toms Best Spring dispersed camp site"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce canyon-toms-best-spring-campsite-1417.JPG"
                alt="Tom's Best Spring dispersed camp site"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            wanderlump on Wall Street
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After a full day of work, we headed into Bryce to hike Queen&apos;s
            Garden and Navajo Loop trail and end at Sunset point just in time
            for this point&apos;s namesake. I was not prepared for Bryce
            Amphitheater. We had already spent over two weeks in Utah and seen
            three of its national parks, but this was, yet again, vastly
            different and took our breath away. This view actually brought me to
            tears, overwhelmed with the reality that this was our life now. We
            have both worked incredibly hard to get to this point and overcome
            many challenges in our lives and are beyond grateful for this
            opportunity. It is a truly humbling experience to get to travel the
            country with my best friend, living every day to the fullest.
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-panoramic-view-2-1095.JPG"
              alt="Bryce Canyon National Park"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After getting over the initial shock that Bryce causes, we started
            hiking down Wall Street. You have the option to loop around the
            other way and end with Wall Street, but watching exhausted people
            ending their three mile hike trying to climb the painfully steep
            incline, switchback after switchback, I felt pretty good about our
            decision to walk DOWN Wall Street, rather than up.
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-wall-street-1102.JPG"
              alt="Wall Street at Bryce Canyon National Park"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            Once we descended the switchbacks and walked through a narrow
            canyon, we left the crowds behind and were able to explore this
            magical world by ourselves. Have I mentioned what a good sport Bryan
            is, yet? He put up with me saying “hoodoo” like Hodor pronounces his
            name in <span className="italic">Game of Thrones</span> every time I
            saw one, which was at least a thousand times. I had never heard of
            hoodoos, so seeing such a multitude of this geologic formation was
            amazing. Bryce Canyon has the largest collection of hoodoos in the
            world! They are formed by the same process as fins, which I
            discussed in{" "}
            <Link href="/posts/arches">
              <span className="text-blue-600 underline">Arches</span>
            </Link>
            , but are the product of fins eroding even further. Fins eventually
            get thin enough that a hole forms, creating a window and when the
            surface above the window breaks off, a hoodoo is left behind.
          </p>
          <div className="grid gap-4 md:gap-2 md:grid-cols-2">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-mesa-1138.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoos-1154.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-1162.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-1199.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-mesa-view-1203.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-panoramic-view-3-1212.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Leg Day
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After getting a small taste of Bryce, we eagerly went back early the
            next morning to hike Fairyland loop trail. This is a very popular
            trail with little shade, so we wanted to beat the crowds and the
            peak sun hours. The trail starts at Fairyland Point and has a
            spectacular view of hoodoos. We were in good shape and had lived in
            Colorado for three years, so we were well acclimated to hiking at
            higher elevations. Real talk - this trail kicked our butts. The
            distance wasn&apos;t the brutal part; it was the 1,550-foot
            elevation gain over those 8 miles that left our legs burning.
            Don&apos;t get me wrong. We loved every minute of this hike, but we
            knew we would be feeling it the next day. There were unbelievable
            views the entire loop and the colors changed as the sun rose higher
            into the sky. It was neat to see hoodoos of all shapes and sizes,
            carved by water and ice at different rates depending on their
            chemical composition.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-4 md:col-span-2 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-entrance-sign-1221.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-wide-view-with-hoodoo-1233.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-wide-view-with-tree-1237.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-wall-1261.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-mesa-1278.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-shelly-1292.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-walking-trail-1301.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Sunday Drive
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            For those who haven&apos;t been to Bryce, there is one main 20-mile
            road running north-south through the park. Most of the popular
            overlooks and hikes are at the front of the park, which is where we
            had spent the past few days. The next day we decided to let our legs
            have a break and take a leisurely Sunday scenic drive. All the
            overlooks had views of hoodoos, but there were also dense areas of
            pine trees, the dark green shades making the pink, orange, and white
            tones in the hoodoos really stand out. At one overlook we realized
            we needed to hurry up or we weren&apos;t going to make it to all the
            overlooks before the sun set. This led to a comical descent down the
            road, stopping at each point, running out, taking a quick photo, and
            running back to the car. It was close, but we did end up making it
            to every point before dark.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-wide-view-1329.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-1340.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-arch-1344.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-high-view-1347.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Peekaboo, I see hoodoo
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            The Peekaboo trailhead starts at Bryce Point, which offers a
            stunning view, but very limited parking. We couldn&apos;t find a
            spot and the rangers were even more ruthless than airport traffic
            controllers. No readily available spot and they quickly send you
            back down the one-way road. Luckily, we found a spot on our second
            loop around. This trail has almost as much elevation gain as
            Fairyland, 1,450 feet, even though it is 3 miles shorter, so we knew
            we were in for another leg day. The trail descends quickly into the
            canyon, so we knew we would be ending this five mile loop with a
            very steep incline. Even though it was hard, this was an
            unbelievable hike and definitely our favorite at Bryce. We got to
            walk through giant windows, run down switchbacks, say hi to some
            horses enjoying the trail, explore vastly different landscapes
            around each turn, and see even more hoodoos.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-4 border-gray-900 col-span-2">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-wall-1384.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-circle-1373.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-pano-1356.jpeg"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>

            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-jet-1393.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-1395.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            On the way back to our site, we stopped in Bryce Canyon City. We
            bought some delicious huckleberry ice cream in Old Bryce Town and
            took a silly photo in a Western cut out. We also stopped by Ruby’s
            Inn and got some pepper jelly, salsa, souvenirs, and Utah beer. We
            have been trying local beer in each state and Utah has some
            fantastic beer! Kiitos Brewing is our favorite and tastes even
            better after hiking the hoodoos.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-ruby-inn-bryan-shelly-1408.JPG"
                layout="responsive"
                height={800}
                width={600}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-kiitos-blonde.JPG"
                layout="responsive"
                height={800}
                width={600}
              />
            </div>
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            We hiked the hoodoos
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            Bryce has a challenge called “Hike the hoodoos,” which encourages
            visitors to stay healthy while having fun. You can make rubbings of
            three benchmarks or take pictures with the benchmarks, which are
            scattered along various trails throughout the park. We found many
            more than three with all the hikes we did and happily accepted our
            sticker from the visitor center for all our hard work.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-info-1150.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>

            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-hoodoo-info-1238.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-info-1247.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>

            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-info-1310.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-info-1377.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-hoodoo-info-1399.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After all the hiking at Bryce, my hiking boots needed a good rinse!
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-shelly-shoes-3587.JPG"
              layout="responsive"
              height={800}
              width={600}
            />
          </div>
          <h1 className="text-3xl mt-8 mb-4 font-lato font-black tracking-wide text-center">
            Did the cats like Bryce
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            The cats enjoyed spending their Memorial Day weekend in Bryce
            Canyon. The weather was great, so they got plenty of screen time.
            Lumpy claimed the little scratching pad as her throne and could
            usually be seen bread loafing on it. They were just glad we were
            gone hiking so much, so they could live their best lives lounging
            around on the couch or bed, and then pretending they missed us when
            we got back.
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-lumpy-wide-eyed-1322.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/bryce-canyon/bryce-canyon-bryan-two-cats-1323.JPG"
                layout="responsive"
                height={600}
                width={800}
              />
            </div>
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            When we were packing up to move on, we saw some crazy bugs on our
            tires. We learned much more about those later. To be continued…
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/bryce-canyon/bryce-canyon-crazy-bugs-1412.JPG"
              layout="responsive"
              height={800}
              width={600}
            />
          </div>
        </article>
      </div>
      <PrevNext previousPostHref="/posts/capitol-reef" nextPostHref="" />
    </>
  );
}
