import React from "react";
import axios from "axios";
import {useEffect} from "react";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";


function Category(){
    function a(){
        navigate("/p1")
    }
    function b(){
        navigate("/p1")
    }
    const navigate =useNavigate();
      return(
        <section class="categories" id="categories">
            <h1 class="heading"> PRODUCT CATEGORIES </h1>
            
            <div class="box-container">
                <div class="box">
                    
                        <button type="button" onClick={a}>
                        <h4>MOBILES</h4>
                        </button>
                    
                </div>
            
                <div class="box">
                 
                        <button type="button" onClick={a}>
                        <h4>LAPTOPS</h4>
                        </button>
                    
                </div>
            </div>

        </section>        
    )
}

export default Category;