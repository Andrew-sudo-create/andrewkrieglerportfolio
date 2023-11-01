import { Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'

import styles from './Navbar.module.scss'
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
    
     


        <nav className={styles.navbar}>


          {/* logo */}
          <div className={styles.logo}>
            <img className={styles.logo__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305919/Andrew%20Kriegler/png_iqqofh_zzywuc.png" alt="logo"></img>
          </div>


          <div className={`${styles.navMenu} ${isActive ? `${styles.active}` : ''}`}>

            <Link onClick={removeActive} className={styles.navLink} to="/">Home</Link>
            <Link onClick={removeActive} className={styles.navLink} to="/about">About</Link>
            <Link onClick={removeActive} className={styles.navLink} to="/packages">Packages</Link>
            <Link onClick={removeActive} className={styles.navLink} to="/projects">Projects</Link>
            <Link onClick={removeActive} className={styles.navLink} to="/services">Services</Link>
            <Link onClick={removeActive} className={styles.navLink} to="/contact">Contact</Link>
            
          </div>


          <div className={`${styles.hamburger} ${isActive ? `${styles.active}` : ''}`}  onClick={toggleActiveClass}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

        </nav>


      

  );
    
  }

  export default Navbar;
