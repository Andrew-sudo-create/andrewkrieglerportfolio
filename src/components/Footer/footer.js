// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import styles from './footer.module.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer__logo_box}>
            <img className={styles.footer__logo} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305919/Andrew%20Kriegler/png_iqqofh_zzywuc.png"/>
        </div>
        <div className={styles.footer__links}>
            <Link className={styles.footer__link} to="/">Home</Link>
            <Link className={styles.footer__link} to="/about">About</Link>
            <Link className={styles.footer__link} to="/packages">Packages</Link>
            <Link className={styles.footer__link} to="/projects">Projects</Link>
            <Link className={styles.footer__link} to="/services">Services</Link>
            <Link className={styles.footer__link} to="/contact">Contact</Link>
        </div>
      </div>
    );
  }

  export default Footer;