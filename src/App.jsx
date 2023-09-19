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
              <p> 
                I love developing fun experiences through both web and game development, solving problems through programming and design. I am a creative problem solver who works well alone but prefers working with an ambitious team that enjoys discussions! I am passionate about software development, UI/UX design and games. Places that are creating awesome experiences is where I want to be. I just graduated as a Master of Science in Media Technology and Engineering. 
                <br></br><br></br>
                Here on my website you can read more about my experiences and see some of my projects. If you are interested in my resume you can find it below! I am am currently looking for work within software development, so let me know if you're interested or want to learn more about me.
                </p>
            </div>
          </div>
          <div className="cv-container">
            <a className="download-link" href={cv} download>Click here to download my Resume!<MdDownload/></a>
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
