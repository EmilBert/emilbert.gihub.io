import React, { useState } from 'react';
import cc from './../images/cc.png';
import cloth from './../images/cloth.png';
import dunwell from './../images/dunwell.png';
import scroll from './../images/scroll.png';
import bt from './../images/bt.png';

function ProjectSection(props) {
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle]       = useState(props.title);
  const [content, setContent]   = useState(props.content);
  return (
    <div className="section" id="project-section">
      <h1>{title}</h1>
      <p>{content}<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>
    </div>
      
  );
}
export default ProjectSection;