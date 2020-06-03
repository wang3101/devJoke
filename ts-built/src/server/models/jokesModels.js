"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// Mongo URL to connect to the Cloud DB
const MONGO_URI = 'mongodb+srv://wang3101:codesmith@cluster0-9clij.mongodb.net/test?retryWrites=true&w=majority';
// Connect to the DB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'favorites'
})
    // Let us know if the DB has connected or not
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));
const Schema = mongoose.Schema;
// Schema for a user's favorites
const favoriteSchema = new Schema({
    jokes: {
        setup: String,
        delivery: String,
    }
});
const Favorite = mongoose.model('favorite', favoriteSchema);
module.exports = {
    Favorite,
};
//# sourceMappingURL=jokesModels.js.map