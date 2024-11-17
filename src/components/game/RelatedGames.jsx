import React from "react";
import { Link } from "react-router-dom";
import { useGames } from "../../contexts/GameContext";
import GameCard from "./GameCard";

function RelatedGames({ currentGame }) {
  const { games } = useGames();
  const relatedGames = games
    .filter((game) => game.slug !== currentGame.slug)
    .slice(0, 4);

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-12">Related Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedGames.map((game) => (
          <Link key={game.slug} to={`/game/${game.slug}`}>
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedGames;
