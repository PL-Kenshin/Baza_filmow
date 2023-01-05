import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
   return <div className="flexCenter"><div className="jumbotron text-light">
       <h1 className="display-4">404 - Not found!</h1>
       <p className="lead">This is not the page you are looking for.</p>
       <hr className="my-4"/>
       <p>Go back to Home</p>
       <Link className="btn btn-primary btn-lg flexCenter mb-5" to="/" role="button">Home</Link>
   </div></div>;
};

export default NotFound;