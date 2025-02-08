import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Outlet  } from "react-router-dom";


function Projects(){
    const [x,setx] = useState(true)

    return(
        <div id="projects">
            <div className="bg-black py-0">
            <div className="text-center pt-5">
            <h2 className="text-light">My Projects</h2>
            <p className="text-light py-3">My name is Mohammed , i live in el-arish , this is my 1st projt in react Dev</p>
            <ButtonGroup aria-label="Basic example" className="rounded-circle mb-5">
                <NavLink to='' className="btn btn-dark border-1 border-light px-5 py-3 rounded-start-5">1st Section</NavLink>
                <NavLink to={'sec2'}  className="btn btn-dark border-1 border-light px-5 py-3 ">2nd Section</NavLink>
                <NavLink to={'sec3'} className="btn btn-dark border-1 border-light px-5 py-3 rounded-end-5">3rd Section</NavLink>
            </ButtonGroup>
            </div>
            <Outlet/>
            </div>
        </div>
    )
}
export default Projects;