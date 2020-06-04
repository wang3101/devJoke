import * as React from 'react';

const JokesDisplay = (props: any) => {
  // console.log(props);
  return (
    <div className="displayBox">
      <h4>Save this for later or get a new joke!</h4>
      <span>{props.jokes.setup}</span>
      <span>{props.jokes.delivery}</span>
      <button type="button" onClick={() => props.jokes.newJoke()}>
        Click here
      </button>
    </div>
  );
};
export default JokesDisplay;
