import NavBar from '../components/Navbar/Navbar';
import ContactCTA from '../components/Contact/contact-cta'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from '../components/Footer/footer'
import Accordion from '../components/Accordion/accordion';

import styles from './Contact.module.scss'

import faq from '../content/questions.json'



function ContactPage() {
    return (
      <div className={styles.section_contact}>
        <NavBar/>
          <div className={styles.contact}>
             <div className={styles.contact__heading}>
                <h1 className="heading heading__secondary">Creating excellent websites together.</h1>
              </div>
              
                  <div className={styles.contact__details}>
                    <div className={styles.contact__detail}>
                      <p className="text text__large text--blue">PHONE</p>
                      <p className="text text__large">+27 66 296 1309</p>
                    </div>
                    <div className={styles.contact__detail}>
                      <p className="text text__large text--blue">EMAIL</p>
                      <p className="text text__large">andrew@andrewkriegler.com</p>
                    </div>
                    <div className={styles.contact__detail}>
                      <p className="text text__large text--blue">INSTAGRAM</p>
                      <Link target='blank' to="https://www.instagram.com/andrewkriegler/"><p className="text text__large">@andrewkriegler</p></Link>
                    </div>
                    <div className={styles.contact__detail}>
                      <p className="text text__large text--blue">LINKED IN</p>
                      <Link target='blank' to="https://www.linkedin.com/in/andrew-kriegler/"><p className="text text__large">Andrew Kriegler</p></Link>
                    </div>
                    <div className={styles.contact__detail}>
                      <p className="text text__large text--blue">FACEBOOK</p>
                      <Link target='blank' to="https://www.facebook.com/andrewkrieglerweb"><p className="text text__large">Andrew Kriegler</p></Link>
                    </div>
                  </div>
            
             </div>
             <div className={styles.faqs}>
                <div className={styles.faqs__heading}>
                    <p className="text text__large -u-margin-bottom">CLICK THE QUESTIONS</p>
                    <h1 className='heading heading__secondary'>COMMON QUESTIONS</h1>
                </div>
                <div className={styles.faqs__faq}>
                {faq.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
                
                </div>
             </div>
            <Footer/>
          </div>
             
           
          
      
    );
  }

  export default ContactPage;