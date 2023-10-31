import NavBar from '../components/Navbar/Navbar';
import ContactCTA from '../components/Contact/contact-cta'
import Footer from '../components/Footer/footer'
import Package from '../components/Package/Package';

import packages from '../content/packages.json'

import styles from './Packages.module.scss'

function PackagesPage() {
    return (
      <div className={styles.packages}>
        <NavBar/>
        <div className={styles.packages__header}>
          <h1 className="heading heading__secondary -u-margin-bottom-medium">Packages</h1>
          <p className="text text__large -u-margin-bottom-medium">Explore my curated collection of website offers.</p>
          <div className={styles.packages__tags}>
            <p data-aos="fade-up" data-aos-duration="1200" className={`${styles.packages__tag} text text__large`}>CODE</p>
            <p data-aos="fade-up" data-aos-duration="1400" className={`${styles.packages__tag} text text__large`}>NO-CODE</p>
        </div>
        </div>


      {
        packages.map((item,id)=>{
          return <Package 
          key={id}
          icon={item.icon}
          type={item.type}
          info={item.info}
          pricing={item.pricing}
          pages={item.pages}
          features={item.features}
          maintenance={item.maintenance}
          calls={item.calls}
          communication={item.communication}
          terms={item.terms}
          condition={item.condition}
          />
        })
      }
       
       <ContactCTA/>
       <Footer/>

      </div>
    );
  }

  export default PackagesPage;