import React, { Component } from 'react';
import Hourglass from '../components/Hourglass';

class Timer extends Component {

//prop =  turnCount, gameStatus, handleGameStatusChange, 
  state = {
    countdown: 10, //countdown start in seconds
  }
  
//clears interval when unmounted
  componentWillUnmount() {
    clearInterval(this.inter);
  }

// starts timer
  handleStartClick = () => { 
    this.countDown()
    this.props.handleGameStatusChange('active') //sets app.js to active
  }

// pauses timer
  handlePauseClick = () => { 
     clearInterval(this.inter)
     this.props.handleGameStatusChange('paused') //sets app.js to paused
  }

// changes turn and resets timer when time runs out
changeTurn = () => {
  clearInterval(this.inter);
  this.props.handleTurnChange();
  this.setState ({ countdown: 10});
}
 
//timer management STAYS
  countDown() {
    this.inter = setInterval(() => {
      if (this.state.countdown <= 0) {
        this.changeTurn();

      } else if (this.props.turnCount === -1 ) {
        clearInterval(this);

      } else { // eventually will add logic here to update app when we reach 0
        this.setState((prevState) => {
          return {countdown: prevState.countdown - 1 }
        }) 
      }
    }, 1000)
  }

  renderClockDisplay = (count) => {
      var m = Math.floor(count % 3600 / 60); 
      var s = Math.floor(count % 3600 % 60);
      return m + ":" + ('0' + s).slice(-2);
  }

  render() {

  let timerButton;

  switch(this.props.gameStatus) {
    case 'ready':
      timerButton = <div className="timer__button" onClick={this.handleStartClick}>Start Timer</div>
      break;
    case 'paused':
      timerButton = <div className="timer__button" onClick={this.handleStartClick}>resume</div>
      break;
    default: timerButton = <div className="timer__button" onClick={this.handlePauseClick}> pause</div>
  }

  let timerClockDisplay;
    timerClockDisplay = (
      <div className="timer__countdown">
        {this.renderClockDisplay(this.state.countdown)}
        </div>
    )

  return (
    <div className="timer">
      <Hourglass 
        countdown={this.state.countdown}
        turnLanguage={this.props.turnLanguage}/>
        {timerButton}
        {timerClockDisplay}
    </div>
   );
  }
}


export default Timer;
