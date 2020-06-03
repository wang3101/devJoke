"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
// import * as action from '../actions/actions';
const mapStateToProps = (state) => {
    // jokes: state.jokes,
};
const mapDispatchToProps = (dispatch) => {
};
class JokesContainer extends react_1.Component {
    render() {
        return (React.createElement("div", { className: "innerbox" }));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
//# sourceMappingURL=JokesContainer.js.map