export const actionTypes = {
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  ONE_PROPERTY: 'ONE_PROPERTY',
  SORT: 'SORT',
  BEDROOM_SELECT: 'BEDROOM_SELECT',
};

export const filters = {
  1: 'ONE',
  2: 'TWO',
  3: 'THREE',
  4: 'FOUR',
  5: 'FIVE',
  6: 'SIX',
  SELECT: 'SELECT',
};

export const sorts = {
  SORT_PRICE: 'SORT_PRICE',
  SORT_DISTANCE: 'SORT_DISTANCE',
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

export const sort = field => ({ type: actionTypes.SORT, field });

export const selectBedroom = num => ({
  type: actionTypes.BEDROOM_SELECT,
  num,
  filter: filters[num],
});
