import * as React from 'react';
import { Component } from 'react';
// import ReduxThunk from 'redux-thunk';
import Wrapper from './containers/MainContainer';

// const ReduxThunk = window.ReduxThunk.default;
// export interface JokeProps {
//   setup: string,
//   delivery: string,
// };
// export const App = (props: JokeProps) => (
//   <h1>
//     {props.setup}<br/>
//     {props.delivery}
//   </h1>
// )

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log('this is the main app');
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
