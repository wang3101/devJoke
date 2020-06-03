import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import jokeController from './controllers/jokeController';

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
  .catch((err: any) => console.log(err));

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/jokes', jokeController.createJoke, (req, res) => {
  res.sendStatus(200);
});

app.get('/jokes/:setup', jokeController.getJoke, (req, res) => {
  res.send(res.locals.joke);
});

app.delete('/jokes/:setup', jokeController.removeJoke, (req, res) => {
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Made it');
});

// need to match endpoint with the front end
// app.post('/joke', middlewareToSave into db, (req, res))

// For potentially deploying into one folder
// app.use(express.static('dist'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });

app.listen(port);

// module.exports = app;
