import React from "react";
import {Link} from "react-router-dom";
import { isExpired } from "react-jwt";

const MoviesAlbum = ( props ) => {

    const { items } = props;

    const isNotLogged = isExpired(localStorage.getItem('token'));

    if(items.length<1){
        return (<div className="album pb-5 bg-dark">
                    <div className="d-flex py-4 justify-content-center">
                        {isNotLogged && <Link to="/signUp"><button className="btn btn-primary">Add Movie</button></Link>}
                        {!isNotLogged && <Link to="/add"><button className="btn btn-primary">Add Movie</button></Link>}
                    </div>
                    <p className="text-light text-center">Nie znaleziono filmów</p>
                </div>
        )
    }

    return (
        <div className="album pb-5 bg-dark">
            <div className="d-flex py-4 justify-content-center">
                {isNotLogged && <Link to="/signUp"><button className="btn btn-primary">Add Movie</button></Link>}
                {!isNotLogged && <Link to="/add"><button className="btn btn-primary">Add Movie</button></Link>}
            </div>
            <div className="container">
                <div className="row">
                {items.map((item, key) =>
            (
                    <div className="col-md-2" key={key}>
                        <div className="card mb-4 box-shadow bg-dark text-white">
                            <Link to={`/details/${item.id}`} className="klasa"><img className="card-img-top th klasa" src={item.image} alt={item.text}></img></Link>
                            <div className="card-body">
                                <Link to={`/details/${item.id}`}><p className="card-text">{item.title}</p></Link>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">45 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
   )
};
export default MoviesAlbum;