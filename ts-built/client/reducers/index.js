"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const jokesReducer_1 = require("./jokesReducer");
const reducers = redux_1.combineReducers({
    jokes: jokesReducer_1.default,
});
exports.default = reducers;
//# sourceMappingURL=index.js.map