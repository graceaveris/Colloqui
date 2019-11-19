import React, { Component } from 'react';

const player = ( props ) => {
  //this component displays the player information
    
  return (
      <div className={props.class}>
        <img src={props.icon} className="player__icon"/>

       { props.gameStatus ? (<div className="player__level-text-active">{props.level}</div>) 
       : ( <div className="player__level-select">
        <div className="player__select-text">Select Level ▼</div>
            <select name="level" className="player__select-original" onChange={(e) => props.onChange(e.target.value, props.language)}>
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