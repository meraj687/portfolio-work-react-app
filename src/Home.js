import React from 'react';
import Typed from 'react-typed';
import {Route,Link} from 'react-router-dom';
const Home=()=>{

 return(
  <div className="header-wrapper">
   <div className="main-info">
    <h1>Web Development And Advanced Simulation</h1>
    <Typed
    className="typed-text"
    strings={["Web Design","Web Development","Finite Element Modelling","SolidWork","Fusion 360","Inventor","Adams Simulation"]}
    typeSpeed={40}
    backSpeed={60}
    loop
    />
    <a href="#" className="btn-main-offer"><Link to="/contact">Contact Me</Link></a>
   </div>
  </div>
 )
}
export default Home;