import React, { useState } from 'react';

import cc from './../images/cc.png';
import cloth from './../images/cloth.png';
import dunwell from './../images/dunwell.png';
import scroll from './../images/scroll.png';
import bt from './../images/bt.png';
import ux from './../images/ux.png';
import farming from './../images/farming.png';
import bc from './../images/bc.png';
import barker from './../images/barker.png';
import holmgang from './../images/holmgang.png';
import wire from './../images/wire.png';
import ray from './../images/ray2.png';
import space from './../images/spaceship.png';
import tourvis from './../images/TourVis.png';
import wfc from './../images/wfc.png';
import avis from './../images/avis.png';


function Project(props){
  return (
        <div className="project">
          <img className="project-img" alt="me" src={props.image}/>
          <div className="project-text">
            
            <div>
              <div className="badges"><span>{props.tags}</span></div>
              <h3>{props.title}</h3>
            </div>
            <div>
              <p>{props.desc}</p>
              {props.link != "" ?  <a href={props.link}>View More</a>: <>Reach out if you want to learn more about this project!</>}
            </div>
          </div>
        </div>
  );
}

function ProjectSection() {
  const listContent = 
  [
    {
      "image":holmgang,
      "title":"HOLMGANG",
      "desc": <>Holmgang is a party brawler where you fight your friends to appease the norse gods. In a group of four we developed Holmgang and it became our most ambitious project to date. The project was a culmination of all the skills we had learnt during our studies and we placed 2nd at the LiU Game Awards. <br/><br/> During development I contributed with my programming skills and my eye for design. I implemented multiple systems and developed the artstyle and UI/UX design for the game.<br/><br/> We hope to have a full release at some point in 2023, so keep a lookout!</>,
      "tags":"C#, Unity, Game Development",
      "link":"https://atganga.com/"
    },
    {
      "image":bc,
      "title":"BERTCRAFT",
      "desc":<>I have always been a big fan of Minecraft and in the course TNM084 at LiU i had the opportunity to try my hands at making my own version. Using a combination of 2D and 3D noise I was able to create multiple procedurally generated biomes that blend together. The program was written in C++ with OpenGL.</> ,
      "tags":"C++, OpenGL", 
      "link":"https://github.com/EmilBert/proc-project"
    },
    {
      "image":farming,
      "title":"Exertion Farming Game - Master Thesis",
      "desc":<>I have always been a big fan of Minecraft and in the course TNM084 at LiU i had the opportunity to try my hands at making my own version. Using a combination of 2D and 3D noise I was able to create multiple procedurally generated biomes that blend together. The program was written in C++ with OpenGL.</> ,
      "tags":"Godot, GDScript, MediaPipe, Game Design", 
      "link":"https://github.com/EmilBert/proc-project"
    },
    {
      "image":barker,
      "title":"Barker Social Media",
      "desc":
      <>
      In a group of four we created a social media meant to “rival” twitter. Here you post audio clips instead of text based posts, aka barks. The app was built using a MongoDB database, A node.js backend and a React TS frontend. The user auth was implemented with supertokens and sound files were stored in the Google Cloud Platform.
      <br/><br/>
      I contributed with both backend and frontend work, I implemented some REST API endpoints with mongoose and created multiple components with React. I also created the overall design language and layout of the application.
      </>,
      "tags":"React, TS, MongoDB, Node", 
      "link":"https://www.youtube.com/watch?v=ZDMbQskKzBw"
    },
    {
      "image":ux,
      "title":"StickIt - UX Design project",
      "desc":
      <>
      In a group of four we created a social media meant to “rival” twitter. Here you post audio clips instead of text based posts, aka barks. The app was built using a MongoDB database, A node.js backend and a React TS frontend. The user auth was implemented with supertokens and sound files were stored in the Google Cloud Platform.
      <br/><br/>
      I contributed with both backend and frontend work, I implemented some REST API endpoints with mongoose and created multiple components with React. I also created the overall design language and layout of the application.
      </>,
      "tags":"React, TS, MongoDB, Node", 
      "link":"https://www.youtube.com/watch?v=ZDMbQskKzBw"
    },
    {
      "image":ray,
      "title":"Monte Carlo Ray Tracer",
      "desc":"In the course Global Illumination me and a friend built a monte carlo ray tracer in C++.",
      "tags":"C++", 
      "link":"https://github.com/EmilBert/ray-william-tracer"
    },
    {
      "image":space,
      "title":
      "The Space Gas station",
      "desc":"During the course TNM091 at LiU, in a group of four we developed a comedic, immersive and interactive VR experience involving a gas station in space. Here we got to apply our knowledge of immersive experiences and create a fun game for VR.",
      "tags":"C#, Unity, VR-development", 
      "link":""
    },
    {
      "image":wfc,
      "title":"WFC Level editor",
      "desc":"In a group of two, we implemented a level-editor into our game using Wave Function Collapse. The goal was to make an easy to use level-editor that anyone can use that uses WFC to guide the user as well as randomly generate its own levels.",
      "tags":"C#, Unity, Game Development", 
      "link":""
    },
    {
      "image":cloth,
      "title":
      "Cloth Simulation",
      "desc":<>Made in a group of four, A Cloth simulation made with a spring-damper model. Rendered in OpenGL.</>,
      "tags":"Matlab, C++, OpenGL", 
      "link":"https://github.com/davidstyrbjorn/cloth-simulation-tnm085"
    },
    {
      "image":cc,
      "title":
      "Corporate Combat",
      "desc":"Our bachelors project was built in a group of seven, where I acted as Scrum-master and developer. I managed the group, making sure everyone was engaged with the development and got the resources needed to get past development hurdles. I also implemented networking using Photon and implemented multiple features like tank pathing.",
      "tags":"Unity, AR, C#, Networking with Photon, Agile Development Methods ", 
      "link":""
    },
    {
      "image":wire,
      "title":
      "Down to the Wire",
      "desc":
      <>
      Down to the Wire is a timed puzzler that me and a group of my friends developed during the 50th Ludum Dare game jam. The game placed 70th overall out of more than 2000 games.
      <br/><br/>
      It was a great collaborative effort created during only 72h. I coded multiple features in C# and spearheaded the development of the UI design.
      </>,
      "tags":"C#, Unity, Game development", 
      "link":"https://ldjam.com/events/ludum-dare/50/down-to-the-wire"
    },
    
    {
      "image":avis,
      "title":
      "Emergency Dashboard - VAST Challenge",
      "desc":
      "In a group of three, we implemented an emergency dashboard meant to help emergency responders decide where to send their efforts. The dashboard consists of multiple visualization techniques such as Choropleth Map and Heatmap. The project was made to solve part one of the VAST Challenge 2019.",
      "tags":"JS, Vue, InfoVis", 
      "link":"https://github.com/fredrikburmester/TNM098 "
    },
    {
      "image":tourvis,
      "title":
      "TourVis",
      "desc":<>
      In a group of three, we developed and designed an information visualization to show the travels of different regions and continents. I got to test my knowledge of infovis and how to intuitively display and portray data. 
      </>,
      "tags":"d3.js, JS, InfoVis", 
      "link":"https://github.com/EmilBert/TourVis"
    },
    
  ];
  
  return (
    <div className="section" id="project-section">
      <h1>Projects</h1>
      <p>During my time at LiU i developed a plethora of projects both in and outside of school. The following section details my most relevant projects made during the last few years.</p>
        <div className="projects">
          <div className="projects-column">
          {listContent.map((proj, index) => (
            index % 2 == 0 ? <Project key={index} image={proj.image} title={proj.title} desc={proj.desc} tags={proj.tags} link={proj.link}/> : null
          ))}
          </div>
          <div style={{flex:1}}></div>
          <div className="projects-column">
          {listContent.map((proj, index) => (
            index % 2 == 1 ? <Project key={index} image={proj.image} title={proj.title} desc={proj.desc} tags={proj.tags} link={proj.link}/> : null
          ))}
          </div>
        </div>
      </div> 
  );
}
export default ProjectSection;

/**
 * 
 */