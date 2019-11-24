import React, { Component } from 'react';
import Hourglass from '../components/Hourglass';

class Timer extends Component {


//prop =  turnCount, gameStatus, handleGameStatusChange, 
  state = {
    countdown: 20, //countdown start in seconds
  }

  
//clears interval when unmounted
  componentWillUnmount() {
    clearInterval(this.inter);
  }

// starts timer
  handleStartClick = () => { 
    this.countDown()
    this.props.handleGameStatusChange('active') //sets app.js to active
    this.props.loadTalkPoints()
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
  this.setState ({ countdown: 20});
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
    case '':
      timerButton = ''
      break;
    case 'received':
      timerButton = <div className="timer__button" onClick={this.handleStartClick}>Start Exchange</div>
      break;
    case 'ready':
      timerButton = <div className="timer__button" onClick={this.handleStartClick}>lets go!</div>
      break;
    case 'paused':
      timerButton = <div className="timer__button" onClick={this.handleStartClick}>resume</div>
      break;
    default: timerButton = <div className="timer__button" onClick={this.handlePauseClick}> pause</div>
  }

  let timerClockDisplay;
  if (this.props.gameStatus) {
    timerClockDisplay = (
      <div className="timer__countdown">
        {this.renderClockDisplay(this.state.countdown)}
        </div>
    )
  }

  const spanishStyle = {
    gridAutoFlow: 'dense' 
  }

  return (
    <div className="timer">

       {(this.props.gameStatus) ? 
       (<Hourglass 
        countdown={this.state.countdown}
        turnLanguage={this.props.turnLanguage}/>) 
        : (<div>Select level to begin</div>)}
        {timerButton}
        {timerClockDisplay}
    </div>
   );
  }
}


export default Timer;
