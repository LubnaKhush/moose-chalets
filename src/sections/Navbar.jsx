"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    setIsMenuOpen(false);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white sm:px-8 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo on the left */}
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero-section");
          }}
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center font-Playball font-thin text-3xl whitespace-nowrap text-heading">
            Moose Chalets
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
            href="#"
            className="block py-2 px-3 text-gray-800 rounded hover:bg-heading hover:text-white"
          >
            About
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("testimonials");
            }}
            href="#"
            className="block py-2 px-3 text-gray-800 rounded hover:bg-heading hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
            href="#"
            className="block py-2 px-3 text-gray-800 rounded hover:bg-heading hover:text-white"
          >
            Services
          </Link>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("footer");
            }}
            href="#"
            className="block py-2 px-3 text-gray-800 rounded hover:bg-heading hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Book Now Button on the right */}
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
          href="#"
        >
          <button
            type="button"
            className="hidden md:block bg-heading hover:bg-subHeading text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Book Now
          </button>
        </Link>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-10 bg-heading transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-start p-4 space-y-2">
          <div className="flex justify-between w-full">
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero-section");
              }}
              href="#"
              className="text-2xl font-Playball font-thin text-white"
            >
              Moose Chalets
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-300 rounded p-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
            href="#"
            className="block py-2 px-3 text-white rounded hover:bg-subHeading w-full text-left"
          >
            About
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
            href="#"
            className="block py-2 px-3 text-white rounded hover:bg-subHeading w-full text-left"
          >
            Services
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("testimonials");
            }}
            href="#"
            className="block py-2 px-3 text-white rounded hover:bg-subHeading w-full text-left"
          >
            Testimonials
          </Link>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("footer");
            }}
            href="#"
            className="block py-2 px-3 text-white rounded hover:bg-subHeading w-full text-left"
          >
            Contact
          </Link>
          <Link
            className="w-full"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            <button
              type="button"
              className="border-2  border-green-400    hover:bg-subHeading focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-full text-center text-white"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
