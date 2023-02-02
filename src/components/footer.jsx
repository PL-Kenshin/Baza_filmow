import React from "react";

const Footer = () => {
    let year = new Date().getFullYear()

   return (
    <footer className="bg-dark text-center text-white">
    
    <div className="container p-4">
      
      <section>
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fa fa-facebook-f"></i>
        </a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="fa fa-twitter"></i>
        </a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="fa fa-google"></i>
        </a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="fa fa-instagram"></i>
        </a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="fa fa-linkedin"></i>
        </a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="fa fa-github"></i>
        </a>
      </section>

    </div>

    <div className="text-center p-3">
      © {year} Copyright: Ptak Mateusz
    </div>
    
  </footer>
    )
};

export default Footer;