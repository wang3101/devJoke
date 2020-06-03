import * as React from "react";
// import Wrapper from './containers/MainContainer.tsx';

export interface JokeProps {
  setup: string,
  delivery: string,
};
export const App = (props: JokeProps) => (
  <h1>
    {props.setup}<br/>
    {props.delivery}
  </h1>
)

