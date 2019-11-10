import React, { Component } from 'react';

class Timer extends Component {
//prop is readyToStart
  state = {
    count: 25, //countdown start in seconds
    timerStatus: 'ready', // 
  }
  
  handleClick = () => { 
      if (this.props.readyToStart) {
      this.countDown()
    }
  }

  countDown() {
    setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(this);
      } else {
        this.setState((prevState) => {
          return {count: prevState.count - 1 }
        }) 
      }
    }, 1000)
  }

  render() {

    let timerButton;
    if (this.props.readyToStart) {
        timerButton = (
        <div className="timer__button" onClick={this.handleClick}>
         <h3>start</h3>
        </div>)
    } else {
        timerButton = <h3>Select level</h3>
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