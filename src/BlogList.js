import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {title}
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
  