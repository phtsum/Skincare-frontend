import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/lucylogo2.png'; // adjust path as needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1">
        {/* Centered Logo */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <img src={logo} alt="Logo" className="w-[140px] h-[90px] object-contain" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 text-gray-700 font-medium text-base mt-1">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Products</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex justify-end md:hidden mt-1">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col items-center space-y-2 text-gray-700 font-medium text-base">
            <ul className="flex flex-col space-y-1 items-center">
              <li className="hover:text-green-600">Home</li>
              <li className="hover:text-green-600">Products</li>
              <li className="hover:text-green-600">About</li>
              <li className="hover:text-green-600">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
