import React, { Component } from 'react';
import './sass/main.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';
import TalkPoint from './components/TalkPoint';
import englishIcon from './images/united-kingdom.png';
import spanishIcon from './images/spain.png';

class App extends Component { 
  //this component handles logic for setting up the exchange, and manages important game-flow data.
  
  state = {
    
    players: [
      { language: 'English', level: "" },
      { language: 'Spanish', level: "" },
    ],

    turnCount: 6, // keeps count of the turns.
    turnLanguage: "English", // language of current turn.
    gameStatus: '', // is game ready, paused, or active.
    loadTalkPoints: false,
  }
// to delete
  //LOGIC FOR EXCHANGE SETUP
  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      this.handleStartCheck()
    }
  }
  
  // checks whether game is ready to start
  handleStartCheck = () => {
    if (this.state.players[0].level && this.state.players[1].level) {
      this.setState ({ gameStatus: 'received'})
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

  loadTalkPoints = () => {
    this.setState ({ loadTalkPoints: true })
  }
    
  render() {
    let talkPoint;
    if (this.state.loadTalkPoints) {
      talkPoint = (
        <TalkPoint 
        className="talkpoint" 
        englishLevel={this.state.players[0].level}
        spanishLevel={this.state.players[1].level}
        turnCount={this.state.turnCount} 
        turnLanguage={this.state.turnLanguage} />)
    } else {
      talkPoint = <div className="exchange-overview">Exchange Overview</div>
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

        <Timer 
        handleTurnChange={this.handleTurnChange}
        turnCount={this.state.turnCount} 
        handleGameStatusChange={this.handleGameStatusChange}
        gameStatus={this.state.gameStatus}
        turnLanguage={this.state.turnLanguage}
        loadTalkPoints={this.loadTalkPoints}/>

        <Player 
        class="player player--2"
        icon={spanishIcon}
        language={this.state.players[1].language}
        level={this.state.players[1].level}
        onChange={this.handleLevelSet}
        gameStatus={this.state.gameStatus}/>
       </div >

       <div className="main-content">
        {talkPoint}
       </div>
       
      </div>
    </div>
  );
 }
}

export default App;
