import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ games }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter games based on the query
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredGames.slice(0, 5)); // Limit to top 5 suggestions
    }
  };

  return (
    <div className="relative">
      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="px-4 py-2 w-64 rounded-md bg-gray-800 text-white focus:outline-none"
        placeholder="Search for games..."
      />

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 w-64 bg-gray-800 text-white rounded-md shadow-lg z-10">
          {suggestions.map((game) => (
            <Link key={game.slug} to={`/game/${game.slug}`}>
              <li
                key={game.id}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              >
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{game.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
