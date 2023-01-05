import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {

    return (
        <div className="containter d-flex justify-content-center">
        <div className="col-md-5 px-3 px-lg-5 py-5 bg-dark mb-5">
            <form className="text-white">
                
                <div class="form-floating mb-4 text-dark">
                    <input type="email" id="loginEmail" class="form-control" placeholder="Email address" />
                    <label class="form-label" htmlFor="loginEmail">Email address</label>
                </div>

                
                <div class="form-floating mb-4 text-dark">
                    <input type="password" id="loginPass" class="form-control" placeholder="Password"/>
                    <label class="form-label" htmlFor="loginPass">Password</label>
                </div>

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label class="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
                
                <div class="text-center">
                    <p>Not a member? <Link to="/signup">Register</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-github"></i>
                    </button>
                </div>
                </form>
        </div>
        </div>
   )
};
export default LoginForm;