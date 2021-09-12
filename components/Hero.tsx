import React, { ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <div className="flex flex-col md:my-4 md:flex-row justify-around md:justify-center md:items-center font-josefin-sans md:h-screen md:relative">
      <img
        src="images/lumpy_thoughtful_landscape.jpg"
        alt="Lumpy looking out a window"
        className="my-4"
      />
      <div className="md:w-auto flex flex-col items-center justify-center md:p-4 md:absolute left-6 top-4">
        <h1 className="text-dark-brown text-5xl md:text-8xl">wan·der·lump</h1>
        <h2 className="text-dark-brown font-medium text-justify md:text-2xl text-md font-josefin-sans mx-2">
          Lumpy&apos;s irresistible desire to wander the world
        </h2>
      </div>
    </div>
  );
}
