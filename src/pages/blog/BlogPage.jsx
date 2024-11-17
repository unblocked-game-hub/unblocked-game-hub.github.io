import BlogList from "../../components/blog/BlogList";
import BlogHeader from "../../components/blog/BlogHeader";
import Layout from "../../components/Layout";
import { useBlogs } from "../../contexts/BlogContext";

const BlogPage = () => {
  const { blogs, loading } = useBlogs();
  const breadcrumbs = [{ text: "Blogs", path: "/blogs" }];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Layout
      title="Gaming Blog - News, Tips & Insights"
      description="Discover the latest gaming trends, expert tips, in-depth reviews and exclusive insights from our gaming blog"
      canonical="/blog"
      breadcrumbs={breadcrumbs}
    >
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <BlogHeader
          title="Gaming Insights & Updates"
          description="Your source for the latest gaming news, professional tips, and exclusive content"
        />
        <div className="mt-8 bg-gray-800 rounded-xl shadow-2xl p-6">
          <BlogList blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
