import React, { Component } from 'react';
import './sass/main.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Timer from './components/Timer';

class App extends Component {

  state = {
    player1: {
      language: 'Spanish',
      level: 'Beginner'
    },

    player2: {
      language: 'English',
      level: 'Intermediate'
    }
  }

  render() {
  return (
    <div className="App">
      <body className='container'>

        <Nav />

        <Player 
        class="player player--1"
        language={this.state.player1.language}
        level={this.state.player1.level}
        />

        <Timer />

        <Player 
        class="player player--2"
        language={this.state.player2.language}
        level={this.state.player2.level}
        />

      </body>
    </div>
  );
  }
}

export default App;
