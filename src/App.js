import './App.css';
import me from './me.png';
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

        <div className="section section-3">
        

          <div className="text">
          <h2>Erfarenheter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat viverra lorem, consectetur ornare lacus bibendum non. Aenean vitae orci efficitur, suscipit nunc eget, porttitor mi. Etiam a aliquam lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar elit tempus, accumsan quam eget, vehicula sem. Donec faucibus felis non aliquam ultricies. Curabitur eget quam tellus. Cras sed ullamcorper lectus, a gravida ligula.</p>
          </div>
            <div className="text-card-container">
              <div class="text-card"><h3>C++</h3><p>kanske</p></div>
              <div class="text-card"><h3>Unity?</h3><p>kanske</p></div>
              <div class="text-card"><h3>Webb</h3><p>kanske</p></div>
              <div class="text-card"><h3>Webb</h3><p>kanske</p></div>
              <div class="text-card"><h3>Webb</h3><p>kanske</p></div>
              <div class="text-card"><h3>Webb</h3><p>kanske</p></div>
            </div>
        </div>
      </div>
    </div>
  );
}



export default App;
