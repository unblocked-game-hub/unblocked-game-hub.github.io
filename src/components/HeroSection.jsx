import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      className="relative h-[50vh] lg:h-[60vh] bg-cover bg-center flex items-center justify-center shadow-xl"
      style={{
        backgroundImage:
          "url('https://i.makeagif.com/media/4-06-2016/2qiP6B.gif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          🎮 Discover the Ultimate Gaming Experience
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Join the adventure with thousands of action-packed games. Play, share,
          and enjoy gaming like never before! 🌟
        </p>
        {/* Call to Action */}
        <Link
          to="/all-games"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-blue-600 transition shadow-lg"
          title="Explore Featured Games"
        >
          Explore Now 🚀
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
