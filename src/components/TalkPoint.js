import React, { Component } from 'react';
import data from '../data';


class TalkPoint extends Component {
    //this component handles the exchange functionality
    //props: englishLevel, spanishLevel, turnLanguage, turncount

  state = {  
     data: data, //wil eventually replace state with database that selects talkpoints from larger data set
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

    let languageLevel;
    if (this.props.turnLanguage === "English") {
    languageLevel = this.props.englishLevel
    } else { languageLevel = this.props.spanishLevel }
    let currentTalkpoint = {...this.state.data[this.props.turnLanguage][languageLevel][roundCount]}
    //we need to then set to loaded(below) to make sure that currentTalkPoint is saved before we load the dom
    this.setState({ roundCount: roundCount, currentTalkpoint: currentTalkpoint, loaded: true })
   }
 }
 render() {
  
  let uiColorClass = { backgroundColor: "darkblue" }
  let uiPositionClass = { gridColumn: '1/3' }
  let backgroundImageClass = {  backgroundImage: `linear-gradient(to right, darkblue, #040F28)`}
  if (this.props.turnLanguage === 'Spanish') { 
    uiColorClass = { backgroundColor: "#E8D547" }
    uiPositionClass = { gridColumn: '4/6' }
    backgroundImageClass = {  backgroundImage: `linear-gradient(to right, #998A1E, #E8D547 )`}
  }


 return (
    <div className="talkpoint" style={backgroundImageClass}>

       { (this.state.loaded) ? //to ensure that the currentTalkPoint is loaded
      <div className="talkpoint__container" style={backgroundImageClass}>
        <div className="talkpoint__header" style={Object.assign({}, uiPositionClass, uiColorClass)}>
          Discuss in {this.props.turnLanguage}
        </div>
      
        <div className="talkpoint__main">
          <div className="talkpoint__main--targetlang">{this.state.currentTalkpoint.talkpoint_targetlang}</div>
          <div className="talkpoint__main--translation">{this.state.currentTalkpoint.talkpoint_translation}</div>
        </div>

        <div className="talkpoint__prompts">
          <div className="talkpoint__prompts__header" style={uiColorClass}>Conversation starters</div>

           {this.state.currentTalkpoint.prompts.map((item, index) =>
          <div className="talkpoint__prompts__prompt-container">
            <div className="talkpoint__prompts--targetlang">{item.targetlang}</div>
            <div className="talkpoint__prompts--translation">{item.translation}</div>
          </div>)}
        </div>

        <div className="talkpoint__vocabulary">

        <div className="talkpoint__vocabulary__header" style={uiColorClass}>Vocabulary</div>
         
          <div className="talkpoint__vocabulary--verbs">
            {this.state.currentTalkpoint.helperverbs.map((item, index) =>
            <div>{item.targetlang}  <span>( {item.translation} )</span></div>)}
          </div>
          <div className="talkpoint__vocabulary--verbs">  
            {this.state.currentTalkpoint.helpernouns.map((item, index) =>
            <div>{item.targetlang} <span>( {item.translation} )</span></div>)}
          </div>
        </div>

      </div>
      : ( <div>loading</div> ) }
    
    </div>

  );
 }
}

export default TalkPoint;