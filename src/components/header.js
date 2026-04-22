import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';


function Header() {
  const [x,setx]=useState(false);
  const changBg =()=>{
    if(window.scrollY >= 50){
    setx(true);
    }else{
    setx(false)
    }
  }
  window.addEventListener("scroll",changBg)

  return (
    <Navbar expand="lg" className={x ? 'bg-black position-fixed w-100 z-3' : ' position-fixed w-100 z-3'} >
      <Container>
        <HashLink smooth to="#home" className='text-light fs-2 fw-bold'>LOGO</HashLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse  id="basic-navbar-nav" >
          <Nav className="ms-auto p-2 nav0 ">
            <div className='d-flex justify-content-around'>
            <HashLink smooth to="#home">Home</HashLink>
            <HashLink smooth to="#skills">Skills</HashLink>
            <HashLink smooth to="#projects">Projects</HashLink>
            </div>
            <div className='d-flex w-auto justify-content-lg-end'>
            <Nav.Link target='blank' className='icon' href="https://www.linkedin.com/in/m7md-ayman-b52047288/"> <FontAwesomeIcon icon={faLinkedinIn}/>     </Nav.Link>
            <Nav.Link target='blank' className='icon' href="https://www.facebook.com/elmasrey2"> <FontAwesomeIcon icon={faFacebookF} /> </Nav.Link>
            <Nav.Link target='blank' className='icon' href="https://www.instagram.com/mohammed_ayman93/"> <FontAwesomeIcon icon={faInstagram} /> </Nav.Link>
            <HashLink smooth to="#section2" className='conncet'>Let's Connect</HashLink >
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;