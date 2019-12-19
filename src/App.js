import React, { Component } from 'react';
import './css/main.css';

import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';
import TalkPoint from './components/TalkPoint';
import ReadyScreen from './components/ReadyScreen';
import Overview from './components/Overview';

import englishIcon from './images/united-kingdom.png';
import spanishIcon from './images/spain.png';

class App extends Component { 
  //this component handles logic for setting up the exchange, and manages important game-flow data.
  
  state = {
    
    players: [
      { language: 'English', level: null },
      { language: 'Spanish', level: null },
    ],

    turnCount: 6, // keeps count of the turns.
    turnLanguage: "English", // language of current turn.
    gameStatus: '', // is game ready(for next turn), paused, or active.

    showGameControls: false,
  }

  toggleControlsHandler = () => {
    this.setState({ showGameControls: true, gameStatus: 'ready' })
  }

  handleLevelSet = (level, language) => {
    let playersArray = [...this.state.players]
    playersArray.forEach(p => {
      if (p.language === language) {
        p.level = level      
      }
    })
    this.setState({ playersArray: playersArray })
  }

   // LOGIC FOR EXCHANGE FLOW
   // changes turn - swicthes the langugae and counts turns
  handleTurnChange = () => {
    let updatedTurnLanguage;
     if (this.state.turnLanguage === 'Spanish') {
       updatedTurnLanguage = 'English' 
     } else {
      updatedTurnLanguage = 'Spanish'
     }
     this.setState({ turnCount: this.state.turnCount - 1, turnLanguage: updatedTurnLanguage, gameStatus: 'ready' })
  }

  //to be passed to timer so it can update the status
  handleGameStatusChange = (status) => {
     this.setState ({ gameStatus: status })
  }
    
  render() {
    let mainContent;
    if ((this.state.gameStatus  === "paused") || (this.state.gameStatus  === "active")) {
      mainContent = (
        <TalkPoint 
        className="talkpoint" 
        englishLevel={this.state.players[0].level}
        spanishLevel={this.state.players[1].level}
        turnCount={this.state.turnCount} 
        turnLanguage={this.state.turnLanguage} />)
    } else if (this.state.gameStatus === "ready") { 
      mainContent = <ReadyScreen language={this.state.turnLanguage} turnCount={this.state.turnCount}/>
    } else { 
      mainContent = <Overview toggleControls={this.toggleControlsHandler} players={this.state.players}/>
    }
  
    return (
    <div className="App">
      <div className='body'>

      <Nav />
      
      <div className="controls">
        <Player 
        class="player player--1"
        icon={englishIcon}
        language={this.state.players[0].language}
        level={this.state.players[0].level}
        onChange={this.handleLevelSet}
        gameStatus={this.state.gameStatus}
        />

        { (this.state.showGameControls) ? 
        <Timer 
        handleTurnChange={this.handleTurnChange}
        turnCount={this.state.turnCount} 
        handleGameStatusChange={this.handleGameStatusChange}
        gameStatus={this.state.gameStatus}
        turnLanguage={this.state.turnLanguage}/>
        : null }

        <Player 
        class="player player--2"
        icon={spanishIcon}
        language={this.state.players[1].language}
        level={this.state.players[1].level}
        onChange={this.handleLevelSet}
        gameStatus={this.state.gameStatus}/>
       </div >

       <div className="main-content">
        {mainContent}
       </div>
       
      </div>
    </div>
  );
 }
}

export default App;
