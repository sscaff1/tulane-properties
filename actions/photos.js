export const actionTypes = {
  PHOTO_ADD: 'PHOTO_ADD',
  PHOTO_DELETE: 'PHOTO_DELETE',
  PHOTO_ROTATE: 'PHOTO_ROTATE',
};

export const addPictures = files => {
  const pics = files.map(f => ({ file: f, rotate: 0 }));
  return { type: actionTypes.PHOTO_ADD, pics };
};

export const deletePictures = index => ({
  type: actionTypes.PHOTO_DELETE,
  index,
});

export const rotatePicture = index => ({
  type: actionTypes.PHOTO_ROTATE,
  index,
});
