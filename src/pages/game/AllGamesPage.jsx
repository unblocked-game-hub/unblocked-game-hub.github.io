import React from "react";
import { Link } from "react-router-dom";
import GameCard from "../../components/game/GameCard";
import { useGames } from "../../contexts/GameContext";
import Layout from "../../components/Layout";

const AllGamesPage = () => {
  const { games, loading } = useGames();
  const breadcrumbs = [{ text: "All Games", path: "/all-games" }];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Layout
      title="Game Collection - Play Amazing Games"
      description="Explore our extensive collection of amazing games across multiple genres. Find your next favorite game and start playing instantly!"
      canonical="/all-games"
      keywords="game collection, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
      breadcrumbs={breadcrumbs}
    >
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
            🎮 Game Collection
          </h1>
          <p className="text-xl text-gray-400">
            Discover and play amazing games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link
              key={game.slug}
              to={`/game/${game.slug}`}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <GameCard game={game} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default AllGamesPage;
