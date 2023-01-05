import React from "react";
import {Link} from "react-router-dom";
//import { isExpired, decodeToken  } from "react-jwt";

const Navbar = () => {

   //const user = decodeToken(localStorage.getItem('token'));
   //const isNotLogged = isExpired(localStorage.getItem('token'));

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">MoviesLogo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
        <form className="d-flex flex-grow-1" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary me-2" type="submit">Search</button>
        </form>
        <Link to="/login"><button type="button" className="btn btn-primary me-2 mt-2 mt-lg-0">Log In</button></Link>
        <Link to="/signup"><button type="button" className="btn btn-outline-primary me-2 mt-2 mt-lg-0">Sign Up</button></Link>
      </div>
    </div>
  </nav>
    )
};

export default Navbar;