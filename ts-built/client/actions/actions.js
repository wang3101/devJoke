"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newJoke = void 0;
const types = require("../constants/actionTypes");
exports.newJoke = (jokeId) => ({
    type: types.NEW_JOKE,
    payload: jokeId,
});
//# sourceMappingURL=actions.js.map