import React from "react";
import {Link} from "react-router-dom";

const MoviesAlbum = ( props ) => {

    const { items, onDelete, onSort, sortIcon } = props;

    return (
        
        <div class="album py-5 bg-dark">
            <div class="container">
                <div class="row">
                {items.map((item, key) =>
            (
                    <div class="col-md-2" key={key}>
                        <div class="card mb-4 box-shadow bg-dark text-white">
                            <Link to="/home"><img class="card-img-top" src={process.env.PUBLIC_URL + '/mandalorian.webp'} alt="Card image cap"></img></Link>
                            <div class="card-body">
                                <Link to="/home"><p class="card-text">{item.text}</p></Link>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">45 mins</small>
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