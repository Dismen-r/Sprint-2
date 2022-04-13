import React, { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("m here");
      navigate("/home");
    } else {
      alert("User not found !!! Try again");
    }
  }

  function checkIfUserIsValid() {
    axios.get("http://localhost:9090/loginController/getUser/"+username).then(response=>{
      setPwd(response.data.password);
    }).catch(e=>{
      console.log(e);
    });


    if (password === pwd) return true;
    else return false;
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
        <button onClick={login}>Login</button>
      
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
