import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// const url: string = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart'

// let joke;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     joke = {
//       setup: data.setup,
//       delivery: data.delivery,
//     }
//   render(
//   <Provider store={store}><App setup={data.setup} delivery ={data.delivery} /></Provider>,
//   document.getElementById("app"));

//   });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// button listener
// fetch to post to same endpoint
