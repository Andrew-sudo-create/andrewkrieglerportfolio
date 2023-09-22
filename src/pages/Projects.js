import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer'
import Project from '../components/Projects/Project';


function ProjectsPage() {
    return (
      <div className="projects">
        <NavBar/>
        <Project/>
      </div>
    );
  }

  export default ProjectsPage;