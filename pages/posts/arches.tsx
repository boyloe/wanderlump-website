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
          <h2 className="mt-10 mb-4 text-2xl font-lato font-black text-center tracking-wide"></h2>
          <p className="my-4 font-lato text-xl tracking-wide text-justify"></p>
          <div className="md:border-4 border-gray-900 shadow-2xl mb-8 grid grid-cols-1 md:grid-cols-3">
            <div className="border-4 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-2 border-gray-900 md:col-span-3">
              <Image
                src="/images/posts/arches/"
                alt="Canyon wall with multicolored striations"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-r-2 md:border-t-2 md:border-l-0 md:border-b-0 border-gray-900 col-span-2">
              <Image
                src="/images/posts/arches"
                alt="Lumpy Space Princess sleeping in the backseat"
                height={600}
                width={800}
                layout="responsive"
              />
            </div>
            <div className="border-4 md:border-l-2 md:border-t-2 md:border-r-0 md:border-b-0 border-gray-900">
              <Image
                src="/images/posts/arches/"
                alt="Catalina Wine Mixer sleeping in her carrier"
                height={1202}
                width={800}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </article>
      <PrevNext previousPostHref="/posts/dead-horse" nextPostHref="" />
    </>
  );
}
