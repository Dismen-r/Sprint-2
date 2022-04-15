import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Context } from "../../Store";
import Store from "../../Store";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";
import Category from './Category'
const Home = () => {
  const nanvigate =useNavigate();
  const [state, setState]=useContext(Context);
  function Address(){
nanvigate("/viewAllAddress")
  }
  function Customer(){
    nanvigate("/Customer")
      }

  function Order(){
        nanvigate("/Order")
    }
  return (
    <div>
      <Navbar />
      UserId :{state.userId}<br />
      <button onClick={Address}>Adddress</button>
      <button onClick={Customer}>Customer</button>
      <button onClick={Order}>Order</button>
      <Category />
    </div>
  );
};

export default Home;
