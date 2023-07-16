import {Link } from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>The required resource is not found </h3>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;