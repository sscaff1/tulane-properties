import loadImage from 'blueimp-load-image';

export const actionTypes = {
  PHOTO_ADD: 'PHOTO_ADD',
  PHOTO_DELETE: 'PHOTO_DELETE',
};

const loadImagePromise = file =>
  new Promise(resolve => {
    loadImage(file, img => resolve(img), { maxWidth: 200 });
  });

export const addPictures = pics => ({ type: actionTypes.PHOTO_ADD, pics });

export const deletePictures = index => ({
  type: actionTypes.PHOTO_DELETE,
  index,
});
