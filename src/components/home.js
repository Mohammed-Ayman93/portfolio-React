import React from 'react';
import img1 from '../imges/hacker.png';
import { Cursor , useTypewriter } from 'react-simple-typewriter';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Home(){
    const [write] = useTypewriter({
        words: ['FrontEnd Developer' , 'BackEnd Developer','FullStack Developer'],
        loop: {},
        typeSpeed:150,
        deleteSpeed:120
    })
    return(
        <div id='home' className='home min-vh-100'>
            <div className="container">
                <div className="row gap-5 p-1">
                    <div className="col-lg-6 col-12 text-light">
                        <h2 className='border border-1 d-inline-block p-2 title'>Welcome All In My Portfolio</h2>
                        <p className='fs-1 fw-bolder'>Hi! I'm Mohammed Ayman Mokhtar , {write}<Cursor/></p>
                        <p className='text-secondary'>Hello Evreyone , I have 2 years of Experience in Web Development</p>
                        <p className='mt-5'>Let's Connect <Nav.Link className='d-inline-block ms-1' href="#section2"> <FontAwesomeIcon icon={faCircleArrowRight} /> </Nav.Link> </p>
                    </div>
                    <div className="col-lg-4 col-12 text-center">
                        <img src={img1}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;