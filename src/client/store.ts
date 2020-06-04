import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const middlewares = [thunk];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
