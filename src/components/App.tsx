import * as React from "react";

export interface HelloWorldProps {
  setup: string,
  delivery: string,
};
export const App = (props: HelloWorldProps) => (
  <h1>
    {props.setup}<br/>
    {props.delivery}
  </h1>
)