import React from "react";
import Layout from "../components/Layout";

function TermsOfService() {
  return (
    <Layout
      title="Terms of Service - Unblocked Games"
      description="Learn more about our Terms of Service and how you can use Unblocked Games."
      canonical="/terms-of-service"
      keywords="unblocked games, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
    >
      {/* Terms of Service Header */}
      <header className="bg-gray-800 py-6 px-4">
        <h1 className="text-4xl font-extrabold text-blue-500 text-center">
          Terms of Service
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12 lg:px-20">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Welcome to Unblocked Games!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            By using Unblocked Games, you agree to the following Terms of
            Service. These terms govern your access to and use of our website
            and services. Please read them carefully before using our platform.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              1. Acceptance of Terms
            </h3>
            <p className="text-lg text-gray-300">
              By accessing or using Unblocked Games, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree to these terms, you must not use our website or
              services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              2. User Responsibilities
            </h3>
            <p className="text-lg text-gray-300">
              You are responsible for ensuring that your use of our services
              complies with all applicable laws. You agree not to engage in any
              activities that may disrupt or harm our platform or other users.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              3. Content Ownership
            </h3>
            <p className="text-lg text-gray-300">
              All content on Unblocked Games, including games, graphics, and
              text, is owned by the platform or its licensors. You may not
              reproduce, distribute, or modify the content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              4. Privacy Policy
            </h3>
            <p className="text-lg text-gray-300">
              We respect your privacy and are committed to protecting your
              personal information. Our Privacy Policy outlines how we collect,
              use, and store your data. Please refer to our Privacy Policy for
              more details.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              5. Limitation of Liability
            </h3>
            <p className="text-lg text-gray-300">
              Unblocked Games is not responsible for any damages or losses
              incurred while using our platform. We provide the services as-is,
              and we do not guarantee uninterrupted access or error-free
              content.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              6. Termination
            </h3>
            <p className="text-lg text-gray-300">
              We reserve the right to suspend or terminate your access to our
              platform at any time if you violate these Terms of Service or if
              we deem it necessary for security or operational reasons.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              7. Changes to Terms
            </h3>
            <p className="text-lg text-gray-300">
              We may update or modify these Terms of Service at any time. Any
              changes will be posted on this page, and it is your responsibility
              to review these terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              8. Governing Law
            </h3>
            <p className="text-lg text-gray-300">
              These Terms of Service are governed by the laws of the
              jurisdiction in which Unblocked Games operates. Any legal disputes
              will be resolved in accordance with those laws.
            </p>
          </section>

          <p className="text-lg text-gray-300 mb-6">
            If you have any questions or concerns regarding these terms, please
            feel free to contact us at{" "}
            <span className="font-semibold text-blue-300">
              support@unblockedgames.com
            </span>
            .
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default TermsOfService;
