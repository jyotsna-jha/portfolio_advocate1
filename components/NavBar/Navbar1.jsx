// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="md:bg-gray-900 p-4 md:text-[#dcdde1] md:border-0 text-md font-[Poppins] bg-gray-900 text-[#dcdde1] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Advocate Name */}
        <Link href="/" passHref>
          <span className="text-xl font-bold">Balram Jha</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex md:gap-8">
          <a onClick={() => smoothScroll('home')} className="hover:text-red-400 py-4">
            Home
          </a>
          <a onClick={() => smoothScroll('about')} className="hover:text-red-400 py-4">
            About
          </a>
          <a onClick={() => smoothScroll('testimonials')} className="hover:text-red-400 py-4">
            Testimonials
          </a>
          <a onClick={() => smoothScroll('contact')} className="hover:text-red-400 py-4">
            Contact
          </a>
          <a onClick={() => smoothScroll('services')} className="hover:text-red-400 py-4">
            Services
          </a>
        </div>

        {/* Responsive Navigation for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[2.5rem] text-white">
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full absolute left-0 top-[72px] bg-gray-900 text-[#dcdde1] py-4">
          <a onClick={() => smoothScroll('home')} className="block py-2 px-4 hover:text-red-400">
            Home
          </a>
          <a onClick={() => smoothScroll('about')} className="block py-2 px-4 hover:text-red-400">
            About
          </a>
          <a onClick={() => smoothScroll('testimonials')} className="block py-2 px-4 hover:text-red-400">
            Testimonials
          </a>
          <a onClick={() => smoothScroll('contact')} className="block py-2 px-4 hover:text-red-400">
            Contact
          </a>
          <a onClick={() => smoothScroll('services')} className="block py-2 px-4 hover:text-red-400">
            Services
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
