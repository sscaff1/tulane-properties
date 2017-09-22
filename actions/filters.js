export const actionTypes = {
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  ONE_PROPERTY: 'ONE_PROPERTY',
  SORT: 'SORT',
};

const setProperties = properties => ({
  properties,
  type: actionTypes.CLEAR_FILTERS,
});

export const clearFilters = req => dispatch => {
  const prefix = req
    ? `${req.protocol}://${req.get('Host')}`
    : window.location.origin;
  return fetch(`${prefix}/api/getProperties`)
    .then(propertiesJson => propertiesJson.json())
    .then(properties => dispatch(setProperties(properties)));
};

export const selectOne = index => ({ type: actionTypes.ONE_PROPERTY, index });

export const sort = field => ({ type: actionTypes.PRICE_PER_BEDROOM, field });
