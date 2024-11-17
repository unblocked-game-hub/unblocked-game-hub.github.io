import React from "react";

function GameDisplay({ game }) {
  const handleFullscreen = () => {
    const iframe = document.getElementById("game-iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="w-full bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
      <div className="relative mb-8 group">
        <div className="relative w-full h-[700px] flex items-center justify-center bg-gray-900/50 rounded-2xl overflow-hidden">
          <iframe
            id="game-iframe"
            src={game.url}
            title={game.name}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center space-x-6">
            <img
              src={game.thumbnail}
              alt={game.name}
              className="w-20 h-20 rounded-full border-2 border-blue-400 object-cover shadow-lg"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-blue-400">{game.name}</h1>
              <div className="flex flex-wrap gap-2">
                {game.categories.map((cat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/20 rounded-full text-green-300"
                  >
                    {cat.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleFullscreen}
          className="px-8 py-4 bg-blue-600 rounded-xl text-lg font-semibold"
        >
          Play Fullscreen
        </button>
      </div>
    </div>
  );
}

export default GameDisplay;
