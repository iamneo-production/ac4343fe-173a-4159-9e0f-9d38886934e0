import React from "react";
import "./signUp.css"
import img2 from '../utils/images/img_2.png'
import Navbar from "../components/Navbar";

function signUp() {
  return (
    <>
    <Navbar/>
      <div className="signupMain">
        <div className="signUp1">
          <form className="formMain">
            <h1 className="signUpHead">Create An Account</h1>
            <input type="text" placeholder="Name" className="formIn"></input>
            <input type="email" placeholder="Email" className="formIn"></input>

            <input
              type="password"
              placeholder="Password"
              className="formIn"
            ></input>
            <button className="formBtn">Create Account</button>
            
          </form>
        </div>
        <div className="signUp2">

          <img src={img2} alt="signUp" width={700} height={600}></img>
        </div>
      </div>
    </>
  );
}

export default signUp;
