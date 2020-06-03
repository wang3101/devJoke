"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mapStateToProps = (state) => {
    // jokes: state.jokes
};
const mapDispatchToProps = (dispatch) => {
};
class MainContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
}
// render() {
//   return (
//     <div className="container">
//       <div className="outerBox">
//         <h1 id="header">Jokes!!!!</h1>
//       </div>
//     </div>
//   );
// };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainContainer);
//# sourceMappingURL=MainContainer.js.map