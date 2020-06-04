"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const jokeController_1 = require("./controllers/jokeController");
// Mongo URL to connect to the Cloud DB
const MONGO_URI = 'mongodb+srv://wang3101:codesmith@cluster0-9clij.mongodb.net/test?retryWrites=true&w=majority';
// Connect to the DB
mongoose
    .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'favorites',
})
    // Let us know if the DB has connected or not
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post('/jokes', jokeController_1.default.createJoke, (req, res) => {
    console.log('Here is your submission:     ', req);
    res.sendStatus(200);
});
// Root route works
app.get('/', (req, res) => {
    res.send('Made it');
});
// Grab all jokes in the db
app.get('/jokes/getall', jokeController_1.default.getAllJokes, (req, res) => {
    res.status(200).json(res.locals.joke);
});
// Drop all collections in the db
app.delete('/jokes/removeall', jokeController_1.default.removeAllJokes, (req, res) => {
    res.sendStatus(200);
});
// Grab joke based on id
app.get('/jokes/:setup', jokeController_1.default.getJoke, (req, res) => {
    res.send(res.locals.joke);
});
// Delete joke based on id
app.delete('/jokes/:setup', jokeController_1.default.removeJoke, (req, res) => {
    res.sendStatus(200);
});
// Route does not exist
app.get('*', (req, res) => {
    res.send('Page does not exist');
});
// For potentially deploying into one folder
// app.use(express.static('dist'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });
app.listen(port);
//# sourceMappingURL=server.js.map