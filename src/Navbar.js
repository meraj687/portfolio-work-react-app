// import React from 'react';
// import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav'

// function Navbar(){
// <Navbar bg="dark" expand="lg" style={{zIndex:'2'}}>
//       <div className="container">
//   <Navbar.Brand href="#home" className="navBarBrand1"><img src="https://logodix.com/logo/58001.png" alt="logo" srcSet="" style={{width:'20%'}}/></Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="ml-auto" style={{letterSpacing:'0.0375rem',cursor:'pointer',textTransform:'uppercase'}}>
//       <Nav.Link href="#home"  className="nav-links" style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem',cursor:'pointer' }}><Link to="">Home</Link></Nav.Link>
//       <Nav.Link href="src\Aboutme"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/about">About</Link>
//       </Nav.Link>
//       <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/portfolio">Portfolio</Link></Nav.Link>
//       <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}><Link to="/contact">Contact</Link></Nav.Link>
//       {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown> */}
//     </Nav>
//     {/* <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form> */}
//   </Navbar.Collapse>
//   </div>
// </Navbar>
// }

// export default Navbar;

// import React from 'react';
// import {Link} from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';


// function Navbar(){
// return(
  //  <div className="topnav" id="myTopnav">
  //   <a href="#home" class="active">
  //    <Link to="">Home</Link>
  //   </a>
  //  <a href="#news">
  //   <Link to="/aboutme">About</Link>
  //  </a>
  // <a href="#contact">
  //  <Link to="/portfolio">Portfolio</Link>
  // </a>
  // <a href="#about"><Link to="/contact">Contact</Link></a>
  // <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  //   <i class="fa fa-bars"></i>
  // </a>
   
  //  <Link to="/contact">Contact</Link>
  // </div>
// )
// }

// export default Navbar;
import React from 'react';


function Navbar(){
return(
 <>
 <Navbar bg="dark" expand="lg" style={{zIndex:'2'}}>
      <div className="container">
  <Navbar.Brand href="#home" className="navBarBrand1"><img src="https://logodix.com/logo/58001.png" alt="logo" srcSet="" style={{width:'20%'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{letterSpacing:'0.0375rem',cursor:'pointer',textTransform:'uppercase'}}>
      <Nav.Link href="#home"  className="nav-links" style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem',cursor:'pointer' }}>Home</Nav.Link>
      <Nav.Link href="src\Aboutme"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}>About</Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}>Service</Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}>How Work</Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}>Portfolio</Nav.Link>
      <Nav.Link href="#link"  className="nav-links"style={{color:'white',marginRight:'0.75rem',marginLeft:'0.75rem'}}>Contact</Nav.Link>
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
 </>
)
}

export default Navbar;