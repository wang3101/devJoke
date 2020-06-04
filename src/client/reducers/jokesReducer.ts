import * as types from '../constants/actionTypes';

interface IState {
  setup: string;
  delivery: string;
  // favorites: any;
}

const initialState: IState = {
  setup: '',
  delivery: '',
  // favorites: [];
};

// took out string here because typescript knows its a string already

const jokesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.NEW_JOKE:
      console.log(action.payload.setup);
      console.log(action.payload.delivery);
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
