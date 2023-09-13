// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './footer.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function Footer() {
    return (
      <div className="footer">
        <div className="footer__logo-box">
            <img className="footer__logo" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1693381825/Andrew%20Kriegler/png_iqqofh.png"/>
        </div>
        <div className="footer__links">
            <Link className= "footer__link" to="/">Home</Link>
            <Link className= "footer__link" to="/about">About</Link>
            <Link className= "footer__link" to="/packages">Packages</Link>
            <Link className= "footer__link" to="/projects">Projects</Link>
            <Link className= "footer__link" to="/services">Services</Link>
            <Link className= "footer__link" to="/contact">Contact</Link>
        </div>
      </div>
    );
  }

  export default Footer;