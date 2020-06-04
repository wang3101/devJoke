"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveJoke = exports.newJoke = void 0;
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
    console.log('hello im here in the ave joke', joke);
    return (dispatch) => {
        axios_1.default.post('http://localhost:3000/jokes', joke).then((response) => {
            dispatch({
                type: types.SAVE_JOKE,
                payload: response.data,
            });
        });
    };
};
//# sourceMappingURL=actions.js.map