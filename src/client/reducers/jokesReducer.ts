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

const jokesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.NEW_JOKE:
      return {
        ...state,
        setup: action.payload.setup,
        delivery: action.payload.delivery,
      };
    // Fetch from API to get the new joke
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setup = data.setup;
    //     delivery = data.delivery;
    //   });
    // return {
    //   setup,
    //   delivery,
    // };
    default:
      return state;
  }
};

export default jokesReducer;
