import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require('axios');


const AddMovie = () => {
    const [selected, setSelected] = useState(process.env.PUBLIC_URL + '/mandalorian.webp')
    const [className, setClassName] = useState("card-img-top imgt")

    const handleChange = (event) => {
        setSelected( URL.createObjectURL(event.target.files[0]));
        setClassName("card-img-top")
      };

    const nav = useNavigate();

    const handleSubmit = (event) => {
        console.log(event.target[1].value)
        /*   0 - image 1 - title 2 - duration 3 - desc
             4 - genre 5 - prod  6 - world    7 - date
             8 - premiere
        */
        alert('Movie was submitted');
        

        axios.post('https://at.usermd.net/api/movies',{
            title: event.target[1].value,
            content: event.target[3].value,
            image: 'https://static.wikia.nocookie.net/starwars/images/5/5c/MandalorianArtImagery.jpg'
        })

        event.preventDefault();
        nav('/')
    }

   return <form onSubmit={handleSubmit}><div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img className={`${className} klasa`} src={selected} alt="Movie"></img>
                    <div className="d-grid gap-2">
                        <label className="btn btn-primary" >
                            Upload Image<input type="file" accept="image/*" id="upload" onChange={handleChange} hidden/>
                        </label>
                    </div>
                    <div className="card-body">
                        <div className="col mb-2">
                            <input type="text" className="form-control-sm bg-dark text-light w-100" placeholder="Title" required/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control-sm bg-dark text-light w-100" placeholder="Duration (min.)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0">
                <div className="form-floating mb-3">
                    <textarea className="form-control bg-dark text-light" id="description" rows="3" placeholder="Description" required></textarea>
                    <label htmlFor="description" className="form-label">Movie description</label>
                </div>

                <div className='row'>
                    <p className="col-sm-2">Genre:</p>
                    <div className="col-md-5">
                        <input type="text" className="form-control bg-dark text-light" placeholder="Genre"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">Production:</p>
                    <div className="col-md-5">
                            <input type="text" className="form-control bg-dark text-light" placeholder="Production"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">World:</p>
                    <div className="col-md-5">
                        <input type="text" className="form-control bg-dark text-light" placeholder="World"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">Premiere:</p>
                    <div className="col-md-5">
                        <input type="date" className="form-control bg-dark text-light" placeholder="Premiere"/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <p className="col-sm-2">Trailer URL:</p>
                    <div className="col-md-5">
                        <input type="url" className="form-control bg-dark text-light" placeholder="Trailer url"/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
            </div>
            
        </div>
    </div>
   </div>
   </form>;
};

export default AddMovie;