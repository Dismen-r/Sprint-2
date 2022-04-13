import React, { useState } from "react";
import axios from "axios";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [pwd, setPwd] = useState("");
const [pwd1, setPwd1] = useState("");
const [id, setId] = useState(1005);
const done =()=>{
if(pwd === pwd1){
  axios.post('http://localhost:9090/loginController/addUser',{
      
    "userId": id,
    "password": pwd,
    "role": "user",
    "customer": {
        "customerId": "1002",
        "firstName": fname,
        "lastName": lname,
        "mobileNumber": "undefined",
        "email": email
    }


}).then(function (r){
  setId(id+1);
  console.log(r);
})
navigate("/home");
}
else{
alert("Password does not match! Re-enter again");
}
};
  return (
    <div ><center><br />
    <div className="bluebox">
    <div className="blueboxcontent">
    
    <p>
Create new account :</p>
<table>
  <tr><td>
    First Name :</td>
    <td><input onChange={(e) => setFname(e.target.value)} type="text" name="userid" /></td></tr>
    <br /><br /><tr>
    <td>Last Name :</td>
    <td><input onChange={(e) => setLname(e.target.value)} type="text" name="userid" /></td></tr>
    <br /><br /><tr>
    <td>Email address :</td>
    <td><input onChange={(e) => setEmail(e.target.value)} type="text" name="userid" /></td></tr>
    <br /><br /><tr>
    <td>Password : </td>
    <td><input onChange={(e) => setPwd(e.target.value)} type="password" name="password1" /></td></tr>
    <br /><br /><tr>
    <td>Re-enter Password : </td>
    <td><input onChange={(e) => setPwd1(e.target.value)} type="password" name="password1" /></td></tr>
    </table>
    <br /><center><br /><br />
    <button onClick={done}>Sign Up</button></center><br />
    Back to{" "}
    <Link to="/">
          <span>Login</span>
        </Link>
    </div>
    </div></center>
  </div>
  );
};

export default Signup;
