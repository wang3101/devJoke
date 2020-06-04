import * as types from '../constants/actionTypes';

interface IState {
  setup: string;
  delivery: string;
  favorites: any;
}

const initialState: IState = {
  setup: 'Want to hear a joke?',
  delivery: 'Click New Joke!',
  favorites: [],
};

const jokesReducer = (state = initialState, action: any) => {
  const favorites: any = [];
  switch (action.type) {
    case types.NEW_JOKE:
      return {
        ...state,
        setup: action.payload.setup,
        delivery: action.payload.delivery,
      };
    case types.SAVE_JOKE:
      console.log('Saving Joke....');
      return {
        ...state,
      };
    case types.GET_ALL_JOKES:
      console.log('Getting All Jokes....');
      action.payload.forEach((obj: any) => {
        favorites.push({ setup: obj['setup'], delivery: obj['delivery'] });
      });
      return {
        ...state,
        favorites,
      };
    case types.REMOVE_ALL_JOKES:
      console.log('Removing All Jokes....');
      return {
        ...state,
        favorites,
      };
    default:
      return state;
  }
};

export default jokesReducer;
