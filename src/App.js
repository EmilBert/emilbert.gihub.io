import './App.css';
import me from './images/me.png';

import Navbar from './Components/Navbar';
import ExpSection from './Components/ExpSection';
import ProjectSection from './Components/ProjectSection';
import * as React from "react";

function App() {
  return (
    <div className="App" id="top">
      <Navbar />

      <div className="section-1">
          <div className="content">
            <img id="me" alt="me" src={me} />
            <div className="text">
              <div><img id="small-me" alt="me" src={me}/><h1><span>&#128075;</span>  Hej, mitt namn är Emil!</h1></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>
            </div>
          </div>
      </div>
      
      <div className="wrapper">

        <div className="section" id="about-section">
          <h1>Om mig</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>

        </div>

        <ExpSection title={"Erfarenheter"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis."}/>

        <ProjectSection title={"Projekt"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis."}/>
        
      </div>
    </div>
  );
}

export default App;
