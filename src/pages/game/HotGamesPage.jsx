import React from "react";
import { Link } from "react-router-dom";
import GameCard from "../../components/game/GameCard";
import Layout from "../../components/Layout";
import { useGames } from "../../contexts/GameContext";

function HotGamesPage() {
  const { games, loading } = useGames();

  const hotGames = games.filter((game) => game.isHot);
  const breadcrumbs = [{ text: "Hot Games", path: "/hot-games" }];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Layout
      title="Hot Games"
      description="Experience the most popular games"
      canonical="/hot-games"
      keywords="hot games, unblocked games,play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
      breadcrumbs={breadcrumbs}
    >
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
            🔥 Hot Games
          </h1>
          <p className="text-xl text-gray-400">
            Discover and play amazing games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hotGames.map((game) => (
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
}

export default HotGamesPage;
