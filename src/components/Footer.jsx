import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AutoCars</h3>
            <p className="text-gray-400 mb-4">
              World's leading car repair service provider with 100+ centers across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary"><FaTwitter /></a>
              <a href="#" className="hover:text-primary"><FaInstagram /></a>
              <a href="#" className="hover:text-primary"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Recent Post</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  The Truth About Car Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Facts About Car Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Engine Diagnostics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Lube, Oil and Filters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Air Conditioning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Brake Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Tire And Wheel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Street, New York, USA</p>
              <p className="mt-2">+1 (123) 456789</p>
              <p>info@autocare.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoCare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;