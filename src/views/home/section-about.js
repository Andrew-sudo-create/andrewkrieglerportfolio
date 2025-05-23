// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'
import { useEffect } from 'react';
// import './section-about.scss';
import styles from './section-about.module.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function SectionAbout() {

  useEffect(()=>{
    AOS.init();
  },[])



    return (
      <div className={styles.section_about}>
        <div className ={styles.about}>
            <div className ={styles.about__content}>
                <p className="heading heading__secondary -u-margin-bottom">I am Andrew, Web Developer, Web Designer & Freelancer.</p>
                <p className="text text__large -u-margin-bottom-large">With a passion for crafting seamless digital experiences, 
                I am dedicated to helping your business thrive in the online world.</p>
                <Button className="button" page="/about" text="MORE ABOUT ME"/>
            </div>
            
            <div className ={styles.about__img_box}>
                <img alt='profile' data-aos="fade-left" data-aos-duration="1000" className ={styles.about__img} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305919/Andrew%20Kriegler/profilephoto_ez9nng_mmbmdw.jpg"/>
            </div>
        </div>
      </div>
    );
  }

  export default SectionAbout;