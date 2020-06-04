"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const JokesDisplay = (props) => {
    console.log(props.jokes);
    return (React.createElement("div", { className: "displayBox" },
        React.createElement("h4", null, "Save this for later or get a new joke!"),
        React.createElement("p", null,
            "Hello",
            props.jokes.setup),
        React.createElement("p", null, props.jokes.delivery),
        React.createElement("button", { type: "button", onClick: () => props.jokes.newJoke() }, "New Joke!"),
        React.createElement("button", { type: "button", onClick: () => props.jokes.saveJoke(props.jokes) }, "Save Joke for Later!")));
};
exports.default = JokesDisplay;
//# sourceMappingURL=JokesDisplay.js.map