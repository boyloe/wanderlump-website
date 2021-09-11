import React, { Fragment, ReactElement } from "react";
import Image from "next/image";

export default function about(): ReactElement {
  return (
    <Fragment>
      <div className="mt-6">
        <div>
          <h1 className="text-3xl text-center my-8 font-bold">
            all about{" "}
            <span className="text-4xl font-josefin-sans">wanderlump</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="p-4 m-4 bg-gray-900 inset-10 shadow-2xl">
            <Image
              src="/images/DH-Bryan-Shelly.jpg"
              alt="Bryan and Shelly at Dead Horse Point, South Dakota"
              height={400}
              width={500}
            />
          </div>
          <div className="w-screen md:w-1/2 text-lg md:text-2xl px-6 pt-12 font-lato">
            <p>
              Welcome to wanderlump! We are Bryan and Shelly and we are excited
              to share our adventure with you. We decided to take our lives, our
              jobs, and our two cats on the road and become full-time travelers.
            </p>
            <br />
            <p>
              Shelly was already working remotely and Bryan got a fully remote
              position in February 2021. Just before Bryan got his job, our
              apartment complex gave us renewal papers and the rent went up
              significantly. We were already spending a small fortune on our one
              bed/one bath apartment outside of Denver. We took a step back and
              looked at our lives. Being apartment poor was not what we wanted
              anymore. After many calls with family and friends to make sure we
              weren&apos;t just acting COVID crazy, endless research and Excel
              spreadsheets, and getting permission from both cats, we officially
              moved out of our apartment in April and became full-time
              travelers.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:py-24">
          <div className="flex flex-col-reverse justify-evenly items-center md:flex-row">
            <p className="px-4 py- md:px-6 md:w-1/2  text-lg md:text-2xl text-justify font-lato">
              <span className="font-semibold">Catalina Wine Mixer</span> is
              affectionately named after the epic movie{" "}
              <span className="italic">Step Brothers</span>. She is a seven year
              old Tortoiseshell and she absolutely lives up to her breed - she
              is the spiciest meatball! Some women found her as a kitten on
              their car engine right before Halloween and brought her in to
              where Shelly was working in Chicago. She was the cutest kitten
              with markings on her face like a racoon ninja. We had been talking
              about getting a kitten for a few months, so Shelly
              &quot;fostered&quot; her until Bryan got back from his work trip.
              He fell in love with her at first sight. Catalina likes doing
              karate in the garage, her favorite dinosaur is a velociraptor, and
              her meow is like a combination of Fergie and Jesus.
            </p>
            <div className="p-4 m-4 bg-gray-900 inset-10 shadow-2xl">
              <Image
                src="/images/catalina-kitten-cat-tower.jpg"
                alt="Catalina in her tower"
                height={500}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:py-24 mt-8">
          <div className="flex flex-col justify-evenly items-center md:flex-row ">
            <div className="p-4 m-4 bg-gray-900 inset-10 shadow-2xl">
              <Image
                src="/images/lumpy-kitten-screaming.png"
                alt="Lumpy as a kitten, screaming"
                height={300}
                width={400}
              />
            </div>
            <p className="px-4 py-12 md:px-6 md:w-1/2 text-lg md:text-2xl text-justify font-lato">
              <span className="font-semibold">Lumpy Space Princess</span> is a
              six year old Siamese Munchkin and she is named after the lovable,
              overly dramatic purple blob on{" "}
              <span className="italic">Adventure Time</span>. Her first few
              months of life were pretty rough. She had a prolapsed rectum that
              was repaired twice and both surgeries failed. Somehow, Shelly
              volunteered to &quot;foster&quot; this little fluffy cotton ball
              that was poo stamping all over the place. She did surgery to
              repair it and apparently, third time&apos;s a charm. Lumpy now has
              the cutest b&#246;rthole this side of the Mississippi and loves
              putting it in your face. Lumpy would kill someone for a piece of
              cheddar, she absolutely loves burying and chasing crinkle balls
              all over the house, and she protects us from any bug who dares to
              make their way into our travel trailer. This absolutely
              ridiculous, genetically challenged cat is the cutest cat in the
              world and inspired us to build wanderlump!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
