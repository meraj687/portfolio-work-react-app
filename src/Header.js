import React from 'react';
import Typed from 'react-typed';
const Header=()=>{

 return(
  <div className="header-wrapper">
   <div className="main-info">
    <h1>Web Development And Advanced Simulation</h1>
    <Typed
    className="typed-text"
    strings={["Web Design","Web development","Finite Element Modelling","SolidWork","Fusion 360","Inventor"]}
    typeSpeed={40}
    backSpeed={60}
    loop
    />
    <a href="#" className="btn-main-offer">Contact Me</a>
   </div>
  </div>
 )
}
export default Header;