import { actionTypes } from '../actions/filters';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CLEAR_FILTERS:
      return action.properties;
    case actionTypes.ONE_PROPERTY:
      return [state[index]];
    case actionTypes.SORT:
      return state.sort((a, b) => {
        if (action.field === 'PRICE') {
          return a.price / a.bedrooms < b.price / b.bedrooms ? -1 : 1;
        }
        return parseFloat(a[action.field]) < parseFloat(b[action.field])
          ? -1
          : 1;
      });
    default:
      return state;
  }
};
