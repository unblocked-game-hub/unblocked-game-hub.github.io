const BlogHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BlogHeader;
