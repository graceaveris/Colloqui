import React from 'react';

const ReadyScreen = ( props ) => {

 return (

    <div className="readyscreen">
        <div className="readyscreen">
          <div className="readyscreen__header">Get ready to speak in {props.language} ...</div>
          <div className="readyscreen__sub-header">Prepárate para hablar en {props.language} ...</div>
        </div>
 
    </div>

  );
};

export default ReadyScreen;

