import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
const axios = require('axios');

const Details = () => {
    let { id } = useParams();
    const [item, setItem] = useState([]);
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));

    const nav = useNavigate();
    const fetchFun = () => {
        if(!id){
            nav("/")
            return
        }
        axios({method:'get',url:`https://at.usermd.net/api/movies/${id}`})
        .then((result) => {
            setItem(result.data)
        },
        (error) => {
            nav("/")
            console.error(error)
        })
    }
    
    useEffect(()=>{
        fetchFun()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleDelete = (event) => {
        event.preventDefault()

        axios({
            method: 'delete',
            url: `https://at.usermd.net/api/movie/${id}`,

        }).then((response) => {
            window.location.assign("/")
        }).catch((error) => {
            console.log(error)
        })
    }

   return <div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img className="card-img-top klasa" src={item.image} alt={item.title}></img>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">45 mins</small>
                        </div>
                    </div>
                </div>
                {(!isNotLogged && user.isAdmin === true) && <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>}
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0"><p>{item.content}</p>

                <div className='row'><p>Genre: {<Link to="/tags/sci-fi"><span className="badge bg-primary">Sci-fi</span></Link>}</p></div>
                <div className='row'><p>Production: {<Link to="/tags/USA"><span className="badge bg-primary">US</span></Link>}</p></div>
                <div className='row'><p>World: {<Link to="/tags/star-wars"><span className="badge bg-primary">Star Wars</span></Link>}</p></div>
                <div className='row'><p>Premiere: {<span className="badge bg-primary">12 November 2019</span>}</p></div>
                <div className="ratio ratio-16x9">
                    <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/odnRRZKhNPk" title="The Mandalorian | Season 3 Teaser Trailer | Disney+" ></iframe>
                </div>
            </div>
            
        </div>
    </div>
   </div>;
};

export default Details;