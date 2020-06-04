import * as React from 'react';
import { Component } from 'react';
import Wrapper from './containers/MainContainer';

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
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
