import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
       <nav className='navbar'>
        <div className='logo mx-3'>
          ScholarShips
          </div>
          <div className='navBtn'>
            <div className='signbtn inBtn'>Sign In</div>
            <div className='signbtn upBtn'>Sign Up</div>

            </div>
        </nav>
    </div>
  )
}
