// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'

import styles from './Service.module.scss'
import '../../styles/typography.scss'
import '../../styles/utilities.scss'



function Service(props) {
    

    return (
      <div className={styles.service}>
        <div className={styles.service__service}>
            <div className={styles.service__sticky}>
            <img alt='icon' className='-u-margin-bottom' src={props.icon}/>
            <h1 className="heading heading__medium -u-margin-bottom">{props.service}</h1>
            
                {
                // console.log(props.offers)
                    props.offers.map((item,id) =>{
                        return <p key={id} className='text text__large -u-margin-bottom'>{item}</p>
                    })
                
                }
    
            <Button className="button" page="/contact" text="GET IN TOUCH"/>
            </div>
        </div>
        <div className={styles.service__info}>
            <h1 data-aos="fade-left" data-aos-duration="1000" className="heading heading__medium -u-margin-bottom">{props.heading}</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="text text__regular -u-margin-bottom">{props.content}</p>
            <div data-aos="fade-left" data-aos-duration="1000" className={styles.service__img_box}>
                <img className={styles.service__img} src={props.img}/>
            </div>
        </div>
      </div>
    );
  }

  export default Service;