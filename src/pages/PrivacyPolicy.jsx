import React from "react";
import Layout from "../components/Layout";

function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy - Unblocked Games"
      description="Learn more about our privacy practices and how we handle your personal information on Unblocked Games."
      canonical="/privacy-policy"
      keywords="unblocked games, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
    >
      {/* Privacy Policy Header */}
      <header className="bg-gray-800 py-6 px-4">
        <h1 className="text-4xl font-extrabold text-blue-500 text-center">
          Privacy Policy
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Your Privacy Matters to Us
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            At Unblocked Games, we respect your privacy and are committed to
            protecting your personal information. We do not share your data with
            third parties and only use it to enhance and improve your gaming
            experience.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our privacy practices include safeguarding your information and
            ensuring it is only used for the purpose of providing the best user
            experience on our platform. We encourage you to read through our
            policy to understand how your data is handled and to make informed
            choices.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            For more detailed information, please feel free to read the full
            Privacy Policy on our site.
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default PrivacyPolicy;
