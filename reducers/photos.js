import { actionTypes } from '../actions/photos';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.PHOTO_ADD:
      return [...state, ...action.pics];
    case actionTypes.PHOTO_DELETE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case actionTypes.PHOTO_ROTATE:
      return [
        ...state.slice(0, action.index),
        { ...state[index], rotate: state[index].rotate + 90 },
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
