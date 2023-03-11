import React from 'react'
import { useState } from 'react'
import img2 from '../utils/images/img_2.png'
import  './login.css'
import axios from "axios";
import Navbar from '../components/Navbar'
import {  useNavigate } from 'react-router-dom';

export default function Login() {
const navigate = useNavigate();
const [email,setEmail]=useState("");
const [password,setPassword] = useState("");

const loginHandle =async()=>{

  console.log(email,password)
  axios.post('http://localhost:4200/api/v1/login', {
    email,
    password
  })
  .then(function (response) {
    console.log(response)
    if(response.status===200){
navigate("/")
    }
  })
  .catch(function (error) {
  alert("Retry , some Error occured")
  });

}
  return (<>
  <Navbar/>
  
    
    <div className='Main'>
      
      <div className='formDiv'>
          <form className='form'>
        <h1 className='formHead'>Login</h1>
          
            <input type="email" name="mail" placeholder="Email ID" className='mail formInput' onChange={(e)=>{setEmail(e.target.value)}}/>
          
            <input type="password" name="pass" placeholder="Password" className='pass formInput' onChange={(e)=>{setPassword(e.target.value)}}/>
          
            <button className='loginBtn formInput' type='button' onClick={loginHandle}>Login</button>   
          </form>
      </div>
      <div className='imageDiv'>
        <img src={img2} alt='img2' className='img2'/>
      </div> 
    </div>
    </>
  )
}
