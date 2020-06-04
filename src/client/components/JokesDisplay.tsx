import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import
// props {setup: string, delivery: string, favorites: []}

// interface IProps {
//   setup: string;
//   delivery: string;
//   favorites?: Array<IState>;
// }

// interface IState {
//   setup: string;
//   delivery: string;
// }

const JokesDisplay = (props: any) => {
  // console.log(props.jokes);
  // const dispatch = useDispatch()
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
      <p>{props.jokes.jokes.setup}</p>
      <p>{props.jokes.jokes.delivery}</p>
      {/* <button type="button">Show favorites</button> */}
      {/* {allFavorites} */}
    </div>
  );
};
export default JokesDisplay;
