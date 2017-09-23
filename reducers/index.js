import { combineReducers } from 'redux';
import photos from './photos';
import bullets from './bullets';
import properties from './properties';

export default combineReducers({
  photos,
  bullets,
  properties,
});
