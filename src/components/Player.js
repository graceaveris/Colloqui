import React from 'react';

const player = ( props ) => {

  return (
      <div className={props.class}>
        <img src={props.icon} alt="flag icon" className="player__icon"/>

       { (props.gameStatus) ? (<div className="player__level-text-active">{props.level}</div>) 
       : ( <div className="player__level-select">
        <div className="player__select-text">Select Level ▼</div>
            <select name="level" className="player__select-original" onChange={(e) => props.onChange(e.target.value, props.language)}>
            <option className="player__level-select-item">Select</option>
              <option value="Beginner" className="player__level-select-item">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <div className="player__level-text">{props.level}</div>
        </div>
        )}

    </div>
  );
 };
export default player;