const BlogAuthor = ({ author, date }) => {
  return (
    <div className="flex items-center text-gray-500 text-sm">
      <span className="mr-4">{author}</span>
      <span>{new Date(date).toLocaleDateString()}</span>
    </div>
  );
};

export default BlogAuthor;
