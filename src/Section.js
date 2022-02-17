import React, { useState } from 'react';
import cc from './images/cc.png';
import cloth from './images/cloth.png';
import dunwell from './images/dunwell.png';
import scroll from './images/scroll.png';
import bt from './images/bt.png';


function Section() {
  // Declare a new state variable, which we'll call "count"
  const [selected, setSelected] = useState(0);

  return (
    <div className="section section-4">
      <h2 onClick={() => setSelected(0)}>Projekt {selected}</h2>
      <p>Projekt jag gjort eller deltagit i skapandet av!</p>
        <div className={selected == 0 ? "banner-cards-container":"container-none"}>
          <div className="banner-card-outer"><div className="banner-card" style={{backgroundImage: `url(${scroll})`}} onClick={()   => setSelected(1)}> </div> <div className="text"><h3>Scroll</h3><p>Projekt gjort i React</p></div></div>
          <div className="banner-card-outer"><div className="banner-card" style={{backgroundImage: `url(${dunwell})`}} onClick={()  => setSelected(2)}> </div> <div className="text"><h3>Dunwell</h3><p>Spelprojekt i c++</p></div></div>
          <div className="banner-card-outer"><div className="banner-card" style={{backgroundImage: `url(${cloth})`}} onClick={()    => setSelected(3)}> </div> <div className="text"><h3>Cloth simulation</h3><p>OpenGL simulering</p></div></div>
          <div className="banner-card-outer"><div className="banner-card" style={{backgroundImage: `url(${cc})`}} onClick={()       => setSelected(4)}> </div> <div className="text"><h3>Projekt</h3><p>description</p></div></div>
          <div className="banner-card-outer"><div className="banner-card" style={{backgroundImage: `url(${bt})`}} onClick={()       => setSelected(5)}> </div> <div className="text"><h3>Projekt</h3><p>description</p></div></div>
        </div>
        <div className={selected > 0 ? "banner-cards-container":"container-none"}>
          <div className={selected == 1 ? "chosen-banner-card" : "banner-card-hidden"} onClick={()   => setSelected(0)}> 
            <img alt="scroll" src={scroll}/>
            <div className="text">
              <h3>Scroll</h3>
              <p>Projekt gjort i React</p>
            </div>
          </div>
          <div className={selected == 2 ? "banner-card chosen-banner-card" : "banner-card-hidden"} style={{backgroundImage: `url(${dunwell})`}} onClick={()  => setSelected(0)}> <div className="text"><h3>Dunwell</h3><p>Spelprojekt i c++</p></div></div>
          <div className={selected == 3 ? "banner-card chosen-banner-card" : "banner-card-hidden"} style={{backgroundImage: `url(${cloth})`}} onClick={()    => setSelected(0)}> <div className="text"><h3>Cloth simulation</h3><p>OpenGL simulering</p></div></div>
          <div className={selected == 4 ? "banner-card chosen-banner-card" : "banner-card-hidden"} style={{backgroundImage: `url(${cc})`}} onClick={()       => setSelected(0)}> <div className="text"><h3>Projekt</h3><p>description</p></div></div>
          <div className={selected == 5 ? "banner-card chosen-banner-card" : "banner-card-hidden"} style={{backgroundImage: `url(${bt})`}} onClick={()       => setSelected(0)}> <div className="text"><h3>Projekt</h3><p>description</p></div></div>
        </div>
      </div>
  );
}
export default Section;