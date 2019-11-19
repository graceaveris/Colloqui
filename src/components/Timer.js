import React, { Component } from 'react';

class Timer extends Component {

//prop = readyToStart
//prop =  turnCount
  state = {
    countdown: 5, //countdown start in seconds
    timerStatus: '', // false, active, or paused
  }
  
//clears interval when unmounted
  componentWillUnmount() {
    clearInterval(this.inter);
  }

// starts timer
  handleStartClick = () => { 
    this.countDown()
    this.props.handleGameStatusChange('active') //sets app.js to active
    this.setState({ timerStatus: 'active' })
  }

// pauses timer
  handlePauseClick = () => { 
     if (this.props.readyToStart) {
     clearInterval(this.inter)
     this.props.handleGameStatusChange('paused') //sets app.js to active
     this.setState({ timerStatus: 'paused' })
   } 
  }

// changes turn and setsets timer when time runs out STAYS
changeTurn = () => {
  clearInterval(this.inter);
  this.props.handleTurnChange();
  this.setState ({ countdown: 5, timerStatus: ''});
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

  // function to update the questions etc in main app once we hit zero

  render() {

    let timerButton; //maybe need convert to function in future

    if (!this.props.readyToStart) { //if we are waiting on player details
       timerButton = ( <div>Select level</div> ) 
    } else if (!this.state.timerStatus) { //player details received, ready to start
        timerButton = ( <div onClick={this.handleStartClick}>lets go!</div>) 
    } else if (this.state.timerStatus === 'paused') { //paused
        timerButton = ( <div onClick={this.handleStartClick}> resume</div>) 
    } else  { //active
       timerButton = (<div onClick={this.handlePauseClick}> pause</div>)
    }

  return (
    <div className="timer">
        <div className="timer__hourglass">
        </div>
        <div className="timer__button">
        {timerButton}
        </div>
        <div className="timer__countdown">
        {this.state.countdown}
        </div>
    </div>
   );
  }
  }


export default Timer;