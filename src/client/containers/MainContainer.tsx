import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  // jokes: state.jokes
};

const mapDispatchToProps = (dispatch: any) => {

};

class MainContainer extends Component {
  constructor(props: any) {
    super(props);
  }
}

// render() {
//   return (
//     <div className="container">
//       <div className="outerBox">
//         <h1 id="header">Jokes!!!!</h1>
//       </div>
//     </div>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);