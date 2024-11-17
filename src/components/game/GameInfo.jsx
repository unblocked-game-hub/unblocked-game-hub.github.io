import React, { useState } from "react";

function GameInfo({ game }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  return (
    <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Description</h2>
      <div
        className={`text-gray-300 ${!showFullDescription && "line-clamp-6"}`}
        dangerouslySetInnerHTML={{ __html: game.description }}
      />
      {game.description.length > 200 && (
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-blue-400"
        >
          {showFullDescription ? "Show Less" : "Read More"}
        </button>
      )}
      <h2 className="text-2xl font-bold text-blue-400 mt-6 mb-4">
        Instructions
      </h2>
      <div
        className={`text-gray-300 ${!showFullInstructions && "line-clamp-6"}`}
        dangerouslySetInnerHTML={{ __html: game.instructions }}
      />
      {game.instructions.length > 200 && (
        <button
          onClick={() => setShowFullInstructions(!showFullInstructions)}
          className="text-blue-400"
        >
          {showFullInstructions ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default GameInfo;
