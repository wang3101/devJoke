import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import * as action from '../actions/actions';

const mapStateToProps = (state: any) => {
  // jokes: state.jokes,
};

const mapDispatchToProps = (dispatch: any) => {};

class JokesContainer extends Component {
  render() {
    return <div className="innerbox"></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
