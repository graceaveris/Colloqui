import React, { Component } from 'react';

const Hourglass = ( props ) => {
    //changes the direction and color of the countdown based on the user

   // let sandWidth = (props.countdown * .555).toString() + '%' / 180 seconds
    let sandWidth = (props.countdown * 5).toString() + '%' // 20 seconds
    let sandStyle;
    if (props.turnLanguage === 'Spanish') {
      sandStyle = {
        width: sandWidth,
        backgroundColor: 'yellow', 
        right: '0', 
      }
    } else {
      sandStyle = {
        width: sandWidth,
        backgroundColor: 'darkblue', 
      }
    }
  
  return (
    <div className="hourglass" >
      <div className="hourglass-glass">
      </div>
      <div className="hourglass-sand" style={sandStyle}>
      </div>
    </div>
  );
 };
export default Hourglass;

//    right: 0;