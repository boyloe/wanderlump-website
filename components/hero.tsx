import React, { ReactElement } from "react";

export default function hero(): ReactElement {
  return (
    <div>
      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
      >
        {/* <!-- Overlay Background + Center Control --> */}
        <div className="h-screen bg-opacity-50 bg-lumpy-belly-cropped bg-cover bg-no-repeat flex items-center justify-center">
          <div className="mx-2 text-center font-josefin-sans">
            <h1 className="text-gray-100 font-light text-4xl xs:text-5xl md:text-6xl mb-6">
              <span>wan·der·lump</span>
            </h1>
            <h6 className="text-gray-100 font-medium text-md font-josefin-sans text-center">
              - Lumpys strong desire to wander and explore -
            </h6>
          </div>
        </div>
      </header>
    </div>
  );
}
