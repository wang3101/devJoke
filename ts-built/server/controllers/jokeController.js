"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jokeModels_1 = require("../models/jokeModels");
// const models = require('../models/jokesModels')
class jokeController {
    constructor() {
        this.createJoke = this.createJoke.bind(this);
        this.getAllJokes = this.getAllJokes.bind(this);
        this.getJoke = this.getJoke.bind(this);
        this.removeJoke = this.removeJoke.bind(this);
    }
    createJoke(req, res, next) {
        jokeModels_1.default.create(req.body, (err, res) => {
            if (err) {
                return next(err);
            }
            return next();
        });
    }
    getAllJokes(req, res, next) {
        jokeModels_1.default.find({}, (err, joke) => {
            if (err) {
                return next(err);
            }
            res.locals.joke = joke;
            return next();
        });
    }
    getJoke(req, res, next) {
        jokeModels_1.default.find(req.params, (err, joke) => {
            if (err) {
                return next(err);
            }
            res.locals.joke = joke;
            return next();
        });
    }
    removeJoke(req, res, next) {
        jokeModels_1.default.deleteOne(req.params, (err) => {
            if (err) {
                return next(err);
            }
            return next();
        });
    }
}
exports.default = new jokeController();
//# sourceMappingURL=jokeController.js.map