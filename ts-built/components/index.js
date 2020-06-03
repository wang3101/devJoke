"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
// import { Provider } from 'react-redux';
const App_1 = require("./App");
// import store from './store';
const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';
let joke;
fetch(url)
    .then(response => response.json())
    .then(data => {
    joke = {
        setup: data.setup,
        delivery: data.delivery,
    };
    react_dom_1.render(React.createElement(App_1.App, { setup: data.setup, delivery: data.delivery }), document.getElementById("app"));
});
// button listener
// fetch to post to same endpoint
//# sourceMappingURL=index.js.map