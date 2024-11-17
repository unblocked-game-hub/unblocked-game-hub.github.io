import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import Breadcrumb from "./Breadcrumb";

const Layout = ({
  title,
  description,
  canonical,
  keywords,
  image,
  author,
  breadcrumbs = [],
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
        image={image}
        author={author}
      />
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
        </div>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
