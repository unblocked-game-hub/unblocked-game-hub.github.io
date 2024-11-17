import React, { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/games.json");
      const data = await response.json();
      setGames(data.games);
    } catch (err) {
      setError("Failed to fetch games");
      console.error("Error fetching games:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchGames = (keyword) => {
    return games.filter((game) =>
      game.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const filterGamesByCategory = (category) => {
    return games.filter((game) => game.categories.includes(category));
  };

  return (
    <GameContext.Provider
      value={{
        games,
        loading,
        error,
        searchGames,
        filterGamesByCategory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook để dễ dàng sử dụng context
export const useGames = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGames must be used within a GameProvider");
  }
  return context;
};
