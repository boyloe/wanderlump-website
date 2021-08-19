import React, { ReactElement } from "react";
import LandscapeLumpy from "../public/images/lumpy_thoughtful_landscape.jpg";

export default function Hero(): ReactElement {
  return (
    <div className="flex flex-col mb:4 md:mb-0 md:flex-row justify-center items-center font-josefin-sans">
      <img
        src={LandscapeLumpy}
        alt="Lumpy looking out a window"
        className="w-auto md:w-1/2"
      />
      <div className="w-auto md:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-black text-5xl md:text-6xl">wan·der·lump</h1>
        <h2 className="text-gray-900 font-medium text-md font-josefin-sans">
          - Lumpys strong desire to wander and explore -
        </h2>
      </div>
    </div>
  );
}
