import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer'
import Project from '../components/Projects/Project'; 

import projects from '../content/projects.json'
import styles from './Projects.module.scss'

function ProjectsPage() {
    return (
      <div className={styles.projects}>
        <NavBar/>
          <div className={styles.projects__header}>
              <h1 className="heading heading__secondary">My web development success stories.</h1>
          </div>
        {
          projects.map((data,id)=>(
            <Project 
              key={id}
              id={data.id}
              name={data.name}
              lastName={data.lastName}
              services={data.services}
              img={data.img}
              url={data.url}
            />
          ))
        }
         <Footer/>
      </div>
    );
  }

  export default ProjectsPage;
