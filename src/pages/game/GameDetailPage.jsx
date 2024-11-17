import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGames } from "../../contexts/GameContext";
import GameDisplay from "../../components/game/GameDisplay";
import GameInfo from "../../components/game/GameInfo";
import RelatedGames from "../../components/game/RelatedGames";
import Layout from "../../components/Layout";
import LoadingSpinner from "../../components/LoadingSpinner";

function GameDetailPage() {
  const { slug } = useParams();
  const { games, loading } = useGames();
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (games.length) {
      const selectedGame = games.find((g) => g.slug === slug);
      setGame(selectedGame);
    }
  }, [games, slug]);

  if (loading || !game) {
    return <LoadingSpinner />;
  }

  const breadcrumbs = [
    { text: "Games", path: "/all-games" },
    { text: game.name, path: `/game/${game.slug}` },
  ];

  return (
    <Layout
      title={`${game.name} - Play Online Free`}
      description={`Play ${game.name} online for free. ${game.description.slice(
        0,
        150
      )}...`}
      canonical={`/game/${game.slug}`}
      keywords={`${game.name}, play ${game.name} online, ${game.name} free, ${game.name} unlocked, ${game.name} unblocked game, unblocked games`}
      image={game.thumbnail}
      breadcrumbs={breadcrumbs}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8">
            <GameDisplay game={game} />
            <GameInfo game={game} />
            <RelatedGames currentGame={game} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default GameDetailPage;
