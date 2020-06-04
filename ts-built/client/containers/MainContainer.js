"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { Component } from 'react';
// import { connect } from 'react-redux';
const JokesContainer_1 = require("./JokesContainer");
// const mapStateToProps = (state: any) => ({
//   setup: state.setup,
//   delivery: state.delivery,
// });
// const mapDispatchToProps = (dispatch: any) => ({});
const MainContainer = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "outerBox" },
            React.createElement("h1", { id: "header" }, "Curated Programming Jokes Just for You!")),
        React.createElement(JokesContainer_1.default, null)));
};
exports.default = MainContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
//# sourceMappingURL=MainContainer.js.map