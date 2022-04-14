import React, { useState} from "react";
//import {useContext} from 'react';
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';
//import { Context } from "../../Components/store";
//const [usrId]= setGlobalState("usrId");

const Login = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [isLogged, setIsLogged] = useState("");
  //const [user, setUser] = useState("");
  let pwd=" ";

  function Llogin() {
    //const [state, setState]=useContext(Context);
  //console.log(state.Gid);
    if(username === ""){
      alert("Enter userid");
      return;
    }
    if(password === ""){
      alert("Enter password");
      return;
    }
    

  function checkIfUserIsValid() {
    axios.get("http://localhost:9090/loginController/getUser/"+username).then(response=>{

      pwd=response.data.password;
     
      
    }).catch(e=>{
      console.log(e);
      
      return false;
    });
    console.log(pwd);
    console.log(password);
    if (password === pwd) {
      return true;}
    else {
      alert("User not found !!! Try again");
      return false;}
      
  }
  let isLogged = checkIfUserIsValid();
    if (isLogged) {
      navigate("/home");
    } 
  }
  return (
    <div><br />
      <center>
      <div className="bluebox">
      <div className="blueboxcontent">
      <img src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"></img>
      <p>Login</p><br />
      
        <div>
          <label>Username</label>{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br />
        <div>
          <label>Password</label>{"      "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        <button onClick={Llogin}>Login</button>
      
      <br /><br />
      <div>
        {" "}
        Not an existing user??{" "}
        <Link to="/signup">
          <span>Signup</span>
        </Link>
      </div>
      </div>
      </div>
      </center>
    </div>
  );
};

export default Login;
