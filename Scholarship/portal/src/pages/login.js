import React from 'react'
import img2 from '../utils/images/img_2.png'
import  './login.css'
import Navbar from '../components/Navbar'

export default function login() {
  return (<>
  <Navbar/>
  
    
    <div className='Main'>
      
      <div className='formDiv'>
          <form className='form'>
        <h1 className='formHead'>Login</h1>
          
            <input type="email" name="mail" placeholder="Email ID" className='mail formInput'/>
          
            <input type="password" name="pass" placeholder="Password" className='pass formInput'/>
          
            <button className='loginBtn formInput' type='button'>Login</button>   
          </form>
      </div>
      <div className='imageDiv'>
        <img src={img2} alt='img2' className='img2'/>
      </div> 
    </div>
    </>
  )
}
