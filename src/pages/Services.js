import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer'
import Service from '../components/Service/Service'
import SectionHeader from '../views/services/section-header';
import services from '../content/services.json'

import styles from './Services.module.scss'

function ServicesPage() {
    return (
      <div className={styles.services_page}>
        <NavBar/>
        <SectionHeader/>
        {services.services.map((data,id) =>(

          <Service
            key={id} 
            icon={data.icon} 
            service={data.service} 
            offers={services.services[id].offers}
            heading={data.heading}
            content={data.content}
            img={data.img}
          />
          
          ))}
        <Footer/>

          
      </div>
    );
  }

  export default ServicesPage;

  // console.log()