import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { render } from 'react-dom';
import JokesDisplay from '../components/JokesDisplay';

const mapStateToProps = (state: any) => ({
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

class JokesContainer extends Component {
  render() {
    console.log('jokes container props', this.props);
    return (
      <div className="innerbox">
        <JokesDisplay jokes={this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
