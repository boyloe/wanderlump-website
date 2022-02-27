import React, { ReactElement } from "react";
import Image from "next/image";
import PrevNext from "../../components/PrevNext";
import Link from "next/link";

export default function CapitolReef(): ReactElement {
  return (
    <div className="mx-auto max-w-3xl p-4 md:p-0">
      <title>Capitol Reef National Park</title>
      <article>
        <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
          Capitol Reef National Park
        </h1>
        <div className="border-4 border-gray-900 shadow-2xl">
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
          stretches down that highway, so as soon as one little bar of AT&amp;T
          made it’s way to my phone, we pulled over and quickly found a few
          options for places to stay and adjusted our route. Highway 24 actually
          traverses straight through the park and we were not prepared for how
          much different the geography was here than in Moab! There were massive
          white domes that we slowly wound our way through. Poor Bryan was doing
          his best to keep us safely on the road, while the wind was doing its
          darndest to push us off. We managed to snatch an incredible site at a
          dispersed campsite just outside of the park and Bryan could finally
          release his death grip from the steering wheel.{" "}
        </p>
        <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
          Our Home
        </h1>
        <p className="my-4 font-lato text-xl tracking-wide text-justify">
          Our home outside Capitol Reef was such a cool site. We were tucked in
          between giant red rocks, so even though there were some other
          travelers there, we felt like we were completely isolated. We managed
          to get set up just in time for sunset and the views were incredible.
          Our site ended up being even more functional than we originally
          realized, with Bryan using one of the rocks as a table for the grill.
          I also did some laundry and used the rocks to anchor one end of our
          clothesline.
        </p>
        <div className="border-4  border-gray-900 shadow-2xl my-6 grid grid-cols-2">
          <div className=" border-r-2 border-b-2 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-wanderlump-trailer.JPG"
              alt="Frozen Zapata Falls"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <div className=" border-l-2 border-b-2 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-bryan-rock-grilling.JPG"
              alt="Bryan Grilling on a rock"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <div className=" border-t-2 border-r-2 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-clothesline.JPG"
              alt="Frozen Zapata Falls"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <div className=" border-l-2 border-t-2 border-gray-900">
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
          When you hear the word reef, you probably think of the ocean, not the
          Utah desert. The park’s name actually comes from the large white
          Navajo Sandstone domes which travelers thought resembled the Capitol
          building in Washington, DC. Travelers also associated the steep rocky
          cliffs with ocean reefs, which created obstacles to navigate. This
          region’s geographical formations certainly made traveling a challenge.
          So there you have it - Capitol Reef.
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
          called basalt boulders, that migrated to this area after the glaciers
          atop mountains to the west of the park melted.
        </p>
        <div className="border-4 border-gray-900">
          <div className="border-b-2 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-hickman-arch.JPG"
              alt="Black boulders"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <div className="border-t-2 border-gray-900">
            <Image
              src="/images/posts/capitol-reef/capitol-reef-tafoni.JPG"
              alt="Tafoni"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
