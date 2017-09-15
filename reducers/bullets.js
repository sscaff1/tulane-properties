import { actionTypes } from '../actions/bullets';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.BULLET_ADD:
      return [...state, action.text];
    case actionTypes.BULLET_DELETE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
