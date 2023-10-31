// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';

import styles from './Project.module.scss'
import '../../styles/typography.scss'
import '../../styles/utilities.scss'



function Project(props) {

    return (
      <div className={styles.projects}>
        <div className={styles.projects__content}>
            <h1 data-aos="fade-right" data-aos-duration="1000" className="heading heading__secondary -u-margin-bottom-medium">
                {props.name}
                <br/>
                {props.lastName}
            </h1>
            <div className="-u-margin-bottom-huge">
                
                {
               
                    props.services.map((item,id) =>{
                        return <p key={id} className='text text__large -u-margin-bottom'>{item}</p>
                    })
                
                }
            </div>

           <Link to={`/projects/${props.id}`}><Button className="button" text="SEE PROJECT"/></Link> 
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className={styles.projects__img_box}> 
                <img className={styles.projects__img} src={props.img}/>
        </div>
      </div>
    );
  }

  export default Project;