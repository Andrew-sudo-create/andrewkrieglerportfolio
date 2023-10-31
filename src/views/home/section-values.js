// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'

import styles from './section-values.module.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function SectionValues() {
    return (
      <div>
        <div className={styles.values}>
            <div className={styles.values__heading}>
                <h1 className="heading heading__secondary">MY VALUES</h1>
            </div>
            
            <div className={styles.values__value}>
                <img data-aos="fade-right" data-aos-duration="1000" className={styles.values__number} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694588270/Andrew%20Kriegler/1_azvrzl.svg" />
                <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                    <h1 className="heading heading__tertairy -u-margin-bottom-small">INNOVATION & CREATIVITY</h1>
                    <p className='text text__regular'>I use new and creative ways to make websites. When I work on projects, I like to find different solutions. I want to make websites that are special and exciting in the changing digital world.</p>
                </div>
            </div>
            <div className={styles.values__value}>
                <img data-aos="fade-right" data-aos-duration="1000" className={styles.values__number} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694588270/Andrew%20Kriegler/2_dscodr.svg"/>
                <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                    <h1 className="heading heading__tertairy -u-margin-bottom-small">CLIENT-CENTERED COLLABORATION</h1>
                    <p className='text text__regular'>When I make websites, I like working together with others. I talk and share ideas with the people I'm making the website for. This helps me understand what they want the website to do and look like. I use their ideas to make a website that's right for them and even better than they hoped for.</p>
                </div>
            </div>
            <div className={styles.values__value}>
                <img data-aos="fade-right" data-aos-duration="1000" className={styles.values__number} src="https://res.cloudinary.com/du3wd1lbd/image/upload/v1694588270/Andrew%20Kriegler/3_bjpo8b.svg"/>
                <div data-aos="fade-left" data-aos-duration="1000" className={styles.values__content}>
                    <h1 className="heading heading__tertairy -u-margin-bottom-small">CODE EXCELLENCE & PERFORMANCE</h1>
                    <p className='text text__regular'>I love making websites. I make them look great and work well. I use special instructions to make them fast, safe, and work on different devices. I work very hard to make sure the websites are the best they can be and that people can use them without effort.</p>
                </div>
            </div>

        </div>
        
      </div>
    );
  }

  export default SectionValues;