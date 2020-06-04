"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JokesDisplay = (props) => {
    return (React.createElement("div", { className: "displayBox" },
        React.createElement("h4", null, "Save this for later or get a new joke!"),
        React.createElement("button", { type: "button", onClick: () => props.newJoke() }, "Click here")));
};
exports.default = JokesDisplay;
//# sourceMappingURL=JokesDisplay.js.map