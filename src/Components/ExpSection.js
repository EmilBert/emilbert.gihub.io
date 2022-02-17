import React, { useState } from 'react';



function Item(props) {
  const [emoji, setEmoji]         = useState(props.emoji); 
  const [title, setTitle]         = useState(props.title);
  const [subTitle, setSubTitle]   = useState(props.subTitle);
  const [year, setYear]           = useState(props.year);
  
  return (
    <tr className="exp-list-item">
        <td className="item-icon">{emoji}</td>
        <td><h3>{title}</h3><p>{subTitle} - {year}</p></td>
        <td className="last-cell"><p>{year}</p></td>
    </tr>
  );
}

function List(props) {
  
  const listContent = 
    [
        {"emoji":"📚","title":"Civilingenjör inom medieteknik", "subTitle":"Linköpings Universitet","year":"2018-2023" },
        {"emoji":"💻","title":"Programmeringsmentor", "subTitle":"LiTHehack - Linköpings Universitet","year":"2021-2022" },
        {"emoji":"👨‍🏫","title":"Styrelsemedlem & Coach", "subTitle":"CoderDojo Norrköping","year":"2018-2023" },
        {"emoji":"📚","title":"Teknik-Informations- & medieteknik", "subTitle":"Berzeliusksolan Linköping","year":"2015-2018" }
    ];
    

  return (
    <div className="exp-list-container">
      <table className="exp-list">
        {listContent.map((exp) => (
          <Item emoji={exp.emoji} title={exp.title} subTitle={exp.subTitle} year={exp.year}/>
        ))}
      </table>
    </div>
  );
}

function ExpSection(props) {
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle]       = useState(props.title);
  const [content, setContent]   = useState(props.content);
  return (
    <div className="section">
      <h1>{title}</h1>
      <p>{content}</p>
      <List />
    </div>
      
  );
}
export default ExpSection;