"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const App_1 = require("./App");
const store_1 = require("./store");
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
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(App_1.default, null)), document.getElementById('app'));
// button listener
// fetch to post to same endpoint
//# sourceMappingURL=index.js.map