import React, { Fragment, ReactElement } from "react";
import Catalina from "../public/images/catalina-cat-tower-legs.png";
import Lumpy from "../public/images/lumpy-kitten-screaming.png";

export default function about(): ReactElement {
  return (
    <Fragment>
      <div className="">
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <p className="w-1/3 px-6 pt-12 text-4xl"></p>
            <img src="" className="max-w-md rounded-3xl mr-12" />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <p className="w-1/3 px-6 pt-12 text-4xl">
              Hi, my name is Bryan. I worked in oil and gas an engineer on
              drilling rigs since 2011. In Feb 2020 like so many others, I lost
              my job due to Covid. Jobs in the oilfield dried up so I made the
              decision to transition into software developement. Fast forward to
              January 2021 and I landed a job working remotely for a development
              agency based in Toledo, OH called Whitelabel Collaborative.
            </p>
            <img
              src="/images/catalina-kitten-cat-tower.jpg"
              className="max-w-md rounded-3xl mr-12"
            />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <p className="w-1/3 px-6 pt-12 text-4xl">
              This is Catalina Wine Mixer, our Tortoiseshell cat. Catalina was
              born in a puddle of gasonline in the south side of Chicago. She is
              fierce and unstoppable... Just kidding, Shelly was working as an
              intern in the north Chicago suburbs when someone brought little
              kitten Catalina into the hospital. The had found her sleeping
              outside on a car engine in the middle of October (brr...). Shelly
              decided to bring Catalina home and &quot;foster&quot; her until
              she could find a good home. 7 years later and we are still looking
              for a permanent home.
            </p>
            <img
              src="/images/catalina-kitten-cat-tower.jpg"
              className="max-w-md rounded-3xl mr-12"
            />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <img
              src="/images/lumpy-kitten-screaming.png"
              className="w-1/3 rounded-full mr-12"
            />
            <p className="w-1/3 text-4xl px-6 pt-12">
              Last but certainly not least, here is Lumpy Space Princess and the
              inspiration for the name of our voyage. Lumpy is a Siamese
              Munchkin and is the most adorable cat in the world...fight me. She
              had some health issues as a kitten so the breeder surrendered
              Lumpy to a cat rescue. The rescue brought her in to Shelly&apos;s
              hospital in Chicago because she needed surgery to repair a
              prolapsed rectum. Shelly was able to perform the surgery and
              successfully restore Lumpy&apos;s fragile b&#246;rthole. After the
              surgery, Shelly brought Lumpy home to once again
              &quot;foster&quot; her. She has been with us for 6 years now.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
