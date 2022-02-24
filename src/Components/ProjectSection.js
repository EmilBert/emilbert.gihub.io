import React, { useState } from 'react';
import cc from './../images/cc.png';
import cloth from './../images/cloth.png';
import dunwell from './../images/dunwell.png';
import scroll from './../images/scroll.png';
import bt from './../images/bt.png';

function Project(props){
  const [image, setImage]  = useState(props.image); 
  

  return (
        <div className="project">
          <img class="project-img" alt="me" src={props.image}></img>
          <div className="project-text">
            <div className="badges"><span>{props.tags}</span></div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a>{props.link}</a>
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
    {"image":bt,"title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"},
    {"image":cc,"title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"},
    {"image":scroll,"title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"},
    {"image":cloth,"title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"},
    {"image":dunwell,"title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"},
    {"image":"2","title":"Bertcraft","desc":"Voxel terrain generation", "tags":"C++,OpenGL", "link":"www.youtube.com"} 
  ];
  
  return (
    <div className="section" id="project-section">
      <h1>{title}</h1>
      <p>{content}<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>

      <div className="projects-bg">
        <div className="projects">
          {listContent.map((proj) => (
            <Project image={proj.image} title={proj.title} desc={proj.desc} tags={proj.tags} link={proj.link}/>
          ))}
        </div>
      </div> 
    </div>  
  );
}
export default ProjectSection;