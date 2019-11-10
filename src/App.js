import React, { Component } from 'react';
import './sass/main.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';

class App extends Component {

  state = {

    players: [
      { language: 'English', level: "" },
      { language: 'Spanish', level: "" },
    ],

    readyToStart: false,
  }

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
        readyToStart={this.state.readyToStart}/>

        <Player 
        class="player player--2"
        language={this.state.players[1].language}
        level={this.state.players[1].level}
        onChange={this.handleChange}
        />

      </div>
    </div>
  );
 }
}

export default App;
