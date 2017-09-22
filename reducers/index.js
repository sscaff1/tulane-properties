import { combineReducers } from 'redux';
import photos from './photos';
import bullets from './bullets';
import filters from './filters';

export default combineReducers({
  photos,
  bullets,
  filters,
});
