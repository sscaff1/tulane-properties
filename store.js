import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initState = {
  bullets: [],
  photos: [],
};

export default (initialState = initState) =>
  createStore(reducer, initialState, applyMiddleware(thunk));
