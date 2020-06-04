"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../constants/actionTypes");
const initialState = {
    setup: 'Want to hear a joke?',
    delivery: 'Click New Joke!',
    favorites: [],
};
const jokesReducer = (state = initialState, action) => {
    const favorites = [];
    switch (action.type) {
        case types.NEW_JOKE:
            return Object.assign(Object.assign({}, state), { setup: action.payload.setup, delivery: action.payload.delivery });
        case types.SAVE_JOKE:
            console.log('Saving Joke....');
            return Object.assign({}, state);
        case types.GET_ALL_JOKES:
            console.log('Getting All Jokes....');
            action.payload.forEach((obj) => {
                favorites.push({ setup: obj['setup'], delivery: obj['delivery'] });
            });
            return Object.assign(Object.assign({}, state), { favorites });
        case types.REMOVE_ALL_JOKES:
            console.log('Removing All Jokes....');
            return Object.assign(Object.assign({}, state), { favorites });
        default:
            return state;
    }
};
exports.default = jokesReducer;
//# sourceMappingURL=jokesReducer.js.map