// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'

import './section-about.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function SectionAbout() {
    return (
      <div className="section-about">
        <div className ="about">
            <div className ="about__content">
                <p className="heading heading__secondary -u-margin-bottom">I am Andrew, Web Developer, Web Designer & Freelancer.</p>
                <p className="text text__large -u-margin-bottom-large">With a passion for crafting seamless digital experiences, 
                I am dedicated to helping your business thrive in the online world.</p>
                <Button className="button" page="/about" text="MORE ABOUT ME"/>
            </div>
            
            <div className ="about__img-box">
                <img className ="about__img" src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1693814166/Andrew%20Kriegler/profilephoto_ez9nng.jpg"/>
            </div>
            
        </div>
        
      </div>
    );
  }

  export default SectionAbout;