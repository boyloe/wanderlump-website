import React, { ReactElement } from "react";

interface Props {
  image: string;
}

export default function Hero({ image }: Props): ReactElement {
  return (
    <div>
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
      >
        <div className="p-4">
          <div className="font-medium tracking-widest text-xl font-josefin-sans">
            <a
              href="#"
              className="transition duration-500 hover:text-indigo-500"
            >
              wanderlump
            </a>
          </div>
        </div>

        {/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
        <div className="p-4 hidden md:flex flex-row justify-between font-bold">
          <a
            id="hide-after-click"
            href="#about"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            our travels
          </a>
          <a
            href="#whyus"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            about
          </a>
          <a
            href="#showcase"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            wanderlump gear
          </a>
        </div>

        {/* <!-- Burger Nav Button on Mobile --> */}
        <div id="nav-open" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>

      {/* <!-- Opened Nav in Mobile --> */}
      <div
        id="nav-opened"
        className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
      >
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
            our travels
          </a>
          <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">
            about
          </a>
          <a
            href="#showcase"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            wanderlump gear
          </a>
        </div>
      </div>

      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
      >
        {/* <!-- Overlay Background + Center Control --> */}
        <div className="h-screen bg-opacity-50 flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">All who wander</span>
            </h1>
            <h2 className="text-gray-100 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
              are not Lump
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
}
