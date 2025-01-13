import React, { useState } from 'react';
import { FaBars, FaTimes,FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-bold text-primary">
            <img src="/logo-ac.png" alt="logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary">About Us</a>
            <a href="#" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#" className="text-gray-600 hover:text-primary">Blog</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contact Us</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">
                <div className="flex items-center gap-2">
                  <FaSearch size={16} color='red' />
                  <span>Search</span>
                </div>
              </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact Us</a>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;