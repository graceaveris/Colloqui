import React, { Component } from 'react';

class TalkPoint extends Component {
    //this component handles the exchange functionality
    
    //props: englishLevel, spanishLevel, turnLanguage, turncount

  state = {  //wil eventually replace state with database that selects talkpoints from larger data set
      talkPoints: {
          English: {
            Beginner: {  1: { "content": "en beginner question 1"}, 
                         2: { "content": "en beginner question 2"}, 
                         3: { "content": "en beginner question 3"} },
            Intermediate: {  
                         1: { "content": "en intermediate question 1"}, 
                         2: { "content": "en intermediate question 2"}, 
                         3: { "content": "en intermediate question 3"} },
            Advanced: {    
                         1: { "content": "en advanced question 1"}, 
                         2: { "content": "en advanced question 2"}, 
                         3: { "content": "en advanced question 3"} 
                        },
                    },
          Spanish: {
            Beginner: {  1: { "content": "sp beginner question 1"}, 
                         2: { "content": "sp beginner question 2"}, 
                         3: { "content": "sp beginner question 3"} },
            Intermediate: {  
                         1: { "content": "sp intermediate question 1"}, 
                         2: { "content": "sp intermediate question 2"}, 
                         3: { "content": "sp intermediate question 3"} },
            Advanced: {    
                         1: { "content": "sp advanced question 1"}, 
                         2: { "content": "sp advanced question 2"}, 
                         3: { "content": "sp advanced question 3"} },
          },
      },
     ready: false,
     currentTalkpoint: '',
   }

 componentDidMount() {
   this.getTalkPoint();
 }

 componentDidUpdate(prevProps, prevState) {
   if (prevProps.turnCount !== this.props.turnCount) {
  this.getTalkPoint();
   }
}

 getTalkPoint = () => {
   if (this.props.turnCount > 0) {
    let turnCount = this.props.turnCount
    turnCount = Math.round(turnCount / 2).toString()
    let currentTalkpoint = this.state.talkPoints[this.props.turnLanguage][this.props.spanishLevel][turnCount].content
    this.setState({ currentTalkpoint: currentTalkpoint })
   }
 }

 render() {

 return (

    <div className="talkpoint">
        <h3>Discuss in {this.props.turnLanguage}:</h3> 
        <p>{this.state.currentTalkpoint}</p>
    </div>

  );
 }
}

export default TalkPoint;