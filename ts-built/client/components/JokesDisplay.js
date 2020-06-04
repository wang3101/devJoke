"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { useDispatch } from 'react-redux';
// import
// props {setup: string, delivery: string, favorites: []}
// interface IProps {
//   setup: string;
//   delivery: string;
//   favorites?: Array<IState>;
// }
// interface IState {
//   setup: string;
//   delivery: string;
// }
const JokesDisplay = (props) => {
    return (React.createElement("div", { className: "displayBox" },
        React.createElement("h4", null, "Save this for later or get a new joke!"),
        React.createElement("p", null, props.jokes.jokes.setup),
        React.createElement("p", null, props.jokes.jokes.delivery)));
};
exports.default = JokesDisplay;
//# sourceMappingURL=JokesDisplay.js.map