import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions/actions';
import { newJoke } from '../actions/actions';
import { render } from 'react-dom';
import JokesDisplay from '../components/JokesDisplay';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: any) => ({
  setup: state.setup,
  delivery: state.delivery,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ newJoke }, dispatch);
  // newJoke: () => {
  //   dispatch(actions.newJoke());
  // },
};

// const JokesContainer = () => {
//   render(){
//     return (
//       <div className="innerbox"></div>
//     )
//   }
// }
class JokesContainer extends Component {
  render() {
    return (
      <div className="innerbox">
        <JokesDisplay jokes={this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
