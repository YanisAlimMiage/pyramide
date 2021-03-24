import React from 'react';
import {Link} from 'react-router-dom';

function nav(){
    return (
        <><nav className="navbar fixed-top navbar-expand-xl navbar-light bg-light  ">
        <ul className="navbar-nav mr-auto">
        
      <Link to="/" className="nav-link">
            <li className="nav-item">Home</li>
            </Link>
            <Link to="/cnx"  className="nav-link">
            <li className="nav-item">Ma partie</li>
            </Link>
      </ul>
       
        </nav>
        </>
    )
}
export default nav;