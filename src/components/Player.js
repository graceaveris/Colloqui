import React from 'react';

const player = ( props ) => {
 
    return (
      <div className={props.class}>
        <h3>{props.language}</h3>
        <p>{props.level}</p>

        <form >
            <select name="level" onChange={(e) => props.onChange(e.target.value, props.language)}>
              <option>Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
        </form>

    </div>
  );
 };
export default player;