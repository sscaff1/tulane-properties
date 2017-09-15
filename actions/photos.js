export const actionTypes = {
  PHOTO_ADD: 'PHOTO_ADD',
  PHOTO_DELETE: 'PHOTO_DELETE',
};

const getBase64 = file =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      resolve(e.target.result);
    };
    reader.readAsDataURL(file);
  });

const addPictures = pics => ({ type: actionTypes.PHOTO_ADD, pics });

export const savePictures = files => dispatch => {
  const promises = files.map(getBase64);
  Promise.all(promises).then(pics => dispatch(addPictures(pics)));
};

export const deletePictures = index => ({
  type: actionTypes.PHOTO_DELETE,
  index,
});
