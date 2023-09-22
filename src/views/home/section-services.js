// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'

import styles from './section-services.module.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function SectionServices() {
    return (
      <div>
        
            <div className={styles.services}>
                <div className={styles.services__left}>
                    <p className="text text__large -u-margin-bottom-medium">HOW I WORK</p>
                    <h1 className='heading heading__secondary -u-margin-bottom-medium'>I help my clients succeed with good looking websites and quality service.</h1>
                    <div>
                        <img src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694518507/Andrew%20Kriegler/Shape_68_o9luyv.svg' alt=''/>

                    </div>
                </div>
                <div className={styles.services__right}>
                    <p className="text text__large -u-margin-bottom-medium">Through communication and understanding of my clients goals, I strive to empower and elevate there online presence and exceed their audience’s expectations. </p>
                    <Button className="button" page="/services" text="MY SERVICES"/>
                </div>
            </div>
        
        
      </div>
    );
  }

  export default SectionServices;