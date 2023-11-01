import styles from './contact.module.scss';
import Button from '../../components/Button/button'

function ContactCTA() {
    return (
        <div>
            <div className={styles.contact}>
                <div className={styles.contact__left}>
                    <p className="text text__large -u-margin-bottom-medium">CONTACT</p>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className='heading heading__secondary -u-margin-bottom-medium'>I WOULD LOVE TO CONNECT.
LET’S CHAT!</h1>
                    <div>
                        <img src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694518507/Andrew%20Kriegler/Shape_68_o9luyv.svg' alt='Contact Abstract'/>

                    </div>
                </div>
                <div className={styles.contact__right}>
                    <p data-aos="fade-left" data-aos-duration="1000" className="text text__large -u-margin-bottom-medium">Together, lets create something stunning and outstanding for your audience to admire.</p>
                    <Button className="button" page="/contact" text="CONTACT ME"/>
                </div>
            </div>
        </div>
    );
  }

  export default ContactCTA;