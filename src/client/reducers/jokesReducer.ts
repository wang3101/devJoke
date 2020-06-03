import * as types from '../constants/actionTypes';

interface IState {
  setup?: string;
  delivery?: string;
}

const initialState: IState = {
  setup: '',
  delivery: '',
};

// took out string here because typescript knows its a string already
const url =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart';

const jokesReducer = (state = initialState, action: any) => {
  let setup = '';
  let delivery = '';
  switch (action.type) {
    case types.NEW_JOKE:
      // Fetch from API to get the new joke
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setup = data.setup;
          delivery = data.delivery;
        });
      return {
        setup,
        delivery,
      };
    default:
      return state;
  }
};

export default jokesReducer;
