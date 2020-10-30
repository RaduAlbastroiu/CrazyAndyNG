import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import hashtagsReducer from './hashtagsReducer';

export default combineReducers({
  categoryReducer,
  productsReducer,
  hashtagsReducer,
});
