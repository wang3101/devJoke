import { jokesController } from './controllers/jokesController';
import * as express from "express";
import * as path from 'path';
import * as bodyParser from 'body-parser';
// declare function require(name:any);
// var jokesController = require('../controller/jokesController')

// import * as mongoose from 'mongoose';

// // Mongo URL to connect to the Cloud DB
// const MONGO_URI: string = 
// 'mongodb+srv://wang3101:codesmith@cluster0-9clij.mongodb.net/test?retryWrites=true&w=majority'

// // Connect to the DB
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'favorites'
// })
// // Let us know if the DB has connected or not
// .then(() => console.log('Connected to Mongo DB.'))
// .catch((err: any) => console.log(err));

// const Schema = mongoose.Schema;

// // Schema for a user's favorites
// const favoriteSchema = new Schema({
//   jokes: {
//       setup: String,
//       delivery: String,
//   }
// });

// const Favorite = mongoose.model('favorite', favoriteSchema);

// app.post('/jokes', (res, res) => {
//   Favorite.
// })

const app = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
  res.send('Made it')
})

// need to match endpoint with the front end
// app.post('/joke', middlewareToSave into db, (req, res))

// For potentially deploying into one folder
// app.use(express.static('dist'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });



app.listen(port);

module.exports = app;