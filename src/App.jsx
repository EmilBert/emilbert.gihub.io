import './App.css';
import cv from './images/Emil Bertholdsson - CV.pdf';
import me from './images/emil2.jpg';

import { IconContext} from 'react-icons';
import { MdDownload } from 'react-icons/md';
import { MdPhoneEnabled, MdEmail  } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub  } from 'react-icons/ai';

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
            <div>
              <p> I love developing fun experiences through both web and game development. 
                  I enjoy solving complex problems with a passion for UI/UX design and computer graphics. 
                  I just graduated as a Master of Science in Media Technology and Engineering.
                  Here on my website you can read more about me and see some of my projects. If you are interested in my resumé you can find it below! I am am currently looking for work within software development!</p>
            </div>
          </div>
          <div className="cv-container">
            <a className="download-link" href={cv} download>Click here to download my Resumé!<MdDownload/></a>
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
