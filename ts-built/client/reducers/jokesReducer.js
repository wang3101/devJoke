"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../constants/actionTypes");
const initialState = {
    setup: '',
    delivery: '',
};
// took out string here because typescript knows its a string already
const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';
const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_JOKE:
            // Create new joke object
            let newJoke;
            // Fetch from API to get the new joke
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                newJoke = {};
                newJoke['setup'] = data.setup;
                newJoke['delivery'] = data.delivery;
            });
            return;
        default:
            return state;
    }
};
exports.default = jokesReducer;
//# sourceMappingURL=jokesReducer.js.map