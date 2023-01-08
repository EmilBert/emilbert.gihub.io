import React, { useState } from 'react';
import cc from './../images/cc.png';
import cloth from './../images/cloth.png';
import dunwell from './../images/dunwell.png';
import scroll from './../images/scroll.png';
import bt from './../images/bt.png';
import bc from './../images/bc.png';

function Project(props){



  return (
        <div className="project">
          <img class="project-img" alt="me" src={props.image}/>
          <div className="project-text">
            
            <div>
              <div className="badges"><span>{props.tags}</span></div>
              <h3>{props.title}</h3>
            </div>
            <div>
              <p>{props.desc}</p>
              <a href={props.link}>View on Github</a>
            </div>
          </div>
        </div>
  );
}

function ProjectSection(props) {
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle]       = useState(props.title);
  const [content, setContent]   = useState(props.content);
  
  const listContent = 
  [
    {"image":bc,"title":"BERTCRAFT","desc":"Voxel terrain generation", "tags":"C++, OpenGL", "link":"www.youtube.com"},
    {"image":cc,"title":"Corporate Combat","desc":"Online AR phone game", "tags":"Unity, Photon", "link":"www.youtube.com"},
    {"image":cloth,"title":"Cloth Simulation","desc":"Spring-damper model simulation", "tags":"C++, OpenGL, Matlab", "link":"www.youtube.com"},
    {"image":scroll,"title":"Scroll","desc":"React DnD Companion App", "tags":"UX, React", "link":"www.youtube.com"},
    {"image":dunwell,"title":"Dunwell","desc":"C++ Game", "tags":"C++, Pixelart", "link":"www.youtube.com"},
    {"image":bt,"title":"BrickTracker","desc":"Website", "tags":"HTML,CSS,SQL", "link":"www.youtube.com"} 
  ];
  
  return (
    <div className="section" id="project-section">
      <h1>{title}</h1>
      <p>{content}<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>

        <div className="projects">
          <div className="projects-column">
          {listContent.map((proj, index) => (
            index % 2 == 0 ? <Project image={proj.image} title={proj.title} desc={proj.desc} tags={proj.tags} link={proj.link}/> : null
          ))}
          </div>

          <div className="projects-column">
          {listContent.map((proj, index) => (
            index % 2 == 1 ? <Project image={proj.image} title={proj.title} desc={proj.desc} tags={proj.tags} link={proj.link}/> : null
          ))}
          </div>
        </div>
      </div> 
  );
}
export default ProjectSection;