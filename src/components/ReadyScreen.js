import React from 'react';

const ReadyScreen = ( props ) => {

let langTranslation = 'inglés';
if (props.language === 'Spanish') {
  langTranslation = 'English'
}

 return (

    <div className="readyscreen">
        <div className="readyscreen">
          <div className="readyscreen__header">Get ready to speak in {props.language} ...</div>
          <div className="readyscreen__translation">Prepárate para hablar en {langTranslation} ...</div>
        </div>
 
    </div>

  );
};

export default ReadyScreen;

