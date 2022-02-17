import './App.css';
import me from './images/me.png';
import cc from './images/cc.png';
import cloth from './images/cloth.png';
import dunwell from './images/dunwell.png';
import scroll from './images/scroll.png';
import bt from './images/bt.png';
import ExpSection from './Components/ExpSection';
import * as React from "react";

function App() {
  return (
    
    <div className="App">
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
        <ExpSection title={"Erfarenheter"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis."}/>
        
      </div>
    </div>
  );
}

export default App;
