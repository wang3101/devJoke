import * as types from '../constants/actionTypes';

export const newJoke = (jokeId: number) => ({
  type: types.NEW_JOKE,
  payload: jokeId,
})