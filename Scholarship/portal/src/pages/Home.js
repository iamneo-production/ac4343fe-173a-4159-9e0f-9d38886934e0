import React from 'react'
//import UncontrolledExample from '../components/Carousel'
import Navbar from "../components/Navbar"
import pic1 from "../utils/images/img_1.png"
import pic2 from "../utils/images/Group 5.png"
import pic3 from "../utils/images/Group 6.png"
import pic4 from "../utils/images/Group 7.png"
import "./Home.css"
function Home() {
  return (
<>
<div className="homeMain">
<Navbar/>

<div className="heroSection1">

<img src={pic1} alt="pic" className='heroPic'/>
<div className='heroAbout'>
  <h3>Getting best Scholarship</h3>
  <h3>is Now</h3>
  <h3>
    More Easier
  </h3>
  <button className='heroBtn' type='button'>Get Started</button>
</div>



</div>
<div className="banner1">
<img src={pic2} alt='pic2' className='pic2'/>
</div>
<div className="explore">

  <h1 className='exploreHead'>Start Exploring</h1>
  <div className='exploreSearch'>
    <input className='exploreInput'type="text" ></input>
    <button className='searchBtn'>Search</button>
  </div>

</div>

<img src={pic3} alt='pic3' className='pic3'/>




<img src={pic4} alt='pic4' className='pic4'/>





    </div>




</>


    )
}

export default Home