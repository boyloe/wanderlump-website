import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";
import Link from "next/link";
import Comments from "../../components/Comments";

export default function CapitolReef(): ReactElement {
  return (
    <>
      <Head>
        <title>Capitol Reef National Park</title>
        <meta property="og:title" content="Capitol Reef National Park" />
        <meta
          property="og:description"
          content="No capitol, no reef, no service..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/capitol-reef"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/capitol-reef/capitol-reef-portrait.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Capitol Reef National Park" />
      </Head>
      <div className="mx-auto max-w-3xl p-4 md:p-0">
        <title>Capitol Reef National Park</title>
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Capitol Reef National Park
          </h1>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-portrait.JPG"
              alt="Capitol Dome"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After we left{" "}
            <Link href="/posts/arches">
              <a className="text-blue-500 underline">Moab</a>
            </Link>
            , we made our way southwest. We had done all our planning for Bryce
            Canyon and were well on our way before I realized, well shit, we
            completely forgot about Capitol Reef. This national park is less
            popular than the other national parks in Utah, but we had every
            intention of visiting it. We didn’t have cell service for long
            stretches down that highway, so as soon as one little bar of
            AT&amp;T made it’s way to my phone, we pulled over and quickly found
            a few options for places to stay and adjusted our route. Highway 24
            actually traverses straight through the park and we were not
            prepared for how much different the geography was here than in Moab!
            There were massive white domes that we slowly wound our way through.
            Poor Bryan was doing his best to keep us safely on the road, while
            the wind was doing its darndest to push us off. We managed to snatch
            an incredible site at a dispersed campsite just outside of the park
            and Bryan could finally release his death grip from the steering
            wheel.{" "}
          </p>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Our Home
          </h1>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Our home outside Capitol Reef was such a cool site. We were tucked
            in between giant red rocks, so even though there were some other
            travelers there, we felt like we were completely isolated. We
            managed to get set up just in time for sunset and the views were
            incredible. Our site ended up being even more functional than we
            originally realized, with Bryan using one of the rocks as a table
            for the grill. I also did some laundry and used the rocks to anchor
            one end of our clothesline.
          </p>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2">
            <div className=" border-4 my-2 md:my-0 md:border-r-2 md:border-b-2 border-gray-900">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-wanderlump-trailer.JPG"
                alt="Frozen Zapata Falls"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-2 md:border-b-2 border-gray-900 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-bryan-rock-grilling.JPG"
                alt="Bryan Grilling on a rock"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-t-2 md:border-r-2 border-gray-900 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-clothesline.JPG"
                alt="Frozen Zapata Falls"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-2 md:border-t-2 border-gray-900 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/beas-camp-pano.JPG"
                alt="Bryan standing in a river"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Where does the name Capitol Reef come from?
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            When you hear the word reef, you probably think of the ocean, not
            the Utah desert. The park’s name actually comes from the large white
            Navajo Sandstone domes which travelers thought resembled the Capitol
            building in Washington, DC. Travelers also associated the steep
            rocky cliffs with ocean reefs, which created obstacles to navigate.
            This region’s geographical formations certainly made traveling a
            challenge. So there you have it - Capitol Reef.
          </p>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Hickman Bridge Trailhead
          </h1>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-black-rocks.JPG"
              alt="Black boulders"
              height="600"
              width="800"
              layout="responsive"
            />
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            On our first morning in Torrey, UT, we woke up before sunrise and
            headed to Hickman Bridge Trail. The trail starts along the Fremont
            River and has a view of the park&apos;s namesake - Capitol Dome. The
            hike offered amazing views of the massive domes, but only a short
            distance into the hike, we encountered black boulders that seemed
            starkly out of place. It almost seemed like someone had come and
            strategically placed these dark rocks along the contrasting oranges,
            reds, whites, and browns as a prank, however, they continued all the
            way to the end of the trail. It turns out these are volcanic rocks,
            called basalt boulders, that migrated to this area after the
            glaciers atop mountains to the west of the park melted.
          </p>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            At the top of the trail, we were rewarded with a view of Hickman
            Natural Bridge, which is 125 feet high and 133 feet long. In the
            rock formations behind the bridge, we caught a view of tafoni. This
            is a type of weathering that occurs on vertical surfaces and results
            in a honeycomb appearance.
          </p>
          <div className="grid grid-col-1 gap-y-4">
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-hickman-arch.JPG"
                alt="Black boulders"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-tafoni.JPG"
                alt="Tafoni"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center my-6">
            All national parks should taste this good
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After our hike, we headed over to the Gifford House to treat
            ourselves to some delicious fresh baked goods. The few residents in
            the town of Fruita helped plant the fruit orchards along the Fremont
            River and Sulphur Creek in the 1880s and they are still flourishing
            in the park today. There are 1,900 fruit and nut trees that you are
            allowed to harvest from, depending on the season. The Gifford House
            is the only homestead that remains in the town of Fruita and was
            sold to the National Park Service in 1969 by the last resident in
            Fruita, Dewey Gifford. It is now used to sell delicious fruit pies,
            jams, and other assorted items. All the reviews we read said to
            arrive early, because they sell out fast! It was only 7:30 am when
            we finished our hike and there was already a line when we got there.
            When it was our turn to order, all the choices looked so good, but
            we narrowed it down to a giant cinnamon roll, mixed berry pie, and
            apple pie. They were all delicious and we enjoyed snacking on them
            the rest of the week.
          </p>
          <div className="border-4 border-gray-900 grid grid-cols-2">
            <div className=" border-r-2 border-gray-900">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-mixed-berry-pie.JPG"
                alt="Mixed Berry Pie"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-l-2 border-gray-900">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-cinnamon-roll.JPG"
                alt="Giffords cinnamon roll"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl my-6 font-lato font-black tracking-wide text-center">
            Fruita Schoolhouse
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            The other remaining building in Fruita is the one room schoolhouse.
            It was built in 1896 and served as a community center, Sunday
            school, and classroom. They utilized it as a schoolhouse for grades
            1st through 8th from May through October, when the students
            didn&apos;t have to help on their family farms. Outside the
            schoolhouse is a sign explaining the history of the school, as well
            as a recording from the class of 1934&apos;s teacher, Janice Oldroyd
            Torgerson. She discusses the hardships of living in such a remote
            town, the pranks the children would play on her, and her salary, a
            whopping $57 per month! Eventually most of the residents moved out
            of Fruita, so the schoolhouse was closed in 1941.
          </p>
          <div className="border-4 border-gray-900 my-6">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-schoolhouse-close.JPG"
              alt="Mixed Berry Pie"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <h1 className="text-3xl my-6 font-lato font-black tracking-wide text-center">
            Sunsets
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            That evening we decided to watch the sunset from Panorama Point and
            Goosenecks Point. It was a quick hike up from the trail head and
            there were amazing views in every direction. We sat near the edge,
            looked down at the 400-foot canyon, and enjoyed some delicious Utah
            beer while watching the sun sink below. If you stay until the sun is
            completely set, you are in for a treat. Capitol Reef is a designated
            International Dark Sky Park, meaning there is no light pollution, so
            the view of the stars is incredible.
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="border-4 md:border-b-2 border-gray-900 md:col-span-2 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-bryan-shelly-beer.JPG"
                alt="Bryan and Shelly"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-r-2 md:border-t-2 border-gray-900 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-sunset-1.JPG"
                alt="Capitol Reef park at sunset"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className=" border-4 md:border-l-2 md:border-t-2 border-gray-900 my-2 md:my-0">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-sunset-2.JPG"
                alt="Capitol Reef park at sunset"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl my-6 font-lato font-black tracking-wide text-center">
            Cassidy Arch Trail
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            The next day, we hiked Cassidy Arch Trail. It is named for Butch
            Cassidy, who was rumored to have used one of the caves along this
            trail to hide. I’m going to be honest; this was not our finest
            moment. We ended up walking for quite some time along an incredible
            trail, with huge mesas and white domes towering over our narrow
            path. However, we absolutely missed the trailhead for Cassidy Arch
            and by the time we turned around and found it, sunset wasn’t too far
            away. I was 99% certain we were going to become a mountain lion
            snack, but somehow I convinced Bryan to run up and down this 3 mile,
            very steep trail, to see the arch at the top. Spoiler alert – we
            made it to the top to see Cassidy Arch and we didn’t break our
            ankles running down in the semi-dark and most importantly, I didn’t
            have to figure out what to do if we encountered a mountain lion. We
            won’t be doing that again, but I would highly recommend doing that
            hike when you have adequate time, as well as the trail we got lost
            on.
          </p>
          <div className="grid md:grid-cols-2">
            <div className="border-4 my-2 md:my-0 border-gray-900 md:border-r-2 md:border-b-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-narrow-path.JPG"
                alt="Twin mesas in Capitol Reef national park"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="my-2 md:my-0 border-gray-900 border-4 md:border-l-2 md:border-b-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-bryan-walking.JPG"
                alt="Twin mesas in Capitol Reef national park"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-4 my-2 md:my-0 border-gray-900 md:border-t-2 md:border-b-2 md:col-span-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-twin-mesas.JPG"
                alt="Twin mesas in Capitol Reef national park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900 md:border-t-2 md:col-span-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-cassidy-arch-1019.JPG"
                alt="Twin mesas in Capitol Reef national park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-3xl my-6 font-lato font-black tracking-wide text-center">
            Chimney Rock Loop Trail
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            After surviving leg day and getting horribly lost, we hiked Chimney
            Rock Loop Trail. This trail was no joke, with an incredibly steep
            first ¼ mile going up switchbacks. After making it close to the top,
            we could view Chimney Rock, a spire 300 feet above the trailhead.
            Gazing out at the chimney shaped rock, we felt fairly confident that
            today we were on the correct trail.
          </p>
          <div className="grid md:grid-cols-2 md:gap-y-4">
            <div className="my-2 md:my-0 border-gray-900 border-4 md:col-span-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-chimney-rock.JPG"
                alt="Chimney Rock in Capitol Reef National Park"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-4 my-2 md:my-0 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-chimney-rock-pano.JPG"
                alt="Twin mesas in Capitol Reef national park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            It started drizzling at the top, which we happily welcomed, because
            we were hot and out of breath. The rest of the trail slowly
            meandered down and back to the trailhead and we were treated to
            amazing views of the park all along the way.
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-bryan-shelly-1066.JPG"
              alt="Bryan and Shelly in Capitol Reef park"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <h1 className="text-3xl my-6 font-lato font-black tracking-wide text-center">
            Waterfalls in Utah?
          </h1>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            We were heading out the next day to get a spot in the forest outside
            Bryce Canyon before busy Memorial Day traffic arrived, so we wanted
            to get one more hike in before sunset. We found a trail off the
            beaten path on AllTrails with multiple waterfalls along the creek.
            The trailhead was unmarked and behind the visitor center, but our
            trusty app assured us we were going the correct way. We had this
            secret creek all to ourselves, walking along it, hopping from rock
            to rock, and at some points, just having to walk through it. The
            trail ended at a rushing waterfall. I once again convinced Bryan
            that we should go further. We made our way through almost waste deep
            water, being very grateful for our long legs, and that more of our
            bodies weren’t submerged in the brisk water. When we were far enough
            out, it got shallow again, and we stood and watched the water
            crashing down into the creek. It was a peaceful moment that we were
            happy to enjoy, just the two of us.
          </p>
          <div className="grid md:grid-cols-2">
            <div className="my-2 md:my-0 border-gray-900 border-4 md:border-r-2 md:border-b-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-bryan-creek-1080.JPG"
                alt="Bryan standing in Sulphur Creek"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-4 my-2 md:my-0 border-gray-900 md:border-l-2 md:border-b-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-creek-1077.JPG"
                alt="Sulphur Creek and waterfall in Capitol Reef National Park"
                height={800}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-4 my-2 md:my-0 border-gray-900 md:border-t-2 md:col-span-2">
              <Image
                src="/images/posts/capitol-reef/capitol-reef-waterfall-1079.JPG"
                alt="Waterfall on Sulphur Creek in Capitol Reef National Park"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-6 font-lato text-xl tracking-wide text-justify">
            Although this park has less visitors, it is not lacking any of the
            beauty of the other parks. It is only lacking the long entrance
            lines and crowds. Capitol Reef, you truly are a gem, and I’m so
            sorry we almost forgot about you! We will be back!
          </p>
        </article>
        <PrevNext
          previousPostHref="/posts/arches"
          nextPostHref="/posts/bryce-canyon"
        />
        <Comments
          url="posts/capitol-reef"
          identifier="capitol-reef-comments"
          title="Capitol Reef National Park"
        />
      </div>
    </>
  );
}
