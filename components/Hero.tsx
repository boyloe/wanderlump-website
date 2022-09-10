import React, { ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <div className="flex flex-col md:mt-4 md:mb-72 md:flex-row justify-around md:justify-center md:items-center font-josefin-sans md:w-full md:max-h-screen md:relative">
      <img
        src="images/lumpy_thoughtful_landscape_scaled.jpeg"
        alt="Lumpy looking out a window"
        className="p-4 md:p-0"
      />
      <div className="mt-4 md:w-auto flex flex-col items-center justify-center md:p-4 md:absolute left-8 top-24">
        <h1 className="text-dark-brown text-5xl md:text-8xl">wan·der·lump</h1>
        <h2 className="text-dark-brown font-medium text-center md:text-2xl text-2xl font-josefin-sans mx-2">
          Lumpy&apos;s irresistible desire to wander the world
        </h2>
      </div>
    </div>
  );
}
