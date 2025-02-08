import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row p-5 rounded-5 bg-light inputGroup mx-3">
                    <div className="col-lg-6 col-12 px-5">
                        <h2>See My Projects At Once & leave Here Your E-mail Address</h2>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div id="ss" className="border rounded-5 p-2 row">
                            <input type="text" className="col-8 m-0" placeholder="Enter Your Email Here ..."/> 
                            <button className="btn p-4 text-light col-4 rounded-5 fw-bold">Submit</button>
                        </div>
                    </div>


                </div>
                <div className="d-flex justify-content-between w-100">
                <Navbar.Brand className='text-light fs-2 fw-bold' href="#home">LOGO</Navbar.Brand>
                <div>
                    <div className="d-flex justify-content-end w-100">
                        <Nav.Link target='blank' className='icon' href="https://www.linkedin.com/in/m7md-ayman-b52047288/"> <FontAwesomeIcon icon={faLinkedinIn}/>     </Nav.Link>
                        <Nav.Link target='blank' className='icon' href="https://www.facebook.com/elmasrey2"> <FontAwesomeIcon icon={faFacebookF} /> </Nav.Link>
                        <Nav.Link target='blank' className='icon' href="https://www.instagram.com/mohammed_ayman93/"> <FontAwesomeIcon icon={faInstagram} /> </Nav.Link>
                    </div>
                    <p className="text-light">--copyrights 2025-- All Rights Reserved here By Mohammed Ayman Mokhtar</p>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;