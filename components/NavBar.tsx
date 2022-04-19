import React, { ReactElement, useState } from "react";

export default function NavBar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("clicked");
    console.log(isMenuOpen);
  };
  return (
    <div className="mb-16">
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-black bg-white"
      >
        <div className="p-4">
          <div className="font-medium tracking-widest text-2xl font-josefin-sans">
            <a
              href="/"
              className="transition duration-500 hover:text-indigo-500"
            >
              wanderlump
            </a>
          </div>
        </div>

        {/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
        <div className="p-4 hidden md:flex flex-row justify-between font-medium font-josefin-sans">
          <a
            id="hide-after-click"
            href="/"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            home
          </a>
          <a
            href="/about"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            about
          </a>
          <a
            id="hide-after-click"
            href="/posts"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            our travels
          </a>
          <a
            href="/gear"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            wanderlump gear
          </a>
        </div>

        {/* <!-- Burger Nav Button on Mobile --> */}
        <div id="nav-open" className="p-4 md:hidden" onClick={toggleMenu}>
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
        className={`fixed left-0 right-0 ${
          isMenuOpen ? " " : "hidden"
        } md:hidden bg-gray-100 mx-2 mt-2 rounded shadow-2xl z-10`}
      >
        <div className="p-2 divide-y divide-gray-400 flex flex-col">
          <a href="/" className="p-2 font-semibold hover:text-indigo-700">
            home
          </a>
          <a href="/about" className="p-2 font-semibold hover:text-indigo-700">
            about
          </a>
          <a href="/posts" className="p-2 font-semibold hover:text-indigo-700">
            our travels
          </a>
          <a href="/gear" className="p-2 font-semibold hover:text-indigo-700">
            wanderlump gear
          </a>
        </div>
      </div>
    </div>
  );
}
