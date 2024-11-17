import { useGames } from "../contexts/GameContext";
import { useCategories } from "../contexts/CategoryContext";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import GameCard from "../components/game/GameCard";
import { Link } from "react-router-dom";

function HomePage() {
  const { games, loading, error } = useGames();
  const { categories } = useCategories();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Get featured and popular games
  const featuredGames = games.slice(0, 4);
  const popularGames = games.slice(0, 6);

  return (
    <Layout
      title="Unblocked Games - Play Free Online Games"
      description="Play thousands of free online games: action, puzzle, sports, racing and more. No downloads required, play directly in your browser!"
      canonical="/"
      keywords="unblocked games, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
    >
      <HeroSection />

      <main className="container mx-auto px-4 py-12">
        {/* Featured Games Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-500">Featured Games</h2>
            <Link to="/all-games" className="text-blue-400 hover:text-blue-300">
              View All Games →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game, index) => (
              <Link
                key={`${game.id}-featured-${index}`}
                to={`/game/${game.slug}`}
              >
                <div className="transform hover:scale-105 transition duration-300">
                  <GameCard game={game} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-500">Popular Games</h2>
            <Link to="/all-games" className="text-blue-400 hover:text-blue-300">
              View All Games →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGames.map((game, index) => (
              <Link
                key={`${game.id}-popular-${index}`}
                to={`/game/${game.slug}`}
              >
                <div className="transform hover:scale-105 transition duration-300">
                  <GameCard game={game} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">
            Game Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <div className="bg-gray-800 p-4 rounded-lg text-center hover:bg-blue-600 transition duration-300">
                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
