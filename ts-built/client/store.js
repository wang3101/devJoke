"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const index_1 = require("./reducers/index");
const middlewares = [redux_thunk_1.default];
const store = redux_1.createStore(index_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(...middlewares)));
exports.default = store;
//# sourceMappingURL=store.js.map