import axios from 'axios';
import * as types from '../constants/actionTypes';
// API payload and pass it to the reducer
const url =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';

export const newJoke = () => {
  return (dispatch: any) => {
    axios.get(url).then((response) => {
      dispatch({
        type: types.NEW_JOKE,
        payload: response.data,
      });
    });
  };
};

export const saveJoke = (joke: any) => {
  console.log('hello im here in the ave joke', joke);
  return (dispatch: any) => {
    axios.post('http://localhost:3000/jokes', joke).then((response) => {
      dispatch({
        type: types.SAVE_JOKE,
        payload: response.data,
      });
    });
  };
};
