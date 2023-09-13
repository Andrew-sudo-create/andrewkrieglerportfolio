import NavBar from '../components/Navbar/Navbar';
import SectionAbout from '../views/home/section-about'
import SectionOffers from '../views/home/section-offers';
import SectionProjects from '../views/home/section-projects';
import SectionServices from '../views/home/section-services';
import SectionValues from '../views/home/section-values';
import ContactCTA from '../components/Contact/contact-cta'
import Footer from '../components/Footer/footer'

import './home.scss';


function HomePage() {
    return (
      <div className="home">
          <NavBar/>
          <SectionAbout/>
          <SectionOffers/>
          <SectionProjects/>
          <SectionServices/>
          <SectionValues/>
          <ContactCTA/>
          <Footer/>
      </div>
    );
  }

  export default HomePage;