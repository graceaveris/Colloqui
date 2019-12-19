import React from 'react';

const Overview = ( props ) => {

let toggleButton;
let englishLevel = props.players[0].level
let spanishLevel = props.players[1].level
if (spanishLevel && englishLevel) {
  toggleButton = true;
}


return (

  <div className="overview">

    <div className="overview__spanish">
        <div className="overview__instruction overview__instruction--header">Cómo funciona</div>
        <div className="overview__instruction">Sigue las instrucciones de conversación </div>
        <div className="overview__instruction">Hablarás sobre cada tema durante dos minutos</div>
        <div className="overview__instruction">Obtendrá consejos útiles para ayudar a que la conversación fluya</div>
        <div className="overview__instruction">¡Y eso es! Que te diviertas</div>
        { (!englishLevel) ? <div className="overview__instruction overview__instruction--final">Seleccione su<span> nivel de inglés</span>para comenzar</div> 
        : <div className="overview__instruction overview__instruction--final">{englishLevel} &#10004;</div> }
        
    </div>

    <div className="overview__english">
        <div className="overview__instruction overview__instruction--header">How it works</div>
        <div className="overview__instruction">Follow the conversation prompts</div>
        <div className="overview__instruction">You'll talk about each subject for two minutes</div>
        <div className="overview__instruction">Dont worry, you'll get handy hints to help the conversation flow</div>
        <div className="overview__instruction">And thats it! Have fun</div>
        { (!spanishLevel) ? <div className="overview__instruction overview__instruction--final">Select your <span> Spanish level </span> to start</div>
         : <div className="overview__instruction overview__instruction--final">{spanishLevel} &#10004;</div> }
        
    </div>

    <div className="overview__button-container">
      { (toggleButton) ? <div className="overview__button" onClick={() => props.toggleControls()}>Start Exchange</div> : null }
  </div>

  </div> 
  );
};

export default Overview;

