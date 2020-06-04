import * as React from 'react';
import { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import { render } from 'react-dom';
import JokesDisplay from '../components/JokesDisplay';

const mapStateToProps = (state: { setup: string; delivery: string }) => ({
  setup: state.setup,
  delivery: state.delivery,
});

const mapDispatchToProps = (dispatch: any) => ({
  newJoke: () => {
    dispatch(actions.newJoke());
  },
  saveJoke: (joke: any) => {
    dispatch(actions.saveJoke(joke));
  },
});

const JokesContainer = (props: any) => {
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const delivery = useSelector((state) => state.delivery);
  return (
    <>
      <JokesDisplay jokes={state} />
      <button
        type="button"
        onClick={() => {
          props.newJoke();
        }}
      >
        New Joke!
      </button>
      <button type="button" onClick={() => props.saveJoke(state)}>
        Save Joke for Later!
      </button>
    </>
  );
};

// class JokesContainer extends Component {
//   render() {
//     console.log('jokes container props', this.props);
//     return (
//       <div className="innerbox">
//         <JokesDisplay jokes={this.props} />
//         <button type="button" onClick={this.props.newJoke}>
//           New Joke!
//         </button>
//         {/* <button type="button" onClick={() => saveJoke(this.props)}>
//           Save Joke for Later!
//         </button> */}
//         {/* <button type="button">Show favorites</button> */}
//       </div>
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
