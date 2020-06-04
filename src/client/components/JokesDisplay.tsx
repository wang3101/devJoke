import * as React from 'react';

const JokesDisplay = (props: any) => {
  console.log(props.jokes);
  // Create favorites list. Wont't populate until button pressed
  // const allFavorites = [];
  // for (let i = 0; i < props.favorites.length; i++) {
  //   allFavorites.push(
  //     <div>
  //       <p>{props.favorites[i].setup}</p>
  //       <p>{props.favorites[i].delivery}</p>
  //     </div>,
  //   );
  // }
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
      <button type="button">Show favorites</button>
      {/* {allFavorites} */}
    </div>
  );
};
export default JokesDisplay;
