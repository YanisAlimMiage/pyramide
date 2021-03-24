import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({history,match}) => {



    return ( <>
    <div className="homeP">
        <div className="titreA">
    <h1>Pyramide Game!!!</h1>
    </div>
    <Link to="/cnx">
    <button type="button" className="btn btn-primary">Faire une partie</button>
    </Link>
   

    </div>
     </> );
}
 
export default Home;