// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'

import styles from './Project.module.scss'
import '../../styles/typography.scss'
import '../../styles/utilities.scss'



function Project(props) {
    

    return (
      <div className={styles.projects}>
        <div className={styles.projects__content}>
            <h1 className="heading heading__secondary -u-margin-bottom-medium">
                COME
                <br/>
                HONEY
            </h1>
            <div className="-u-margin-bottom-huge">
                <p className="text text__large -u-margin-bottom">DEVELOPEMENT</p>
                <p className="text text__large">DESIGN</p>
            </div>

            <Button className="button" page="/comehoney" text="SEE PROJECT"/>
        </div>
        <div className={styles.projects__img_box}> 
                <img className={styles.projects__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694504188/Andrew%20Kriegler/Home_ejiepj.jpg"/>
        </div>
      </div>
    );
  }

  export default Project;