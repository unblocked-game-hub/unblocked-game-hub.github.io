import React, { useState } from "react";
import Layout from "../components/Layout";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const breadcrumbs = [{ text: "Contact Us", path: "/contact-us" }];

  return (
    <Layout
      title="Contact Us - Unblocked Games"
      description="Get in touch with Unblocked Games for any inquiries or feedback."
      canonical="/contact-us"
      keywords="unblocked games, play games online, free games, fun games, entertaining games, online games"
      image="/images/logo.png"
      breadcrumbs={breadcrumbs}
    >
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              We'd love to hear from you! Drop us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800/50 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400">
                Let's Connect
              </h2>
              <p className="text-gray-300">
                Have questions or feedback? We're here to help! Reach out to us
                and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">
                      Email
                    </h3>
                    <p className="text-gray-400">support@unblockedgames.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ContactUs;
