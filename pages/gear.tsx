import React, { ReactElement } from "react";

export default function gear(): ReactElement {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              wanderlump gear
            </h2>
            <h3 className="text-xl md:text-4xl mt-10">Coming Soon...</h3>
            <p className="text-md md:text-3xl mt-10 mb-4">
              Lumpy is working her peepaws to the bone to bring you wanderlump
              merchandise.
            </p>
            <a
              href="/posts"
              className="text-3xl underline text-blue-700 hover:text-blue-800"
            >
              Check out her travels while you wait.
            </a>
          </div>
          {/* <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-3">
              <a
                href="https://twitter.com/wanderlump"
                title="Quicktoolz On Twitter"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Twitter</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
