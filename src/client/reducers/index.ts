import { combineReducers } from 'redux';
import jokesReducer from './jokesReducer';

const reducers = combineReducers({
  jokes: jokesReducer,
});

export default reducers;