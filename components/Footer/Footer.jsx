// components/Footer.js
"use client"
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-5 text-center">
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.facebook.com/balram.jha.7127?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:bg-gray-800 hover:border-white hover:rounded-full p-2 inline-flex flex-col items-center transition"
          
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/advocatebalramjha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:bg-gray-800 hover:border-white hover:rounded-full p-2 inline-flex flex-col items-center transition"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="advbalram365@gmail.com"
          target="_blank"
          className="text-white hover:bg-gray-800 hover:border-white hover:rounded-full p-2 inline-flex flex-col items-center transition"
        >
          <IoMdMail size={24} />
        </a>
      </div>
      <div className="right-section">
        <button
          onClick={scrollToTop}
          className="bg-transparent border-none text-white text-2xl focus:outline-none cursor-pointer hover:text-gray-500"
        >
          <RiArrowUpSLine size={24} />
        </button>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Balram Jha
      </div>
    </footer>
  );
};

export default Footer;
