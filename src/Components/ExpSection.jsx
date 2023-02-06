import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';

function Item({emoji, title, subTitle, year, content}) {
  
  let yearFormat = year.split("-")

  
  const [selected, setSelected]   = useState(1);
  
  return (
    <tr className="exp-list-item "  onClick={selected == 1 ? () => setSelected(0) : () => setSelected(1)}>
        <td className="item-icon">{emoji}</td>
        <td className={selected ? "content-td hide" : "content-td show"}>
          <div className="split"><h3>{title} </h3><span className="drop"> {selected ? <MdArrowDropDown size={30} />: <MdArrowDropUp size={30}/>} </span></div>
          <p>{subTitle} </p> 
          <p>{yearFormat[0]} ━ {yearFormat[1]}</p>
          <p className="content">{content}</p>
        </td>
    </tr>
  );
}

function List(props) {
  
  const listContent = 
  [
    {
      "emoji":"🎮",
      "title":"Co-Founder & Game Developer",
      "subTitle":"StoneTech Games",
      "year":"2022-Ongoing",
      "content":
      <>
      During 2022 me and a few of my friends decided to create a game that had been on our minds since 2020. It was an idea we always really loved but were never able to set aside enough time to make it happen. In 2022 we signed up for a course in game development and spent most of our time, even weekends, developing our game. This game became Holmgang and we placed 2nd at the LiU Game Awards. After all the positive response from both the public but also industry professionals we decided that we wanted to fully pursue development of this game. We therefore started StoneTech Games which is our Indie Game studio.
      <br/><br/>
      I am a game developer at the studio as well as the head UI/UX designer, but at a small studio like ours almost everyone does a little bit of everything. We are located at East Sweden Game Norrköping.     
      </>
    },
    {
      "emoji":"📝",
      "title":"Master Thesis at LiU - Exertion Game",
      "subTitle":"Linköping University",
      "year":"2023-2023",
      "content":"I am currently writing my master thesis at LiU. Me and my friend Linus Karlsson are developing an exertion game made for office environments at LiU. The game is being built with Godot and uses MediaPipe to create a skeletal map using live web camera footage."},
    {
      "emoji":"📚",
      "title":"Master of Science and Engineering in Media Technology",
      "subTitle":"Linköping University",
      "year":"2018-2023",
      "content":"I am currently pursuing my master of Science and Engineering in Media Technology. During my time at the University I've gotten a wide range of knowledge within computer graphics and programming. I have also learnt about Game Development,  Web development, UX,  Image processing,  VR and AI."
    },
    {
      "emoji":"👨‍🏫",
      "title":"Coach/Dojo-Responsible (Board Member)", 
      "subTitle":"CoderDojo Norrköping",
      "year":"2021-2023",
      "content":<>
        Outside of school I volunteer at CoderDojo in Norrköping. Coderdojo is an ideal organization that wants to help further kids' interests in programming and technology. We hold dojos every week where we program together with the kids and teach them programming basics, web development and game development.
        <br/><br/>
        I am the main organizer of these dojos. I keep in contact with our coaches and make sure we have coaches that can attend. I assess and further develop these dojos together with some of our board members.

      </>
    },
    {
      "emoji":"💻",
      "title":"Mentor in Programming",
      "subTitle":"LiTHehack - Linköping University",
      "year":"2021-2022",
      "content":"During 2022/2023 I was a part of LiTHehach at LiU. I helped multiple students each week with programming questions relating to a plethora of courses given at LiU. Helping newer students was fun and rewarding and really tested my understanding of previous courses and helped me learn how to articulate programming problems using less technical language."
    },
    {
      "emoji":"📚",
      "title":"Information- & Medietechnology",
      "subTitle":"Berzeliusksolan Linköping (High School)",
      "year":"2015-2018",
      "content":"My programming journey started during high school when I was first introduced to programming. Here I learnt programming basics in java as well as web development using HTML, CSS, JS, PHP and SQL."
    }
  ];
  
  // const [selected, setSelected] = useState(0);

  return (
    <div className="exp-list-container">
      <table className="exp-list">
        <tbody>
        {listContent.map((exp, index) => (
          <Item key={index} selected = {true} emoji={exp.emoji} title={exp.title} subTitle={exp.subTitle} year={exp.year} content={exp.content}/>
        ))}
        </tbody>
      </table>
    </div>
  );
}

function ExpSection() {
  return (
    <div className="section" id="exp-section">
      <h1>Experience</h1>
      <div className="content">
        <List />
      </div>
    </div>
  );
}
export default ExpSection;