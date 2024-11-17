import BlogTags from "./BlogTags";
import BlogAuthor from "./BlogAuthor";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-56 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
        />
        <div className="absolute top-4 right-4">
          <BlogTags tags={blog.tags} />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-200">
          {blog.title}
        </h2>
        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="pt-2 border-t border-gray-700">
          <BlogAuthor author={blog.author} date={blog.date} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
