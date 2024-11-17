import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto text-center px-6 md:px-16">
        {/* Logo Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-400 tracking-wide">
            Unblocked Games
          </h1>
          <p className="mt-2 text-base text-gray-400">
            Your ultimate gateway to endless fun!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm mb-8">
          <Link to="/about" className="hover:text-blue-400 transition">
            About Us
          </Link>
          <Link to="/privacy" className="hover:text-blue-400 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-400 transition">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
        </div>
        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Unblocked Games. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
