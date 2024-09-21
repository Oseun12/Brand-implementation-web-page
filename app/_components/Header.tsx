'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 bg-black bg-opacity-20">
      <div className="flex items-center justify-between px-4 lg:px-8 mx-auto">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center justify-start w-full md:w-auto">
          {/* Logo */}
          <div className="flex-shrink-0 border-r border-gray-600 pr-16 h-20 last:border-r-0">
            <Link className="block text-white" href="/">
              <Image
                src="/images/logo2.png"
                width={200}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* Main Navigation (hidden on medium and below) */}
          <nav aria-label="Global" className="ml-8 hidden md:flex font-sans">
            <ul className="flex items-center gap-8 text-lg font-semibold">
              <li>
                <Link className="text-white transition hover:text-gray-500" href="/">
                  Home
                </Link>
              </li>

              {/* About Us with Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link className="text-white transition hover:text-gray-500 " href="/about">
                  About Us
                </Link>
                {isAboutDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg p-4 text-black w-60 rounded-2xl">
                    <li className="py-2">
                      <Link href="/about/team" className="hover:text-gray-600">
                        Our History
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/about/mission" className="hover:text-gray-600">
                        Our Visoin & Mission
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/about/careers" className="hover:text-gray-600">
                        Our team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Our Solutions with Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                <Link className="text-white transition hover:text-gray-500" href="/solutions">
                  Our Solutions
                </Link>
                {isSolutionsDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg p-4 text-black w-60 rounded-2xl">
                    <li className="py-2">
                      <Link href="/products" className="hover:text-gray-600">
                        Our Products
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/services" className="hover:text-gray-600">
                        Our Services
                      </Link>
                    </li>
                    
                  </ul>
                )}
              </li>

              <li>
                <Link className="text-white transition hover:text-gray-500" href="/contact">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-white transition hover:text-gray-500" href="/partner">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link className="text-white transition hover:text-gray-500" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Phone Number (hidden on small screens) */}
        <div className="hidden md:block text-white font-semibold p-4 border-l border-gray-600 pl-72 h-20 last:border-l-0">
          <h2>+ 234 944 5000 3000</h2>
        </div>

        {/* Mobile Menu Toggle Button (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
        >
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (shown when open) */}
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
                Our Solutions
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
