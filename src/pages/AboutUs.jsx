import React from "react";
import Layout from "../components/Layout";

const AboutUs = () => {
  const breadcrumbs = [{ text: "About Us", path: "/about-us" }];

  return (
    <Layout
      title="About Us - Unblocked Games"
      description="Learn more about Unblocked Games and our mission to provide the best online gaming experience with a variety of games across multiple genres."
      canonical="/about-us"
      keywords="unblocked games, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
      breadcrumbs={breadcrumbs}
    >
      {/* About Us Header */}
      {/* <header className="bg-gray-800 py-6 px-4">
        <h1 className="text-4xl font-extrabold text-blue-500 text-center">
          About Us
        </h1>
      </header> */}

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-300 mb-6">
            Welcome to Unblocked Games! We provide a curated collection of
            unblocked games that you can enjoy at any time, from anywhere. Our
            mission is to bring you the best online gaming experience, with a
            wide variety of games across different genres. Whether you're
            looking for action, puzzles, or adventure, we have something for
            everyone.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Explore, play, and most importantly, have fun! Our goal is to
            provide a platform where you can easily access fun and engaging
            games without restrictions. We are committed to constantly updating
            our collection to ensure you always have the latest and most
            exciting games to play.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
