"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { useDispatch } from 'react-redux';
// import
// props {setup: string, delivery: string, favorites: []}
const FavoritesDisplay = (props) => {
    // const dispatch = useDispatch()
    // Create favorites list. Wont't populate until button pressed
    const allFavorites = [];
    for (let i = 0; i < props.jokes.jokes.favorites.length; i++) {
        allFavorites.push(React.createElement("div", { key: i },
            React.createElement("p", null, props.jokes.jokes.favorites[i].setup),
            React.createElement("p", null, props.jokes.jokes.favorites[i].delivery),
            React.createElement("hr", null)));
    }
    return (React.createElement("div", { className: "displayBox" },
        React.createElement("h4", null, "Here are your favorites:"),
        allFavorites));
};
exports.default = FavoritesDisplay;
//# sourceMappingURL=FavoritesDisplay.js.map