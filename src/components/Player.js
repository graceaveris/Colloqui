import React from 'react';

const player = ( props ) => {

 return (

    <div className={props.class}>
        <h3>{props.language}</h3>
        <p>{props.level} ></p>
    </div>

  );
};

export default player;


