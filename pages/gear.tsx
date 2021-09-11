import React, { ReactElement } from "react";

export default function gear(): ReactElement {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 font-josefin-sans">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              wanderlump gear
            </h2>
            <h3 className="text-xl md:text-2xl mt-10">Coming Soon...</h3>
            <p className="text-xl md:text-2xl my-8">
              Lumpy is working her peepaws to the bone to bring you wanderlump
              merchandise.
            </p>
            <a
              href="/posts"
              className="text-2xl underline text-blue-700 hover:text-blue-800"
            >
              Check out her travels while you wait.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
