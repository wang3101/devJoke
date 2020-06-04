"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const actions = require("../actions/actions");
const JokesDisplay_1 = require("../components/JokesDisplay");
const FavoritesDisplay_1 = require("../components/FavoritesDisplay");
const mapStateToProps = (state) => ({
    setup: state.setup,
    delivery: state.delivery,
});
const mapDispatchToProps = (dispatch) => ({
    newJoke: () => {
        dispatch(actions.newJoke());
    },
    saveJoke: (joke) => {
        dispatch(actions.saveJoke(joke));
    },
    getAllJokes: () => {
        dispatch(actions.getAllJokes());
    },
    removeAllJokes: () => {
        dispatch(actions.removeAllJokes());
    },
});
const JokesContainer = (props) => {
    const state = react_redux_1.useSelector((state) => state);
    // const dispatch = useDispatch();
    // const delivery = useSelector((state) => state.delivery);
    return (React.createElement(React.Fragment, null,
        React.createElement(JokesDisplay_1.default, { jokes: state }),
        React.createElement("button", { type: "button", onClick: () => {
                props.newJoke();
            } }, "New Joke!"),
        React.createElement("button", { type: "button", onClick: () => props.saveJoke(state) }, "Save Joke for Later!"),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("button", { type: "button", onClick: () => props.getAllJokes() }, "Show Favorites!"),
        React.createElement("button", { type: "button", onClick: () => props.removeAllJokes() }, "Delete Favorites!"),
        React.createElement(FavoritesDisplay_1.default, { jokes: state })));
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
//# sourceMappingURL=JokesContainer.js.map