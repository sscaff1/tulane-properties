import { actionTypes } from '../actions/properties';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_FILTERS:
      return { filters: [], properties: action.properties };
    case actionTypes.ONE_PROPERTY:
      return { filters: action.filters, properties: state.properties[index] };
    case actionTypes.BEDROOM_SELECT:
      return {
        ...state,
        filters: action.filter,
        properties: state.properties.filter(
          p => parseInt(p.bedrooms, 10) === action.num
        ),
      };
    case actionTypes.SORT:
      return {
        ...state,
        filters: action.filter,
        properties: state.properties.sort((a, b) => {
          if (action.field === 'PRICE') {
            return a.price / a.bedrooms < b.price / b.bedrooms ? -1 : 1;
          }
          return parseFloat(a[action.field]) < parseFloat(b[action.field])
            ? -1
            : 1;
        }),
      };
    default:
      return state;
  }
};
