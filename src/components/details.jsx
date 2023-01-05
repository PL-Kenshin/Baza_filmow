import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
   return <div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/mandalorian.webp'} alt="Mandalorian"></img>
                    <div className="card-body">
                        <p className="card-text">Mandalorian</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">45 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0"><p>Po upadku Imperium kwitnie bezprawie. Samotny łowca nagród przemierza galaktykę, walcząc o przetrwanie w świecie pełnym zdrady i chciwości.</p>

                <div className='row'><p>Gatunek: {<Link to="/tags/sci-fi"><span className="badge bg-primary">Sci-fi</span></Link>}</p></div>
                <div className='row'><p>Produkcja: {<Link to="/tags/USA"><span className="badge bg-primary">USA</span></Link>}</p></div>
                <div className='row'><p>Świat: {<Link to="/tags/star-wars"><span className="badge bg-primary">Gwiezdne Wojny</span></Link>}</p></div>
                <div className='row'><p>Premiera: {<span className="badge bg-primary">12 listopada 2019</span>}</p></div>
                <div className="ratio ratio-16x9">
                    <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/odnRRZKhNPk" title="The Mandalorian | Season 3 Teaser Trailer | Disney+" ></iframe>
                </div>
            </div>
            
        </div>
    </div>
   </div>;
};

export default Details;