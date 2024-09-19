'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  return (
    <header className=" top-0 left-0 w-full z-50 p-16 ">
      <div className="mx-auto flex h-1 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <Link className="block text-orange-600 flex" href="/">
          <span className="sr-only">Home</span>
          <Image src="/images/brandlogo (3).png" width={150} height={40} alt="logo" />
        <Image src="/images/brandlogo (1).png" width={150} height={60} alt="logo" />

        </Link>

        {/* Flex container for nav and Contact Us button */}
        <div className="flex flex-1 items-center justify-end">
          {/* Main Navigation for larger screens */}
          <nav aria-label="Global" className="hidden md:block font-semibold ">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-amber-700 transition hover:text-gray-500/75" href="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="text-amber-700 transition hover:text-gray-500/75" href="/about">
                  ABOUT US
                </Link>
              </li>
              <li>
                {/* Dropdown Toggle */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown} // Toggle dropdown on click
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-orange-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    Products
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                          Project Management
                        </Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                          Machine Learning
                        </Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                          Implementation
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </nav>

          {/* Contact Us button */}
          <div className="ml-4 sm:flex sm:gap-4 hidden md:block">
            <Link
              className="block rounded-md bg-orange-600 px-5 py-2.5 font-medium text-white transition hover:bg-teal-700"
              href="/contacts"
            >
              Contact Us
            </Link>
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
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/blogs">
                Blogs
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
