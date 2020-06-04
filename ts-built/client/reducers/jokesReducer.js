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
            console.log(action.payload.setup);
            console.log(action.payload.delivery);
            return Object.assign(Object.assign({}, state), { setup: action.payload.setup, delivery: action.payload.delivery });
        case types.SAVE_JOKE:
            console.log('Saving Joke....');
            return Object.assign({}, state);
        default:
            return state;
    }
};
exports.default = jokesReducer;
//# sourceMappingURL=jokesReducer.js.map