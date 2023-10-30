import NavBar from '../components/Navbar/Navbar';

import styles from './About.module.scss'

function AboutPage() {
    return (
      <div className={styles.about}>
        <NavBar/>
        <div className={styles.loader}>
            <div className={styles.loader__content}>
              <h1 className='heading heading__primary'>A web developer that creates and inspires.</h1>
                <div className={styles.loader__tags}>
                  <p className={`${styles.loader__tag} text text__large`}>NODE JS</p>
                  <p className={`${styles.loader__tag} text text__large`}>VANILLA JS</p>
                  <p className={`${styles.loader__tag} text text__large`}>REACT JS</p>
                  <p className={`${styles.loader__tag} text text__large`}>CSS</p>
                  <p className={`${styles.loader__tag} text text__large`}>SASS</p>
                  <p className={`${styles.loader__tag} text text__large`}>WORDPRESS</p>
                  <p className={`${styles.loader__tag} text text__large`}>MONGO DB</p>
                  <p className={`${styles.loader__tag} text text__large`}>EXPRESS JS</p>
                  <p className={`${styles.loader__tag} text text__large`}>HTML</p>
                </div>
            </div>
            <div className={styles.loader__image_box}>
              <img className={styles.loader__image} src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305919/Andrew%20Kriegler/profilephoto_ez9nng_mmbmdw.jpg'></img>
            </div>
        </div>
      </div>
    );
  }

  export default AboutPage;