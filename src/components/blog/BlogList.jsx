import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.slug}`}>
          <BlogCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
