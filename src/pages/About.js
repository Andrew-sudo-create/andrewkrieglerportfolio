import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer'
import ContactCTA from '../components/Contact/contact-cta'
import styles from './About.module.scss'

function AboutPage() {
    return (
      <div className={styles.about}>
        <NavBar/>
        <div className={styles.loader}>
            <div className={styles.loader__content}>
              <h1 className='heading heading__primary'>A web developer that creates and inspires.</h1>
                <div className={styles.loader__tags}>
                  <p data-aos="fade-up" data-aos-duration="1200" className={`${styles.loader__tag} text text__large`}>NODE JS</p>
                  <p data-aos="fade-up" data-aos-duration="1400" className={`${styles.loader__tag} text text__large`}>VANILLA JS</p>
                  <p data-aos="fade-up" data-aos-duration="1600" className={`${styles.loader__tag} text text__large`}>REACT JS</p>
                  <p data-aos="fade-up" data-aos-duration="1800" className={`${styles.loader__tag} text text__large`}>CSS</p>
                  <p data-aos="fade-up" data-aos-duration="2000" className={`${styles.loader__tag} text text__large`}>SASS</p>
                  <p data-aos="fade-up" data-aos-duration="2200" className={`${styles.loader__tag} text text__large`}>WORDPRESS</p>
                  <p data-aos="fade-up" data-aos-duration="2400" className={`${styles.loader__tag} text text__large`}>MONGO DB</p>
                  <p data-aos="fade-up" data-aos-duration="2600" className={`${styles.loader__tag} text text__large`}>EXPRESS JS</p>
                  <p data-aos="fade-up" data-aos-duration="2800" className={`${styles.loader__tag} text text__large`}>HTML</p>
                </div>
            </div>
            <div className={styles.loader__image_box}>
              <img alt='profile' data-aos="fade-left" data-aos-duration="1000" className={styles.loader__image} src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1698305919/Andrew%20Kriegler/profilephoto_ez9nng_mmbmdw.jpg'></img>
            </div>
        </div>

        <div className={styles.values}>
         
            <div className={styles.values__heading}>
            <div className={styles.sticky}>
              <p className='text text__large -u-margin-bottom'>MY VALUES</p>
              <h1 className='heading heading__secondary'>My vision is to create good looking websites that inspire and innovate.</h1>
              </div>
            </div>
          

          <div className={styles.values__values}>
            <div className={styles.values__value}>
              <img alt='1' data-aos="fade-right" data-aos-duration="1000" src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694420184/Andrew%20Kriegler/design_medx1t.svg'/>
              <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                <h1 className='heading heading__medium -u-margin-bottom'>INNOVATION & CREATIVITY</h1>
                <p className='text text__regular'>I use new and creative ways to make websites. When I work on projects, I like to find different solutions. I want to make websites that are special and exciting in the changing digital world.</p>
              </div>
            </div>
            <div className={styles.values__value}>
            <img alt='2' data-aos="fade-right" data-aos-duration="1000" src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694421385/Andrew%20Kriegler/developement_sssaaz.svg'/>
            <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                <h1 className='heading heading__medium -u-margin-bottom'>CLIENT-CENTERED COLLABORATION</h1>
                <p className='text text__regular'>When I make websites, I like working together with others. I talk and share ideas with the people I'm making the website for. This helps me understand what they want the website to do and look like. I use their ideas to make a website that's right for them and even better than they hoped for.</p>
              </div>
            </div>
            <div className={styles.values__value}>
              <img alt='3' data-aos="fade-right" data-aos-duration="1000" src='https://res.cloudinary.com/du3wd1lbd/image/upload/v1694421392/Andrew%20Kriegler/elevation_gs99wi.svg'/>
              <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                <h1 className='heading heading__medium -u-margin-bottom'>CODE EXCELLENCE & PERFORMANCE</h1>
                <p className='text text__regular'>I use new and creative ways to make websites. When I work on projects, I like to find different solutions. I want to make websites that are special and exciting in the changing digital world.</p>
              </div>
           </div>
          </div>
        </div>


        <div className={styles.values}>
         
         <div className={styles.values__heading}>
         <div className={styles.sticky}>
           <h1 className='heading heading__secondary -u-margin-bottom'>ABOUT ME</h1>
           <p className='text text__mega'>A young creative, inquisitive developer with a passion for learning and growing.</p>
           </div>
         </div>
       

       <div className={styles.values__values}>
         <p data-aos="fade-left" data-aos-duration="1000" className='text text__mega'>When I was 15, I started learning about making websites. Now I'm 20 and I love it. I like creating things that everyone can see on the internet. I saw that many new businesses don't have good websites, even though they have great things to offer. Every business needs a nice website that works well, and I'm happy I can help with that.</p>
       </div>
     </div>
        <ContactCTA/>
        <Footer/>
      </div>
    );
  }

  export default AboutPage;