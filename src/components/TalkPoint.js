import React, { Component } from 'react';

class TalkPoint extends Component {
    //this component handles the exchange functionality
    //needs to display once 'start' button in countdown is clicked
    // recieves, start determinator, turncount,
    
    //props: englishLevel, spanishLevel, turnLanguage, turncount

  state = {  //replace with database that selects 10 from larger data set
      talkPoints: {
          English: {
            beginner: {  1: { "content": "hello"}, 2: { "content": "hello"}, 3: { "content": "hello"} }
            },

          Spanish: {
            beginner: {  1: { "content": "hello"}, 2: { "content": "hello"}, 3: { "content": "hello"} }
          }
      },
     ready: false,
  }

 componentDidUpdate() {
   this.getNextQuestion()
 }

 getNextQuestion = () => { //YES!!! TIDY!!!
   if (this.props.turnCount < 6) {
    let turnCount = this.props.turnCount
    turnCount = Math.round(turnCount / 2).toString()
    let currentQuestion = this.state.talkPoints[this.props.turnLanguage][this.props.spanishLevel][turnCount].content
    console.log(currentQuestion)
    return ( currentQuestion )
   }
    
 }


 render() {


 return (

    <div className="talkpoint">
        <h3>Discuss in {this.props.turnLanguage}: {this.getNextQuestion()}</h3>
    </div>

  );
 }
}

export default TalkPoint;