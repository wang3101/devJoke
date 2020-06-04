import * as types from '../constants/actionTypes';

interface IState {
  setup: string;
  delivery: string;
  // favorites: any;
}

const initialState: IState = {
  setup: 'Want to hear a joke?',
  delivery: 'Click New Joke!',
  // favorites: [];
};

// took out string here because typescript knows its a string already

const jokesReducer = (state = initialState, action: any) => {
  console.log(state);
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
    // case types.GET_ALL_JOKES:
    //   console.log('Getting All Jokes....');
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default jokesReducer;
