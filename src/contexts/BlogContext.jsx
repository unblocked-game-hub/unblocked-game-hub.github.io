import React, { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/blogs.json");
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchBlogs = (keyword) => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const filterBlogsByTag = (tag) => {
    return blogs.filter((blog) => blog.tags.includes(tag));
  };

  const getBlogBySlug = (slug) => {
    return blogs.find((blog) => blog.slug === slug);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        error,
        searchBlogs,
        filterBlogsByTag,
        getBlogBySlug,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
