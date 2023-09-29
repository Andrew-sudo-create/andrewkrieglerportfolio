
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {matchPath, BrowserRouter as useParams} from "react-router-dom";

import HomePage from './pages/Home.js';
import AboutPage from './pages/About.js'
import PackagesPage from './pages/Packages.js'
import ProjectsPage from './pages/Projects.js'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails.js'

import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        
          
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/packages" element={<PackagesPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/projects/:projectId" element={<ProjectDetails/>}/>
          <Route path="/services" element={<ServicesPage/>}/> 
          <Route path="/contact" element={<ContactPage/>}/> 
        
      </Routes>
    </div>

  );
}

export default App;
