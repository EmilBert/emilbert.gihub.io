import './App.css';
import me from './images/me.png';
import bg from './images/bc.png';

import { IconContext} from 'react-icons';
import { MdDownload } from 'react-icons/md';

import Navbar from './Components/Navbar';
import ExpSection from './Components/ExpSection';
import ProjectSection from './Components/ProjectSection';
import * as React from "react";
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';

//<img id="me" alt="me" src={me} />

function App() {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <div className="App" id="top">
        <Navbar />
        <HeroSection/>
        <div className="wrapper">
          <div className="section" id="about-section">
            <h1>About Me</h1>
            <p>Hi! I love developing fun experiences in both web 
              and game development. I enjoy solving complex problems with a passion for UI/UX design and 
              computer graphics. I am currently persuing my Masters in Science and Engineering in Media Technology.</p>
            </div>
          <div className="downloads">
            <a className="download-link" href={me} download>Emil Bertholdsson-CV-eng.pdf <MdDownload/></a>
            {/* <a className="download-link" href={me} download>Emil Bertholdsson-CV-sv.pdf <MdDownload/></a> */}
          </div>
          <ExpSection />
          <ProjectSection/>
        </div>
        <Footer/>
      </div>
    </IconContext.Provider>
  );
}

export default App;
