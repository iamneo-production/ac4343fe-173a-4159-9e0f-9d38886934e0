import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
       <nav className='navbar'>
        <Link to="/">
        <div className='logo mx-3' >
          ScholarShips
          </div>
          </Link>
          <div className='navBtn'>
            
            <Link className='signbtn inBtn' to="/login">
            <div>Sign In</div>
            </Link>
            <Link to="/register" className='signbtn upBtn'>
            <div>Sign Up</div>
            
            </Link>

            </div>
        </nav>
    </div>
  )
}
