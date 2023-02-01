// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
// import { useEffect,useState } from "react";
//  import { Container } from "react-bootstrap";6 
import Footer from "../components/Footer";
// import Carousel from 'react-bootstrap/Carousel';
import ContactForm from "../components/Contact";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";


// import { Link } from "react-router-dom";






function Contact(){

const location = useLocation();
    return(

        <>

        {/* <Footer/> */}

<Navbar/> 

<Link to="/" className="btm"> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.125" d="M10.938 8.125h.562c.615 0 1.125-.503 1.125-1.125 0-.615-.51-1.125-1.125-1.125S10.375 6.378 10.375 7v.563c0 .307.255.562.563.562ZM8.5 15.25a2.535 2.535 0 1 0 0-5.07 2.535 2.535 0 0 0 0 5.07Z"/><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.125" d="M13.855 13.75A7.473 7.473 0 0 0 16 8.5C16 4.36 12.64 1 8.5 1a7.503 7.503 0 0 0-5.37 12.742"/></svg> Return to menu</Link>

             
<div className="side_decor">
                <img src="asset/img/Group 160.svg" className="sider_img" alt="stripes"/>

              </div>
{/* ----------- svg for the header section ---------- */}


<h1 className="ordered">
  Complete your  Order
</h1>
                  
                     
                        {/* -------------------- this is a comment ------------------ */}
                      
                    <ContactForm data={location.state?.data} />
                        {/* -------------------- Sponsor section ------------------ */}


                  

                        {/* -------------------- What we do Section ------------------ */}

                    

                        {/* -------------------- How it Works Section ------------------ */}

                       
                
               
                        {/* -------------------- Newsletter Section ------------------ */}
            

               

                    {/* <Footer/> */}
                
          
        </>
    );
}

export default Contact;