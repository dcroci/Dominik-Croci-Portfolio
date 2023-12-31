'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6 w-full absolute sm:initial top-0">
      <div className="flex justify-between items-center text-3xl container mx-auto px-6">
        <p>
          <Link href="/">Dominik Croci</Link>
        </p>
        <div className="hidden md:flex gap-6 ">
          <p className="text-right">
            <a href="https://dominik-croci-blog.netlify.app/" target="_blank">
              Blog
            </a>
          </p>
          <p>
            <Link href="/projects">Projects</Link>
          </p>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 text-right pb-20 container mx-auto px-6">
          <p>
            <a
              href="https://dominik-croci-blog.netlify.app/"
              target="_blank"
              className="hover:underline text-2xl"
            >
              Blog
            </a>
          </p>
          <p>
            <Link href="/projects" className="hover:underline text-2xl">
              Projects
            </Link>
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
