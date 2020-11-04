import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import hashtagsReducer from './hashtagsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  categoryReducer,
  productsReducer,
  hashtagsReducer,
  filtersReducer,
});
