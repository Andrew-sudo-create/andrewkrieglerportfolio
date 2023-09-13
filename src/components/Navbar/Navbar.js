import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'

import './Navbar.scss'
import '../../styles/variables.scss'
import '../../styles/typography.scss'


function Navbar() {

  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    
     


        <nav className="navbar">


          {/* logo */}
          <div className="logo">
            <img className="logo__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1693381825/Andrew%20Kriegler/png_iqqofh.png" alt="logo"></img>
          </div>


          <div className={`${"navMenu"} ${isActive ? "active" : ''}`}>

            <Link onClick={removeActive} className= "navLink" to="/">Home</Link>
            <Link onClick={removeActive} className= "navLink" to="/about">About</Link>
            <Link onClick={removeActive} className= "navLink" to="/packages">Packages</Link>
            <Link onClick={removeActive} className= "navLink" to="/projects">Projects</Link>
            <Link onClick={removeActive} className= "navLink" to="/services">Services</Link>
            <Link onClick={removeActive} className= "navLink" to="/contact">Contact</Link>
            
          </div>


          <div className={`${"hamburger"} ${isActive ? "active" : ''}`}  onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

        </nav>


      

  );
    
  }

  export default Navbar;

  // return (
  //   <nav className= "navbar">


  //     {/* 
  //     <div className="navbar__links">
  //       <Link className= "navbar__link" to="/">Home</Link>
  //       <Link className= "navbar__link" to="/about">About</Link>
  //       <Link className= "navbar__link" to="/packages">Packages</Link>
  //       <Link className= "navbar__link" to="/projects">Projects</Link>
  //       <Link className= "navbar__link" to="/services">Services</Link>
  //       <Link className= "navbar__link" to="/contact">Contact</Link>
  //     </div> */}
  //   </nav>
  // );