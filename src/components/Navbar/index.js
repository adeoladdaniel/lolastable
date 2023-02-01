import React from "react";

// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import {Nav,Container,Navbar} from "react-bootstrap";







function Navvbar(){


  

   



  

  return(

      <React.Fragment>
<Navbar collapseOnSelect expand="lg" className="top_nav">
<Container>
<Navbar.Brand href="/"><img src="./asset/img/Logo.svg" alt="logo" className="lolalogo" /></Navbar.Brand>
{/* <Navbar.Toggle  /> */}
{/* <Navbar.Collapse id="responsive-navbar-nav"> */}
  <Nav className="lines" >
   
    
    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
 
{/* </Navbar.Collapse> */}
</Container>
</Navbar>
        
      </React.Fragment>
  );
}


export default Navvbar;