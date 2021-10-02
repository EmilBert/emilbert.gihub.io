import './App.css';
import me from './images/me.png';
import cc from './images/cc.png';
import cloth from './images/cloth.png';
import dunwell from './images/dunwell.png';
import scroll from './images/scroll.png';
import bt from './images/bt.png';
import * as React from "react";

function App() {
  return (
    
    <div className="App">
      
      <nav>
        <div className="wrapper">
          <ul>
            <li>EB</li>
            <li>OM MIG</li>
            <li>ERFARENHET</li>
            <li>PROJEKT</li>
          </ul>
        </div>
      </nav>

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
        
        <div className="section section-2">
            <h2>Om mig</h2>
            <p>Dra mig baklänges o spela min minecraft</p>
        </div>

        <div className="section section-3 flex">
          <div className="text">
          <h2>Erfarenheter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat viverra lorem, consectetur ornare lacus bibendum non. Aenean vitae orci efficitur, suscipit nunc eget, porttitor mi. Etiam a aliquam lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar elit tempus, accumsan quam eget, vehicula sem. Donec faucibus felis non aliquam ultricies. Curabitur eget quam tellus. Cras sed ullamcorper lectus, a gravida ligula.</p>
          </div>
          <div className="text-card-container">
            
              {/* <div class="text-card programming-card"><h3>C++ fan va roligt med programmering!!!!!</h3><p>kanske</p></div>
              <div class="text-card programming-card"><h3>Unity</h3><p>kanske</p></div>
              <div class="text-card programming-card"><h3>Java</h3><p>kanske</p></div>
              <div class="text-card programming-card"><h3>Python</h3><p>kanske</p></div>
            
              <div class="text-card webb-card"><h3>HTML</h3><p>kanske</p></div>
              <div class="text-card webb-card"><h3>CSS</h3><p>kanske</p></div>
              <div class="text-card webb-card"><h3>React</h3><p>kanske</p></div>
              <div class="text-card webb-card"><h3>JS</h3><p>kanske</p></div>
              <div class="text-card webb-card"><h3>SQL</h3><p>kanske</p></div> */}
            
              <div class="text-card education-card"><h3>MoE Media Technology</h3><p>Linköpings Tekniska högskola</p></div>
              <div class="text-card education-card"><h3>Teknisk Gymnasie utbildning</h3><p>Berzeliusskolan Linköping</p></div>
              <div class="text-card education-card"><h3>Civilingenjör inom Medieteknik</h3><p>kanske</p></div>
            
              {/* <div class="text-card skill-card"><h3>Scrum</h3><p>kanske</p></div>
              <div class="text-card skill-card"><h3>Ledarskap</h3><p>kanske</p></div>
              <div class="text-card skill-card"><h3>Utlärning</h3><p>kanske</p></div> */}
            
          </div>
        </div>
        <div className="section section-4">
            <h2>Projekt</h2>
            <p>Projekt jag gjort eller deltagit i skapandet av!</p>

            <div className="banner-cards-container">
            <div className="banner-card"  style={{backgroundImage: `url(${scroll})`}}> <div className="text"><h3>Scroll</h3><p>Projekt gjort i React</p></div></div>
            <div className="banner-card"  style={{backgroundImage: `url(${dunwell})`}}><div className="text"><h3>Dunwell</h3><p>Spelprojekt i c++</p></div></div>
            <div className="banner-card"  style={{backgroundImage: `url(${cloth})`}}>  <div className="text"><h3>Cloth simulation</h3><p>OpenGL simulering</p></div></div>
            <div className="banner-card"  style={{backgroundImage: `url(${cc})`}}>     <div className="text"><h3>Projekt</h3><p>description</p></div></div>
            <div className="banner-card"  style={{backgroundImage: `url(${bt})`}}>     <div className="text"><h3>Projekt</h3><p>description</p></div></div>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
