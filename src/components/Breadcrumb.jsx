import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight, HiHome } from "react-icons/hi";

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="flex px-4 py-2 bg-gray-800/50 rounded-lg mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
          >
            <HiHome className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <HiChevronRight className="w-5 h-5 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="ml-1 text-sm font-medium text-blue-400 md:ml-2">
                  {item.text}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="ml-1 text-sm font-medium text-gray-400 hover:text-white md:ml-2"
                >
                  {item.text}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
