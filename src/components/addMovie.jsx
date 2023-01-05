import React, { useState } from "react";
//import { Link } from "react-router-dom";



const AddMovie = () => {
    const [selected, setSelected] = useState(process.env.PUBLIC_URL + '/mandalorian.webp')
    const [className, setClassName] = useState("card-img-top imgt")

    const handleChange = (event) => {
        setSelected( URL.createObjectURL(event.target.files[0]));
        setClassName("card-img-top")
      };

   return <div className="flexCenter">
    <div className="album py-5 bg-dark mb-5">
        <div className="row justify-content-center">
            <div className="col-md-2">
                <div className="card mb-4 box-shadow bg-dark text-white">
                    <img id='frame' className={className} src={selected} alt="Movie"></img>
                    <div className="d-grid gap-2">
                        <label className="btn btn-primary" >
                            Upload Image<input type="file" id="upload" onChange={handleChange} hidden/>
                        </label>
                    </div>
                    <div className="card-body">
                        <div className="col mb-2">
                            <input type="text" className="form-control-sm bg-dark text-light w-100" placeholder="Title"/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control-sm bg-dark text-light w-100" placeholder="Duration (min.)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 text-white p-4 p-lg-0">
                <div className="form-floating mb-3">
                    <textarea className="form-control bg-dark" id="description" rows="3" placeholder="Description"></textarea>
                    <label htmlFor="description" className="form-label">Movie description</label>
                </div>

                <div className='row'>
                    <p className="col-sm-2">Gatunek:</p>
                    <div className="col-md-5">
                        <input type="text" className="form-control bg-dark text-light" placeholder="Genre"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">Produkcja:</p>
                    <div className="col-md-5">
                            <input type="text" className="form-control bg-dark text-light" placeholder="Production"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">Świat:</p>
                    <div className="col-md-5">
                        <input type="text" className="form-control bg-dark text-light" placeholder="World"/>
                    </div>
                </div>
                <div className='row'>
                    <p className="col-sm-2">Premiera:</p>
                    <div className="col-md-5">
                        <input type="date" className="form-control bg-dark text-light" placeholder="Premiere"/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <p className="col-sm-2">Link do trailera:</p>
                    <div className="col-md-5">
                        <input type="url" className="form-control bg-dark text-light" placeholder="Trailer url"/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" class="btn btn-primary mb-3">Dodaj</button>
                </div>
            </div>
            
        </div>
    </div>
   </div>;
};

export default AddMovie;