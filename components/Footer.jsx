import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold text-lg">HealthLink</h5>
            <p>Streamlining healthcare services.</p>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2024 HealthLink. All rights reserved.</p>
          </div>
          <div className="flex flex-row space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}