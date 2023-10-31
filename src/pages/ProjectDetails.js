import { useState,useEffect } from 'react'

import  {useParams} from "react-router-dom";

import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer'
import ContactCTA from '../components/Contact/contact-cta'

import details from '../content/details.json'

import styles from "./ProjectDetails.module.scss"

import React from 'react'



function ProjectDetails() { 

   const params = useParams()
   const projectId = params.projectId
   
   // console.log(projectId);
   console.log(details[projectId].name);
   
    return (    
       <div>    
          <NavBar/>
         <div className={styles.details}>
            <div className={styles.details__client}>
               <div data-aos="fade-right" data-aos-duration="1000" className={styles.details__name}>
                  <h1 className="heading heading__primary">
                     {details[projectId].name}
                  </h1>
                  <h1 className="heading heading__primary -u-margin-bottom">
                     {details[projectId].lastName}
                  </h1>
                  <p className="text text__large">Find out how I elevated this brand by creating a stunning and functional website that is motivated by simplicity and quality.</p>        
               </div>
               <div className={styles.details__info}>
                     <div data-aos="fade-left" data-aos-duration="1000" className={styles.details__detail}>
                        <p className="text text__large text--blue">CLIENT</p>
                        <p className="text text__large">{details[projectId].client}</p>
                     </div>
                     <div data-aos="fade-left" data-aos-duration="1000" className={styles.details__detail}>
                        <p className="text text__large text--blue">YEAR</p>
                        <p className="text text__large">{details[projectId].year}</p>
                     </div>
                     <div data-aos="fade-left" data-aos-duration="1000" className={styles.details__detail}>
                        <p className="text text__large text--blue">TIMELINE</p>
                        <p className="text text__large">{details[projectId].timeline}</p>
                     </div>
                     <div data-aos="fade-left" data-aos-duration="1000" className={styles.details__detail}>
                        <p data-aos="fade-left" data-aos-duration="1000" className="text text__large text--blue">SERVICES</p>
                        {
                           details[projectId].services.map((item,id) =>{
                              return <span key={id} className="text text__large -u-margin-right">{item}</span>
                           })
                        }
                        
                     </div>
                     <div data-aos="fade-left" data-aos-duration="1000" className={styles.details__detail}>
                        <p className="text text__large text--blue">WEBSITE</p>
                        <p className="text text__large">{details[projectId].website}</p>
                     </div>
               </div>
            </div>
            <div className={styles.details__project}>

               <div className={styles.details__description}>
                  <div className={styles.details__sticky}>
                  <div className={styles.details__item}>
                     <img className={styles.details__icon} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1695894586/Andrew%20Kriegler/challenge_r3rjyk.svg"/>
                     <h1 className="heading heading__medium -u-margin-bottom">CHALLENGE</h1>
                     <p className="text text__regular">My client needed a website that suited her warm Western Cape wedding photography as well as a elegant and “girly” feel.</p>
                  </div>
                  <div className={styles.details__item}>
                     <img className={styles.details__icon} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1695894593/Andrew%20Kriegler/solution_eqi0v2.svg"/>
                     <h1 className="heading heading__medium -u-margin-bottom">SOLUTION</h1>
                     <p className="text text__regular">With connection and collaboration we came decided to go with a pastel colour pallet with an elegant font pair leading with simplicity.</p>
                  </div>
                  <div className={styles.details__item}>
                     <img className={styles.details__icon} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1695894590/Andrew%20Kriegler/results_xppekb.svg"/>
                     <h1 className="heading heading__medium -u-margin-bottom">RESULTS</h1>
                     <p className="text text__regular">The website came out amazing and exactly like the client wanted, she was able have her brand elevated and showcase her wonderful work.</p>
                  </div>
               </div>
               </div>

               <div className={styles.details__images}>
                        {
                           details[projectId].images.map((item,id) =>{
                              return(
                              
                              <div className={styles.details__img_box}>
                                 <img key={id} className={styles.details__img} src={item}/>
                              </div>
                                    ) 
                           })
                        }
                  
               </div>
            </div>


         </div>
         <ContactCTA/>
          <Footer/>
       </div>  
    )}

    export default ProjectDetails;