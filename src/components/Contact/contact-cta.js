import './contact-cta.scss';
import Button from '../../components/Button/button'

function ContactCTA() {
    return (
        <div>
            <div className="contact">
                <div className="contact__left">
                    <p className="text text__large -u-margin-bottom-medium">CONTACT</p>
                    <h1 className='heading heading__secondary -u-margin-bottom-medium'>I WOULD LOVE TO CONNECT.
LET’S CHAT!</h1>
                    <div className="contact__icon-box">
                        <img className="contact__icon" src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694518507/Andrew%20Kriegler/Shape_68_o9luyv.svg' alt=''/>

                    </div>
                </div>
                <div className="contact__right">
                    <p className="text text__large -u-margin-bottom-medium">Together, lets create something stunning and outstanding for your audience to admire.</p>
                    <Button className="button" page="/contact" text="CONTACT ME"/>
                </div>
            </div>
        </div>
    );
  }

  export default ContactCTA;