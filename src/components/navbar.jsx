import React from "react";
import {Link, useNavigate, useLocation } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import eventBus from "./eventBus";


const Navbar = (props) => {
  const user = decodeToken(localStorage.getItem('token'));
  const isNotLogged = isExpired(localStorage.getItem('token'));
  let fun
  let isMounted = false
  const nav = useNavigate();
  const location = useLocation();

  eventBus.on("mounted", (data) =>{
    fun = data.fun
    isMounted = true
  })

  const handleSearch = (e) => {
    if(isMounted){
      fun(e.target.value)
    } else{
      return
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(location.pathname==='/') return
    nav('/')
    eventBus.on("mounted", (data) =>{
      fun = data.fun
      isMounted = true
      fun(e.target[0].value)
    })
  }

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">MoviesLogo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
        <form className="d-flex flex-grow-1" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
          <button className="btn btn-outline-primary me-2" type="submit">Search</button>
        </form>
        {isNotLogged &&<Link to="/login"><button type="button" className="btn btn-primary me-2 mt-2 mt-lg-0">Log In</button></Link>}
        {isNotLogged && <Link to="/signup"><button type="button" className="btn btn-outline-primary me-2 mt-2 mt-lg-0">Sign Up</button></Link>}
        {!isNotLogged && <span  className="badge me-2 mt-2 mt-lg-0">Witaj {user.name}</span>}
        {!isNotLogged && <a href="/"><button type="button" className="btn btn-primary me-2 mt-2 mt-lg-0" onClick={() => localStorage.removeItem('token')}>Log out</button></a>}
      </div>
    </div>
  </nav>
    )
};

export default Navbar;