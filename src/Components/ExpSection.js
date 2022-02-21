import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';

function Item(props) {
  const [emoji, setEmoji]         = useState(props.emoji); 
  const [title, setTitle]         = useState(props.title);
  const [subTitle, setSubTitle]   = useState(props.subTitle);
  const [year, setYear]           = useState(props.year.split("-"));
  const [content, setContent]     = useState(props.content);
  const [selected, setSelected]   = useState(1);
  
  return (
    <tr className="exp-list-item "  onClick={selected == 1 ? () => setSelected(0) : () => setSelected(1)}>
        <td className="item-icon">{emoji}</td>
        <td className={selected ? "content-td hide" : "content-td show"}>
          
          <div className="split"><h3>{title} </h3><span className="drop"> {selected ? <MdArrowDropDown size={30} />: <MdArrowDropUp size={30}/>} </span></div>
          
          <p>{subTitle} </p> 
          <p>{year[0]} ━ {year[1]}</p>
          <span><p className="content">{content}</p></span>
          
          
          
        </td>
        
    </tr>
  );
}

function List(props) {
  
  const listContent = 
  [
    {"emoji":"📚","title":"Civilingenjör inom medieteknik", "subTitle":"Linköpings Universitet","year":"2018-2023","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis."},
    {"emoji":"💻","title":"Programmeringsmentor", "subTitle":"LiTHehack - Linköpings Universitet","year":"2021-2022","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis."},
    {"emoji":"👨‍🏫","title":"Styrelsemedlem & Coach", "subTitle":"CoderDojo Norrköping","year":"2018-2023","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis." },
    {"emoji":"📚","title":"Teknik-Informations- & medieteknik", "subTitle":"Berzeliusksolan Linköping","year":"2015-2018","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis." }
  ];
  
  const [selected, setSelected] = useState(0);

  return (
    <div className="exp-list-container">
      <table className="exp-list">
        <tbody>
        {listContent.map((exp) => (
          <Item selected = {true} emoji={exp.emoji} title={exp.title} subTitle={exp.subTitle} year={exp.year} content={exp.content} onClick/>
        ))}
        </tbody>
      </table>
    </div>
  );
}

function ExpSection(props) {
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle]       = useState(props.title);
  const [content, setContent]   = useState(props.content);
  return (
    <div className="section" id="exp-section">
      <h1>{title}</h1>
      <p>{content}<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p>
      <List />
    </div>
  );
}
export default ExpSection;