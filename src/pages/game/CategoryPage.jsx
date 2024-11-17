import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGames } from "../../contexts/GameContext";
import { useCategories } from "../../contexts/CategoryContext";
import Layout from "../../components/Layout";
import GameCard from "../../components/game/GameCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const { games, loading } = useGames();
  const { categories } = useCategories();

  const filteredGames = games.filter((game) =>
    game.categories.includes(categorySlug)
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  const category = categories.find((cat) => cat.slug === categorySlug);
  const categoryName = category ? category.name : categorySlug;

  const breadcrumbs = [
    { text: "Category", path: "/" },
    { text: `${categoryName}`, path: `/category/${categorySlug}` },
  ];

  return (
    <Layout
      title={`${categoryName} Games`}
      description={`Explore all ${categoryName} games`}
      canonical={`/category/${categorySlug}`}
      keywords="game collection, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
      breadcrumbs={breadcrumbs}
    >
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
            {categoryName} Games
          </h1>
          <p className="text-xl text-gray-400">
            Discover and play amazing games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.map((game) => (
            <Link
              key={game.slug}
              to={`/game/${game.slug}`}
              state={{ fromCategory: true, categoryName }}
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

export default CategoryPage;
