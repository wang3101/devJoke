"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../constants/actionTypes");
const initialState = {
    setup: '',
    delivery: '',
};
// took out string here because typescript knows its a string already
const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_JOKE:
            return Object.assign(Object.assign({}, state), { setup: action.payload.setup, delivery: action.payload.delivery });
        // Fetch from API to get the new joke
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setup = data.setup;
        //     delivery = data.delivery;
        //   });
        // return {
        //   setup,
        //   delivery,
        // };
        default:
            return state;
    }
};
exports.default = jokesReducer;
//# sourceMappingURL=jokesReducer.js.map