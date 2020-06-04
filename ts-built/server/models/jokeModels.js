"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema for a user's favorites
const favoriteSchema = new Schema({
    setup: {
        type: String,
        required: true,
    },
    delivery: {
        type: String,
        required: true,
    },
});
const Favorite = mongoose.model('favorite', favoriteSchema);
exports.default = Favorite;
//# sourceMappingURL=jokeModels.js.map