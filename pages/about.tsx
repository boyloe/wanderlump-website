import React, { Fragment, ReactElement } from "react";
import Catalina from "../public/images/catalina-cat-tower-legs.png";
import Lumpy from "../public/images/lumpy-kitten-screaming.png";

export default function about(): ReactElement {
  return (
    <Fragment>
      <header>
        Who are <span className="font-josefin-sans">wanderlump</span>
      </header>
      <div className="">
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center">
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              This is Catalina Wine Mixer, our Tortoiseshell cat. Catalina was
              born in a puddle of gasonline in the south side of Chicago. She is
              fierce and unstoppable... Just kidding, Shelly was working as an
              intern for Blue Pearl Veterinary Partners in the north Chicago
              suburbs when someone brought little kitten Catalina into the
              hospital. The had found her sleeping outside on a car engine in
              the middle of October (brr...). Shelly decided to bring Catalina
              home and &quot;foster&quot; her until she could find a good home.
              7 years later and we are still looking for a permanent home.
            </p>
            <img src={Catalina} className="max-w-md rounded-full mr-12" />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center">
            <img src={Catalina} className="max-w-md rounded-full mr-12" />
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              This is Catalina Wine Mixer, our Tortoiseshell cat. Catalina was
              born in a puddle of gasonline in the south side of Chicago. She is
              fierce and unstoppable... Just kidding, Shelly was working as an
              intern for Blue Pearl Veterinary Partners in the north Chicago
              suburbs when someone brought little kitten Catalina into the
              hospital. The had found her sleeping outside on a car engine in
              the middle of October (brr...). Shelly decided to bring Catalina
              home and &quot;foster&quot; her until she could find a good home.
              7 years later and we are still looking for a permanent home.
            </p>
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center">
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              This is Catalina Wine Mixer, our Tortoiseshell cat. Catalina was
              born in a puddle of gasonline in the south side of Chicago. She is
              fierce and unstoppable... Just kidding, Shelly was working as an
              intern for Blue Pearl Veterinary Partners in the north Chicago
              suburbs when someone brought little kitten Catalina into the
              hospital. The had found her sleeping outside on a car engine in
              the middle of October (brr...). Shelly decided to bring Catalina
              home and &quot;foster&quot; her until she could find a good home.
              7 years later and we are still looking for a permanent home.
            </p>
            <img src={Catalina} className="max-w-md rounded-full mr-12" />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-center">
            <img
              src={Lumpy}
              className="w-1/3 rounded-full flex items-center justify-center mr-12"
            />
            <p className="w-1/3 text-2xl px-6 pt-12 font-josefin-sans">
              Last but certainly not least, here is Lumpy Space Princess and the
              inspiration for the name of our voyage. Lumpy is a Siamese
              Munchkin cat that was born to a breeder. She had some health
              issues as a cat and the breeder was going to just put her down,
              however she thankfully reconsidered and gave Lumpy to a cat
              rescue. The rescue brought her in to Shelly&apos;s hospital in
              Chicago because she needed surgery to repair a prolapsed rectum.
              Shelly was able to perform the surgery successfully and restore
              Lumpy&apos;s fragile B-hole. After the surgery, Shelly brought
              Lumpy home to once again &quot;foster&quot; her. She has been with
              us for 6 years now.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
