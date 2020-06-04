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
  return (
    <div className="displayBox">
      <p>{props.jokes.jokes.setup}</p>
      <p>{props.jokes.jokes.delivery}</p>
    </div>
  );
};
export default JokesDisplay;
