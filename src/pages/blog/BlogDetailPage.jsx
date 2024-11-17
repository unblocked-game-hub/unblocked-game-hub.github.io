import { useParams } from "react-router-dom";
import BlogTags from "../../components/blog/BlogTags";
import BlogAuthor from "../../components/blog/BlogAuthor";
import Layout from "../../components/Layout";
import { useBlogs } from "../../contexts/BlogContext";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  const breadcrumbs = [
    { text: "Blog", path: "/blog" },
    { text: blog?.title || "Loading...", path: `/blog/${slug}` },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Blog Not Found</h2>
        <p className="text-gray-400">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <Layout
      title={blog.title}
      description={blog.excerpt}
      canonical={`/blog/${slug}`}
      breadcrumbs={breadcrumbs}
    >
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-32"></div>
          </div>

          <div className="p-8">
            <BlogTags tags={blog.tags} />
            <h1 className="text-5xl font-extrabold mb-6 text-blue-400">
              {blog.title}
            </h1>
            <BlogAuthor author={blog.author} date={blog.date} />
            <div className="prose prose-lg prose-invert max-w-none mt-8 text-gray-300">
              {blog.content}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetailPage;
