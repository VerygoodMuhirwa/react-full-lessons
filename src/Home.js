import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
const Home = () => {
const { data, isPending, error } = UseFetch("http://localhost:8000/blogs");
   
    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading ...</div>}
        {data && <BlogList blogs={data}  />}
      </div>
    );
   }
 
export default Home; 