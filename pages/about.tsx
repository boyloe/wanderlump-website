import React, { Fragment, ReactElement } from "react";

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
            <p className="w-1/3 px-6 pt-12 text-4xl"></p>
            <img
              src="/images/catalina-kitten-cat-tower.jpg"
              className="max-w-md rounded-3xl mr-12"
            />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <p className="w-1/3 px-6 pt-12 text-2xl font-lato">
              Catalina Wine Mixer is affectionately named after the epic movie
              &quot;Step Brothers&quot;. She is a seven year old Tortoiseshell
              and she absolutely lives up to her breed - she is the spiciest
              meatball! Some women found her as a kitten on their car engine
              right before Halloween and brought her in to where Shelly was
              working in Chicago. She was the cutest kitten with markings on her
              face like a racoon ninja. We had been talking about getting a
              kitten for a few months, so Shelly &quot;fostered&quot; her until
              Bryan got back from his work trip. He fell in love with her at
              first sight. Catalina likes doing karate in the garage, her
              favorite dinosaur is a velociraptor, and her meow is like a
              combination of Fergie and Jesus.
            </p>
            <img
              src="/images/catalina-kitten-cat-tower.jpg"
              className="max-w-md mr-12"
            />
          </div>
        </div>
        <div className="flex flex-row py-24">
          <div className="flex flex-row justify-evenly items-center font-barlow-condensed">
            <img
              src="/images/lumpy-kitten-screaming.png"
              className="w-1/3  mr-12"
            />
            <p className="w-1/3 text-2xl px-6 pt-12 font-lato">
              Lumpy Space Princess is a six year old Siamese Munchkin and she is
              named after the lovable, overly dramatic purple blob on
              &quot;Adventure Time&quot;. Her first few months of life were
              pretty rough. She had a prolapsed rectum that was repaired twice
              and both surgeries failed. Somehow, Shelly volunteered to
              &quot;foster&quot; this little fluffy cotton ball that was poo
              stamping all over the place. She did surgery to repair it and
              apparently, third time&apos;s a charm. Lumpy now has the cutest
              b&#246;rthole this side of the Mississippi and loves putting it in
              your face. Lumpy would kill someone for a piece of cheddar, she
              absolutely loves burying and chasing crinkle balls al over the
              house, and she protects us from any bug who dares to make their
              way into our travel trailer. This ridiculous, genetically
              challenged cat is the cutest cat in the world and inspired us to
              build wanderlump!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
