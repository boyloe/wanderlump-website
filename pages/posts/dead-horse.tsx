import React, { ReactElement } from "react";
import Image from "next/image";
import Head from "next/head";
import PrevNext from "../../components/PrevNext";
import Comments from "../../components/Comments";

export default function deadhorse(): ReactElement {
  return (
    <>
      <Head>
        <title>Dead Horse Point State Park</title>
        <meta property="og:title" content="Dead Horse Point State Park" />
        <meta
          property="og:description"
          content="Definitely not PETA approved"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wanderlump.com/posts/dead-horse"
        />
        <meta
          property="og:image"
          content="https://www.wanderlump.com/images/posts/dead-horse/dead-horse-point.JPG"
        />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Dead Horse Point State Park" />
      </Head>

      <div className="mx-auto max-w-3xl p-4 md:p-0">
        <article>
          <h1 className="text-3xl mb-4 font-lato font-black tracking-wide text-center">
            Moab, UT - Dead Horse State Park
          </h1>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/dead-horse/dead-horse-point.JPG"
              alt="Canyon wall with multicolored striations"
              height={600}
              width={800}
              layout="responsive"
            />
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Definitely not PETA approved
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Dead Horse Point State Park is adjacent to Canyonlands and offers
            the same incredible views of canyons, mesas, and buttes. However,
            you might be thinking the same thing as me – what are we about to
            get into? Are we entering a horse graveyard? Are there horse
            skeletons all along this hike? Surely, someone on AllTrails would
            have mentioned that in their review!
          </p>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            <span className="font-black">SPOILER ALERT:</span> no, there are not
            dead horses everywhere, but the legend of this park is actually
            quite dark. Similar to Island in the Sky, Dead Horse Point rests
            upon sandstone cliffs. The point is a peninsula connected to a large
            mesa via a narrow strip of land referred to as the neck. It is
            believed that cowboys used the point as a natural corral for wild
            mustangs in the 19th century. The neck is only 30-yards wide, so
            they fenced off access to the mesa with branches. The cowboys
            selected the horses they wanted to use and left the remaining horses
            stranded on the point without any food or water, where they
            eventually died.
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/dead-horse/dead-horse-point-map.JPG"
              alt="Map of Dead Horse Point State Park"
              height={739}
              width={800}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            We went into the park for an evening hike and to watch the sunset.
            Dead Horse Rim Loop is a five-mile loop with stunning views. We kept
            thinking it couldn’t possibly get any better and then we would walk
            100 yards and it was better. One of the best views was of Goose Neck
            surrounded by the Colorado River. We watched the colors of the rocks
            change as the sun dipped down below the mesas.
          </p>
          <div className="md:border-4 border-gray-900 md:shadow-2xl mb-8 grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
            <div className="border-4 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-2 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/dead-horse/dead-horse-point-long-view.JPG"
                alt="Canyon wall with multicolored striations"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-r-0 md:border-t-2 md:border-l-0 md:border-b-0 border-gray-900 md:col-span-2">
              <Image
                src="/images/posts/dead-horse/dead-horse-point-rock-layers.JPG"
                alt="Lumpy Space Princess sleeping in the backseat"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide">
            Watch where you step. The dirt is alive!
          </h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            There is only 9-10 inches of rainfall per year in Moab, making it
            hard to believe anything can survive. We didn’t see much wildlife
            other than a deer and some birds, which isn’t unusual, because many
            of Moab’s animals are nocturnal.
          </p>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            The plants have also adapted to survive in drought conditions. Some
            can go dormant until enough water is available. Others have waxy
            coatings or spines to minimize moisture loss. Regardless of their
            adaptations, they all look like something out of a Tim Burton movie
            set, most notably the Utah juniper tree. Junipers can control the
            flow of water, so when it is especially dry, they will stop water
            flow to outer branches, leaving a living tree with gnarly dead
            branches.
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2">
            <div className="border-4 md:border-r-2 md:border-l-4 md:border-b-4 md:border-t-4 border-gray-900 md:col-span-1 md:row-span-2">
              <Image
                src="/images/posts/dead-horse/shelly-with-tree-dead-horse-point.JPG"
                alt="Lumpy Space Princess sleeping in the backseat"
                height={916}
                width={600}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-r-4 md:border-l-2 md-border-r-4 md:border-b-2 border-gray-900">
              <Image
                src="/images/posts/dead-horse/cactus.JPG"
                alt="Canyon wall with multicolored striations"
                height={608}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 border-gray-900 md:border-l-2 md:border-r-4 md-border-t-2 md:border-b-4">
              <Image
                src="/images/posts/dead-horse/bryan-with-tree-dead-horse-point.JPG"
                alt="Lumpy Space Princess sleeping in the backseat"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Now if you thought the plant’s evolutionary features were cool, wait
            until you hear about the soil! Seriously, sit down. It’s about to
            get crazy! Much of the soil in Canyonlands, Dead Horse Point, and
            Arches is bumpy and blackened, rather than red/brown and smooth.
            This is biological soil crust. Cyanobacteria, which you might know
            as blue-green algae, lives in the soil, migrates through the soil,
            and leaves behind sticky fibers, causing the soil to clump together
            and create a thick crust.
          </p>
          <div className="border-4 border-gray-900">
            <Image
              src="/images/posts/dead-horse/lumpy-space-princess-hiding.JPG"
              alt="Lumpy Space Princess hiding in the pillows"
              height={800}
              width={600}
              layout="responsive"
            />
          </div>
          <p className="my-4 font-lato text-xl tracking-wide text-justify">
            Much to Lumpy’s dismay, we experienced crazy windstorms every night.
            She has now found every possible hiding spot in the travel trailer.
            She also now understands why all of the soil hasn’t blown away with
            every gust of wind Moab experiences. These biological soil crusts
            are resistant to erosion. After time, lichen, moss, and other
            organisms grow on the crusts, absorb and store water, and provide
            nutrition and nest material to animals. If you decide to hike in
            this area, make sure you stay on the marked paths, because some of
            the crusts are thousands of years old and the plants and animals
            rely on these crusts to survive.
          </p>
          <div className="border-4 border-gray-900 my-8">
            <Image
              src="/images/posts/dead-horse/biological_soil_crust.JPG"
              alt="Biological soil crust"
              height={636}
              width={960}
              layout="responsive"
            />
          </div>
        </article>
        <PrevNext
          previousPostHref="/posts/canyonlands"
          nextPostHref="/posts/arches"
        />
        <Comments
          url="posts/dead-horse"
          identifier="dead-horse-comments"
          title="Dead Horse State Park"
        />
      </div>
    </>
  );
}
