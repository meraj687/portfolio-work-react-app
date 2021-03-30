import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
const logo = "https://i.pinimg.com/736x/13/cc/01/13cc0148798e05b010377b3096253f4e.jpg";
const logo1 = "public\logo192.png";
const Aboutme=()=>{
 return(
  <>
   <br/>
   <br/>
   <br/>
  
  <Particles
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"star",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
  <div className="backcolor">  
   <h2 class="About">About Me</h2>
<div className="container">
 <p style={{textAlign:'center'}}>
 <img src="/images/aryaanpic.jpg" alt="" srcset=""style={{width:'60%', border:'none'}}/>
</p>
 <h4 style={{float:'left'}}>
  <Typed
    className="typed-text"
    strings={["To strive for excellence with dedication , positive attitute and passion toward the work that will fully utilize my information skills and best possible way for fulfillment of personal and organizational goals"]}
    typeSpeed={40}
    backSpeed={60}
    loop
    />
 </h4>
</div>
</div>
  </>
 )

}
export default Aboutme;