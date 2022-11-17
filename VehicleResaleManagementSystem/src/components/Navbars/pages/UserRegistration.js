import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

// core components

function UserRegistration() {
    return(
    <div className="maincontainer">
         
         
          <div class="container">
  
                <div class="card bg-light">
                <article class="card-body mx-auto" style={{maxWidth: "400px"}}>
                    <h4 class="card-title mt-3 text-center">Create Account</h4>
                    <p class="text-center">Get started with your free account</p>
                    <form>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Full name" type="text" />
                    </div> 
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email address" type="email" />
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                        </div>
                        <select class="custom-select" style={{maxWidth: "120px"}}>
                            <option selected="">+91</option>
                            <option value="1">+001</option>
                            <option value="2">+020</option>
                            <option value="3">+011</option>
                        </select>
                        <input name="" class="form-control" placeholder="Phone number" type="text" />
                    </div> 
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                        </div>
                        <select class="form-control">
                            <option selected=""> Select job type</option>
                            <option>Web Developer</option>
                            <option>Full Stack Developer</option>
                            <option>Mean Stack</option>
                        </select>
                    </div> 
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="Create password" type="password" />
                    </div> 
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="Repeat password" type="password" />
                    </div>                                       
                    <div class="form-group">
                        <button type="button" class="btn btn-primary btn-block"> Create Account  </button>
                    </div>     
                    <p class="text-center">Have an account? <a href="#">Log In</a> </p>                                                                 
                </form>
                </article>
                </div> 
                
                </div> 
             
        </div>
     
      
)
};


export default UserRegistration;
