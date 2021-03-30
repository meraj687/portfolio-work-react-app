import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import Particles from 'react-particles-js';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import {Route,Link} from 'react-router-dom';
import Channel from './Channel';
const logo = "https://logodix.com/logo/58001.png";
const Test=()=>{
  return(
    <>
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
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar bg="dark" expand="lg" style={{zIndex:'2'}}>
      <div className="container">
  <Navbar.Brand href="#home" className="navBarBrand1"><Link to="/home"><img src="https://logodix.com/logo/58001.png" alt="logo" srcSet="" style={{width:'50%',border:'none'}}/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{letterSpacing:'0.0375rem',cursor:'pointer',textTransform:'uppercase'}}>
      <Nav.Link href="#home"  className="nav-links" style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem',cursor:'pointer' }}><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link href="src\Aboutme"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/aboutme">About</Link></Nav.Link>
      <Nav.Link href="src\Aboutme"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/channel">Channels</Link></Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/skills">Skills</Link></Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/portfolio">Portfolio</Link></Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/contact">Contact</Link></Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
  </div>
</Navbar>
{/* <Header/> */}
<Route exact path="/home" component={Home}/>
     <Route exact path="/aboutme" component={Aboutme}/>
     <Route exact path="/portfolio" component={Portfolio}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/skills" component={Skills}/>
     <Route exact path="/channel" component={Channel}/>
{/* <Particles
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
          type:"square",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    /> */}
{/* <Aboutme/> */}
{/* <Particles
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
    /> */}
{/* <Skills/> */}
{/* <Contact/> */}
    </>
  )
}

export default Test;