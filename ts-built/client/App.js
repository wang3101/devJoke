"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const MainContainer_1 = require("./containers/MainContainer");
// export interface JokeProps {
//   setup: string,
//   delivery: string,
// };
// export const App = (props: JokeProps) => (
//   <h1>
//     {props.setup}<br/>
//     {props.delivery}
//   </h1>
// )
class App extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(MainContainer_1.default, null)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map