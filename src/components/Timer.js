import React, { Component } from 'react';

class Timer extends Component {
//prop is readyToStart
  state = {
    count: 25, //countdown start in seconds
    timerStatus: '', // 
  }

  componentWillUnmount() {
    clearInterval(this.inter);
  }
  
  handleStartClick = () => { 
      if (this.props.readyToStart) {
      this.countDown()
      this.setState({ timerStatus: 'active' })
    }
  }

  handlePauseClick = () => { 
     if (this.props.readyToStart) {
     clearInterval(this.inter)
     this.setState({ timerStatus: 'paused' })
   } 
  }
 
  countDown() {
    this.inter = setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(this);
      } else { // eventually will add logic here to update app when we reach 0
        this.setState((prevState) => {
          return {count: prevState.count - 1 }
        }) 
      }
    }, 1000)
  }

  // function to update the questions etc in main app once we hit zero

  render() {

    let timerButton; //maybe need convert to function in future

    if (!this.props.readyToStart) { //if we are waiting on player details
       timerButton = ( <h3>Select level</h3> ) 
    } else if (!this.state.timerStatus) { //player details received, ready to start
        timerButton = ( <div className="timer__button" onClick={this.handleStartClick}> <h3>lets go!</h3> </div>) 
    } else if (this.state.timerStatus === 'paused') { //paused
        timerButton = ( <div className="timer__button" onClick={this.handleStartClick}> <h3>resume</h3> </div>) 
    } else  { //active
       timerButton = (<div className="timer__button" onClick={this.handlePauseClick}> <h3>pause</h3> </div>)
    }

  return (
    <div className="timer">
        <div className="timer__countdown">
            <h2>{this.state.count}</h2>
        </div>
        {timerButton}
    </div>
   );
  }
  }


export default Timer;