import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import JokesContainer from './JokesContainer';

const mapStateToProps = (state: any) => ({
  setup: state.setup,
  delivery: state.delivery,
});

const mapDispatchToProps = (dispatch: any) => ({});

class MainContainer extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Curated Programming Jokes Just for You!</h1>
        </div>
        <JokesContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
