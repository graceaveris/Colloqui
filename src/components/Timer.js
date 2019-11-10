import React, { Component } from 'react';

class Timer extends Component {

  state = {
    count: 25, //countdown start
    running: false, //to conrol whether the count is paused
  }
  
  componentDidMount () {
      this.countDown()
  }

  countDown() {
    setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(this);
      } else {
        this.setState((prevState) => {
          return {count: prevState.count - 1}
        }) 
      }
    }, 1000)
  }

  render(

  ) {
  return (
    <div className="timer">
        <div className="timer__countdown">
            <h2>{this.state.count}</h2>
        </div>
          
        <div className="timer__pause">
            <h3>start</h3>
        </div>
    </div>
   );
  }
}

export default Timer;