"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllJokes = exports.getAllJokes = exports.saveJoke = exports.newJoke = void 0;
const axios_1 = require("axios");
const types = require("../constants/actionTypes");
// API payload and pass it to the reducer
const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';
exports.newJoke = () => {
    return (dispatch) => {
        axios_1.default.get(url).then((response) => {
            dispatch({
                type: types.NEW_JOKE,
                payload: response.data,
            });
        });
    };
};
exports.saveJoke = (joke) => {
    return (dispatch) => {
        axios_1.default.post('http://localhost:3000/jokes', joke.jokes).then((response) => {
            dispatch({
                type: types.SAVE_JOKE,
                payload: response.data,
            });
        });
    };
};
exports.getAllJokes = () => {
    return (dispatch) => {
        axios_1.default.get('http://localhost:3000/jokes/getall').then((response) => {
            dispatch({
                type: types.GET_ALL_JOKES,
                payload: response.data,
            });
        });
    };
};
exports.removeAllJokes = () => {
    return (dispatch) => {
        axios_1.default.delete('http://localhost:3000/jokes/removeall').then((response) => {
            dispatch({
                type: types.REMOVE_ALL_JOKES,
                payload: response.data,
            });
        });
    };
};
//# sourceMappingURL=actions.js.map