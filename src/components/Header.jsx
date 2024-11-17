import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGames } from "../contexts/GameContext";
import { useCategories } from "../contexts/CategoryContext";
import SearchBar from "./SearchBar";

function Header() {
  const { games, loading } = useGames();
  const { categories } = useCategories();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-700 rounded"></div>
            </div>
          ) : (
            <>
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <span className="text-3xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                      Game
                    </span>
                    <span className="text-white">Hub</span>
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/blogs" className="nav-link group">
                  <span className="relative inline-block px-2 py-1">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
                <Link to="/hot-games" className="nav-link group">
                  <span className="relative inline-block px-2 py-1">
                    Hot Games
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
                <Link to="/popular-games" className="nav-link group">
                  <span className="relative inline-block px-2 py-1">
                    Popular Games
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
                <Link to="/all-games" className="nav-link group">
                  <span className="relative inline-block px-2 py-1">
                    All Games
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </Link>
              </nav>

              {/* Search Bar */}
              <div className="hidden md:block">
                <SearchBar games={games} />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
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
            </>
          )}
        </div>

        {/* Sub-header for Categories */}
        <div className=" w-full flex justify-center">
          <div className="flex overflow-x-auto space-x-4 px-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-700 shadow-md hover:shadow-lg"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/blogs"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
              >
                Blogs
              </Link>
              <Link
                to="/hot-games"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
              >
                Hot Games
              </Link>
              <Link
                to="/popular-games"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
              >
                Popular Games
              </Link>
              <Link
                to="/all-games"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700"
              >
                All Games
              </Link>
              <div className="pt-4">
                <SearchBar games={games} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
