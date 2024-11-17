import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description, keywords, canonical, image, author }) {
  const fullCanonicalUrl = canonical
    ? `https://yourdomain.com${canonical}`
    : null;

  image = image ? `https://yourdomain.com${image}` : null;
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || "Your Brand"} />

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      {fullCanonicalUrl && (
        <meta property="og:url" content={fullCanonicalUrl} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Robots Tag */}
      <meta name="robots" content="index, follow" />

      {/* Viewport for Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}

export default SEO;
