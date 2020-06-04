import * as React from 'react';

const JokesDisplay = (props: any) => {
  console.log(props.jokes);
  return (
    <div className="displayBox">
      <h4>Save this for later or get a new joke!</h4>
      <p>Hello{props.jokes.setup}</p>
      <p>{props.jokes.delivery}</p>
      <button type="button" onClick={() => props.jokes.newJoke()}>
        New Joke!
      </button>
      <button type="button" onClick={() => props.jokes.saveJoke(props.jokes)}>
        Save Joke for Later!
      </button>
    </div>
  );
};
export default JokesDisplay;
