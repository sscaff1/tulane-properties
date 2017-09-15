export const actionTypes = {
  BULLET_ADD: 'BULLET_ADD',
  BULLET_DELETE: 'BULLET_DELETE',
};

export const addBullet = text => ({ type: actionTypes.BULLET_ADD, text });

export const deleteBullet = index => ({
  type: actionTypes.BULLET_DELETE,
  index,
});
