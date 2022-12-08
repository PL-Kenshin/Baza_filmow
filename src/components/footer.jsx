import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {


   return (
    <footer class="bg-dark text-center text-white">
    
    <div class="container p-4">
      
      <section>
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i class="fa fa-facebook-f"></i>
        </a>
  
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="fa fa-twitter"></i>
        </a>
  
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="fa fa-google"></i>
        </a>
  
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="fa fa-instagram"></i>
        </a>
  
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="fa fa-linkedin"></i>
        </a>
  
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="fa fa-github"></i>
        </a>
      </section>

    </div>

    <div class="text-center p-3">
      © 2022 Copyright: Ptak Mateusz
    </div>
    
  </footer>
    )
};

export default Footer;