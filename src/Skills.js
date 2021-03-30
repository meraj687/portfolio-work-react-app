import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Particles from 'react-particles-js';


function Skills(){
  return(
   <>
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
   <h2 className="skills">SKILLS</h2>
   <br/><br/><br/>
      {/* <div className="row">
       <div className="column">
        <img src="https://d2t1xqejof9utc.cloudfront.net/groups/pictures/25/original.jpg?1520422528" alt="" srcset="" style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="data:image/jpeg;base64,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" alt="" srcset="" style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://www.eucap2017.org/images/exhibitors-paris-2017/ansys-logo-w-blur.eps/image" alt="" srcset="" style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://forums.autodesk.com/t5/image/serverpage/image-id/640292i73D77765F8A63C50/image-size/large?v=v2&px=999" alt="" srcset="" style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://lh3.googleusercontent.com/proxy/2fCnJjCZw5_wt3bFZEtw4P9HQ1BxGsAk1b7Mv-X96hU7wH-mEx1-3NaAWZWSfLrFnjBJuRPtTuMPldNYXuj_usq9t7V7z_MIoxTvt1iy3JzCV00aHf8QpK0DZwI9pjZlpq_TXx3yKESFd2xjigQ" alt="" srcset="" style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://lh3.googleusercontent.com/proxy/A6m4HuPxhkt-VZdqvx1Lm3NgWU5JrLMGH2G81_jtTE9fMkOe3Y5zSvvEmiy8lJy3VWa8StaG39-FPEroE-8YGbTbGV5yQZE9RqG9yR6F8SECh0RRs3jFPqlGHWOBcoPj1IUMjxkkXA" alt="" srcset=""style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--bLwP4QRs--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/z0gf53sy2i9u3cofqt30.png" alt="" srcset="" 
        style={{width:'100%'}}/>
       </div>
       <div className="column">
        <img src="https://i.ytimg.com/an/XD7HBFlIFMM/73075643-6561-4a39-a0e0-f9c3e426a06a_mq.jpg?v=5cb4d821" alt="" srcset=""  style={{width:'100%'}}/>
       </div>
      </div> */}


      <div className="container">
  <img src="https://cdn.worldvectorlogo.com/logos/solidworks.svg" width="960" height="300" />
  <img src="https://forums.autodesk.com/t5/image/serverpage/image-id/640292i73D77765F8A63C50/image-size/large?v=v2&px=999" width="960" height="300" />
  <img src="https://forums.autodesk.com/t5/image/serverpage/image-id/409356i39692AB39E5C6E40/image-size/large?v=v2&px=999" width="960" height="300" />
  <img src="https://i.pinimg.com/originals/6b/d0/33/6bd03381610fc3df991854daa6f225a9.png" width="960" height="300" />
  <img src="https://1000logos.net/wp-content/uploads/2020/02/AutoCAD-Logo.png" width="960" height="300" />
  <img src="https://i.pinimg.com/originals/b7/73/eb/b773ebf480d1445562ac4a53d417315b.jpg" width="960" height="300" />
  <img src="https://miro.medium.com/max/580/1*xh9OVrRn7buQIdGt_ScFwg.jpeg" width="960" height="300" />
  <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" width="960" height="300"/>
  <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png" width="960" height="300"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Xampp_logo.svg/1280px-Xampp_logo.svg.png" width="960" height="300"/>
  <img src="https://simteq.co.za/wp-content/uploads/2016/08/Adams.png" width="960" height="300"/>
  <img src="https://ih1.redbubble.net/image.512523322.6908/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" width="960" height="300"/>
  
 </div>
   </>
  )
}

export default Skills;