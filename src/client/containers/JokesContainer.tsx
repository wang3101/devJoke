import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import JokesDisplay from '../components/JokesDisplay';
import FavoritesDisplay from '../components/FavoritesDisplay';

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
  getAllJokes: () => {
    dispatch(actions.getAllJokes());
  },
  removeAllJokes: () => {
    dispatch(actions.removeAllJokes());
  },
});

const JokesContainer = (props: any) => {
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const delivery = useSelector((state) => state.delivery);
  return (
    <>
      <div className="outerBox">
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
        <br></br>
        <br></br>
        <button type="button" onClick={() => props.getAllJokes()}>
          Show Favorites!
        </button>
        <button id="deleteButton" type="button" onClick={() => props.removeAllJokes()}>
          Delete Favorites!
        </button>
      </div>

      <FavoritesDisplay jokes={state} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
