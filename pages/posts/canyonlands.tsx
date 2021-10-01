import React, { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";

export default function canyonland(): ReactElement {
  return (
    <>
      <Head>
        <title>Canyonlands National Park</title>
        <meta property="og:title" content="Canyonlands National Park" />
        <meta
          property="og:description"
          content="Breathtaking views, and red sand everywhere"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/canyonlands"
        />
        <meta
          property="og:image"
          content="https://wanderlump.com/posts/canyonland/sunset.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="Canyonlands National Park at sunset"
        />
      </Head>

      <article>
        <div className="mx-auto max-w-3xl p-4 md:p-0">
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Moab, UT - Canyonlands National Park
          </h1>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Utah – the land of incredible rock formations, red sand that will
            get in every nook and cranny, and insane wind
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Bryan and I had never been to Utah, so what better time to go
            explore this other worldly state? We decided to start on the east
            side of Utah and work our way southwest, hitting up all five
            national parks. Canyonlands National Park and Arches National Park
            are in the same area, so we picked a central location in Moab with
            easy access to both to call home for the week. We filled up our
            water tanks, propane tanks, and portable gas tank and headed out to
            Lone Mesa Campground. Did I mention that we are killing it at
            boondocking? The drive through Moab was packed with ATVs caked in
            red sand, hotel pools with large red rock replicas, overcrowded
            restaurants, Jeeps, and souvenir shops. Then we turned left and
            headed away from the city and the views were incredible. Huge mesas
            with alternating layers of every shade of orange, red, and brown,
            speckled with green bushes. We were definitely not in Kansas
            anymore. Lumpy and Catalina couldn’t contain their excitement.
          </p>
          <div className="md:border-4 border-gray-900 shadow-2xl mb-8 grid grid-cols-1 md:grid-cols-3">
            <div className="border-4 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-2 border-gray-900 md:col-span-3">
              <Image
                src="/images/posts/canyonlands/striation.JPG"
                alt="Canyon wall with multicolored striations"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-r-2 md:border-t-2 md:border-l-0 md:border-b-0 border-gray-900 col-span-2">
              <Image
                src="/images/posts/canyonlands/lumpy-sleeping.JPG"
                alt="Lumpy Space Princess sleeping in the backseat"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-l-2 md:border-t-2 md:border-r-0 md:border-b-0 border-gray-900">
              <Image
                src="/images/posts/canyonlands/catalina.JPG"
                alt="Catalina Wine Mixer sleeping in her carrier"
                height={1202}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Lone Mesa is located down a very long, very bumpy dirt road. Bryan
            slowly weaved between rocks and ruts and we arrived safely at dusk.
            Again, luck was on our side and we found a fairly level spot with an
            amazing view – 2 large mesas on either side of us and snowcapped La
            Sal mountains in the distance. After getting situated, we wandered
            to the far edge of the mesa and watched the sun set.{" "}
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:border-4 border-gray-900 md:shadow-2xl my-4">
            <div className="  border-4 md:border-b-2 md:border-l-0 md:border-t-0 md:border-r-0 border-gray-900">
              <Image
                src="/images/posts/canyonlands/sunset.JPG"
                alt="Sunset view from Lone Mesa campsite"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-0 md:border-r-0 md:border-b-0 md:border-t-2 border-gray-900">
              <Image
                src="/images/posts/canyonlands/lone-mesa.JPG"
                alt="Forest River Salem 22rbs and Ford F-150 at Lone Mesa"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            The early bird gets the worm… or at least a good view of Mesa Arch
            at sunrise
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We were super excited to explore Canyonlands and wanted to see the
            sunrise. My alarm woke us up when it was pitch black out. The cats
            were confused, but still quite receptive to a super early breakfast.
            No shore power or generator power (didn’t want to piss off our
            neighbors at 5 am our first morning there) means Mr. Coffee was not
            going to work. How would we function without our morning cup of Joe?
            Come on! I told you we were killing it at this lifestyle. Bryan
            quickly boiled some water, mixed in some instant coffee, and we were
            off.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl">
            <Image
              src="/images/posts/canyonlands/coffee-mug.JPG"
              alt="Adventure is Calling Tervis Tumbler coffee mug"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            The sky was just starting to lighten as we made our way towards
            Canyonlands and there were no other vehicles in site. As we drove, I
            told Bryan what I had learned about this ginormous national park.
            Canyonlands is composed of four districts divided by the Green and
            Colorado rivers – Island in the Sky, The Maze, The Needles, and
            Horseshoe Canyon. None of the districts have roads connecting them
            and a large majority of the roads require high-clearance, 4-wheel
            drive vehicles to navigate them. Island in the Sky is the closest
            district to Moab and has a paved road with access to great hiking
            trails and overlooks. It is called Island in the Sky because it is a
            mesa resting on sandstone cliffs over 1,000 feet above the
            surrounding landscape.
          </p>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Our first stop was Mesa Arch, which is an arch located on the edge
            of a cliff. It is a short hike to get to the arch and has become a
            very popular site to watch the sunrise. Our early arrival ensured we
            got a parking spot and a great view. There were several other
            tourists there, some with tripods set up to capture the sunrise
            through the arch, others perched on rocks to look over the cliff at
            the breathtaking terrain below. Bryan has many skills and I love him
            dearly. However, taking pictures is not his strongest asset. All of
            the pictures he took of me sitting in front of the arch make me look
            like a beached manatee sprawled across the rocks, so I will not be
            sharing any of those with you!
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-0 md:border-4 border-gray-900 md:shadow-2xl my-4">
            <div className=" border-4 md:border-l-0 md:border-r-0 md:border-b-2 md:border-t-0 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/canyonlands/mesa-arch-1.JPG"
                alt="Mesa Arch"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="  border-4 md:border-b-2 md:border-l-0 md:border-t-2 md:border-r-2 border-gray-900">
              <Image
                src="/images/posts/canyonlands/mesa-arch-2.JPG"
                alt="Mesa Arch"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-2 md:border-r-0 md:border-b-2 md:border-t-2 border-gray-900">
              <Image
                src="/images/posts/canyonlands/mesa-arch-3.JPG"
                alt="Mesa Arch"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-0 md:border-r-0 md:border-b-0 md:border-t-2 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/canyonlands/mesa-arch-4.JPG"
                alt="Mesa Arch"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-8 font-lato text-xl tracking-wide text-justify">
            The actual arch itself is cool, but the views beyond the arch are
            spectacular. The vastness of this landscape is humbling. What we
            gazed out at had taken millions of years for water and gravity to
            carve and sculpt. It was incredible to watch how the colors changed
            as the sun came up. Not a bad way to start the day!
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:border-4 border-gray-900 md:shadow-2xl my-4">
            <div className=" border-4 md:border-l-0 md:border-r-0 md:border-b-2 md:border-t-0 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/canyonlands/mesa-arch-canyon-view.JPG"
                alt="Mesa Arch canyon view"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-b-2 md:border-l-0 md:border-t-2 md:border-r-0 border-gray-900">
              <Image
                src="/images/posts/canyonlands/bryan-shelly-mesa-arch.JPG"
                alt="Bryan and Shelly at Mesa Arch"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            <span className="italic">
              &quot;Everything the light touches is our kingdom&quot;
            </span>{" "}
            - Mufasa
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            The nice thing about waking up early is that you can avoid the
            crowds. We had a few hours to play before we had to start work, so
            we made our way through the park to Green River Overlook. We had the
            entire overlook to ourselves and it was like nothing we had ever
            seen before! The bright Green River was winding its way through the
            red and brown landscape, 1,300 feet below. There was also a great
            view of the light sandstone White Rim along the canyon edge. Many
            Lion King references were made.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl">
            <Image
              src="/images/posts/canyonlands/green-river-overlook.JPG"
              alt="Overlook of the Green River"
              height={1000}
              width={750}
              layout="responsive"
            />
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Whale Done!
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Next stop was Whale Rock, which is a butte that resembles the
            profile of a whale. Again, we had this sandstone dome all to
            ourselves. We scrambled up to the top and enjoyed 360-degree views
            of Island in the Sky.
          </p>
          <div className="border-4 border-gray-900 shadow-2xl">
            <Image
              src="/images/posts/canyonlands/whale-rock.JPG"
              alt="Whale Rock"
              height={679}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Next, we headed south and stopped at all the overlooks, ending at
            Grand View Point Overlook. There was no wind, so the views were
            crystal clear. If you look close, you can see the White Rim Road, a
            100-mile unpaved road around the canyon edge. This requires a
            permit, four-wheel drive vehicle, and multiple days. Maybe next
            time!
          </p>
          <div className="border-4 border-gray-900 shadow-2xl my-2">
            <Image
              src="/images/posts/canyonlands/grand-view-point-overlook-1.JPG"
              alt="Grand View Point Overlook"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <div className="border-4 border-gray-900 shadow-2xl">
            <Image
              src="/images/posts/canyonlands/grand-view-point-overlook-2.JPG"
              alt="Grand View Point Overlook"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
        </div>
      </article>
    </>
  );
}
