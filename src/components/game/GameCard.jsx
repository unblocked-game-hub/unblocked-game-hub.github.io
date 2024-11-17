import React from "react";

function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
          <h3 className="text-lg font-bold text-yellow-500">{game.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
