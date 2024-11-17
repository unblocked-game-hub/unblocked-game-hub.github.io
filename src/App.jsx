// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext";
import { ProxyProvider } from "./contexts/ProxyContext";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/game/GameDetailPage";
import HotGamesPage from "./pages/game/HotGamesPage";
import PopularGamesPage from "./pages/game/PopularGamesPage";
import AllGamesPage from "./pages/game/AllGamesPage";
import CategoryPage from "./pages/game/CategoryPage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import { BlogProvider } from "./contexts/BlogContext";
import { CategoryProvider } from "./contexts/CategoryContext";

function App() {
  return (
    <ProxyProvider>
      <CategoryProvider>
        <GameProvider>
          <BlogProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hot-games" element={<HotGamesPage />} />
                <Route path="/popular-games" element={<PopularGamesPage />} />
                <Route path="/all-games" element={<AllGamesPage />} />
                <Route
                  path="/category/:categorySlug"
                  element={<CategoryPage />}
                />
                <Route path="/game/:slug" element={<GameDetailPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
              </Routes>
            </Router>
          </BlogProvider>
        </GameProvider>
      </CategoryProvider>
    </ProxyProvider>
  );
}

export default App;
