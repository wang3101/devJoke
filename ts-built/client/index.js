"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const App_1 = require("./App");
const store_1 = require("./store");
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(App_1.default, null)), document.getElementById('app'));
//# sourceMappingURL=index.js.map