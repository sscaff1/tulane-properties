export const actionTypes = {
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  ONE_PROPERTY: 'ONE_PROPERTY',
  SORT: 'SORT',
  BEDROOM_SELECT: 'BEDROOM_SELECT',
};

export const filters = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  SELECT: 'SELECT',
};

export const sorts = {
  PRICE: 'PRICE',
  DISTANCE: 'distanceToCampus',
};

const setProperties = properties => ({
  properties,
  type: actionTypes.CLEAR_FILTERS,
});

export const showAll = req => dispatch => {
  const prefix = req
    ? `${req.protocol}://${req.get('Host')}`
    : window.location.origin;
  return fetch(`${prefix}/api/getProperties`)
    .then(propertiesJson => propertiesJson.json())
    .then(properties => dispatch(setProperties(properties)));
};

export const selectOne = index => ({
  type: actionTypes.ONE_PROPERTY,
  index,
  filter: filters.SELECT,
});

export const sort = field => ({ type: actionTypes.SORT, sort: sorts[field] });

export const selectBedroom = num => (dispatch, getState) => {
  const { properties } = getState();
  const { filters: currentFilters } = properties;
  const newFilters = currentFilters.includes(filters[num])
    ? currentFilters.filter(f => f !== filters[num])
    : currentFilters.concat(filters[num]);
  return dispatch(showAll()).then(() => {
    if (newFilters.length > 0) {
      dispatch({
        type: actionTypes.BEDROOM_SELECT,
        filters: newFilters,
      });
    }
  });
};
