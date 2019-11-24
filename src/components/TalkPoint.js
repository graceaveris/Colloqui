import React, { Component } from 'react';
import data from '../data';

class TalkPoint extends Component {
    //this component handles the exchange functionality
    //props: englishLevel, spanishLevel, turnLanguage, turncount

  state = {  //wil eventually replace state with database that selects talkpoints from larger data set
     data: data,
     ready: false,
     roundCount: '',
   }

 componentDidMount() {
   this.updateTalkPoint();
 }

 componentDidUpdate(prevProps, prevState) {
   if (prevProps.turnCount !== this.props.turnCount) {
  this.updateTalkPoint();
   }
}

 updateTalkPoint = () => {
   if (this.props.turnCount > 0) {
   let roundCount = Math.round(this.props.turnCount / 2).toString()
   console.log(roundCount)

    let languageLevel;
    if (this.props.turnLanguage === "English") {
    languageLevel = this.props.englishLevel
    } else { languageLevel = this.props.spanishLevel }
    let currentTalkpoint = {...this.state.data[this.props.turnLanguage][languageLevel][roundCount]}
    let currentHelperVerbs = currentTalkpoint.helperverbs
    console.log(currentHelperVerbs)

    this.setState({ roundCount: roundCount, currentTalkpoint: currentTalkpoint, currentHelperVerbs: currentHelperVerbs, loaded: true })
   }
 }
 render() {

 return (

    <div className="talkpoint">
        <h3>Discuss in {this.props.turnLanguage}:</h3> 
      
      { (this.state.loaded) ? 
          <div className="talkpoint__main">
            <p>{this.state.currentTalkpoint.content}</p>
            <p>{this.state.currentTalkpoint.content_translation}</p>

          <p>{this.state.currentTalkpoint.prompt_1}</p>
          <p>{this.state.currentTalkpoint.prompt_1_translation}</p>

          <p>{this.state.currentTalkpoint.prompt_2}</p>
          <p>{this.state.currentTalkpoint.prompt_2_translation}</p>

        <ul>  
         {this.state.currentTalkpoint.helperverbs.map((item, index) =>
         <li key={index}>{item.primary}, {item.translation}</li>)}
         </ul>

      </div> : <p>Loading</p>}

      <div className="talkpoint__prompts">
      </div>
  </div>

  );
 }
}

export default TalkPoint;