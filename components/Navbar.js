import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">My Portfolio</div>
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                <a className="text-white hover:text-accent transition duration-300">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 space-y-2 p-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                <a className="block text-white hover:text-accent transition duration-300">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 