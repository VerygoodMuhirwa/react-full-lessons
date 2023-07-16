import {  useParams, useHistory } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const { data: blog, isPending, error } = UseFetch("http://localhost:8000/blogs/" + id)
    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(() => {
    history.push("/")
})
    }
    return (
      <div className="blogDetails">
        {isPending && <div>Loading...</div>}
        {error && <div>{error} </div>}
        {blog && (
          <article>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={()=>handleDelete(blog.id)}>Delete</button>
          </article>
        )}
      </div>
    );
}
 
export default BlogDetails;