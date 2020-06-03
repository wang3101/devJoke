import * as React from "react"
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { App } from './App';
// import store from './store';

const url: string = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart'

let joke;

fetch(url)
  .then(response => response.json())
  .then(data => {
    joke = {
      setup: data.setup,
      delivery: data.delivery,
    }
  render(
  <App setup={data.setup} delivery ={data.delivery} />,
  document.getElementById("app"));
  });

// button listener
// fetch to post to same endpoint