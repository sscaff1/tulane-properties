import { actionTypes, sorts } from '../actions/properties';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_FILTERS:
      return { sort: undefined, filters: [], properties: action.properties };
    case actionTypes.ONE_PROPERTY:
      return {
        ...state,
        filters: [action.filter],
        properties: state.properties[index],
      };
    case actionTypes.BEDROOM_SELECT:
      console.log(action.filters);
      return {
        ...state,
        filters: action.filters,
        properties: state.properties.filter(p =>
          action.filters.includes(parseInt(p.bedrooms, 10))
        ),
      };
    case actionTypes.SORT:
      return {
        ...state,
        sort: action.sort,
        properties: state.properties.sort((a, b) => {
          if (action.sort === sorts.PRICE) {
            return a.price / a.bedrooms < b.price / b.bedrooms ? -1 : 1;
          }
          return parseFloat(a[action.sort]) < parseFloat(b[action.sort])
            ? -1
            : 1;
        }),
      };
    default:
      return state;
  }
};
