import React, { Component } from 'react';
import './sass/main.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';
import TalkPoint from './components/TalkPoint';

class App extends Component { 
  //this component handles logic for setting up the exchange, and manages important core data.

  state = {

    players: [
      { language: 'English', level: "" },
      { language: 'Spanish', level: "" },
    ],

    readyToStart: false, // lets app know when we're ready to start the exchange.
    turnCount: 3, // keeps count of the turns.
    turnLanguage: 'spanish', // language of current turn.
  }
  
  //logic for exchange setup
  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      this.handleStartCheck()
    }
  }

  handleStartCheck = () => {
    if (this.state.players[0].level && this.state.players[1].level) {
      this.setState ({ readyToStart: true })
    }
  }

  handleChange = (level, language) => {
    let playersArray = [...this.state.players]
    playersArray.forEach(p => {
      if (p.language === language) {
        p.level = level      
      }
    })
    this.setState({ players: playersArray})
  }

   // logic for core game flow.
  handleTurnChange = () => {
     this.setState({ turnCount: this.state.turnCount - 1 })
  }
   // write function to countdown 
    
  render() {
  return (
    <div className="App">
      <div className='body'>

        <Nav />

        <Player 
        class="player player--1"
        language={this.state.players[0].language}
        level={this.state.players[0].level}
        onChange={this.handleChange}
        />

        <Timer 
        readyToStart={this.state.readyToStart}
        handleTurnChange={this.handleTurnChange}
        turnCount={this.state.turnCount}/>

        <Player 
        class="player player--2"
        language={this.state.players[1].language}
        level={this.state.players[1].level}
        onChange={this.handleChange}
        />

        <TalkPoint 
        className="talkpoint" 
        englishLevel={this.state.players[0].level}
        spanishLevel={this.state.players[1].level}
        turnCount={this.state.turnCount} />
      </div>
    </div>
  );
 }
}

export default App;
