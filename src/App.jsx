import './App.css';
import cv from './images/Emil Bertholdsson - CV.pdf';
import me from './images/emil2.jpg';

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
            <img id="me" alt="me" src={me} />
            <div>
              <p> I love developing fun experiences through both web and game development. 
                  I enjoy solving complex problems with a passion for UI/UX design and computer graphics. 
                  I am currently pursuing my Masters in Science and Engineering in Media Technology.
                  Here on my website you can read more about me and see some of my projects. If you are interested in my CV you can find it below!</p>
              <a className="download-link" href={cv} download>Emil Bertholdsson-CV-eng.pdf <MdDownload/></a>
              {/* <a className="download-link" href={me} download>Emil Bertholdsson-CV-sv.pdf <MdDownload/></a> */}
            </div>
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
