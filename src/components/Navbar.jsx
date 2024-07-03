  import React, { useState } from "react";

  function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <nav className="sticky w-full top-0 bg-black md:p-4 z-20 start-0"> 
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center rtl:space-x-reverse text-white">
            
              <span className="md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                AR
              </span>
              <span className="md:text-5xl text-2xl font-semibold tracking-wide whitespace-nowrap text-[#FF6014]">
                O
              </span>
              <span className="md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                RA
              </span>
            </a>
            <div className="hidden md:flex md:space-x-8 rtl:space-x-reverse">
              <ul className="flex text-white text-sm md:gap-4">
                <li>
                  <a
                    href="/"
                    className="px-3 py-2 transition-all duration-300 ease-in-out hover:text-orange-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 transition-all duration-300 ease-in-out hover:text-orange-600"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="px-3 py-2 transition-all duration-300 ease-in-out hover:text-orange-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 transition-all duration-300 ease-in-out hover:text-orange-600"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 bg-[#FF6014] rounded-md text-black transition-all duration-300 ease-in-out hover:text-white"
                  >
                    Connect
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 hover:text-orange-600 focus:outline-none"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            {/* Drawer-like menu */}
            <div
              className={`fixed top-0 right-0 w-1/2 md:w-auto h-full bg-[#121212] text-white shadow-xl transform transition-transform ease-in-out duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden`}
            >
              <div className="flex items-center justify-between p-4">
                <a href="/" className="text-xl font-semibold text-gray-800">
                  
                </a>
                <button
                  type="button"
                  className="text-gray-600 md:hidden"
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col justify-center gap-4 items-center h-screen p-4">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-4 rounded hover:text-orange-600"
                    onClick={toggleMenu}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded hover:text-orange-600"
                    onClick={toggleMenu}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded hover:text-orange-600"
                    onClick={toggleMenu}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded hover:text-orange-600"
                    onClick={toggleMenu}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 rounded hover:text-orange-600"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  export default Navbar;

