import { useEffect,useState } from "react";

const UseFetch = (url) => {
     const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState([]);
    const [error, setError ] = useState(null)
    useEffect(() => {
                    const abortSign = new AbortController();

        setTimeout(() => {
            
           fetch( url, {signal:abortSign.signal})
               .then((res) => {
                   if (!res.ok) {
                       throw Error("Could not fetch the data fro that resource")
                   }
                   return res.json();
             })
             .then((data) => {
                 setData(data);
 setError(null)
                 setIsPending(!isPending);
             })
               .catch(err => {
                   if (err.name === "AbortError"){
                       console.log("Fetch aborted ");
                   } else if (err.name === "SyntaxError") {
                     console.log("Faced with Syntax error ");
                   } else {
                     console.log(err.name);
                     setError(err.message);
                     setIsPending(false);
                   }
             })
        }, 1000);
        return () => abortSign.abort();
},[url])
    
    return {data, isPending,error }
    
}
 
export default UseFetch;