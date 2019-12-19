import React from 'react';

const Overview = ( props ) => {

let toggleButton;
if ((props.players[0].level) && (props.players[1].level)) {
  toggleButton = true;
}

return (

  <div className="overview">

    <div className="overview__spanish">
        <div className="overview__header">Cómo funciona</div>
        <div className="overview__instruction">Sigue las instrucciones de conversación </div>
        <div className="overview__instruction">Hablarás sobre cada tema durante dos minutos</div>
        <div className="overview__instruction">Obtendrá consejos útiles para ayudar a que la conversación fluya</div>
        <div className="overview__instruction">¡Y eso es! Que te diviertas</div>
        <div className="overview__instruction overview__instruction--final">Seleccione su<span> nivel de inglés </span>para comenzar</div>
        
    </div>

    <div className="overview__english">
        <div className="overview__header">How it works</div>
        <div className="overview__instruction">Follow the conversation prompts</div>
        <div className="overview__instruction">You'll talk about each subject for two minutes</div>
        <div className="overview__instruction">Dont worry, you'll get handy hints to help the conversation flow</div>
        <div className="overview__instruction">And thats it! Have fun</div>
        <div className="overview__instruction overview__instruction--final">Select your <span> Spanish level </span> to start</div>
    </div>

    <div className="overview__setup-instructions">
      { (toggleButton) ? <div className="overview__button" onClick={() => props.toggleControls()}>Start Exchange</div> : null }
  </div>

  </div> 
  );
};

export default Overview;

