"use client";
import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="footer"
      className="relative  w-full text-white"
      style={{
        backgroundImage: `url('/assets/image.png')`, // Directly reference the image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to control opacity of content while keeping the background image fully visible */}
      <div className="bg-[#123a1a]  opacity-90 py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold  border-l-[7px] p-[10px] border-[#19F745]">
            Stunning Valley Views
          </h2>
          <p className="mt-4 ml-2 text-sm">
            Modern amenities and exceptional service, all designed to offer you
            a peaceful and memorable stay in the heart of nature.
          </p>
          <div className="mt-6 flex text-xl space-x-2 ml-2">
            <a
              href="https://www.instagram.com/moosechalets?igsh=M2VxMzlxN3hrYzFj"
              target="blank"
            >
              <SlSocialInstagram />
            </a>
            <a
              href="https://www.facebook.com/MooseChaletsHunza?mibextid=ZbWKwL"
              target="blank"
            >
              <TiSocialFacebook />
            </a>
           
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h2 className="text-lg border-l-[7px] p-[10px] border-[#19F745] font-semibold">
            Quick Links
          </h2>
          <ul className="mt-4 ml-2 space-y-2 text-sm flex flex-col">
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero-section");
              }}
              href="#"
            >
              Home
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
              href="#"
            >
              About
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("services");
              }}
              href="#"
            >
              Services
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("testimonials");
              }}
              href="#"
            >
              Testimonials
            </Link>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold  border-l-[7px] p-[10px] border-[#19F745]">
            Contact Information
          </h2>
          <ul className="mt-4 ml-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> +92 3124295679
            </li>
            <li className="flex items-center gap-2">
              <CgMail className="text-lg" />
              moosechalet@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-lg" />
              karimabad, Hunza Valley
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#123a1a] border-t-2 opacity-95 text-center pt-6 text-sm">
        Copyright © 2024 Moose Chalets. All rights reserved <br />
        <div className="flex justify-center gap-1 mt-1  pb-3 ">
          <p className="text-xs text-green-300 ">
            Developed by <strong>Ch Umar Aslam</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
