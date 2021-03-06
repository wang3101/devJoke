import { Router, Request, Response, NextFunction } from 'express';
import Favorite from '../models/jokeModels';

class jokeController {
  constructor() {
    this.createJoke = this.createJoke.bind(this);
    this.getAllJokes = this.getAllJokes.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.removeJoke = this.removeJoke.bind(this);
  }
  createJoke(req: Request, res: Response, next: NextFunction) {
    Favorite.create(req.body, (err: any, res: any) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  }
  getAllJokes(req: Request, res: Response, next: NextFunction) {
    console.log('Im getting jokes now');
    Favorite.find({}, (err: any, joke: any) => {
      if (err) {
        return next(err);
      }

      res.locals.joke = joke;
      return next();
    });
  }
  getJoke(req: Request, res: Response, next: NextFunction) {
    Favorite.find(req.params, (err: any, joke: any) => {
      if (err) {
        return next(err);
      }

      res.locals.joke = joke;
      return next();
    });
  }
  removeJoke(req: Request, res: Response, next: NextFunction) {
    Favorite.deleteOne(req.params, (err: any) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  }
  removeAllJokes(req: Request, res: Response, next: NextFunction) {
    console.log('Im removing jokes now');
    Favorite.deleteMany({}, (err: any) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  }
}

export default new jokeController();
