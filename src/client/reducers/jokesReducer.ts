import * as types from '../constants/actionTypes';

interface IState {
  setup: string;
  delivery: string;
}

const initialState: IState = {
  setup: '',
  delivery: '',
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
    default:
      return state;
  }
};

export default jokesReducer;
