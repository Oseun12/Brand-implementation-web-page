'use client'

import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  // };

  return (
    <header className="fixed top-0 left-0 w-full z-50  p-6 border border-gray-600">
      <div className="mx-auto flex items-center justify-between max-w-screen-xl px-4 sm:px-6 lg:px-8">
        
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link className="block text-white" href="/">
            <h2 className="text-lg font-bold">BRAND IMPLEMENTATION</h2>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav aria-label="Global" className="flex-1 mx-8 hidden md:flex justify-center">
          <ul className="flex items-center gap-8 text-sm font-semibold">
            <li>
              <Link className="text-white transition hover:text-gray-500" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="text-white transition hover:text-gray-500" href="/about">
                SERVICES
              </Link>
            </li>
            <li>
              <Link className="text-white transition hover:text-gray-500" href="/products">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link className="text-white transition hover:text-gray-500" href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Phone number on the right */}
        <div className="flex-shrink-0 text-white flex-1 mx-8 hidden md:flex justify-center">
          <h2 className="font-semibold">+ 871 944 5000</h2>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/about">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link
                className="block rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="/contacts"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
