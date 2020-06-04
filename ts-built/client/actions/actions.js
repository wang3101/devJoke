"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newJoke = void 0;
const axios_1 = require("axios");
const types = require("../constants/actionTypes");
// API payload and pass it to the reducer
const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';
exports.newJoke = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axios_1.default.get(url);
        dispatch({
            type: types.NEW_JOKE,
            payload: response.data,
        });
    });
};
//# sourceMappingURL=actions.js.map