import axios from 'axios';
import * as types from '../constants/actionTypes';
// API payload and pass it to the reducer
const url =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';

export const newJoke = () => {
  // console.log('congrats');
  // axios.get(url).then((response) => {
  //   return(
  //     dispatch({
  //       type: types.NEW_JOKE,
  //       payload: response.data,
  //     });
  //   )
  // });
  // return (dispatch: any) => {
  // };
  return (dispatch: any) => {
    axios.get(url).then((response) => {
      dispatch({
        type: types.NEW_JOKE,
        payload: response.data,
      });
    });
  };
};
