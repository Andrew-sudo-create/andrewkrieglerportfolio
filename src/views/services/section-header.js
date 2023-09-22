// import NavBar from '../components/Navbar/Navbar';
import Button from '../../components/Button/button'

// import './section-about.scss';
import styles from './section-header.module.scss';
import '../../styles/typography.scss'
import '../../styles/utilities.scss'

function SectionHeader() {
    return (
      <div className={styles.header}>
        <h1 className='heading heading__secondary -u-margin-bottom-huge'>We create your vision together.</h1>
        <div className={styles.header__tags}>
            <p className={`${styles.header__tag} text text__large`}>DESIGN</p>
            <p className={`${styles.header__tag} text text__large`}>DEVELOPEMENT</p>
            <p className={`${styles.header__tag} text text__large`}>BRAND</p>
            <p className={`${styles.header__tag} text text__large`}>ELEVATION</p>
        </div>
      </div>
    );
  }

  export default SectionHeader;