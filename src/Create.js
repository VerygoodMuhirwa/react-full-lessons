import { useState } from "react";
import {useHistory} from "react-router-dom"
const Create = () => {
    const [isPending, setIsPending ] = useState(false)
    const [title, setTitle] = useState("")
        const [body, setBody] = useState("");
  const [author, setAuthor] = useState("")
  const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsPending(true)
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added ");
            setIsPending(false)
// history.go(-2)
          history.push("/")
        }).catch(err => {
    console.log(err);
})
    }
    return (
      <div className="create">
        <h1>Create a new blog</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"> Blog title: </label>
          <input
            type="text"
            name="blogTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />

          <label htmlFor="body"> Blog body: </label>
          <textarea
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>

          <label htmlFor="author">Author</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="mario">Mario</option>
            <option value="Verygood">Verygood</option>{" "}
            <option value="Yoshi">Yoshi</option>
          </select>
          {!isPending && <button type="submit">Add new Blog</button>}
          {isPending && <button type="submit" disabled>Adding new blog....</button>}
        </form>
      </div>
    );
}
 
export default Create;