import React, { Component } from 'react';

class TalkPoint extends Component {
    //this component handles the exchange functionality
    //needs to display once 'start' button in countdown is clicked
    // recieves, start determinator, turncount, 

  state = {
    talkPoints: {
        "english":  {
           "beginner": ['EN beg question 1', 'EN beg question 2', 'EN beg question 3'],
           "intermediate": ['EN int question 1', 'EN int question 2', 'EN int question 3'],
           "intermediate": ['EN adv question 1', 'EN adv question 2', 'EN adv question 3'],
        },

        "spanish":  {
          "beginner": ['SP beg question 1', 'SP beg question 2', 'SP beg question 3'],
          "intermediate": ['SP int question 1', 'SP int question 2', 'SP int question 3'],
          "intermediate": ['SP adv question 1', 'SP adv question 2', 'SP adv question 3'],
        },
     },

     turn: 'english',
     ready: false,
  }

 render() {

 return (

    <div className="talkpoint">
        <h3>Discuss in {this.state.turn}</h3>
        <p>hello</p>
        <p>{this.props.turnCount}</p>
    </div>

  );
 }
}

export default TalkPoint;