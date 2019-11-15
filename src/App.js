import React, { Component } from 'react';
import './sass/main.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';
import TalkPoint from './components/TalkPoint';

class App extends Component { 
  //this component handles logic for setting up the exchange, and manages important core data.
  
  state = {
    
    // better way of storing this?
    players: [
      { language: 'English', level: "" },
      { language: 'Spanish', level: "" },
    ],

    readyToStart: false, // lets app know when we're ready to start the exchange.
    turnCount: 6, // keeps count of the turns.
    turnLanguage: "English", // language of current turn.
  }
  
  //LOGIC FOR EXCHANGE SETUP
  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      this.handleStartCheck()
    }
  }
  
  // checks whether game is ready to start
  handleStartCheck = () => {
    if (this.state.players[0].level && this.state.players[1].level) {
      this.setState ({ readyToStart: true })
    }
  }
  // saves player level on selection
  handleLevelSet = (level, language) => {
    let playersArray = [...this.state.players]
    playersArray.forEach(p => {
      if (p.language === language) {
        p.level = level      
      }
    })
    this.setState({ players: playersArray})
  }

   // LOGIC FOR EXCHANGE FLOW
   // keeps track of how many turns have been played
  handleTurnChange = () => {
    let updatedTurnLanguage;
     if (this.state.turnLanguage === 'Spanish') {
       updatedTurnLanguage = 'English' 
     } else {
      updatedTurnLanguage = 'Spanish'
     }
     this.setState({ turnCount: this.state.turnCount - 1, turnLanguage: updatedTurnLanguage })
  }
   // write function to countdown 
    
  render() {
    let talkPoint;
    if (this.state.readyToStart) {
      talkPoint = (
        <TalkPoint 
        className="talkpoint" 
        englishLevel={this.state.players[0].level}
        spanishLevel={this.state.players[1].level}
        turnCount={this.state.turnCount} 
        turnLanguage={this.state.turnLanguage} />
      )
    } else {
      talkPoint = (
      <div className="talkpoint">
      <h3>Select level to begin</h3>
      </div> )
    }
  
    return (
    <div className="App">
      <div className='body'>

        <Nav />

        <Player 
        class="player player--1"
        language={this.state.players[0].language}
        level={this.state.players[0].level}
        onChange={this.handleLevelSet}
        />

        <Timer 
        readyToStart={this.state.readyToStart}
        handleTurnChange={this.handleTurnChange}
        turnCount={this.state.turnCount} />

        <Player 
        class="player player--2"
        language={this.state.players[1].language}
        level={this.state.players[1].level}
        onChange={this.handleLevelSet}
        />

        {talkPoint}
      </div>
    </div>
  );
 }
}

export default App;
