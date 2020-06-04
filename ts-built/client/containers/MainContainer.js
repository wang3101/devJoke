"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const JokesContainer_1 = require("./JokesContainer");
const mapStateToProps = (state) => ({
    setup: state.setup,
    delivery: state.delivery,
});
const mapDispatchToProps = (dispatch) => ({});
class MainContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "outerBox" },
                React.createElement("h1", { id: "header" }, "Curated Programming Jokes Just for You!")),
            React.createElement(JokesContainer_1.default, null)));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainContainer);
//# sourceMappingURL=MainContainer.js.map