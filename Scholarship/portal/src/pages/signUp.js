import React from "react";
import { useState } from "react";
import "./signUp.css";
import axios from "axios";
import img2 from '../utils/images/img_2.png'
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [name,setName]= useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const registerHandle=async()=>{
    console.log("inside")
    axios.post('http://localhost:4200/api/v1/register', {
      name,
      email,
      password
    })
    .then(function (response) {
      navigate("/");
      // console.log(response);
    })
    .catch(function (error) {
    alert("Retry , some error occured")
      console.log(error);
    });
  
  }

  

  return (
    <>
    <Navbar/>
      <div className="signupMain">
        <div className="signUp1">
          <form className="formMain">
            <h1 className="signUpHead">Create An Account</h1>
            <input type="text" placeholder="Name" className="formIn" onChange={(e)=>{setName(e.target.value)}}></input>
            <input type="email" placeholder="Email" className="formIn" onChange={(e)=>{setEmail(e.target.value)}}></input>

            <input
              type="password"
              placeholder="Password"
              className="formIn"
              onChange={(e)=>{setPassword(e.target.value)}}
            ></input>
            <button className="formBtn" onClick={registerHandle}>Create Account</button>
            
          </form>
        </div>
        <div className="signUp2">

          <img src={img2} alt="signUp" width={700} height={600}></img>
        </div>
      </div>
    </>
  );
}

export default SignUp;
