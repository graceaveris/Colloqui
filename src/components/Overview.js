import React from 'react';
import personsWithLaptop from "../images/image_persons_laptop.jpg";


const Overview = ( props ) => {


 return (

    <div className="overview">
      <div className="overview__header">How it works</div>
      <div className="overview__instruction">Select your language levels, and click start once you're both ready to begin</div>
      <div className="overview__instruction">Follow the conversation prompts</div>
      <div className="overview__instruction">You'll talk about each subject for two minutes</div>
      <div className="overview__instruction">Dont worry, you'll get handy hints to help the conversation flow</div>
      <div className="overview__instruction">And thats it! Have fun.</div>
    </div>

  );
};

export default Overview;

