import React from "react";
import "./Navbar.css";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav_box">
          <h1>E-commerce Application</h1>
          <div className="out"><Link to="/">
          <span className="span1">Sign out</span>
        </Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
